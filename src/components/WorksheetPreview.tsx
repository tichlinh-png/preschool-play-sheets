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
  fish: Fish, cat: Cat, dog: Dog, bird: Bird, 
  rabbit: Rat, bug: Bug, turtle: Turtle, snail: Snail,
  father: User, mother: User, girl: Baby, boy: Baby, man: User, woman: User, baby: Baby,
  flower: Flower2, tree: Trees, sun: Sun, moon: Moon, star: Star, 
  leaf: Leaf, mountain: Mountain, cloud: Cloud, rain: Droplets, fire: Flame,
  apple: Apple, banana: Banana, cherry: Cherry, grape: Grape,
  cookie: Cookie, cake: Cake, pizza: Pizza, icecream: IceCreamCone, milk: Milk,
  car: Car, bus: Bus, bike: Bike, plane: Plane, ship: Ship, train: Train, truck: Truck,
  book: Book, pencil: Pencil, house: Home, home: Home, umbrella: Umbrella,
  camera: Camera, music: Music, gift: Gift, clock: Clock, key: Key, lock: Lock,
  bell: Bell, phone: Phone, shirt: Shirt,
  heart: Heart, smile: Smile, happy: Smile, sad: Frown, glasses: Glasses, crown: Crown, gem: Gem,
};

// Icon component
const WordIcon = ({ word, size = 48, className = "" }: { word: string; size?: number; className?: string }) => {
  const str = word.toLowerCase().trim();
  const CustomIconComponent = customIconMap[str];
  if (CustomIconComponent) {
    return <CustomIconComponent size={size} className={className} />;
  }
  const LucideIconComponent = lucideIconMap[str] || ImageIcon;
  return <LucideIconComponent size={size} className={className} strokeWidth={1.5} />;
};

export const WorksheetPreview = ({ data, type, topic = "Apple" }: WorksheetPreviewProps) => {
  const worksheetType = data?.type || type;
  const worksheetTopic = safeString(data?.topic) || topic;

  // TRACE WORKSHEET - 2 pages layout
  if (worksheetType === "trace") {
    const words = (data?.words || ["Apple"]).map(safeString).filter(Boolean);
    
    return (
      <div className="space-y-4">
        {/* Page 1 */}
        <div className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none print:break-after-page">
          <div className="text-center mb-4 pb-3 border-b-2 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-800">Trace the Words</h3>
            <p className="text-sm text-gray-600 mt-1">{safeString(data?.instructions) || worksheetTopic}</p>
            <p className="text-xs text-gray-400 mt-1">Name: _________________ Date: _________</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {words.slice(0, 4).map((word, idx) => (
              <div key={idx} className="border border-gray-300 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <WordIcon word={word} size={32} className="text-gray-700" />
                  <span className="text-lg font-bold text-gray-800">{word}</span>
                </div>
                <div className="bg-gray-50 rounded p-2 mb-2 text-center">
                  <span className="text-3xl font-bold tracking-widest" style={{ color: 'transparent', WebkitTextStroke: '1.5px #9ca3af' }}>
                    {word}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="h-8 border-b-2 border-dashed border-gray-300"></div>
                  <div className="h-8 border-b-2 border-dashed border-gray-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page 2 */}
        {words.length > 4 && (
          <div className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
            <div className="text-center mb-4 pb-3 border-b-2 border-gray-200">
              <h3 className="font-display text-2xl font-bold text-gray-800">Trace the Words (continued)</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {words.slice(4, 8).map((word, idx) => (
                <div key={idx} className="border border-gray-300 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <WordIcon word={word} size={32} className="text-gray-700" />
                    <span className="text-lg font-bold text-gray-800">{word}</span>
                  </div>
                  <div className="bg-gray-50 rounded p-2 mb-2 text-center">
                    <span className="text-3xl font-bold tracking-widest" style={{ color: 'transparent', WebkitTextStroke: '1.5px #9ca3af' }}>
                      {word}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 border-b-2 border-dashed border-gray-300"></div>
                    <div className="h-8 border-b-2 border-dashed border-gray-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // COLOR WORKSHEET - show all images
  if (worksheetType === "color") {
    const colorInstructions = data?.colorInstructions || [
      { item: "fish", color: "blue" },
      { item: "apple", color: "red" },
    ];
    
    return (
      <div className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
        <div className="text-center mb-4 pb-3 border-b-2 border-gray-200">
          <h3 className="font-display text-2xl font-bold text-gray-800">Coloring Activity</h3>
          <p className="text-sm text-gray-600 mt-1">{safeString(data?.instructions) || "Follow the instructions!"}</p>
          <p className="text-xs text-gray-400 mt-1">Name: _________________ Date: _________</p>
        </div>
        
        <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="font-bold text-gray-800 mb-3 text-lg">Coloring Guide:</p>
          <div className="grid grid-cols-2 gap-2">
            {colorInstructions.map((instruction, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded border border-gray-200">
                <span className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </span>
                <span className="text-gray-700">
                  <strong className="capitalize">{instruction.item}</strong> → <strong className="uppercase">{instruction.color}</strong>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {colorInstructions.map((instruction, idx) => (
            <div key={idx} className="aspect-square border-2 border-gray-400 rounded-lg flex flex-col items-center justify-center bg-white p-3">
              <WordIcon word={instruction.item} size={60} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-700 mt-2 capitalize">{instruction.item}</span>
              <span className="text-xs text-gray-500">({instruction.color})</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // COUNTING WORKSHEET - 2 pages layout
  if (worksheetType === "counting") {
    const countingItems = data?.countingItems || [
      { item: "apple", count: 3 },
      { item: "fish", count: 5 },
    ];
    
    return (
      <div className="space-y-4">
        {/* Page 1 */}
        <div className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none print:break-after-page">
          <div className="text-center mb-4 pb-3 border-b-2 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-800">Counting Activity</h3>
            <p className="text-sm text-gray-600 mt-1">{safeString(data?.instructions) || "Count and write the number!"}</p>
            <p className="text-xs text-gray-400 mt-1">Name: _________________ Date: _________</p>
          </div>
          
          <div className="space-y-4">
            {countingItems.slice(0, 4).map((item, idx) => (
              <div key={idx} className="border border-gray-300 rounded-lg p-4">
                <div className="flex flex-wrap justify-center gap-2 mb-3">
                  {Array.from({ length: item.count }).map((_, i) => (
                    <div key={i} className="w-10 h-10 flex items-center justify-center">
                      <WordIcon word={item.item} size={32} className="text-gray-600" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-gray-700">How many <strong className="capitalize">{item.item}s</strong>?</span>
                  <div className="w-14 h-14 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
                    <span className="text-gray-300 text-xl">?</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page 2 */}
        {countingItems.length > 4 && (
          <div className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
            <div className="text-center mb-4 pb-3 border-b-2 border-gray-200">
              <h3 className="font-display text-2xl font-bold text-gray-800">Counting Activity (continued)</h3>
            </div>
            
            <div className="space-y-4">
              {countingItems.slice(4, 8).map((item, idx) => (
                <div key={idx} className="border border-gray-300 rounded-lg p-4">
                  <div className="flex flex-wrap justify-center gap-2 mb-3">
                    {Array.from({ length: item.count }).map((_, i) => (
                      <div key={i} className="w-10 h-10 flex items-center justify-center">
                        <WordIcon word={item.item} size={32} className="text-gray-600" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-gray-700">How many <strong className="capitalize">{item.item}s</strong>?</span>
                    <div className="w-14 h-14 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
                      <span className="text-gray-300 text-xl">?</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // MATCHING WORKSHEET - 2 pages layout
  if (worksheetType === "matching") {
    const matchingPairs = data?.matchingPairs || [
      { image: "cat", word: "Cat" },
      { image: "dog", word: "Dog" },
    ];
    
    const shuffledWords = [...matchingPairs].sort(() => Math.random() - 0.5);
    const firstHalf = matchingPairs.slice(0, 4);
    const secondHalf = matchingPairs.slice(4, 8);
    const shuffledFirst = [...firstHalf].sort(() => Math.random() - 0.5);
    const shuffledSecond = [...secondHalf].sort(() => Math.random() - 0.5);
    
    return (
      <div className="space-y-4">
        {/* Page 1 */}
        <div className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none print:break-after-page">
          <div className="text-center mb-4 pb-3 border-b-2 border-gray-200">
            <h3 className="font-display text-2xl font-bold text-gray-800">Matching Activity</h3>
            <p className="text-sm text-gray-600 mt-1">{safeString(data?.instructions) || "Draw lines to match!"}</p>
            <p className="text-xs text-gray-400 mt-1">Name: _________________ Date: _________</p>
          </div>
          
          <div className="flex justify-between items-start gap-6">
            <div className="flex-1 space-y-4">
              {firstHalf.map((pair, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-16 h-16 border-2 border-gray-400 rounded-lg flex items-center justify-center bg-white">
                    <WordIcon word={pair.image} size={40} className="text-gray-600" />
                  </div>
                  <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
                </div>
              ))}
            </div>
            
            <div className="flex-1 space-y-4">
              {shuffledFirst.map((pair, idx) => (
                <div key={idx} className="flex items-center gap-2 justify-end">
                  <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
                  <div className="px-4 py-3 border-2 border-gray-400 rounded-lg bg-white min-w-[80px] text-center">
                    <span className="text-lg font-bold text-gray-800 capitalize">{pair.word}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Page 2 */}
        {secondHalf.length > 0 && (
          <div className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
            <div className="text-center mb-4 pb-3 border-b-2 border-gray-200">
              <h3 className="font-display text-2xl font-bold text-gray-800">Matching Activity (continued)</h3>
            </div>
            
            <div className="flex justify-between items-start gap-6">
              <div className="flex-1 space-y-4">
                {secondHalf.map((pair, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-16 h-16 border-2 border-gray-400 rounded-lg flex items-center justify-center bg-white">
                      <WordIcon word={pair.image} size={40} className="text-gray-600" />
                    </div>
                    <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
                  </div>
                ))}
              </div>
              
              <div className="flex-1 space-y-4">
                {shuffledSecond.map((pair, idx) => (
                  <div key={idx} className="flex items-center gap-2 justify-end">
                    <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
                    <div className="px-4 py-3 border-2 border-gray-400 rounded-lg bg-white min-w-[80px] text-center">
                      <span className="text-lg font-bold text-gray-800 capitalize">{pair.word}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};
