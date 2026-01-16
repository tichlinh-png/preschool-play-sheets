import { WorksheetType } from "./WorksheetTypeSelector";
import { 
  Fish, User, Cat, Dog, Bird, Flower2, Trees, Sun, Moon, Star,
  Car, Bus, Book, Pencil, Home, Apple, Banana, Cherry, Grape,
  Heart, Baby, Shirt, Cookie, Cake, Pizza, IceCreamCone, Milk,
  Umbrella, Cloud, Droplets, Flame, Leaf, Mountain,
  Bike, Plane, Ship, Train, Truck,
  Camera, Music, Gift, Clock, Key, Lock, Bell, Phone,
  Smile, Frown, Glasses, Crown, Gem, Rat, Bug, Turtle, Snail,
  Egg, Carrot, Scissors, Brush, Palette, Trophy, Medal,
  Gamepad2, Tv, Radio, Laptop, Smartphone, Tablet, Headphones,
  Watch, Wallet, Backpack, Briefcase, Luggage, Armchair, Bed,
  Lamp, Fan, Refrigerator, Bath, Toilet, Wrench, Hammer,
  Flashlight, Battery, Lightbulb, Plug, Thermometer,
  Footprints, Hand, Eye, Ear, Brain,
  LucideIcon, ImageIcon
} from 'lucide-react';
import { 
  GoatIcon, ElephantIcon, CowIcon, PigIcon, HorseIcon, 
  SheepIcon, ChickenIcon, DuckIcon, LionIcon, TigerIcon,
  MonkeyIcon, BearIcon, FrogIcon,
  GiraffeIcon, ZebraIcon, CrocodileIcon, DolphinIcon, WhaleIcon,
  PenguinIcon, OwlIcon, ButterflyIcon, BeeIcon, SpiderIcon, SnakeIcon,
  DeerIcon, FoxIcon, WolfIcon, PandaIcon, KoalaIcon, KangarooIcon,
  HippoIcon, RhinoIcon, CamelIcon, SealIcon, OctopusIcon, CrabIcon,
  StarfishIcon, SquirrelIcon, HedgehogIcon
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
  fillBlankWords?: { word: string; blankedWord: string; missingLetter: string }[];
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
  schoolName?: string;
  teacherName?: string;
  className?: string;
  wordImages?: WordImage[];
  pageIndex?: number; // 0-indexed, used to hide header info from page 2+
  traceRows?: number; // Number of tracing rows per letter (2-5)
}

function safeString(value: unknown): string {
  if (typeof value === 'string') return value;
  if (value === null || value === undefined) return '';
  return String(value);
}

type CustomIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const customIconMap: Record<string, CustomIcon> = {
  // Farm animals
  goat: GoatIcon, elephant: ElephantIcon, cow: CowIcon, pig: PigIcon,
  horse: HorseIcon, pony: HorseIcon, sheep: SheepIcon, lamb: SheepIcon,
  chicken: ChickenIcon, hen: ChickenIcon, rooster: ChickenIcon, duck: DuckIcon,
  // Wild animals
  lion: LionIcon, tiger: TigerIcon, monkey: MonkeyIcon, ape: MonkeyIcon,
  bear: BearIcon, frog: FrogIcon, toad: FrogIcon,
  giraffe: GiraffeIcon, zebra: ZebraIcon, crocodile: CrocodileIcon, alligator: CrocodileIcon,
  dolphin: DolphinIcon, whale: WhaleIcon, penguin: PenguinIcon, owl: OwlIcon,
  butterfly: ButterflyIcon, bee: BeeIcon, spider: SpiderIcon, snake: SnakeIcon,
  deer: DeerIcon, fox: FoxIcon, wolf: WolfIcon, panda: PandaIcon,
  koala: KoalaIcon, kangaroo: KangarooIcon, hippo: HippoIcon, hippopotamus: HippoIcon,
  rhino: RhinoIcon, rhinoceros: RhinoIcon, camel: CamelIcon, seal: SealIcon,
  octopus: OctopusIcon, crab: CrabIcon, starfish: StarfishIcon,
  squirrel: SquirrelIcon, hedgehog: HedgehogIcon,
};

const lucideIconMap: Record<string, LucideIcon> = {
  fish: Fish, cat: Cat, dog: Dog, bird: Bird, 
  rabbit: Rat, mouse: Rat, rat: Rat, bug: Bug, turtle: Turtle, snail: Snail,
  // Family members - all use User icon
  father: User, mother: User, dad: User, mom: User, parent: User,
  brother: User, sister: User, grandma: User, grandpa: User, grandmother: User, grandfather: User,
  uncle: User, aunt: User, cousin: User, family: User,
  girl: Baby, boy: Baby, man: User, woman: User, baby: Baby, child: Baby, kid: Baby,
  // Nature
  flower: Flower2, tree: Trees, sun: Sun, moon: Moon, star: Star, 
  leaf: Leaf, mountain: Mountain, cloud: Cloud, rain: Droplets, water: Droplets, fire: Flame,
  // Food
  apple: Apple, banana: Banana, cherry: Cherry, grape: Grape, fruit: Apple,
  cookie: Cookie, cake: Cake, pizza: Pizza, icecream: IceCreamCone, ice: IceCreamCone, milk: Milk, food: Pizza,
  egg: Egg, carrot: Carrot,
  // Vehicles
  car: Car, bus: Bus, bike: Bike, bicycle: Bike, plane: Plane, airplane: Plane, 
  ship: Ship, boat: Ship, train: Train, truck: Truck,
  // Objects
  book: Book, pencil: Pencil, pen: Pencil, house: Home, home: Home, umbrella: Umbrella,
  camera: Camera, music: Music, gift: Gift, present: Gift, clock: Clock, watch: Watch,
  key: Key, lock: Lock, bell: Bell, phone: Phone, telephone: Phone, shirt: Shirt, clothes: Shirt,
  heart: Heart, love: Heart, smile: Smile, happy: Smile, sad: Frown, cry: Frown,
  glasses: Glasses, crown: Crown, gem: Gem, diamond: Gem,
  // School & Art
  scissors: Scissors, brush: Brush, palette: Palette,
  // Sports & Games
  trophy: Trophy, medal: Medal, gamepad: Gamepad2, game: Gamepad2,
  // Electronics
  tv: Tv, television: Tv, radio: Radio, laptop: Laptop, computer: Laptop,
  smartphone: Smartphone, mobile: Smartphone, tablet: Tablet, headphones: Headphones,
  // Accessories
  wallet: Wallet, backpack: Backpack, bag: Backpack, briefcase: Briefcase, luggage: Luggage, suitcase: Luggage,
  // Furniture
  chair: Armchair, sofa: Armchair, bed: Bed, lamp: Lamp, fan: Fan,
  fridge: Refrigerator, refrigerator: Refrigerator, bath: Bath, bathtub: Bath, toilet: Toilet,
  // Tools
  wrench: Wrench, hammer: Hammer, flashlight: Flashlight,
  battery: Battery, lightbulb: Lightbulb, bulb: Lightbulb, plug: Plug, thermometer: Thermometer,
  // Body parts
  foot: Footprints, feet: Footprints, hand: Hand, eye: Eye, ear: Ear, brain: Brain,
};

// List of all available icon words for finding sample words
const availableIconWords = new Set([
  ...Object.keys(customIconMap),
  ...Object.keys(lucideIconMap)
]);

// Helper function to check if a word has an available icon
export const hasAvailableIcon = (word: string, wordImages: WordImage[] = []): boolean => {
  const str = word.toLowerCase().trim();
  
  // Check for custom uploaded image - use flexible matching
  if (wordImages && wordImages.length > 0) {
    for (const img of wordImages) {
      const imgWord = img.word.toLowerCase().trim();
      if (imgWord === str || 
          imgWord.includes(str) || str.includes(imgWord) ||
          imgWord.startsWith(str) || str.startsWith(imgWord)) {
        return true;
      }
    }
  }
  
  // Check for custom icon
  if (customIconMap[str]) return true;
  
  // Check for lucide icon
  if (lucideIconMap[str]) return true;
  
  return false;
};

// Helper function to find matching image from wordImages
const findMatchingImage = (word: string, wordImages: WordImage[] = []): string | null => {
  if (!word || !wordImages || wordImages.length === 0) return null;
  
  const searchWord = word.toLowerCase().trim();
  
  // Try multiple matching strategies
  for (const img of wordImages) {
    const imgWord = img.word.toLowerCase().trim();
    
    // 1. Exact match
    if (imgWord === searchWord) {
      return img.imageUrl;
    }
    
    // 2. One contains the other
    if (imgWord.includes(searchWord) || searchWord.includes(imgWord)) {
      return img.imageUrl;
    }
    
    // 3. Starts with match
    if (imgWord.startsWith(searchWord) || searchWord.startsWith(imgWord)) {
      return img.imageUrl;
    }
    
    // 4. First word match (e.g., "golden fish" matches "fish")
    const imgFirstWord = imgWord.split(/\s+/)[0];
    const searchFirstWord = searchWord.split(/\s+/)[0];
    if (imgFirstWord === searchFirstWord || imgFirstWord === searchWord || imgWord === searchFirstWord) {
      return img.imageUrl;
    }
  }
  
  return null;
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
  
  // ALWAYS check for custom uploaded image FIRST - prioritize user images over icons
  const customImageUrl = findMatchingImage(word, wordImages);
  if (customImageUrl) {
    return (
      <img 
        src={customImageUrl} 
        alt={word} 
        style={{ width: size, height: size }}
        className={`object-contain ${className}`}
        crossOrigin="anonymous"
      />
    );
  }
  
  // Fallback to icons - only render if icon exists
  const CustomIconComponent = customIconMap[str];
  if (CustomIconComponent) {
    return <CustomIconComponent size={size} className={className} />;
  }
  
  const LucideIconComponent = lucideIconMap[str];
  if (LucideIconComponent) {
    return <LucideIconComponent size={size} className={className} strokeWidth={1.5} />;
  }
  
  // Return a placeholder image icon if nothing found
  return <ImageIcon size={size} className={`${className} text-gray-300`} strokeWidth={1} />;
};

export const WorksheetPreview = ({ 
  data, 
  type, 
  topic = "Apple", 
  schoolLogo,
  schoolName = "",
  teacherName = "", 
  className = "",
  wordImages = [],
  pageIndex = 0,
  traceRows = 4
}: WorksheetPreviewProps) => {
  const worksheetType = data?.type || type;
  const worksheetTopic = safeString(data?.topic) || topic;
  const isFirstPage = pageIndex === 0;
  const rowsArray = Array.from({ length: traceRows }, (_, i) => i + 1);

  const WorksheetHeader = ({ title, exerciseNumber = 1 }: { title: string; exerciseNumber?: number }) => (
    <div className="text-center mb-1">
      {isFirstPage && (
        <>
          <div className="flex items-center justify-between">
            {schoolLogo ? (
              <img src={schoolLogo} alt="School logo" className="w-7 h-7 object-contain" />
            ) : (
              <div className="w-7 h-7" />
            )}
            <div className="flex-1 text-center">
              {schoolName && (
                <p className="text-xs font-semibold text-gray-700">{schoolName}</p>
              )}
              <p className="text-[10px] text-gray-500">
                Class: {className || "______"} | Teacher: {teacherName || "______"}
              </p>
            </div>
            <div className="w-7 h-7" />
          </div>
          <p className="text-[10px] text-gray-600">Name: __________ Date: ______</p>
        </>
      )}
      <div className="flex items-center justify-center gap-1">
        <span className="bg-gray-800 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">Ex {exerciseNumber}</span>
        <h3 className="font-display text-lg font-bold text-gray-800">{title}</h3>
      </div>
    </div>
  );

  if (worksheetType === "trace") {
    const words = (data?.words || ["Apple"]).map(safeString).filter(Boolean);
    // Check if these are single letters (alphabet tracing)
    const isSingleLetters = words.every(word => word.length === 1);
    const title = isSingleLetters ? "Letter Tracing Practice" : "Trace the Words";
    
    // For single letter tracing - optimized layout with more letters per row
    if (isSingleLetters) {
      return (
        <div data-worksheet-card className="bg-white rounded-lg p-2 print:shadow-none">
          <WorksheetHeader title={title} exerciseNumber={1} />
          <div className="space-y-6">
            {words.map((letter, idx) => {
              const upperLetter = letter.toUpperCase();
              const lowerLetter = letter.toLowerCase();
              // Find a word that starts with this letter and has an icon
              const sampleWord = Array.from(availableIconWords).find(w => 
                w.toLowerCase().startsWith(lowerLetter)
              ) || '';
              const wordHasIcon = sampleWord && hasAvailableIcon(sampleWord, wordImages);
              
              return (
                <div key={idx} className="py-2">
                  {/* Header row: Large letter with related word */}
                  <div className="flex items-center gap-4 mb-2 pb-1 border-b border-gray-200">
                    <span 
                      className="text-4xl font-bold text-gray-800"
                      style={{ fontFamily: '"Edu TAS Beginner", cursive' }}
                    >
                      {upperLetter}{lowerLetter}
                    </span>
                    {wordHasIcon && sampleWord && (
                      <div className="flex items-center gap-2">
                        <WordIconOrImage word={sampleWord} size={32} className="text-gray-700" wordImages={wordImages} />
                        <span className="text-base font-medium text-gray-600 capitalize">{sampleWord}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Tracing rows - uppercase */}
                  <div className="mb-2">
                    <p className="text-xs text-gray-500 mb-0.5">Uppercase {upperLetter}</p>
                    {rowsArray.map((rowNum) => (
                      <div 
                        key={`upper-${rowNum}`} 
                        className="relative h-12 flex items-end border-b-2 border-gray-700"
                      >
                        <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-300"></div>
                        <div className="flex items-end h-full w-full">
                          {Array.from({ length: 14 }, (_, pos) => (
                            <span 
                              key={pos}
                              className="flex-1 text-center pb-0.5"
                              style={{ 
                                fontFamily: '"Edu TAS Beginner", cursive',
                                fontSize: '2.25rem',
                                fontWeight: pos === 0 ? 600 : 400,
                                color: pos === 0 ? '#374151' : 'transparent',
                                WebkitTextStroke: pos === 0 ? 'none' : '1.5px #9ca3af',
                              }}
                            >
                              {upperLetter}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tracing rows - lowercase */}
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">Lowercase {lowerLetter}</p>
                    {rowsArray.map((rowNum) => (
                      <div 
                        key={`lower-${rowNum}`} 
                        className="relative h-12 flex items-end border-b-2 border-gray-700"
                      >
                        <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-300"></div>
                        <div className="flex items-end h-full w-full">
                          {Array.from({ length: 14 }, (_, pos) => (
                            <span 
                              key={pos}
                              className="flex-1 text-center pb-0.5"
                              style={{ 
                                fontFamily: '"Edu TAS Beginner", cursive',
                                fontSize: '2.25rem',
                                fontWeight: pos === 0 ? 600 : 400,
                                color: pos === 0 ? '#374151' : 'transparent',
                                WebkitTextStroke: pos === 0 ? 'none' : '1.5px #9ca3af',
                              }}
                            >
                              {lowerLetter}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    
    // For word tracing - keep original design
    return (
      <div data-worksheet-card className="bg-white rounded-lg p-2 print:shadow-none">
        <WorksheetHeader title={title} exerciseNumber={1} />
        <div className="grid grid-cols-2 gap-4">
          {words.map((word, idx) => {
            const wordHasIcon = hasAvailableIcon(word, wordImages);
            
            return (
              <div key={idx} className="p-2">
                <div className="flex items-center justify-center gap-2 mb-3">
                  {wordHasIcon && (
                    <WordIconOrImage word={word} size={36} className="text-gray-700" wordImages={wordImages} />
                  )}
                  <span className="text-xl font-bold text-gray-800">{word}</span>
                </div>
                <div className="space-y-0.5">
                  {rowsArray.map((lineNum) => (
                    <div key={lineNum} className="bg-gray-50 rounded px-3 py-2 border-b border-dashed border-gray-300">
                      <span 
                        className="block text-center text-2xl tracking-[0.2em]"
                        style={{ 
                          fontFamily: '"Edu TAS Beginner", cursive',
                          fontWeight: 500,
                          color: lineNum === 1 ? '#9ca3af' : '#d1d5db',
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
            );
          })}
        </div>
      </div>
    );
  }

  if (worksheetType === "color") {
    const colorInstructions = data?.colorInstructions || [{ item: "fish", color: "blue" }, { item: "apple", color: "red" }];
    return (
      <div data-worksheet-card className="bg-white rounded-lg p-2 print:shadow-none">
        <WorksheetHeader title="Coloring Activity" exerciseNumber={2} />
        <div className="mb-2 px-2 py-1 bg-gray-50 rounded">
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
            {colorInstructions.map((instruction, idx) => (
              <span key={idx} className="text-sm text-gray-700">
                <strong className="capitalize">{instruction.item}</strong> → <strong className="uppercase">{instruction.color}</strong>
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-1">
          {colorInstructions.map((instruction, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center bg-white p-1">
              <WordIconOrImage word={instruction.item} size={200} className="text-gray-400" wordImages={wordImages} />
              <span className="text-base font-medium text-gray-600 capitalize">{instruction.item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (worksheetType === "counting") {
    const countingItems = data?.countingItems || [{ item: "apple", count: 3 }, { item: "fish", count: 5 }];
    return (
      <div data-worksheet-card className="bg-white rounded-lg p-2 print:shadow-none">
        <WorksheetHeader title="Counting Activity" exerciseNumber={3} />
        <div className="space-y-3 flex-1">
          {countingItems.map((item, idx) => (
            <div key={idx} className="py-2">
              <div className="flex flex-wrap justify-center gap-3 mb-2">
                {Array.from({ length: item.count }).map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <WordIconOrImage word={item.item} size={90} className="text-gray-600" wordImages={wordImages} />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-lg text-gray-700">How many <strong className="capitalize text-xl">{item.item}s</strong>?</span>
                <div className="w-16 h-16 border-2 border-dashed border-gray-500 rounded flex items-center justify-center">
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
      <div data-worksheet-card className="bg-white rounded-lg p-2 print:shadow-none">
        <WorksheetHeader title="Matching Activity" exerciseNumber={4} />
        <div className="flex justify-between items-start gap-4 flex-1">
          <div className="flex-1 space-y-3">
            {matchingPairs.map((pair, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-20 h-20 flex items-center justify-center">
                  <WordIconOrImage word={pair.image} size={72} className="text-gray-600" wordImages={wordImages} />
                </div>
                <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
              </div>
            ))}
          </div>
          <div className="flex-1 space-y-3">
            {shuffledWords.map((pair, idx) => (
              <div key={idx} className="flex items-center gap-2 justify-end">
                <div className="flex-1 border-t-2 border-dashed border-gray-400"></div>
                <div className="px-3 py-2 bg-gray-100 rounded min-w-[80px] text-center">
                  <span className="text-xl font-bold text-gray-800 capitalize">{pair.word}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Fill in the blank worksheet
  if (worksheetType === "fill-blank") {
    const allFillBlankWords = data?.fillBlankWords || [
      { word: "cat", blankedWord: "c_t", missingLetter: "a" },
      { word: "dog", blankedWord: "d_g", missingLetter: "o" }
    ];
    // Filter out words that don't have icons
    const fillBlankWords = allFillBlankWords.filter(item => hasAvailableIcon(item.word, wordImages));
    
    if (fillBlankWords.length === 0) return null;
    
    return (
      <div data-worksheet-card className="bg-white rounded-lg p-2 print:shadow-none">
        <WorksheetHeader title="Fill in the Missing Letter" exerciseNumber={5} />
        <div className="grid grid-cols-2 gap-2 flex-1">
          {fillBlankWords.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center py-2">
              <WordIconOrImage word={item.word} size={100} className="text-gray-600" wordImages={wordImages} />
              <div className="text-center mt-1">
                <span className="text-4xl font-bold tracking-widest" style={{ fontFamily: '"Edu TAS Beginner", cursive' }}>
                  {item.blankedWord.split('').map((char, i) => (
                    <span 
                      key={i} 
                      className={char === '_' ? 'inline-block w-10 border-b-4 border-gray-800 mx-1' : ''}
                    >
                      {char !== '_' ? char : ''}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};
