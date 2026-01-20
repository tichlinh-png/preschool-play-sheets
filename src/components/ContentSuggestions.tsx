import { useState, useMemo } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// Categories with their words
const wordCategories: Record<string, string[]> = {
  "🐾 Animals": [
    "cat", "dog", "fish", "bird", "rabbit", "mouse", "turtle", "snail",
    "goat", "elephant", "cow", "pig", "horse", "sheep", "chicken", "duck",
    "lion", "tiger", "monkey", "bear", "frog", "giraffe", "zebra", "crocodile",
    "dolphin", "whale", "penguin", "owl", "butterfly", "bee", "spider", "snake",
    "deer", "fox", "wolf", "panda", "koala", "kangaroo", "hippo", "rhino",
    "camel", "seal", "octopus", "crab", "starfish", "squirrel", "hedgehog",
    "ant", "ladybug", "grasshopper", "dragonfly", "caterpillar",
    "jellyfish", "shrimp", "lobster", "clownfish",
    "parrot", "flamingo", "peacock", "eagle", "pelican",
    "bat", "moose", "gorilla", "llama"
  ],
  "🍎 Food": [
    "apple", "banana", "cherry", "grape", "cookie", "cake", "pizza", "icecream", "milk",
    "bread", "rice", "noodle", "cheese", "hamburger", "hotdog", "sandwich", "soup", "fries",
    "donut", "candy", "chocolate", "lollipop", "watermelon", "strawberry", "pear", "lemon",
    "pineapple", "corn", "tomato", "potato", "onion", "mushroom", "mango", "kiwi",
    "coconut", "avocado", "broccoli", "pepper", "carrot", "egg"
  ],
  "👕 Clothing": [
    "shirt", "pants", "dress", "skirt", "socks", "shoes", "boots",
    "hat", "cap", "scarf", "gloves", "jacket", "coat"
  ],
  "🏠 Rooms & Furniture": [
    "kitchen", "bathroom", "bedroom", "livingroom", "table", "desk",
    "door", "window", "mirror", "curtain", "carpet", "chair", "bed", "lamp", "fan"
  ],
  "👤 Body Parts": [
    "head", "nose", "mouth", "tooth", "hair", "leg", "arm", "finger", "toe",
    "hand", "eye", "ear", "foot", "brain"
  ],
  "🏃 Actions": [
    "run", "walk", "jump", "swim", "sleep", "eat", "drink",
    "read", "write", "sing", "dance", "play", "cook", "clean", "wash"
  ],
  "🌤️ Weather": [
    "sunny", "cloudy", "rainy", "snowy", "windy", "stormy", "rainbow"
  ],
  "📚 School": [
    "book", "pencil", "crayon", "ruler", "eraser", "glue",
    "notebook", "blackboard", "chalk", "globe", "scissors", "brush"
  ],
  "🧸 Toys": [
    "ball", "doll", "teddy", "blocks", "kite", "puzzle", "robot", "drum"
  ],
  "🔢 Numbers": [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"
  ],
  "🎨 Colors": [
    "red", "blue", "yellow", "green", "orange", "purple", "pink", "brown", "black", "white", "gray"
  ],
  "⬡ Shapes": [
    "circle", "square", "triangle", "rectangle", "oval", "diamond",
    "star", "heart", "pentagon", "hexagon"
  ],
  "🚗 Vehicles": [
    "car", "bus", "bike", "plane", "ship", "train", "truck"
  ],
  "👨‍👩‍👧 Family": [
    "father", "mother", "brother", "sister", "grandma", "grandpa", "baby", "boy", "girl"
  ],
  "🏀 Sports": [
    "soccer", "basketball", "tennis", "baseball"
  ],
  "🎸 Music": [
    "guitar", "piano", "violin", "trumpet", "music"
  ],
  "🏰 Buildings": [
    "house", "castle", "lighthouse", "windmill", "barn"
  ],
  "😊 Emotions": [
    "happy", "sad", "angry", "surprised", "scared", "sleepy"
  ],
  "🌿 Nature": [
    "flower", "tree", "sun", "moon", "star", "leaf", "mountain", "cloud", "rain", "water", "fire"
  ]
};

// All words flattened for search
const allWords = Object.values(wordCategories).flat();

interface ContentSuggestionsProps {
  onWordClick: (word: string) => void;
  currentContent: string;
}

export const ContentSuggestions = ({ onWordClick, currentContent }: ContentSuggestionsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Parse current words to check which are already added
  const currentWords = useMemo(() => {
    return new Set(
      currentContent
        .toLowerCase()
        .split(/[\n,;]+/)
        .map(word => word.replace(/[.,;:!?]+/g, '').trim())
        .filter(word => word.length > 0)
    );
  }, [currentContent]);

  // Filter words based on search and category
  const filteredWords = useMemo(() => {
    let words: string[] = [];
    
    if (selectedCategory) {
      words = wordCategories[selectedCategory] || [];
    } else {
      words = allWords;
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      words = words.filter(word => word.includes(query));
    }

    // Remove duplicates and sort
    return [...new Set(words)].sort();
  }, [searchQuery, selectedCategory]);

  const handleWordClick = (word: string) => {
    onWordClick(word);
  };

  return (
    <div className="mt-3 border-t border-border pt-3">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full justify-between text-muted-foreground hover:text-foreground"
      >
        <span className="flex items-center gap-2">
          <Search className="w-4 h-4" />
          Gợi ý từ vựng có sẵn ({allWords.length} từ)
        </span>
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </Button>

      {isExpanded && (
        <div className="mt-3 space-y-3">
          {/* Search input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm từ..."
              className="pl-9"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-1">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="text-xs h-7"
            >
              Tất cả
            </Button>
            {Object.keys(wordCategories).map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs h-7"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Word grid */}
          <div className="max-h-48 overflow-y-auto rounded-lg bg-muted/30 p-2">
            <div className="flex flex-wrap gap-1.5">
              {filteredWords.length > 0 ? (
                filteredWords.map((word) => {
                  const isAdded = currentWords.has(word.toLowerCase());
                  return (
                    <Badge
                      key={word}
                      variant={isAdded ? "secondary" : "outline"}
                      className={`cursor-pointer transition-all text-xs ${
                        isAdded 
                          ? "opacity-50 line-through" 
                          : "hover:bg-primary hover:text-primary-foreground"
                      }`}
                      onClick={() => !isAdded && handleWordClick(word)}
                    >
                      {word}
                    </Badge>
                  );
                })
              ) : (
                <p className="text-sm text-muted-foreground py-2 px-1">
                  Không tìm thấy từ nào
                </p>
              )}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            💡 Nhấn vào từ để thêm vào nội dung. Từ đã thêm sẽ được gạch ngang.
          </p>
        </div>
      )}
    </div>
  );
};
