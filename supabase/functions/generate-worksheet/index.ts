import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface WorksheetRequest {
  description: string;
  worksheetTypes: ('trace' | 'color' | 'counting' | 'matching')[];
  imageBase64?: string;
}

interface WorksheetContent {
  type: 'trace' | 'color' | 'counting' | 'matching';
  topic: string;
  words?: string[];
  colorInstructions?: { item: string; color: string }[];
  countingItems?: { item: string; count: number }[];
  matchingPairs?: { image: string; word: string }[];
  instructions?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const { description, worksheetTypes, imageBase64 }: WorksheetRequest = await req.json();

    console.log('Generating worksheets for:', { description, worksheetTypes, hasImage: !!imageBase64 });

    const worksheetPrompts: Record<string, string> = {
      trace: `Generate a word tracing worksheet for preschool children (2 pages worth of content).
        The user provided these words: "${description}"
        
        IMPORTANT: You MUST use EXACTLY the words provided by the user. Include ALL words for tracing practice.
        For each word, kids will trace the dotted letters.
        
        Return JSON with:
        - topic: a fun title for the worksheet
        - words: array containing EXACTLY the words the user provided, repeated if needed to have at least 6-8 words total
        - instructions: a fun instruction in English for kids`,
      
      color: `Generate a coloring worksheet for preschool children (2 pages worth of content).
        The user provided these words/objects to color: "${description}"
        
        IMPORTANT: Create 6-8 specific coloring instructions telling kids which color to use for each item.
        Use the words provided and repeat or add related items if needed.
        
        Return JSON with:
        - topic: a fun title for the worksheet
        - colorInstructions: array of 6-8 objects, each with "item" (the object name) and "color" (a simple color like red, blue, green, yellow, orange, purple, pink, brown)
          Example: [{"item": "fish", "color": "blue"}, {"item": "apple", "color": "red"}]
        - instructions: a fun instruction telling kids to follow the coloring guide`,
      
      counting: `Generate a counting worksheet for preschool children (2 pages worth of content).
        The user provided these words: "${description}"
        
        Create 6-8 counting exercises using the provided words.
        
        Return JSON with:
        - topic: a fun title for the worksheet
        - countingItems: array of 6-8 objects with "item" (object name) and "count" (number between 1-10)
          Example: [{"item": "fish", "count": 3}, {"item": "apple", "count": 5}]
        - instructions: a fun instruction telling kids to count and write the number`,
      
      matching: `Generate a matching worksheet for preschool children (2 pages worth of content).
        The user provided these words: "${description}"
        
        Create 6-8 matching pairs where kids connect pictures to words.
        
        Return JSON with:
        - topic: a fun title for the worksheet
        - matchingPairs: array of 6-8 objects with "image" (object name) and "word" (the word to match)
          Example: [{"image": "fish", "word": "Fish"}, {"image": "cat", "word": "Cat"}]
        - instructions: a fun instruction telling kids to draw lines to match pictures with words`
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
        const errorText = await response.text();
        console.error('AI Gateway error:', response.status, errorText);
        throw new Error(`AI Gateway error: ${response.status}`);
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;

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
          worksheets.push({
            type,
            ...parsed
          });
        } catch (parseError) {
          console.error('Failed to parse AI response:', content);
          // Provide fallback content based on type
          const fallback: WorksheetContent = {
            type,
            topic: description || 'Learning Fun',
            instructions: 'Have fun learning!'
          };
          
          if (type === 'trace') {
            fallback.words = description.split(',').map(w => w.trim()).filter(Boolean);
          } else if (type === 'color') {
            const items = description.split(',').map(w => w.trim()).filter(Boolean);
            const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
            fallback.colorInstructions = items.map((item, i) => ({
              item: item.toLowerCase(),
              color: colors[i % colors.length]
            }));
          } else if (type === 'counting') {
            const items = description.split(',').map(w => w.trim()).filter(Boolean);
            fallback.countingItems = items.map(item => ({
              item: item.toLowerCase(),
              count: Math.floor(Math.random() * 8) + 2
            }));
          } else if (type === 'matching') {
            const items = description.split(',').map(w => w.trim()).filter(Boolean);
            fallback.matchingPairs = items.map(item => ({
              image: item.toLowerCase(),
              word: item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
            }));
          }
          
          worksheets.push(fallback);
        }
      }
    }

    console.log('Generated worksheets:', worksheets);

    return new Response(JSON.stringify({ worksheets }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error generating worksheets:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
