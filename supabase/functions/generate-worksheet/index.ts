import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface WorksheetRequest {
  description: string;
  worksheetTypes: ('trace' | 'color' | 'oddOneOut')[];
  imageBase64?: string;
}

interface WorksheetContent {
  type: 'trace' | 'color' | 'oddOneOut';
  topic: string;
  letters?: string[];
  words?: string[];
  images?: string[];
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

    const worksheetPrompts = {
      trace: `Generate a letter tracing worksheet for preschool children. 
        Based on the topic: "${description}"
        Return JSON with:
        - topic: the main subject
        - letters: array of 1-3 uppercase letters related to the topic
        - words: array of 1-3 simple English words starting with those letters
        - instructions: a fun instruction in English for kids`,
      
      color: `Generate a coloring worksheet for preschool children.
        Based on the topic: "${description}"
        Return JSON with:
        - topic: the main subject to color
        - words: array of color names in English kids should use
        - images: array of simple objects to color (e.g., "apple", "sun", "cat")
        - instructions: a fun instruction in English for kids`,
      
      oddOneOut: `Generate an "odd one out" worksheet for preschool children.
        Based on the topic: "${description}"
        Return JSON with:
        - topic: the category (e.g., "fruits", "animals")
        - images: array of exactly 4 items, where 3 belong to the same category and 1 is different
        - oddItem: which item is the odd one out (the different one)
        - instructions: a fun instruction in English for kids`
    };

    const worksheets: WorksheetContent[] = [];

    for (const type of worksheetTypes) {
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
            { type: 'text', text: worksheetPrompts[type] },
            { type: 'image_url', image_url: { url: imageBase64 } }
          ]
        });
      } else {
        messages.push({
          role: 'user',
          content: worksheetPrompts[type]
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
          // Provide fallback content
          worksheets.push({
            type,
            topic: description || 'Learning Fun',
            letters: type === 'trace' ? ['A', 'B', 'C'] : undefined,
            words: ['apple', 'ball', 'cat'],
            images: type === 'oddOneOut' ? ['🍎', '🍎', '🍎', '🍌'] : ['apple', 'sun', 'star'],
            instructions: 'Have fun learning!'
          });
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
