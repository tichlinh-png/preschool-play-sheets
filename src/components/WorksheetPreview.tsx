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
  StarfishIcon, SquirrelIcon, HedgehogIcon,
  // Food icons
  BreadIcon, RiceIcon, NoodleIcon, CheeseIcon, HamburgerIcon, HotdogIcon,
  SandwichIcon, SoupIcon, FriesIcon, DonutIcon, CandyIcon, ChocolateIcon,
  LollipopIcon, WatermelonIcon, OrangeIcon, StrawberryIcon, PearIcon,
  LemonIcon, PineappleIcon, CornIcon, TomatoIcon, PotatoIcon, OnionIcon, MushroomIcon,
  // Clothing icons
  PantsIcon, DressIcon, SkirtIcon, SocksIcon, ShoesIcon, BootsIcon,
  HatIcon, CapIcon, ScarfIcon, GlovesIcon, JacketIcon, CoatIcon,
  // Room & Furniture icons
  KitchenIcon, BathroomIcon, BedroomIcon, LivingroomIcon, TableIcon, DeskIcon,
  DoorIcon, WindowIcon, MirrorIcon, CurtainIcon, CarpetIcon,
  // Body parts icons
  HeadIcon, NoseIcon, MouthIcon, ToothIcon, HairIcon, LegIcon, ArmIcon, FingerIcon, ToeIcon,
  // Action/Verb icons
  RunIcon, WalkIcon, JumpIcon, SwimIcon, SleepIcon, EatIcon, DrinkIcon,
  ReadIcon, WriteIcon, SingIcon, DanceIcon, PlayIcon, CookIcon, CleanIcon, WashIcon,
  // Weather icons
  SunnyIcon, CloudyIcon, RainyIcon, SnowyIcon, WindyIcon, StormyIcon, RainbowIcon,
  // School items icons
  CrayonIcon, RulerIcon, EraserIcon, GlueIcon, NotebookIcon, BlackboardIcon, ChalkIcon, GlobeIcon,
  // Toy icons
  BallIcon, DollIcon, TeddyBearIcon, BlocksIcon, KiteIcon, PuzzleIcon, RobotIcon, DrumIcon,
  // Number icons
  OneIcon, TwoIcon, ThreeIcon, FourIcon, FiveIcon, SixIcon, SevenIcon, EightIcon, NineIcon, TenIcon, ZeroIcon,
  // Color icons
  RedColorIcon, BlueColorIcon, YellowColorIcon, GreenColorIcon, OrangeColorIcon,
  PurpleColorIcon, PinkColorIcon, BrownColorIcon, BlackColorIcon, WhiteColorIcon, GrayColorIcon,
  // Shape icons
  CircleShapeIcon, SquareShapeIcon, TriangleShapeIcon, RectangleShapeIcon, OvalShapeIcon,
  DiamondShapeIcon, StarShapeIcon, HeartShapeIcon, PentagonShapeIcon, HexagonShapeIcon,
  CrescentShapeIcon, CrossShapeIcon, ArrowShapeIcon,
  // More insects
  AntIcon, LadybugIcon, GrasshopperIcon, DragonFlyIcon, CaterpillarIcon,
  // More sea creatures
  JellyfishIcon, ShrimpIcon, LobsterIcon, ClownfishIcon,
  // More birds
  ParrotIcon, FlamingoIcon, PeacockIcon, EagleIcon,
  // More animals
  BatIcon, MooseIcon, GorillaIcon, LlamaIcon, PelicanIcon,
  // Sports
  SoccerIcon, BasketballIcon, TennisIcon, BaseballIcon,
  // Musical instruments
  GuitarIcon, PianoIcon, ViolinIcon, TrumpetIcon,
  // More fruits/vegetables
  MangoIcon, KiwiIcon, CoconutIcon, AvocadoIcon, BroccoliIcon, PepperIcon,
  // Buildings
  CastleIcon, LighthouseIcon, WindmillIcon, BarnIcon,
  // Emotions
  HappyIcon, SadIcon, AngryIcon, SurprisedIcon, ScaredIcon, SleepyIcon
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
  // More insects
  ant: AntIcon, ladybug: LadybugIcon, grasshopper: GrasshopperIcon, dragonfly: DragonFlyIcon, caterpillar: CaterpillarIcon,
  // More sea creatures
  jellyfish: JellyfishIcon, shrimp: ShrimpIcon, lobster: LobsterIcon, clownfish: ClownfishIcon,
  // More birds
  parrot: ParrotIcon, flamingo: FlamingoIcon, peacock: PeacockIcon, eagle: EagleIcon, pelican: PelicanIcon,
  // More animals
  bat: BatIcon, moose: MooseIcon, gorilla: GorillaIcon, llama: LlamaIcon,
  // Food
  bread: BreadIcon, rice: RiceIcon, noodle: NoodleIcon, noodles: NoodleIcon, pasta: NoodleIcon,
  cheese: CheeseIcon, hamburger: HamburgerIcon, burger: HamburgerIcon, hotdog: HotdogIcon,
  sandwich: SandwichIcon, soup: SoupIcon, fries: FriesIcon, donut: DonutIcon, doughnut: DonutIcon,
  candy: CandyIcon, chocolate: ChocolateIcon, lollipop: LollipopIcon,
  watermelon: WatermelonIcon, strawberry: StrawberryIcon,
  pear: PearIcon, lemon: LemonIcon, pineapple: PineappleIcon, corn: CornIcon,
  tomato: TomatoIcon, potato: PotatoIcon, onion: OnionIcon, mushroom: MushroomIcon,
  mango: MangoIcon, kiwi: KiwiIcon, coconut: CoconutIcon, avocado: AvocadoIcon,
  broccoli: BroccoliIcon, pepper: PepperIcon,
  // Clothing
  pants: PantsIcon, trousers: PantsIcon, jeans: PantsIcon, dress: DressIcon,
  skirt: SkirtIcon, socks: SocksIcon, sock: SocksIcon, shoes: ShoesIcon, shoe: ShoesIcon,
  boots: BootsIcon, boot: BootsIcon, hat: HatIcon, cap: CapIcon,
  scarf: ScarfIcon, gloves: GlovesIcon, glove: GlovesIcon, jacket: JacketIcon, coat: CoatIcon,
  // Rooms & Furniture
  kitchen: KitchenIcon, bathroom: BathroomIcon, bedroom: BedroomIcon, livingroom: LivingroomIcon,
  table: TableIcon, desk: DeskIcon, door: DoorIcon, window: WindowIcon,
  mirror: MirrorIcon, curtain: CurtainIcon, carpet: CarpetIcon, rug: CarpetIcon,
  // Body parts
  head: HeadIcon, nose: NoseIcon, mouth: MouthIcon, tooth: ToothIcon, teeth: ToothIcon,
  hair: HairIcon, leg: LegIcon, arm: ArmIcon, finger: FingerIcon, toe: ToeIcon,
  // Actions/Verbs
  run: RunIcon, running: RunIcon, walk: WalkIcon, walking: WalkIcon,
  jump: JumpIcon, jumping: JumpIcon, swim: SwimIcon, swimming: SwimIcon,
  sleep: SleepIcon, sleeping: SleepIcon, eat: EatIcon, eating: EatIcon,
  drink: DrinkIcon, drinking: DrinkIcon, read: ReadIcon, reading: ReadIcon,
  write: WriteIcon, writing: WriteIcon, sing: SingIcon, singing: SingIcon,
  dance: DanceIcon, dancing: DanceIcon, play: PlayIcon, playing: PlayIcon,
  cook: CookIcon, cooking: CookIcon, clean: CleanIcon, cleaning: CleanIcon, wash: WashIcon, washing: WashIcon,
  // Weather
  sunny: SunnyIcon, cloudy: CloudyIcon, rainy: RainyIcon, snowy: SnowyIcon,
  windy: WindyIcon, stormy: StormyIcon, rainbow: RainbowIcon,
  // School items
  crayon: CrayonIcon, ruler: RulerIcon, eraser: EraserIcon, glue: GlueIcon,
  notebook: NotebookIcon, blackboard: BlackboardIcon, chalk: ChalkIcon, globe: GlobeIcon,
  // Toys
  ball: BallIcon, doll: DollIcon, teddy: TeddyBearIcon, teddybear: TeddyBearIcon,
  blocks: BlocksIcon, block: BlocksIcon, kite: KiteIcon, puzzle: PuzzleIcon, robot: RobotIcon, drum: DrumIcon,
  // Numbers (1-10)
  one: OneIcon, "1": OneIcon, two: TwoIcon, "2": TwoIcon, three: ThreeIcon, "3": ThreeIcon,
  four: FourIcon, "4": FourIcon, five: FiveIcon, "5": FiveIcon, six: SixIcon, "6": SixIcon,
  seven: SevenIcon, "7": SevenIcon, eight: EightIcon, "8": EightIcon, nine: NineIcon, "9": NineIcon,
  ten: TenIcon, "10": TenIcon, zero: ZeroIcon, "0": ZeroIcon,
  // Colors
  red: RedColorIcon, blue: BlueColorIcon, yellow: YellowColorIcon, green: GreenColorIcon,
  orange: OrangeColorIcon, purple: PurpleColorIcon, pink: PinkColorIcon, brown: BrownColorIcon,
  black: BlackColorIcon, white: WhiteColorIcon, gray: GrayColorIcon, grey: GrayColorIcon,
  // Shapes
  circle: CircleShapeIcon, square: SquareShapeIcon, triangle: TriangleShapeIcon,
  rectangle: RectangleShapeIcon, oval: OvalShapeIcon, diamond: DiamondShapeIcon,
  star: StarShapeIcon, heart: HeartShapeIcon, pentagon: PentagonShapeIcon,
  hexagon: HexagonShapeIcon, crescent: CrescentShapeIcon, cross: CrossShapeIcon, arrow: ArrowShapeIcon,
  // Sports
  soccer: SoccerIcon, football: SoccerIcon, basketball: BasketballIcon, tennis: TennisIcon, baseball: BaseballIcon,
  // Musical instruments
  guitar: GuitarIcon, piano: PianoIcon, violin: ViolinIcon, trumpet: TrumpetIcon,
  // Buildings
  castle: CastleIcon, lighthouse: LighthouseIcon, windmill: WindmillIcon, barn: BarnIcon,
  // Emotions
  happy: HappyIcon, sad: SadIcon, angry: AngryIcon, surprised: SurprisedIcon, scared: ScaredIcon, sleepy: SleepyIcon,
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
    <div className="text-center mb-0.5">
      {isFirstPage && (
        <>
          <div className="flex items-center justify-between">
            {schoolLogo ? (
              <img src={schoolLogo} alt="School logo" className="w-6 h-6 object-contain" />
            ) : (
              <div className="w-6 h-6" />
            )}
            <div className="flex-1 text-center">
              {schoolName && (
                <p className="text-[9px] font-semibold text-gray-700">{schoolName}</p>
              )}
              <p className="text-[8px] text-gray-500">
                Class: {className || "______"} | Teacher: {teacherName || "______"}
              </p>
            </div>
            <div className="w-6 h-6" />
          </div>
          <p className="text-[8px] text-gray-600">Name: __________ Date: ______</p>
        </>
      )}
      <div className="flex items-center justify-center gap-1">
        <span className="text-[9px] font-bold text-gray-800">Ex {exerciseNumber}.</span>
        <h3 className="font-display text-base font-bold text-gray-800">{title}</h3>
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
        <div data-worksheet-card className="bg-white p-1 print:shadow-none">
          <WorksheetHeader title={title} exerciseNumber={1} />
          <div className="space-y-4">
            {words.map((letter, idx) => {
              const upperLetter = letter.toUpperCase();
              const lowerLetter = letter.toLowerCase();
              // Find a word that starts with this letter and has an icon
              const sampleWord = Array.from(availableIconWords).find(w => 
                w.toLowerCase().startsWith(lowerLetter)
              ) || '';
              const wordHasIcon = sampleWord && hasAvailableIcon(sampleWord, wordImages);
              
              return (
                <div key={idx} className="py-1">
                  {/* Header row: Large letter with related word */}
                  <div className="flex items-center gap-3 mb-1 pb-0.5">
                    <span 
                      className="text-3xl font-medium text-gray-800 font-trace"
                    >
                      {upperLetter}{lowerLetter}
                    </span>
                    {wordHasIcon && sampleWord && (
                      <div className="flex items-center gap-1">
                        <WordIconOrImage word={sampleWord} size={28} className="text-gray-700" wordImages={wordImages} />
                        <span className="text-sm font-medium text-gray-600 capitalize">{sampleWord}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Tracing rows - uppercase */}
                  <div className="mb-1">
                    <p className="text-[9px] text-gray-500 mb-0">Uppercase {upperLetter}</p>
                    {rowsArray.map((rowNum) => (
                      <div 
                        key={`upper-${rowNum}`} 
                        className="relative h-10 flex items-end border-b-2 border-gray-700"
                      >
                        <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-300"></div>
                        <div className="flex items-end h-full w-full">
                          {Array.from({ length: 16 }, (_, pos) => (
                            <span 
                              key={pos}
                              className="flex-1 text-center pb-0 font-trace"
                              style={{ 
                                fontSize: '2rem',
                                fontWeight: pos === 0 ? 400 : 300,
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
                    <p className="text-[9px] text-gray-500 mb-0">Lowercase {lowerLetter}</p>
                    {rowsArray.map((rowNum) => (
                      <div 
                        key={`lower-${rowNum}`} 
                        className="relative h-10 flex items-end border-b-2 border-gray-700"
                      >
                        <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-300"></div>
                        <div className="flex items-end h-full w-full">
                          {Array.from({ length: 16 }, (_, pos) => (
                            <span 
                              key={pos}
                              className="flex-1 text-center pb-0 font-trace"
                              style={{ 
                                fontSize: '2rem',
                                fontWeight: pos === 0 ? 400 : 300,
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
      <div data-worksheet-card className="bg-white p-1 print:shadow-none">
        <WorksheetHeader title={title} exerciseNumber={1} />
        <div className="grid grid-cols-2 gap-2">
          {words.map((word, idx) => {
            const wordHasIcon = hasAvailableIcon(word, wordImages);
            
            return (
              <div key={idx} className="p-1">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {wordHasIcon && (
                    <WordIconOrImage word={word} size={28} className="text-gray-700" wordImages={wordImages} />
                  )}
                  <span className="text-lg font-bold text-gray-800">{word}</span>
                </div>
                <div className="space-y-0">
                  {rowsArray.map((lineNum) => (
                    <div key={lineNum} className="px-2 py-1 border-b border-dashed border-gray-300">
                      <span 
                        className="block text-center text-xl tracking-[0.15em] font-trace"
                        style={{ 
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

  // Color, counting, fill-blank are now rendered by CombinedWorksheet
  return null;
};
