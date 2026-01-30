import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Input validation schema
const WorksheetTypeEnum = z.enum([
  'trace', 'combined'
]);

const requestSchema = z.object({
  description: z.string().min(1, "Description is required").max(2000, "Description too long"),
  worksheetTypes: z.array(WorksheetTypeEnum).min(1, "At least one worksheet type required").max(8),
  imageBase64: z.string().max(15 * 1024 * 1024).optional()
});

interface WorksheetRequest {
  description: string;
  worksheetTypes: ('trace' | 'combined')[];
  imageBase64?: string;
}

interface WorksheetContent {
  type: 'trace' | 'combined';
  topic: string;
  words?: string[];
  colorInstructions?: { item: string; color: string }[];
  countingItems?: { item: string; count: number }[];
  fillBlankWords?: { word: string; blankedWord: string; missingLetter: string }[];
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
  // More insects
  'ant', 'ladybug', 'grasshopper', 'dragonfly', 'caterpillar',
  // More sea creatures
  'jellyfish', 'shrimp', 'lobster', 'clownfish',
  // More birds
  'parrot', 'flamingo', 'peacock', 'eagle', 'pelican',
  // More animals
  'bat', 'moose', 'gorilla', 'llama',
  // Lucide icons - animals
  'fish', 'cat', 'dog', 'bird', 'rabbit', 'mouse', 'rat', 'bug', 'turtle', 'snail',
  // Family members
  'father', 'mother', 'dad', 'mom', 'parent', 'brother', 'sister', 
  'grandma', 'grandpa', 'grandmother', 'grandfather', 'uncle', 'aunt', 'cousin', 'family',
  // People
  'girl', 'boy', 'man', 'woman', 'baby', 'child', 'kid',
  // Nature
  'flower', 'tree', 'sun', 'moon', 'star', 'leaf', 'mountain', 'cloud', 'rain', 'water', 'fire',
  // Food - Basic
  'apple', 'banana', 'cherry', 'grape', 'fruit', 'cookie', 'cake', 'pizza', 'icecream', 'ice', 'milk', 'food',
  'egg', 'carrot',
  // Food - Extended
  'bread', 'rice', 'noodle', 'noodles', 'pasta', 'cheese', 'hamburger', 'burger', 'hotdog',
  'sandwich', 'soup', 'fries', 'donut', 'doughnut', 'candy', 'chocolate', 'lollipop',
  'watermelon', 'strawberry', 'pear', 'lemon', 'pineapple', 'corn',
  'tomato', 'potato', 'onion', 'mushroom', 'mango', 'kiwi', 'coconut', 'avocado', 'broccoli', 'pepper',
  // Vehicles
  'car', 'bus', 'bike', 'bicycle', 'plane', 'airplane', 'ship', 'boat', 'train', 'truck',
  // Objects
  'book', 'pencil', 'pen', 'house', 'home', 'umbrella', 'camera', 'music', 'gift', 'present',
  'clock', 'watch', 'key', 'lock', 'bell', 'phone', 'telephone', 'shirt', 'clothes',
  'heart', 'love', 'smile', 'glasses', 'crown', 'gem', 'diamond',
  // Clothing
  'pants', 'trousers', 'jeans', 'dress', 'skirt', 'socks', 'sock', 'shoes', 'shoe',
  'boots', 'boot', 'hat', 'cap', 'scarf', 'gloves', 'glove', 'jacket', 'coat',
  // Rooms & Furniture
  'kitchen', 'bathroom', 'bedroom', 'livingroom', 'table', 'desk', 'door', 'window',
  'mirror', 'curtain', 'carpet', 'rug', 'chair', 'sofa', 'bed', 'lamp', 'fan',
  'fridge', 'refrigerator', 'bath', 'bathtub', 'toilet',
  // Body parts
  'head', 'nose', 'mouth', 'tooth', 'teeth', 'hair', 'leg', 'arm', 'finger', 'toe',
  'foot', 'feet', 'hand', 'eye', 'ear', 'brain',
  // Actions/Verbs
  'run', 'running', 'walk', 'walking', 'jump', 'jumping', 'swim', 'swimming',
  'sleep', 'sleeping', 'eat', 'eating', 'drink', 'drinking', 'read', 'reading',
  'write', 'writing', 'sing', 'singing', 'dance', 'dancing', 'play', 'playing',
  'cook', 'cooking', 'clean', 'cleaning', 'wash', 'washing',
  // Weather
  'sunny', 'cloudy', 'rainy', 'snowy', 'windy', 'stormy', 'rainbow',
  // School items
  'crayon', 'ruler', 'eraser', 'glue', 'notebook', 'blackboard', 'chalk', 'globe',
  'scissors', 'brush', 'palette',
  // Toys
  'ball', 'doll', 'teddy', 'teddybear', 'blocks', 'block', 'kite', 'puzzle', 'robot', 'drum',
  // Numbers
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
  // Colors
  'red', 'blue', 'yellow', 'green', 'orange', 'purple', 'pink', 'brown', 'black', 'white', 'gray', 'grey',
  // Shapes
  'circle', 'square', 'triangle', 'rectangle', 'oval', 'diamond', 'star', 'heart',
  'pentagon', 'hexagon', 'crescent', 'cross', 'arrow',
  // Sports
  'soccer', 'football', 'basketball', 'tennis', 'baseball',
  'trophy', 'medal', 'gamepad', 'game',
  // Musical instruments
  'guitar', 'piano', 'violin', 'trumpet',
  // Buildings
  'castle', 'lighthouse', 'windmill', 'barn',
  // Emotions
  'happy', 'sad', 'angry', 'surprised', 'scared', 'sleepy', 'cry',
  // Electronics
  'tv', 'television', 'radio', 'laptop', 'computer', 'smartphone', 'mobile', 'tablet', 'headphones',
  // Accessories
  'wallet', 'backpack', 'bag', 'briefcase', 'luggage', 'suitcase',
  // Tools
  'wrench', 'hammer', 'flashlight', 'battery', 'lightbulb', 'bulb', 'plug', 'thermometer'
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
      
      combined: `Generate a combined worksheet for preschool children with coloring, counting, and fill-in-blank exercises.
        The user provided these words: "${description}"
        
        IMPORTANT: Create exercises for EXACTLY the items provided.
        
        Return JSON with:
        - topic: a fun title for the worksheet
        - colorInstructions: array with items, each with "item" and "color" (red, blue, green, yellow, orange, purple, pink, brown)
        - countingItems: array with items, each with "item" and "count" (1-10)
        - fillBlankWords: array where each item has "word", "blankedWord" (word with ONE letter as _), and "missingLetter"
        - instructions: a fun instruction for kids`
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
            worksheet.words = allUserWords;
          } else if (type === 'combined') {
            worksheet.colorInstructions = userWords.map((item, i) => {
              const aiColor = parsed.colorInstructions?.find((c: any) => 
                c.item?.toLowerCase() === item.toLowerCase()
              )?.color;
              return {
                item: item.toLowerCase(),
                color: aiColor || colors[i % colors.length]
              };
            });
            worksheet.countingItems = userWords.map((item, i) => {
              const aiCount = parsed.countingItems?.find((c: any) => 
                c.item?.toLowerCase() === item.toLowerCase()
              )?.count;
              return {
                item: item.toLowerCase(),
                count: aiCount || Math.floor(Math.random() * 8) + 2
              };
            });
            worksheet.fillBlankWords = parsed.fillBlankWords || userWords.map(word => {
              const vowelIndex = word.split('').findIndex(c => 'aeiou'.includes(c.toLowerCase()));
              const idx = vowelIndex > 0 ? vowelIndex : Math.floor(word.length / 2);
              return {
                word: word.toLowerCase(),
                blankedWord: word.slice(0, idx) + '_' + word.slice(idx + 1),
                missingLetter: word[idx].toLowerCase()
              };
            });
          }
          
          worksheets.push(worksheet);
        } catch (parseError) {
          console.error('Failed to parse AI response for worksheet type:', type);
          const fallback: WorksheetContent = {
            type,
            topic: description || 'Learning Fun',
            instructions: 'Have fun learning!'
          };
          
          if (type === 'trace') {
            fallback.words = userWords;
          } else if (type === 'combined') {
            fallback.colorInstructions = userWords.map((item, i) => ({
              item: item.toLowerCase(),
              color: colors[i % colors.length]
            }));
            fallback.countingItems = userWords.map(item => ({
              item: item.toLowerCase(),
              count: Math.floor(Math.random() * 8) + 2
            }));
            fallback.fillBlankWords = userWords.map(word => {
              const vowelIndex = word.split('').findIndex(c => 'aeiou'.includes(c.toLowerCase()));
              const idx = vowelIndex > 0 ? vowelIndex : Math.floor(word.length / 2);
              return {
                word: word.toLowerCase(),
                blankedWord: word.slice(0, idx) + '_' + word.slice(idx + 1),
                missingLetter: word[idx].toLowerCase()
              };
            });
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
