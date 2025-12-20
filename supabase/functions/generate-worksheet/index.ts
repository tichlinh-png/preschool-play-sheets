import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Input validation schema
const WorksheetTypeEnum = z.enum([
  'trace', 'color', 'counting', 'matching', 
  'fill-blank', 'odd-one-out', 'circle-correct', 'pattern'
]);

const requestSchema = z.object({
  description: z.string().min(1, "Description is required").max(2000, "Description too long"),
  worksheetTypes: z.array(WorksheetTypeEnum).min(1, "At least one worksheet type required").max(8),
  imageBase64: z.string().max(15 * 1024 * 1024).optional() // 15MB limit for base64
});

interface WorksheetRequest {
  description: string;
  worksheetTypes: ('trace' | 'color' | 'counting' | 'matching' | 'fill-blank' | 'odd-one-out' | 'circle-correct' | 'pattern')[];
  imageBase64?: string;
}

interface WorksheetContent {
  type: 'trace' | 'color' | 'counting' | 'matching' | 'fill-blank' | 'odd-one-out' | 'circle-correct' | 'pattern';
  topic: string;
  words?: string[];
  colorInstructions?: { item: string; color: string }[];
  countingItems?: { item: string; count: number }[];
  matchingPairs?: { image: string; word: string }[];
  fillBlankWords?: { word: string; blankedWord: string; missingLetter: string }[];
  oddOneOutGroups?: { items: string[]; oddItem: string; reason: string }[];
  circleCorrectItems?: { question: string; options: string[]; correctAnswer: string }[];
  patternItems?: { sequence: string[]; answer: string }[];
  instructions?: string;
}

// List of words that have available icons in the frontend
const availableIconWords = new Set([
  // Custom animal icons - Farm
  'goat', 'elephant', 'cow', 'pig', 'horse', 'pony', 'sheep', 'lamb',
  'chicken', 'hen', 'rooster', 'duck',
  // Custom animal icons - Wild
  'lion', 'tiger', 'monkey', 'ape', 'bear', 'frog', 'toad',
  'giraffe', 'zebra', 'crocodile', 'alligator', 'dolphin', 'whale',
  'penguin', 'owl', 'butterfly', 'bee', 'spider', 'snake',
  'deer', 'fox', 'wolf', 'panda', 'koala', 'kangaroo',
  'hippo', 'hippopotamus', 'rhino', 'rhinoceros', 'camel', 'seal',
  'octopus', 'crab', 'starfish', 'squirrel', 'hedgehog',
  // Lucide icons - animals
  'fish', 'cat', 'dog', 'bird', 'rabbit', 'mouse', 'rat', 'bug', 'turtle', 'snail',
  // Family members
  'father', 'mother', 'dad', 'mom', 'parent', 'brother', 'sister', 
  'grandma', 'grandpa', 'grandmother', 'grandfather', 'uncle', 'aunt', 'cousin', 'family',
  // People
  'girl', 'boy', 'man', 'woman', 'baby', 'child', 'kid',
  // Nature
  'flower', 'tree', 'sun', 'moon', 'star', 'leaf', 'mountain', 'cloud', 'rain', 'water', 'fire',
  // Food
  'apple', 'banana', 'cherry', 'grape', 'fruit', 'cookie', 'cake', 'pizza', 'icecream', 'ice', 'milk', 'food',
  'egg', 'carrot',
  // Vehicles
  'car', 'bus', 'bike', 'bicycle', 'plane', 'airplane', 'ship', 'boat', 'train', 'truck',
  // Objects
  'book', 'pencil', 'pen', 'house', 'home', 'umbrella', 'camera', 'music', 'gift', 'present',
  'clock', 'watch', 'key', 'lock', 'bell', 'phone', 'telephone', 'shirt', 'clothes',
  'heart', 'love', 'smile', 'happy', 'sad', 'cry', 'glasses', 'crown', 'gem', 'diamond',
  // School & Art
  'scissors', 'brush', 'palette',
  // Sports & Games
  'trophy', 'medal', 'gamepad', 'game',
  // Electronics
  'tv', 'television', 'radio', 'laptop', 'computer', 'smartphone', 'mobile', 'tablet', 'headphones',
  // Accessories
  'wallet', 'backpack', 'bag', 'briefcase', 'luggage', 'suitcase',
  // Furniture
  'chair', 'sofa', 'bed', 'lamp', 'fan', 'fridge', 'refrigerator', 'bath', 'bathtub', 'toilet',
  // Tools
  'wrench', 'hammer', 'flashlight', 'battery', 'lightbulb', 'bulb', 'plug', 'thermometer',
  // Body parts
  'foot', 'feet', 'hand', 'eye', 'ear', 'brain'
]);

// Helper function to check if a word has an available icon
const hasAvailableIcon = (word: string): boolean => {
  return availableIconWords.has(word.toLowerCase().trim());
};

// Filter function to remove words without icons
const filterWordsWithIcons = (words: string[]): string[] => {
  return words.filter(word => hasAvailableIcon(word));
};

// Get words that start with a specific letter
const getWordsStartingWith = (letter: string): string[] => {
  const lowerLetter = letter.toLowerCase();
  return Array.from(availableIconWords).filter(word => 
    word.toLowerCase().startsWith(lowerLetter)
  );
};

// Check if input is single letters
const isSingleLetterInput = (words: string[]): boolean => {
  return words.length > 0 && words.every(w => w.length === 1 && /[a-zA-Z]/.test(w));
};

// Get sample words for letters - returns words that have icons
const getSampleWordsForLetters = (letters: string[]): string[] => {
  const result: string[] = [];
  for (const letter of letters) {
    const words = getWordsStartingWith(letter);
    if (words.length > 0) {
      result.push(words[0]);
    }
  }
  return result;
};

// Available icon words list as string for prompts
const availableIconWordsList = Array.from(availableIconWords).join(', ');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY is not configured');
      return new Response(JSON.stringify({ error: 'Service temporarily unavailable. Please try again later.' }), {
        status: 503,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Validate request body
    let validatedBody: z.infer<typeof requestSchema>;
    try {
      const rawBody = await req.json();
      validatedBody = requestSchema.parse(rawBody);
    } catch (validationError) {
      // Log validation errors without exposing user input details
      console.error('Input validation failed');
      return new Response(JSON.stringify({ error: 'Invalid request format. Please check your input.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const { description, worksheetTypes, imageBase64 } = validatedBody;

    // Log request metadata only - no user input content
    console.log('Processing worksheet request:', { worksheetTypes, hasImage: !!imageBase64 });

    const worksheetPrompts: Record<string, string> = {
      trace: `Generate a word tracing worksheet for preschool children.
        The user provided these words: "${description}"
        
        IMPORTANT: Use EXACTLY the words provided by the user, do not add or repeat words.
        
        Return JSON with:
        - topic: a fun title for the worksheet
        - words: array containing EXACTLY the words the user provided (no duplicates, no additions)
        - instructions: a fun instruction in English for kids`,
      
      color: `Generate a coloring worksheet for preschool children.
        The user provided these words/objects to color: "${description}"
        
        IMPORTANT: Create coloring instructions for EXACTLY the items provided, do not add extra items.
        
        Return JSON with:
        - topic: a fun title for the worksheet
        - colorInstructions: array with EXACTLY the same number of items as provided, each with "item" (the object name from user input) and "color" (a simple color like red, blue, green, yellow, orange, purple, pink, brown)
          Example: [{"item": "fish", "color": "blue"}, {"item": "apple", "color": "red"}]
        - instructions: a fun instruction telling kids to follow the coloring guide`,
      
      counting: `Generate a counting worksheet for preschool children.
        The user provided these words: "${description}"
        
        IMPORTANT: Create counting exercises for EXACTLY the items provided, do not add extra items.
        
        Return JSON with:
        - topic: a fun title for the worksheet
        - countingItems: array with EXACTLY the same number of items as provided, each with "item" (object name) and "count" (number between 1-10)
          Example: [{"item": "fish", "count": 3}, {"item": "apple", "count": 5}]
        - instructions: a fun instruction telling kids to count and write the number`,
      
      matching: `Generate a matching worksheet for preschool children.
        The user provided these words: "${description}"
        
        IMPORTANT: Create matching pairs for EXACTLY the items provided, do not add extra items.
        
        Return JSON with:
        - topic: a fun title for the worksheet
        - matchingPairs: array with EXACTLY the same number of items as provided, each with "image" (object name) and "word" (the word to match)
          Example: [{"image": "fish", "word": "Fish"}, {"image": "cat", "word": "Cat"}]
        - instructions: a fun instruction telling kids to draw lines to match pictures with words`,

      'fill-blank': `Generate a fill-in-the-blank worksheet for preschool children.
        The user provided these words: "${description}"
        
        IMPORTANT: Create fill-in-blank exercises for EXACTLY the items provided.
        
        Return JSON with:
        - topic: a fun title for the worksheet
        - fillBlankWords: array where each item has "word" (full word), "blankedWord" (word with ONE letter replaced by _), and "missingLetter" (the removed letter)
          Example: [{"word": "cat", "blankedWord": "c_t", "missingLetter": "a"}, {"word": "dog", "blankedWord": "d_g", "missingLetter": "o"}]
        - instructions: a fun instruction telling kids to fill in the missing letter`,

      'odd-one-out': `Generate an odd-one-out worksheet for preschool children.
        The user provided these words: "${description}"
        
        CRITICAL: You MUST ONLY use words from this list of available icons: ${availableIconWordsList}
        
        Create 2-3 groups where one item doesn't belong. Each group should have 4 items from the available list.
        Make sure the groups are educational - group by category (animals, food, vehicles, etc.)
        
        Return JSON with:
        - topic: a fun title for the worksheet
        - oddOneOutGroups: array where each item has "items" (array of 4 items FROM THE AVAILABLE LIST), "oddItem" (the different one), and "reason" (simple reason why it's different)
          Example: [{"items": ["cat", "dog", "bird", "apple"], "oddItem": "apple", "reason": "apple is food, others are animals"}]
        - instructions: a fun instruction telling kids to find and circle the odd one`,

      'circle-correct': `Generate a circle-the-correct-answer worksheet for preschool children.
        The user provided these words: "${description}"
        
        CRITICAL: You MUST ONLY use words from this list of available icons: ${availableIconWordsList}
        
        Create 3-4 simple questions where kids circle the correct answer from options.
        
        Return JSON with:
        - topic: a fun title for the worksheet
        - circleCorrectItems: array where each item has "question" (simple question for preschoolers), "options" (array of 3 choices FROM THE AVAILABLE LIST), and "correctAnswer" (the right one)
          Example: [{"question": "Which one can fly?", "options": ["cat", "bird", "fish"], "correctAnswer": "bird"}]
        - instructions: a fun instruction telling kids to circle the correct answer`,

      pattern: `Generate a pattern completion worksheet for preschool children.
        The user provided these words: "${description}"
        
        CRITICAL: You MUST ONLY use words from this list of available icons: ${availableIconWordsList}
        
        Create 2-3 simple repeating patterns.
        
        Return JSON with:
        - topic: a fun title for the worksheet  
        - patternItems: array where each item has "sequence" (array of 5 items showing the pattern, FROM THE AVAILABLE LIST) and "answer" (what comes next)
          Example: [{"sequence": ["apple", "banana", "apple", "banana", "apple"], "answer": "banana"}]
        - instructions: a fun instruction telling kids to complete the pattern`
    };

    const worksheets: WorksheetContent[] = [];

    for (const type of worksheetTypes) {
      const prompt = worksheetPrompts[type];
      if (!prompt) continue;

      const messages: any[] = [
        {
          role: 'system',
          content: `You are a creative preschool teacher creating English worksheets for children aged 3-6. 
          Always respond with valid JSON only, no markdown or explanations.
          Make content fun, simple, and educational.
          Use common vocabulary appropriate for preschoolers.`
        }
      ];

      if (imageBase64) {
        messages.push({
          role: 'user',
          content: [
            { type: 'text', text: prompt },
            { type: 'image_url', image_url: { url: imageBase64 } }
          ]
        });
      } else {
        messages.push({
          role: 'user',
          content: prompt
        });
      }

      const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${LOVABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages,
        }),
      });

      if (!response.ok) {
        // Log only status code, not error body content
        console.error('AI Gateway error:', response.status);
        throw new Error('AI service temporarily unavailable');
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;

      // Parse user input words - this is the source of truth
      // Filter out words that don't have available icons
      const allUserWords = description.split(',').map(w => w.trim()).filter(Boolean);
      
      // Check if input is single letters (alphabet learning mode)
      const isLetterMode = isSingleLetterInput(allUserWords);
      
      // For letter mode, find words starting with each letter
      let userWords: string[];
      if (isLetterMode) {
        userWords = [];
        for (const letter of allUserWords) {
          const wordsForLetter = getWordsStartingWith(letter);
          if (wordsForLetter.length > 0) {
            // Take first word for each letter
            userWords.push(wordsForLetter[0]);
          }
        }
        // Letter mode active
      } else {
        userWords = filterWordsWithIcons(allUserWords);
        
      }
      
      const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown'];

      if (content) {
        try {
          // Clean up the response - remove markdown code blocks if present
          let cleanContent = content.trim();
          if (cleanContent.startsWith('```json')) {
            cleanContent = cleanContent.slice(7);
          }
          if (cleanContent.startsWith('```')) {
            cleanContent = cleanContent.slice(3);
          }
          if (cleanContent.endsWith('```')) {
            cleanContent = cleanContent.slice(0, -3);
          }
          
          const parsed = JSON.parse(cleanContent.trim());
          
          // ALWAYS use exact user words - ignore AI additions
          const worksheet: WorksheetContent = {
            type,
            topic: parsed.topic || description,
            instructions: parsed.instructions || 'Have fun learning!'
          };
          
      if (type === 'trace') {
            // For trace worksheets, use ALL user words (including single letters that don't need icons)
            worksheet.words = allUserWords;
          } else if (type === 'color') {
            worksheet.colorInstructions = userWords.map((item, i) => {
              const aiColor = parsed.colorInstructions?.find((c: any) => 
                c.item?.toLowerCase() === item.toLowerCase()
              )?.color;
              return {
                item: item.toLowerCase(),
                color: aiColor || colors[i % colors.length]
              };
            });
          } else if (type === 'counting') {
            worksheet.countingItems = userWords.map((item, i) => {
              const aiCount = parsed.countingItems?.find((c: any) => 
                c.item?.toLowerCase() === item.toLowerCase()
              )?.count;
              return {
                item: item.toLowerCase(),
                count: aiCount || Math.floor(Math.random() * 8) + 2
              };
            });
          } else if (type === 'matching') {
            // For letter mode, match images with letter+word format
            if (isLetterMode) {
              worksheet.matchingPairs = userWords.map((item, idx) => ({
                image: item.toLowerCase(),
                word: `${allUserWords[idx]?.toUpperCase() || item.charAt(0).toUpperCase()} - ${item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}`
              }));
            } else {
              worksheet.matchingPairs = userWords.map(item => ({
                image: item.toLowerCase(),
                word: item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
              }));
            }
          } else if (type === 'fill-blank') {
            worksheet.fillBlankWords = parsed.fillBlankWords || userWords.map(word => {
              const vowelIndex = word.split('').findIndex(c => 'aeiou'.includes(c.toLowerCase()));
              const idx = vowelIndex > 0 ? vowelIndex : Math.floor(word.length / 2);
              return {
                word: word.toLowerCase(),
                blankedWord: word.slice(0, idx) + '_' + word.slice(idx + 1),
                missingLetter: word[idx].toLowerCase()
              };
            });
          } else if (type === 'odd-one-out') {
            // Filter AI generated groups to only include words with available icons
            const aiGroups = parsed.oddOneOutGroups || [];
            const filteredGroups = aiGroups.map((group: any) => {
              const filteredItems = filterWordsWithIcons(group.items || []);
              return {
                items: filteredItems.length >= 4 ? filteredItems.slice(0, 4) : filteredItems,
                oddItem: hasAvailableIcon(group.oddItem) ? group.oddItem : filteredItems[filteredItems.length - 1],
                reason: group.reason || "different category"
              };
            }).filter((group: any) => group.items.length >= 3);
            
            worksheet.oddOneOutGroups = filteredGroups.length > 0 ? filteredGroups : (userWords.length >= 3 ? [{
              items: userWords.slice(0, 4),
              oddItem: userWords[userWords.length - 1] || userWords[0],
              reason: "different category"
            }] : []);
          } else if (type === 'circle-correct') {
            // Filter AI generated items to only include words with available icons
            const aiItems = parsed.circleCorrectItems || [];
            const filteredItems = aiItems.map((item: any) => {
              const filteredOptions = filterWordsWithIcons(item.options || []);
              return {
                question: item.question,
                options: filteredOptions.length >= 3 ? filteredOptions.slice(0, 3) : filteredOptions,
                correctAnswer: hasAvailableIcon(item.correctAnswer) ? item.correctAnswer : filteredOptions[0]
              };
            }).filter((item: any) => item.options.length >= 2);
            
            worksheet.circleCorrectItems = filteredItems.length > 0 ? filteredItems : (userWords.length >= 2 ? [{
              question: `Which one is a ${userWords[0]}?`,
              options: userWords.slice(0, 3),
              correctAnswer: userWords[0]
            }] : []);
          } else if (type === 'pattern') {
            // Filter AI generated patterns to only include words with available icons
            const aiPatterns = parsed.patternItems || [];
            const filteredPatterns = aiPatterns.map((item: any) => {
              const filteredSequence = filterWordsWithIcons(item.sequence || []);
              return {
                sequence: filteredSequence.length >= 3 ? filteredSequence : filteredSequence,
                answer: hasAvailableIcon(item.answer) ? item.answer : filteredSequence[filteredSequence.length - 1]
              };
            }).filter((item: any) => item.sequence.length >= 3);
            
            worksheet.patternItems = filteredPatterns.length > 0 ? filteredPatterns : (userWords.length >= 2 ? [{
              sequence: [userWords[0], userWords[1] || userWords[0], userWords[0], userWords[1] || userWords[0], userWords[0]],
              answer: userWords[1] || userWords[0]
            }] : []);
          }
          
          worksheets.push(worksheet);
        } catch (parseError) {
          // Log parse failure without exposing content
          console.error('Failed to parse AI response for worksheet type:', type);
          // Fallback - use exact user words
          const fallback: WorksheetContent = {
            type,
            topic: description || 'Learning Fun',
            instructions: 'Have fun learning!'
          };
          
          if (type === 'trace') {
            fallback.words = userWords;
          } else if (type === 'color') {
            fallback.colorInstructions = userWords.map((item, i) => ({
              item: item.toLowerCase(),
              color: colors[i % colors.length]
            }));
          } else if (type === 'counting') {
            fallback.countingItems = userWords.map(item => ({
              item: item.toLowerCase(),
              count: Math.floor(Math.random() * 8) + 2
            }));
          } else if (type === 'matching') {
            fallback.matchingPairs = userWords.map(item => ({
              image: item.toLowerCase(),
              word: item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
            }));
          } else if (type === 'fill-blank') {
            fallback.fillBlankWords = userWords.map(word => {
              const vowelIndex = word.split('').findIndex(c => 'aeiou'.includes(c.toLowerCase()));
              const idx = vowelIndex > 0 ? vowelIndex : Math.floor(word.length / 2);
              return {
                word: word.toLowerCase(),
                blankedWord: word.slice(0, idx) + '_' + word.slice(idx + 1),
                missingLetter: word[idx].toLowerCase()
              };
            });
          } else if (type === 'odd-one-out') {
            fallback.oddOneOutGroups = [{
              items: userWords.slice(0, 4),
              oddItem: userWords[userWords.length - 1] || userWords[0],
              reason: "different category"
            }];
          } else if (type === 'circle-correct') {
            fallback.circleCorrectItems = [{
              question: `Which one is a ${userWords[0]}?`,
              options: userWords.slice(0, 3),
              correctAnswer: userWords[0]
            }];
          } else if (type === 'pattern') {
            fallback.patternItems = [{
              sequence: [userWords[0], userWords[1] || userWords[0], userWords[0], userWords[1] || userWords[0], userWords[0]],
              answer: userWords[1] || userWords[0]
            }];
          }
          
          worksheets.push(fallback);
        }
      }
    }

    console.log('Worksheets generated successfully:', worksheets.length);

    // Collect all skipped words across the generation process
    const allUserWords = description.split(',').map(w => w.trim()).filter(Boolean);
    const skippedWords = allUserWords.filter(w => !hasAvailableIcon(w));
    
    return new Response(JSON.stringify({ 
      worksheets,
      skippedWords: skippedWords.length > 0 ? skippedWords : undefined
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    // Log detailed error server-side for debugging
    console.error('Worksheet generation failed:', error instanceof Error ? error.message : 'Unknown error');
    
    // Return generic error message to client
    return new Response(JSON.stringify({ error: 'Failed to generate worksheet. Please try again.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
