import { WorksheetType } from "./WorksheetTypeSelector";
import { cn } from "@/lib/utils";
import { 
  Fish, User, Cat, Dog, Bird, Flower2, Trees, Sun, Moon, Star,
  Car, Bus, Book, Pencil, Home, Apple, Banana, Cherry, Grape,
  Heart, Baby, Shirt, Cookie, Cake, Pizza, IceCreamCone, Milk,
  Umbrella, Cloud, Droplets, Flame, Leaf, Mountain,
  Bike, Plane, Ship, Train, Truck,
  Camera, Music, Gift, Clock, Key, Lock, Bell, Phone,
  Smile, Frown, Glasses, Crown, Gem, Rat, Bug, Turtle, Snail,
  LucideIcon, ImageIcon
} from 'lucide-react';
import { 
  GoatIcon, ElephantIcon, CowIcon, PigIcon, HorseIcon, 
  SheepIcon, ChickenIcon, DuckIcon, LionIcon, TigerIcon,
  MonkeyIcon, BearIcon, FrogIcon 
} from './icons/AnimalIcons';
import { ComponentType, SVGProps } from 'react';

export interface WorksheetData {
  type: WorksheetType;
  topic: string;
  letters?: string[];
  words?: string[];
  images?: string[];
  colorInstructions?: { item: string; color: string }[];
  countingItems?: { item: string; count: number }[];
  matchingPairs?: { image: string; word: string }[];
  instructions?: string;
}

interface WorksheetPreviewProps {
  data?: WorksheetData;
  type?: WorksheetType;
  topic?: string;
}

// Helper to safely convert to string
function safeString(value: unknown): string {
  if (typeof value === 'string') return value;
  if (value === null || value === undefined) return '';
  return String(value);
}

// Custom icon type
type CustomIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

// Map for custom SVG icons (animals not in Lucide)
const customIconMap: Record<string, CustomIcon> = {
  goat: GoatIcon,
  elephant: ElephantIcon,
  cow: CowIcon,
  pig: PigIcon,
  horse: HorseIcon,
  sheep: SheepIcon,
  chicken: ChickenIcon,
  duck: DuckIcon,
  lion: LionIcon,
  tiger: TigerIcon,
  monkey: MonkeyIcon,
  bear: BearIcon,
  frog: FrogIcon,
};

// Map words to Lucide icons
const lucideIconMap: Record<string, LucideIcon> = {
  // Animals (basic ones in Lucide)
  fish: Fish, cat: Cat, dog: Dog, bird: Bird, 
  rabbit: Rat, bug: Bug, turtle: Turtle, snail: Snail,
  // People
  father: User, mother: User, girl: Baby, boy: Baby, man: User, woman: User, baby: Baby,
  // Nature
  flower: Flower2, tree: Trees, sun: Sun, moon: Moon, star: Star, 
  leaf: Leaf, mountain: Mountain, cloud: Cloud, rain: Droplets, fire: Flame,
  // Fruits
  apple: Apple, banana: Banana, cherry: Cherry, grape: Grape,
  // Food
  cookie: Cookie, cake: Cake, pizza: Pizza, icecream: IceCreamCone, milk: Milk,
  // Transport
  car: Car, bus: Bus, bike: Bike, plane: Plane, ship: Ship, train: Train, truck: Truck,
  // Objects
  book: Book, pencil: Pencil, house: Home, home: Home, umbrella: Umbrella,
  camera: Camera, music: Music, gift: Gift, clock: Clock, key: Key, lock: Lock,
  bell: Bell, phone: Phone, shirt: Shirt,
  // Emotions & misc
  heart: Heart, smile: Smile, happy: Smile, sad: Frown, glasses: Glasses, crown: Crown, gem: Gem,
};

// Icon component that renders the appropriate icon for a word
const WordIcon = ({ word, size = 48, className = "" }: { word: string; size?: number; className?: string }) => {
  const str = word.toLowerCase().trim();
  
  // Check custom icons first (for animals not in Lucide)
  const CustomIconComponent = customIconMap[str];
  if (CustomIconComponent) {
    return <CustomIconComponent size={size} className={className} />;
  }
  
  // Fall back to Lucide icons
  const LucideIconComponent = lucideIconMap[str] || ImageIcon;
  return <LucideIconComponent size={size} className={className} strokeWidth={1.5} />;
};

export const WorksheetPreview = ({ data, type, topic = "Apple" }: WorksheetPreviewProps) => {
  const worksheetType = data?.type || type;
  const worksheetTopic = safeString(data?.topic) || topic;

  // TRACE WORKSHEET
  if (worksheetType === "trace") {
    const words = (data?.words || ["Apple"]).map(safeString).filter(Boolean);
    
    return (
      <div className="bg-white rounded-2xl p-6 shadow-card border-2 border-gray-300 print:shadow-none">
        <h3 className="font-display text-xl font-bold text-center mb-2 text-gray-800">
          Trace the Words
        </h3>
        <p className="text-center text-sm text-gray-600 mb-6">
          {safeString(data?.instructions) || `Learn about: ${worksheetTopic}`}
        </p>
        <div className="space-y-6">
          {words.map((word, idx) => (
            <div key={idx} className="space-y-3">
              {/* Word with icon */}
              <div className="flex items-center gap-3 justify-center">
                <WordIcon word={word} size={40} className="text-gray-700" />
                <span className="text-2xl font-display font-bold text-gray-800">{word}</span>
              </div>
              {/* Traceable word */}
              <div className="flex justify-center">
                <div className="px-6 py-4 bg-gray-50 rounded-xl border-2 border-dashed border-gray-400">
                  <span 
                    className="text-4xl font-display font-bold tracking-[0.2em]"
                    style={{ 
                      color: 'transparent',
                      WebkitTextStroke: '2px #9ca3af',
                      textShadow: 'none'
                    }}
                  >
                    {word}
                  </span>
                </div>
              </div>
              {/* Practice line */}
              <div className="h-12 border-b-2 border-dashed border-gray-400 mx-4">
                <span className="text-xs text-gray-500">Write here:</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // COLOR WORKSHEET - with specific coloring instructions
  if (worksheetType === "color") {
    const colorInstructions = data?.colorInstructions || [
      { item: "fish", color: "blue" },
      { item: "apple", color: "red" },
    ];
    
    return (
      <div className="bg-white rounded-2xl p-6 shadow-card border-2 border-gray-300 print:shadow-none">
        <h3 className="font-display text-xl font-bold text-center mb-2 text-gray-800">
          Coloring Activity
        </h3>
        <p className="text-center text-sm text-gray-600 mb-6">
          {safeString(data?.instructions) || "Follow the instructions to color each picture!"}
        </p>
        
        {/* Instructions list */}
        <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <p className="font-bold text-gray-800 mb-3">Instructions:</p>
          <ul className="space-y-2">
            {colorInstructions.map((instruction, idx) => (
              <li key={idx} className="flex items-center gap-2 text-gray-700">
                <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </span>
                <span>Color the <strong className="capitalize">{instruction.item}</strong> → <strong className="uppercase">{instruction.color}</strong></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Images to color */}
        <div className="grid grid-cols-2 gap-6">
          {colorInstructions.map((instruction, idx) => (
            <div key={idx} className="aspect-square border-2 border-gray-400 rounded-2xl flex flex-col items-center justify-center bg-white p-4">
              <WordIcon word={instruction.item} size={80} className="text-gray-400" />
              <span className="text-base font-medium text-gray-700 mt-3 capitalize">{instruction.item}</span>
              <span className="text-xs text-gray-500 mt-1">({instruction.color})</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // COUNTING WORKSHEET
  if (worksheetType === "counting") {
    const countingItems = data?.countingItems || [
      { item: "apple", count: 3 },
      { item: "fish", count: 5 },
    ];
    
    return (
      <div className="bg-white rounded-2xl p-6 shadow-card border-2 border-gray-300 print:shadow-none">
        <h3 className="font-display text-xl font-bold text-center mb-2 text-gray-800">
          Counting Activity
        </h3>
        <p className="text-center text-sm text-gray-600 mb-6">
          {safeString(data?.instructions) || "Count the objects and write the number!"}
        </p>
        
        <div className="space-y-8">
          {countingItems.map((item, idx) => (
            <div key={idx} className="border-2 border-gray-300 rounded-xl p-4">
              {/* Icons to count */}
              <div className="flex flex-wrap justify-center gap-3 mb-4">
                {Array.from({ length: item.count }).map((_, i) => (
                  <div key={i} className="w-12 h-12 flex items-center justify-center">
                    <WordIcon word={item.item} size={40} className="text-gray-600" />
                  </div>
                ))}
              </div>
              
              {/* Answer box */}
              <div className="flex items-center justify-center gap-4">
                <span className="text-gray-700">How many <strong className="capitalize">{item.item}s</strong>?</span>
                <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center">
                  <span className="text-gray-300 text-2xl">?</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // MATCHING WORKSHEET
  if (worksheetType === "matching") {
    const matchingPairs = data?.matchingPairs || [
      { image: "cat", word: "Cat" },
      { image: "dog", word: "Dog" },
      { image: "fish", word: "Fish" },
    ];
    
    // Shuffle words for the right column
    const shuffledWords = [...matchingPairs].sort(() => Math.random() - 0.5);
    
    return (
      <div className="bg-white rounded-2xl p-6 shadow-card border-2 border-gray-300 print:shadow-none">
        <h3 className="font-display text-xl font-bold text-center mb-2 text-gray-800">
          Matching Activity
        </h3>
        <p className="text-center text-sm text-gray-600 mb-6">
          {safeString(data?.instructions) || "Draw a line to match each picture with its word!"}
        </p>
        
        <div className="flex justify-between items-start gap-8">
          {/* Left column - Images */}
          <div className="flex-1 space-y-6">
            {matchingPairs.map((pair, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-20 h-20 border-2 border-gray-400 rounded-xl flex items-center justify-center bg-white">
                  <WordIcon word={pair.image} size={48} className="text-gray-600" />
                </div>
                <div className="w-8 h-0.5 border-t-2 border-dashed border-gray-400"></div>
              </div>
            ))}
          </div>
          
          {/* Right column - Words (shuffled) */}
          <div className="flex-1 space-y-6">
            {shuffledWords.map((pair, idx) => (
              <div key={idx} className="flex items-center gap-3 justify-end">
                <div className="w-8 h-0.5 border-t-2 border-dashed border-gray-400"></div>
                <div className="px-6 py-4 border-2 border-gray-400 rounded-xl bg-white">
                  <span className="text-xl font-bold text-gray-800 capitalize">{pair.word}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
