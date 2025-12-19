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
  oddItem?: string;
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


function getColorHex(color: unknown): string {
  const str = safeString(color).toLowerCase();
  if (!str) return "#888888";
  
  const colorMap: Record<string, string> = {
    red: "#FF6B6B", blue: "#4ECDC4", yellow: "#FFE66D", green: "#95E1D3",
    pink: "#F38181", orange: "#FFA502", purple: "#A855F7", brown: "#8B4513",
    black: "#1A1A1A", white: "#F5F5F5",
  };
  return colorMap[str] || "#888888";
}

export const WorksheetPreview = ({ data, type, topic = "Apple" }: WorksheetPreviewProps) => {
  const worksheetType = data?.type || type;
  const worksheetTopic = safeString(data?.topic) || topic;

  if (worksheetType === "trace") {
    const words = (data?.words || ["Apple"]).map(safeString).filter(Boolean);
    
    return (
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <h3 className="font-display text-xl font-bold text-center mb-2 text-foreground">
          ✏️ Trace the Words
        </h3>
        <p className="text-center text-sm text-muted-foreground mb-6">
          {safeString(data?.instructions) || `Learn about: ${worksheetTopic}`}
        </p>
        <div className="space-y-6">
          {words.map((word, idx) => (
            <div key={idx} className="space-y-3">
              {/* Word with icon */}
              <div className="flex items-center gap-3 justify-center">
                <WordIcon word={word} size={40} className="text-primary" />
                <span className="text-2xl font-display font-bold text-foreground">{word}</span>
              </div>
              {/* Traceable word */}
              <div className="flex justify-center">
                <div className="px-6 py-4 bg-muted/30 rounded-xl border-2 border-dashed border-primary/30">
                  <span 
                    className="text-4xl font-display font-bold tracking-[0.2em]"
                    style={{ 
                      color: 'transparent',
                      WebkitTextStroke: '2px hsl(var(--primary) / 0.4)',
                      textShadow: 'none'
                    }}
                  >
                    {word}
                  </span>
                </div>
              </div>
              {/* Practice line */}
              <div className="h-12 border-b-2 border-dashed border-muted-foreground/30 mx-4">
                <span className="text-xs text-muted-foreground">Write here:</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (worksheetType === "color") {
    const images = (data?.images || ["apple"]).map(safeString).filter(Boolean);
    const words = (data?.words || ["red", "green", "yellow"]).map(safeString).filter(Boolean);
    
    return (
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <h3 className="font-display text-xl font-bold text-center mb-2 text-foreground">
          🎨 Color the {worksheetTopic}
        </h3>
        <p className="text-center text-sm text-muted-foreground mb-6">
          {safeString(data?.instructions) || "Color with your favorite colors!"}
        </p>
        <div className="flex justify-center">
          <div className="w-48 h-48 border-2 border-foreground/20 rounded-2xl flex items-center justify-center bg-muted/30">
            <WordIcon word={images[0]} size={80} className="text-foreground/40" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {words.map((color, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full text-sm font-medium"
              style={{ backgroundColor: getColorHex(color), color: '#fff' }}>
              {color}
            </span>
          ))}
        </div>
        {images.length > 1 && (
          <div className="grid grid-cols-3 gap-3 mt-4">
            {images.slice(1).map((img, idx) => (
              <div key={idx} className="aspect-square border-2 border-dashed border-muted-foreground/30 rounded-xl flex items-center justify-center">
                <WordIcon word={img} size={36} className="text-foreground/40" />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (worksheetType === "oddOneOut") {
    const images = (data?.images || ["apple", "apple", "apple", "banana"]).map(safeString).filter(Boolean);
    const oddItem = safeString(data?.oddItem);
    
    return (
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <h3 className="font-display text-xl font-bold text-center mb-2 text-foreground">
          🔍 Find the Odd One Out
        </h3>
        <p className="text-center text-sm text-muted-foreground mb-6">
          {safeString(data?.instructions) || `Topic: ${worksheetTopic}`}
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
          {images.map((img, i) => (
            <div key={i} className={cn(
              "aspect-square rounded-2xl border-2 border-border flex items-center justify-center",
              "hover:border-primary hover:shadow-soft transition-all cursor-pointer bg-muted"
            )}>
              <WordIcon word={img} size={48} className="text-foreground" />
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">Circle the one that is different!</p>
        {oddItem && <p className="text-center text-xs text-primary mt-2 opacity-50">(Answer: {oddItem})</p>}
      </div>
    );
  }

  return null;
};
