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
  oddOneOutGroups?: { items: string[]; oddItem: string; reason: string }[];
  circleCorrectItems?: { question: string; options: string[]; correctAnswer: string }[];
  patternItems?: { sequence: string[]; answer: string }[];
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
  
  // Check for custom uploaded image
  if (wordImages.some(img => img.word.toLowerCase() === str)) {
    return true;
  }
  
  // Check for custom icon
  if (customIconMap[str]) {
    return true;
  }
  
  // Check for lucide icon
  if (lucideIconMap[str]) {
    return true;
  }
  
  return false;
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
  
  // Fallback to icons - only render if icon exists
  const CustomIconComponent = customIconMap[str];
  if (CustomIconComponent) {
    return <CustomIconComponent size={size} className={className} />;
  }
  
  const LucideIconComponent = lucideIconMap[str];
  if (LucideIconComponent) {
    return <LucideIconComponent size={size} className={className} strokeWidth={1.5} />;
  }
  
  // Return null if no icon available (this shouldn't happen if filtering is done correctly)
  return null;
};

export const WorksheetPreview = ({ 
  data, 
  type, 
  topic = "Apple", 
  schoolLogo,
  schoolName = "",
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
          {schoolName && (
            <p className="text-sm font-semibold text-gray-700 mb-1">{schoolName}</p>
          )}
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
    // Check if these are single letters (alphabet tracing)
    const isSingleLetters = words.every(word => word.length === 1);
    const title = isSingleLetters ? "Letter Tracing Practice" : "Trace the Words";
    
    // For single letter tracing - use the new design like the reference image
    if (isSingleLetters) {
      return (
        <div data-worksheet-card className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
          <WorksheetHeader title={title} exerciseNumber={1} />
          <div className="space-y-8">
            {words.map((letter, idx) => {
              const upperLetter = letter.toUpperCase();
              const lowerLetter = letter.toLowerCase();
              // Find a word that starts with this letter and has an icon
              const sampleWord = Array.from(availableIconWords).find(w => 
                w.toLowerCase().startsWith(lowerLetter)
              ) || '';
              const wordHasIcon = sampleWord && hasAvailableIcon(sampleWord, wordImages);
              
              return (
                <div key={idx} className="border-2 border-gray-200 rounded-lg p-4">
                  {/* Header row: Large letter, small letter with guide, related word image */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-gray-200">
                    <div className="flex items-center gap-6">
                      {/* Large uppercase letter */}
                      <div className="w-20 h-20 border-3 border-gray-800 rounded-lg flex items-center justify-center bg-white">
                        <span 
                          className="text-6xl font-bold text-gray-800"
                          style={{ fontFamily: '"Edu TAS Beginner", cursive' }}
                        >
                          {upperLetter}
                        </span>
                      </div>
                      {/* Smaller letter with dotted guide */}
                      <div className="w-16 h-16 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center relative">
                        <span 
                          className="text-4xl text-gray-400"
                          style={{ 
                            fontFamily: '"Edu TAS Beginner", cursive',
                            WebkitTextStroke: '1px #9ca3af',
                            color: 'transparent'
                          }}
                        >
                          {upperLetter}
                        </span>
                        {/* Arrow indicator */}
                        <svg className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12l7-7 7 7"/>
                        </svg>
                      </div>
                    </div>
                    {/* Related word with icon */}
                    {wordHasIcon && sampleWord && (
                      <div className="flex flex-col items-center">
                        <WordIconOrImage word={sampleWord} size={48} className="text-gray-700" wordImages={wordImages} />
                        <span className="text-sm font-medium text-gray-600 capitalize mt-1">{sampleWord}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Tracing rows - uppercase */}
                  <div className="space-y-1 mb-4">
                    <p className="text-xs text-gray-500 mb-1">Uppercase {upperLetter}</p>
                    {[1, 2, 3].map((rowNum) => (
                      <div 
                        key={`upper-${rowNum}`} 
                        className="relative h-12 flex items-end"
                        style={{
                          background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 23px, #e5e7eb 23px, #e5e7eb 24px, transparent 24px, transparent 47px, #374151 47px, #374151 48px)'
                        }}
                      >
                        {/* Dashed middle line */}
                        <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-300"></div>
                        
                        {/* Letters to trace */}
                        <div className="flex items-end h-full w-full px-2">
                          {[0, 1, 2, 3, 4, 5].map((pos) => (
                            <span 
                              key={pos}
                              className="flex-1 text-center pb-1"
                              style={{ 
                                fontFamily: '"Edu TAS Beginner", cursive',
                                fontSize: '2rem',
                                fontWeight: pos === 0 ? 600 : 400,
                                color: pos === 0 ? '#374151' : 'transparent',
                                WebkitTextStroke: pos === 0 ? 'none' : '1px #9ca3af',
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
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 mb-1">Lowercase {lowerLetter}</p>
                    {[1, 2, 3].map((rowNum) => (
                      <div 
                        key={`lower-${rowNum}`} 
                        className="relative h-12 flex items-end"
                        style={{
                          background: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 23px, #e5e7eb 23px, #e5e7eb 24px, transparent 24px, transparent 47px, #374151 47px, #374151 48px)'
                        }}
                      >
                        {/* Dashed middle line */}
                        <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-300"></div>
                        
                        {/* Letters to trace */}
                        <div className="flex items-end h-full w-full px-2">
                          {[0, 1, 2, 3, 4, 5].map((pos) => (
                            <span 
                              key={pos}
                              className="flex-1 text-center pb-1"
                              style={{ 
                                fontFamily: '"Edu TAS Beginner", cursive',
                                fontSize: '2rem',
                                fontWeight: pos === 0 ? 600 : 400,
                                color: pos === 0 ? '#374151' : 'transparent',
                                WebkitTextStroke: pos === 0 ? 'none' : '1px #9ca3af',
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
      <div data-worksheet-card className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
        <WorksheetHeader title={title} exerciseNumber={1} />
        <div className="grid grid-cols-2 gap-4">
          {words.map((word, idx) => {
            const wordHasIcon = hasAvailableIcon(word, wordImages);
            
            return (
              <div key={idx} className="border border-gray-300 rounded-lg p-3">
                <div className="flex items-center justify-center gap-2 mb-3">
                  {wordHasIcon && (
                    <WordIconOrImage word={word} size={36} className="text-gray-700" wordImages={wordImages} />
                  )}
                  <span className="text-xl font-bold text-gray-800">{word}</span>
                </div>
                <div className="space-y-1">
                  {[1, 2, 3, 4, 5].map((lineNum) => (
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

  // Fill in the blank worksheet
  if (worksheetType === "fill-blank") {
    const fillBlankWords = data?.fillBlankWords || [
      { word: "cat", blankedWord: "c_t", missingLetter: "a" },
      { word: "dog", blankedWord: "d_g", missingLetter: "o" }
    ];
    return (
      <div data-worksheet-card className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
        <WorksheetHeader title="Fill in the Missing Letter" exerciseNumber={5} />
        <div className="grid grid-cols-2 gap-4">
          {fillBlankWords.map((item, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-center justify-center gap-3 mb-3">
                <WordIconOrImage word={item.word} size={48} className="text-gray-600" wordImages={wordImages} />
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold tracking-widest" style={{ fontFamily: '"Edu TAS Beginner", cursive' }}>
                  {item.blankedWord.split('').map((char, i) => (
                    <span 
                      key={i} 
                      className={char === '_' ? 'inline-block w-8 border-b-2 border-gray-800 mx-1' : ''}
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

  // Odd one out worksheet
  if (worksheetType === "odd-one-out") {
    const oddOneOutGroups = data?.oddOneOutGroups || [
      { items: ["cat", "dog", "fish", "apple"], oddItem: "apple", reason: "not an animal" }
    ];
    return (
      <div data-worksheet-card className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
        <WorksheetHeader title="Find the Odd One Out" exerciseNumber={6} />
        <div className="space-y-6">
          {oddOneOutGroups.map((group, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-3 text-center">Cross out (X) the one that does not belong:</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {group.items.map((item, i) => (
                  <div key={i} className="w-20 h-20 border-2 border-gray-400 rounded-lg flex flex-col items-center justify-center bg-white p-2">
                    <WordIconOrImage word={item} size={36} className="text-gray-600" wordImages={wordImages} />
                    <span className="text-xs mt-1 capitalize">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Circle the correct answer worksheet
  if (worksheetType === "circle-correct") {
    const circleCorrectItems = data?.circleCorrectItems || [
      { question: "Which one can fly?", options: ["cat", "bird", "fish"], correctAnswer: "bird" }
    ];
    return (
      <div data-worksheet-card className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
        <WorksheetHeader title="Circle the Correct Answer" exerciseNumber={7} />
        <div className="space-y-6">
          {circleCorrectItems.map((item, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg p-4">
              <p className="text-lg font-bold text-gray-800 mb-4 text-center">{item.question}</p>
              <div className="flex justify-center gap-6 flex-wrap">
                {item.options.map((option, i) => (
                  <div key={i} className="w-24 h-24 border-2 border-gray-400 rounded-full flex flex-col items-center justify-center bg-white p-2">
                    <WordIconOrImage word={option} size={40} className="text-gray-600" wordImages={wordImages} />
                    <span className="text-xs mt-1 capitalize">{option}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Pattern completion worksheet
  if (worksheetType === "pattern") {
    const patternItems = data?.patternItems || [
      { sequence: ["apple", "banana", "apple", "banana", "apple"], answer: "banana" }
    ];
    return (
      <div data-worksheet-card className="bg-white rounded-lg p-6 border-2 border-gray-300 print:shadow-none">
        <WorksheetHeader title="Complete the Pattern" exerciseNumber={8} />
        <div className="space-y-6">
          {patternItems.map((item, idx) => (
            <div key={idx} className="border border-gray-300 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-3 text-center">What comes next? Draw or write in the box.</p>
              <div className="flex justify-center items-center gap-3 flex-wrap">
                {item.sequence.map((seqItem, i) => (
                  <div key={i} className="w-14 h-14 border-2 border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                    <WordIconOrImage word={seqItem} size={32} className="text-gray-600" wordImages={wordImages} />
                  </div>
                ))}
                <span className="text-2xl font-bold text-gray-400">→</span>
                <div className="w-14 h-14 border-2 border-dashed border-gray-500 rounded-lg flex items-center justify-center bg-white">
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};
