import { WorksheetType } from "./WorksheetTypeSelector";
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

interface WordImage {
  word: string;
  imageUrl: string;
}

interface WorksheetPreviewProps {
  data?: WorksheetData;
  type?: WorksheetType;
  topic?: string;
  schoolLogo?: string | null;
  teacherName?: string;
  className?: string;
  wordImages?: WordImage[];
}

function safeString(value: unknown): string {
  if (typeof value === 'string') return value;
  if (value === null || value === undefined) return '';
  return String(value);
}

type CustomIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const customIconMap: Record<string, CustomIcon> = {
  goat: GoatIcon, elephant: ElephantIcon, cow: CowIcon, pig: PigIcon,
  horse: HorseIcon, pony: HorseIcon, sheep: SheepIcon, lamb: SheepIcon,
  chicken: ChickenIcon, hen: ChickenIcon, rooster: ChickenIcon, duck: DuckIcon,
  lion: LionIcon, tiger: TigerIcon, monkey: MonkeyIcon, ape: MonkeyIcon,
  bear: BearIcon, frog: FrogIcon, toad: FrogIcon,
};

const lucideIconMap: Record<string, LucideIcon> = {
  fish: Fish, cat: Cat, dog: Dog, bird: Bird, 
  rabbit: Rat, mouse: Rat, rat: Rat, bug: Bug, turtle: Turtle, snail: Snail,
  father: User, mother: User, dad: User, mom: User, parent: User,
  girl: Baby, boy: Baby, man: User, woman: User, baby: Baby, child: Baby, kid: Baby,
  flower: Flower2, tree: Trees, sun: Sun, moon: Moon, star: Star, 
  leaf: Leaf, mountain: Mountain, cloud: Cloud, rain: Droplets, water: Droplets, fire: Flame,
  apple: Apple, banana: Banana, cherry: Cherry, grape: Grape, fruit: Apple,
  cookie: Cookie, cake: Cake, pizza: Pizza, icecream: IceCreamCone, ice: IceCreamCone, milk: Milk, food: Pizza,
  car: Car, bus: Bus, bike: Bike, bicycle: Bike, plane: Plane, airplane: Plane, 
  ship: Ship, boat: Ship, train: Train, truck: Truck,
  book: Book, pencil: Pencil, pen: Pencil, house: Home, home: Home, umbrella: Umbrella,
  camera: Camera, music: Music, gift: Gift, present: Gift, clock: Clock, watch: Clock,
  key: Key, lock: Lock, bell: Bell, phone: Phone, telephone: Phone, shirt: Shirt, clothes: Shirt,
  heart: Heart, love: Heart, smile: Smile, happy: Smile, sad: Frown, cry: Frown,
  glasses: Glasses, crown: Crown, gem: Gem, diamond: Gem,
};

// Component to render word icon or custom image
const WordIconOrImage = ({ 
  word, 
  size = 48, 
  className = "", 
  wordImages = [] 
}: { 
  word: string; 
  size?: number; 
  className?: string;
  wordImages?: WordImage[];
}) => {
  const str = word.toLowerCase().trim();
  
  // Check for custom uploaded image first
  const customImage = wordImages.find(img => img.word.toLowerCase() === str);
  if (customImage) {
    return (
      <img 
        src={customImage.imageUrl} 
        alt={word} 
        style={{ width: size, height: size }}
        className={`object-contain ${className}`}
      />
    );
  }
  
  // Fallback to icons
  const CustomIconComponent = customIconMap[str];
  if (CustomIconComponent) {
    return <CustomIconComponent size={size} className={className} />;
  }
  const LucideIconComponent = lucideIconMap[str] || ImageIcon;
  return <LucideIconComponent size={size} className={className} strokeWidth={1.5} />;
};

export const WorksheetPreview = ({ 
  data, 
  type, 
  topic = "Apple", 
  schoolLogo, 
  teacherName = "", 
  className = "",
  wordImages = []
}: WorksheetPreviewProps) => {
  const worksheetType = data?.type || type;
  const worksheetTopic = safeString(data?.topic) || topic;

  const WorksheetHeader = ({ title, exerciseNumber = 1 }: { title: string; exerciseNumber?: number }) => (
    <div className="text-center mb-4 pb-3 border-b-2 border-gray-200">
      <div className="flex items-center justify-between mb-2">
        {schoolLogo ? (
          <img src={schoolLogo} alt="School logo" className="w-12 h-12 object-contain" />
        ) : (
          <div className="w-12 h-12" />
        )}
        <div className="flex-1 text-center">
          <p className="text-xs text-gray-500">
            Class: {className || "_________________"} | Teacher: {teacherName || "_________________"}
          </p>
        </div>
        <div className="w-12 h-12" />
      </div>
      <p className="text-sm text-gray-600 mb-3">Name: _________________ Date: _________</p>
      <div className="border-2 border-gray-400 rounded-lg p-3 bg-gray-50 inline-block">
        <div className="flex items-center justify-center gap-2">
          <span className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">Ex {exerciseNumber}</span>
          <h3 className="font-display text-xl font-bold text-gray-800">{title}</h3>
        </div>
      </div>
    </div>
  );

  if (worksheetType === "trace") {
    const words = (data?.words || ["Apple"]).map(safeString).filter(Boolean);
    return (
      <div data-worksheet-card className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
        <WorksheetHeader title="Trace the Words" exerciseNumber={1} />
        <div className="grid grid-cols-2 gap-4">
          {words.map((word, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-3">
                <WordIconOrImage word={word} size={36} className="text-gray-700" wordImages={wordImages} />
                <span className="text-xl font-bold text-gray-800">{word}</span>
              </div>
              <div className="space-y-1">
                {/* 5 traced lines for students to trace over */}
                {[1, 2, 3, 4, 5].map((lineNum) => (
                  <div key={lineNum} className="bg-gray-50 rounded px-3 py-2 border-b border-dashed border-gray-300">
                    <span 
                      className="block text-center text-2xl tracking-[0.2em]"
                      style={{ 
                        fontFamily: '"Edu TAS Beginner", cursive',
                        fontWeight: 500,
                        color: lineNum === 1 ? '#9ca3af' : '#d1d5db',
                        textShadow: lineNum === 1 
                          ? '0 0 0 transparent'
                          : 'none',
                        WebkitTextStroke: '0.5px currentColor',
                        paintOrder: 'stroke fill',
                      }}
                    >
                      {word.split('').map((char, i) => (
                        <span 
                          key={i} 
                          style={{ 
                            borderBottom: `2px dotted ${lineNum === 1 ? '#6b7280' : '#d1d5db'}`,
                            paddingBottom: '2px',
                            marginRight: '2px'
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (worksheetType === "color") {
    const colorInstructions = data?.colorInstructions || [{ item: "fish", color: "blue" }, { item: "apple", color: "red" }];
    return (
      <div data-worksheet-card className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
        <WorksheetHeader title="Coloring Activity" exerciseNumber={2} />
        <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="font-bold text-gray-800 mb-3 text-lg">Coloring Guide:</p>
          <div className="grid grid-cols-2 gap-2">
            {colorInstructions.map((instruction, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded border border-gray-200">
                <span className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-bold">{idx + 1}</span>
                <span className="text-gray-700"><strong className="capitalize">{instruction.item}</strong> → <strong className="uppercase">{instruction.color}</strong></span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {colorInstructions.map((instruction, idx) => (
            <div key={idx} className="aspect-square border-2 border-gray-400 rounded-lg flex flex-col items-center justify-center bg-white p-4">
              <WordIconOrImage word={instruction.item} size={100} className="text-gray-400" wordImages={wordImages} />
              <span className="text-base font-medium text-gray-700 mt-3 capitalize">{instruction.item}</span>
              <span className="text-sm text-gray-500">({instruction.color})</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (worksheetType === "counting") {
    const countingItems = data?.countingItems || [{ item: "apple", count: 3 }, { item: "fish", count: 5 }];
    return (
      <div data-worksheet-card className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
        <WorksheetHeader title="Counting Activity" exerciseNumber={3} />
        <div className="space-y-4">
          {countingItems.map((item, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg p-4">
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {Array.from({ length: item.count }).map((_, i) => (
                  <div key={i} className="w-10 h-10 flex items-center justify-center">
                    <WordIconOrImage word={item.item} size={32} className="text-gray-600" wordImages={wordImages} />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-gray-700">How many <strong className="capitalize">{item.item}s</strong>?</span>
                <div className="w-14 h-14 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (worksheetType === "matching") {
    const matchingPairs = data?.matchingPairs || [{ image: "cat", word: "Cat" }, { image: "dog", word: "Dog" }];
    const shuffledWords = [...matchingPairs].sort(() => Math.random() - 0.5);
    return (
      <div data-worksheet-card className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
        <WorksheetHeader title="Matching Activity" exerciseNumber={4} />
        <div className="flex justify-between items-start gap-6">
          <div className="flex-1 space-y-4">
            {matchingPairs.map((pair, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-16 h-16 border-2 border-gray-400 rounded-lg flex items-center justify-center bg-white">
                  <WordIconOrImage word={pair.image} size={40} className="text-gray-600" wordImages={wordImages} />
                </div>
                <div className="flex-1 border-t-2 border-dashed border-gray-300"></div>
              </div>
            ))}
          </div>
          <div className="flex-1 space-y-4">
            {shuffledWords.map((pair, idx) => (
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
    );
  }

  return null;
};
