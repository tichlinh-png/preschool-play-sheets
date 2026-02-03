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
  HappyIcon, SadIcon, AngryIcon, SurprisedIcon, ScaredIcon, SleepyIcon,
  // Cambridge Starters - Places
  SchoolIcon, HospitalIcon, ShopIcon, ParkIcon, BeachIcon, ZooIcon, GardenIcon, PoolIcon,
  // Cambridge Starters - Body
  FaceIcon, BodyIcon, StomachIcon, ShoulderIcon,
  // Cambridge Starters - Clothes
  TshirtIcon, JeansIcon, SweaterIcon, SandalsIcon, TrainersIcon,
  // Cambridge Starters - Family
  GrandmotherIcon, GrandfatherIcon, FriendIcon, TeacherIcon,
  // Cambridge Starters - Food
  JuiceIcon, WaterIcon, ChipsIcon, SausageIcon, BiscuitIcon, PieIcon,
  // Cambridge Starters - Animals
  MouseIcon, SpiderIcon2, LizardIcon,
  // Cambridge Starters - Classroom
  BagIcon, ClassroomDeskIcon, ChairIcon, BoardIcon,
  // Cambridge Starters - Toys
  TrainToyIcon, CarToyIcon, BoatToyIcon, PlaneToyIcon,
  // Cambridge Starters - Nature
  GrassIcon, RockIcon, SandIcon, SeaIcon, SkyIcon
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
  writingExercises?: { word: string; count: number }[];
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
  // Cambridge Starters - Places
  school: SchoolIcon, hospital: HospitalIcon, shop: ShopIcon, store: ShopIcon, park: ParkIcon,
  beach: BeachIcon, zoo: ZooIcon, garden: GardenIcon, pool: PoolIcon, swimmingpool: PoolIcon,
  // Cambridge Starters - Body
  face: FaceIcon, body: BodyIcon, stomach: StomachIcon, tummy: StomachIcon, shoulder: ShoulderIcon,
  // Cambridge Starters - Clothes
  tshirt: TshirtIcon, "t-shirt": TshirtIcon, sweater: SweaterIcon, jumper: SweaterIcon,
  sandals: SandalsIcon, trainers: TrainersIcon, sneakers: TrainersIcon,
  // Cambridge Starters - Family
  grandma: GrandmotherIcon, grandmother: GrandmotherIcon, grandpa: GrandfatherIcon, grandfather: GrandfatherIcon,
  friend: FriendIcon, teacher: TeacherIcon,
  // Cambridge Starters - Food
  juice: JuiceIcon, chips: ChipsIcon, crisps: ChipsIcon, sausage: SausageIcon, biscuit: BiscuitIcon, pie: PieIcon,
  // Cambridge Starters - Animals
  lizard: LizardIcon,
  // Cambridge Starters - Classroom
  bag: BagIcon, schoolbag: BagIcon, chair: ChairIcon, board: BoardIcon, whiteboard: BoardIcon,
  // Cambridge Starters - Toys
  traintoy: TrainToyIcon, cartoy: CarToyIcon, boattoy: BoatToyIcon, planetoy: PlaneToyIcon,
  // Cambridge Starters - Nature
  grass: GrassIcon, rock: RockIcon, stone: RockIcon, sand: SandIcon, sea: SeaIcon, ocean: SeaIcon, sky: SkyIcon,
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
  size = 64, 
  className = "", 
  wordImages = [] 
}: { 
  word: string; 
  size?: number; 
  className?: string;
  wordImages?: WordImage[];
}) => {
  const str = word.toLowerCase().trim();
  const scaledSize = Math.round(size * 1.5);
  
  const customImageUrl = findMatchingImage(word, wordImages);
  if (customImageUrl) {
    return (
      <img 
        src={customImageUrl} 
        alt={word} 
        style={{ width: scaledSize, height: scaledSize }}
        className={`object-contain ${className}`}
        crossOrigin="anonymous"
      />
    );
  }
  
  const CustomIconComponent = customIconMap[str];
  if (CustomIconComponent) {
    return <CustomIconComponent size={scaledSize} className={className} />;
  }
  
  const LucideIconComponent = lucideIconMap[str];
  if (LucideIconComponent) {
    return <LucideIconComponent size={scaledSize} className={className} strokeWidth={2} />;
  }
  
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
  wordImages = [],
  pageIndex = 0,
  traceRows = 4
}: WorksheetPreviewProps) => {
  const worksheetType = data?.type || type;
  const worksheetTopic = safeString(data?.topic) || topic;
  const isFirstPage = pageIndex === 0;
  const rowsArray = Array.from({ length: traceRows }, (_, i) => i + 1);

  const WorksheetHeader = () => (
    <header className="worksheet-header border-b-2 border-gray-800 pb-3 mb-4">
      <div className="flex items-center justify-between gap-3">
        {schoolLogo ? (
          <img src={schoolLogo} alt="Logo" className="w-14 h-14 object-contain" />
        ) : null}
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold uppercase tracking-wide">{schoolName || "PRESCHOOL WORKSHEET"}</h1>
          <p className="text-base text-gray-600 mt-1">{worksheetTopic}</p>
        </div>
        <div className="text-right">
          <div className="text-base font-semibold">Score</div>
          <div className="w-14 h-10 border-2 border-gray-800 mt-1"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-3 text-lg">
        <div className="flex items-center gap-2">
          <span className="font-bold">Name:</span>
          <span className="flex-1 border-b-2 border-gray-600"></span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Class:</span>
          <span className="flex-1 border-b-2 border-gray-600">{className}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Date:</span>
          <span className="flex-1 border-b-2 border-gray-600"></span>
        </div>
      </div>
    </header>
  );

  if (worksheetType === "trace") {
    const words = (data?.words || ["Apple"]).map(safeString).filter(Boolean);
    const isSingleLetters = words.every(word => word.length === 1);
    
    if (isSingleLetters) {
      return (
        <div data-worksheet-card className="worksheet-page bg-white">
          {isFirstPage && <WorksheetHeader />}
          <section className="flex-1 flex flex-col">
            <div className="text-2xl font-bold text-gray-800 bg-gray-100 px-4 py-2 mb-4 border-l-4 border-gray-800">TRACE THE LETTERS</div>
            <div className="flex-1 space-y-6">
              {words.map((letter, idx) => {
                const upperLetter = letter.toUpperCase();
                const lowerLetter = letter.toLowerCase();
                const sampleWord = Array.from(availableIconWords).find(w => 
                  w.toLowerCase().startsWith(lowerLetter)
                ) || '';
                const wordHasIcon = sampleWord && hasAvailableIcon(sampleWord, wordImages);
                
                return (
                  <div key={idx} className="trace-block">
                    <div className="flex items-center gap-4 pb-2 border-b-2 border-gray-400 mb-3">
                      <span className="text-5xl font-bold" style={{ fontFamily: '"Edu TAS Beginner", cursive' }}>
                        {upperLetter}{lowerLetter}
                      </span>
                      {wordHasIcon && sampleWord && (
                        <div className="flex items-center gap-3">
                          <WordIconOrImage word={sampleWord} size={40} className="text-gray-700" wordImages={wordImages} />
                          <span className="text-xl font-semibold capitalize">{sampleWord}</span>
                        </div>
                      )}
                    </div>
                    {rowsArray.map((rowNum) => (
                      <div key={`row-${rowNum}`} className="trace-line h-14 relative flex items-end border-b-2 border-gray-700 mb-2">
                        <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-gray-400"></div>
                        <div className="flex items-end h-full w-full">
                          {Array.from({ length: 14 }, (_, pos) => (
                            <span 
                              key={pos}
                              className="flex-1 text-center pb-1"
                              style={{ 
                                fontFamily: '"Edu TAS Beginner", cursive',
                                fontSize: '2rem',
                                fontWeight: pos < 2 ? 600 : 400,
                                color: pos < 2 ? '#374151' : 'transparent',
                                WebkitTextStroke: pos < 2 ? 'none' : '2px #9ca3af',
                              }}
                            >
                              {pos % 2 === 0 ? upperLetter : lowerLetter}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      );
    }
    
    return (
      <div data-worksheet-card className="worksheet-page bg-white">
        {isFirstPage && <WorksheetHeader />}
        <section className="flex-1 flex flex-col">
          <div className="text-2xl font-bold text-gray-800 bg-gray-100 px-4 py-2 mb-4 border-l-4 border-gray-800">TRACE THE WORDS</div>
          <div className="flex-1 grid grid-cols-2 gap-6">
            {words.map((word, idx) => {
              const wordHasIcon = hasAvailableIcon(word, wordImages);
              return (
                <div key={idx} className="trace-word-block border-2 border-gray-400 rounded-lg p-3">
                  <div className="flex items-center justify-center gap-3 mb-3 pb-2 border-b-2 border-gray-300">
                    {wordHasIcon && <WordIconOrImage word={word} size={40} className="text-gray-700" wordImages={wordImages} />}
                    <span className="text-2xl font-bold">{word}</span>
                  </div>
                  {rowsArray.map((lineNum) => (
                    <div key={lineNum} className="trace-line py-2 border-b-2 border-dashed border-gray-400">
                      <span 
                        className="block text-center tracking-widest"
                        style={{ 
                          fontFamily: '"Edu TAS Beginner", cursive',
                          fontSize: '2rem',
                          fontWeight: 600,
                          color: lineNum === 1 ? '#374151' : 'transparent',
                          WebkitTextStroke: lineNum === 1 ? 'none' : '2px #9ca3af',
                        }}
                      >
                        {word}
                      </span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  if (worksheetType === "writing") {
    const words = (data?.words || ["Apple"]).map(safeString).filter(Boolean);
    const isSingleLetters = words.every(word => word.length === 1);
    
    if (isSingleLetters) {
      return (
        <div data-worksheet-card className="worksheet-page bg-white">
          {isFirstPage && <WorksheetHeader />}
          <section className="flex-1 flex flex-col">
            <div className="text-2xl font-bold text-gray-800 bg-gray-100 px-4 py-2 mb-4 border-l-4 border-gray-800">WRITING PRACTICE</div>
            <div className="flex-1 space-y-6">
              {words.map((letter, idx) => {
                const upperLetter = letter.toUpperCase();
                const lowerLetter = letter.toLowerCase();
                const sampleWord = Array.from(availableIconWords).find(w => 
                  w.toLowerCase().startsWith(lowerLetter)
                ) || '';
                const wordHasIcon = sampleWord && hasAvailableIcon(sampleWord, wordImages);
                
                return (
                  <div key={idx} className="writing-block">
                    <div className="flex items-center gap-4 pb-2 border-b-2 border-gray-400 mb-3">
                      <span className="text-5xl font-bold" style={{ fontFamily: '"Edu TAS Beginner", cursive' }}>
                        {upperLetter}{lowerLetter}
                      </span>
                      {wordHasIcon && sampleWord && (
                        <div className="flex items-center gap-3">
                          <WordIconOrImage word={sampleWord} size={40} className="text-gray-700" wordImages={wordImages} />
                          <span className="text-xl font-semibold capitalize">{sampleWord}</span>
                        </div>
                      )}
                    </div>
                    {rowsArray.map((rowNum) => (
                      <div key={`row-${rowNum}`} className="writing-line h-14 relative flex items-end border-b-2 border-gray-700 mb-2">
                        <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-gray-400"></div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      );
    }
    
    return (
      <div data-worksheet-card className="worksheet-page bg-white">
        {isFirstPage && <WorksheetHeader />}
        <section className="flex-1 flex flex-col">
          <div className="text-2xl font-bold text-gray-800 bg-gray-100 px-4 py-2 mb-4 border-l-4 border-gray-800">WRITING PRACTICE</div>
          <div className="flex-1 grid grid-cols-2 gap-6">
            {words.map((word, idx) => {
              const wordHasIcon = hasAvailableIcon(word, wordImages);
              return (
                <div key={idx} className="writing-word-block border-2 border-gray-400 rounded-lg p-3">
                  <div className="flex items-center justify-center gap-3 mb-3 pb-2 border-b-2 border-gray-300">
                    {wordHasIcon && <WordIconOrImage word={word} size={40} className="text-gray-700" wordImages={wordImages} />}
                    <span className="text-2xl font-bold">{word}</span>
                  </div>
                  {rowsArray.map((lineNum) => (
                    <div key={lineNum} className="writing-line py-3 border-b-2 border-dashed border-gray-400">
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  }

  if (worksheetType === "combined") {
    const colorInstructions = data?.colorInstructions || [];
    const countingItems = data?.countingItems || [];
    const allFillBlankWords = data?.fillBlankWords || [];
    const fillBlankWords = allFillBlankWords.filter(item => hasAvailableIcon(item.word, wordImages));
    const writingExercises = data?.writingExercises || [];

    const hasColor = colorInstructions.length > 0;
    const hasCounting = countingItems.length > 0;
    const hasFillBlank = fillBlankWords.length > 0;
    const hasWriting = writingExercises.length > 0;

    if (!hasColor && !hasCounting && !hasFillBlank && !hasWriting) return null;

    return (
      <div data-worksheet-card className="worksheet-page bg-white">
        {isFirstPage && <WorksheetHeader />}
        <section className="flex-1 flex flex-col">
          <div className="text-2xl font-bold text-gray-800 bg-gray-100 px-4 py-2 mb-4 border-l-4 border-gray-800">UNIVERSAL EXERCISES</div>
          
          <div className="flex-1 grid grid-cols-2 gap-0 border-2 border-gray-800">
            {hasColor && (
              <div className="exercise-cell border-r-2 border-b-2 border-gray-600 p-4">
                <div className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-2 mb-4">1. COLOR THE PICTURE</div>
                <div className="space-y-4">
                  {colorInstructions.slice(0, 4).map((instruction, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <WordIconOrImage word={instruction.item} size={56} className="text-gray-700" wordImages={wordImages} />
                      <div className="text-xl">
                        <span className="capitalize font-medium">{instruction.item}</span>
                        <span className="mx-2">→</span>
                        <span className="font-bold uppercase">{instruction.color}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {hasCounting && (
              <div className="exercise-cell border-b-2 border-gray-600 p-4">
                <div className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-2 mb-4">2. COUNT & WRITE</div>
                <div className="space-y-4">
                  {countingItems.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between gap-3">
                      <div className="flex gap-2 flex-wrap">
                        {Array.from({ length: Math.min(item.count, 5) }).map((_, i) => (
                          <WordIconOrImage key={i} word={item.item} size={36} className="text-gray-700" wordImages={wordImages} />
                        ))}
                      </div>
                      <div className="w-14 h-14 border-2 border-dashed border-gray-700 flex items-center justify-center font-bold text-2xl"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {hasFillBlank && (
              <div className={`exercise-cell p-4 ${hasColor && hasCounting ? 'col-span-2' : hasColor ? '' : 'border-r-2 border-gray-600'}`}>
                <div className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-2 mb-4">3. FILL IN THE BLANK</div>
                <div className="grid grid-cols-2 gap-4">
                  {fillBlankWords.slice(0, 6).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <WordIconOrImage word={item.word} size={48} className="text-gray-700" wordImages={wordImages} />
                      <span className="text-2xl font-bold tracking-wide" style={{ fontFamily: '"Edu TAS Beginner", cursive' }}>
                        {item.blankedWord.split('').map((char, i) => (
                          <span key={i} className={char === '_' ? 'inline-block w-5 border-b-2 border-gray-800 mx-1' : ''}>
                            {char !== '_' ? char : ''}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {hasWriting && (
              <div className={`exercise-cell p-4 ${(hasColor || hasCounting || hasFillBlank) ? 'col-span-2 border-t-2 border-gray-600' : ''}`}>
                <div className="text-xl font-bold text-gray-800 border-b-2 border-gray-400 pb-2 mb-4">4. WRITING PRACTICE</div>
                <div className="space-y-3">
                  {writingExercises.slice(0, 4).map((exercise, idx) => (
                    <div key={idx}>
                      <div className="text-lg font-semibold mb-2 capitalize">{exercise.word}</div>
                      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(exercise.count, 5)}, 1fr)` }}>
                        {Array.from({ length: Math.min(exercise.count, 5) }).map((_, i) => (
                          <div key={i} className="writing-box">
                            {i === 0 && <span className="text-gray-400">{exercise.word}</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  return null;
};
