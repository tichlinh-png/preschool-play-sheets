import { WorksheetData } from "./WorksheetPreview";
import { hasAvailableIcon } from "./WorksheetPreview";
import { 
  Fish, Cat, Dog, Bird, Flower2, Trees, Sun, Moon, Star,
  Car, Bus, Book, Pencil, Home, Apple, Banana, Cherry, Grape,
  Heart, Baby, User, Shirt, Cookie, Cake, Pizza, IceCreamCone, Milk,
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
  BreadIcon, RiceIcon, NoodleIcon, CheeseIcon, HamburgerIcon, HotdogIcon,
  SandwichIcon, SoupIcon, FriesIcon, DonutIcon, CandyIcon, ChocolateIcon,
  LollipopIcon, WatermelonIcon, OrangeIcon, StrawberryIcon, PearIcon,
  LemonIcon, PineappleIcon, CornIcon, TomatoIcon, PotatoIcon, OnionIcon, MushroomIcon,
  PantsIcon, DressIcon, SkirtIcon, SocksIcon, ShoesIcon, BootsIcon,
  HatIcon, CapIcon, ScarfIcon, GlovesIcon, JacketIcon, CoatIcon,
  KitchenIcon, BathroomIcon, BedroomIcon, LivingroomIcon, TableIcon, DeskIcon,
  DoorIcon, WindowIcon, MirrorIcon, CurtainIcon, CarpetIcon,
  HeadIcon, NoseIcon, MouthIcon, ToothIcon, HairIcon, LegIcon, ArmIcon, FingerIcon, ToeIcon,
  RunIcon, WalkIcon, JumpIcon, SwimIcon, SleepIcon, EatIcon, DrinkIcon,
  ReadIcon, WriteIcon, SingIcon, DanceIcon, PlayIcon, CookIcon, CleanIcon, WashIcon,
  SunnyIcon, CloudyIcon, RainyIcon, SnowyIcon, WindyIcon, StormyIcon, RainbowIcon,
  CrayonIcon, RulerIcon, EraserIcon, GlueIcon, NotebookIcon, BlackboardIcon, ChalkIcon, GlobeIcon,
  BallIcon, DollIcon, TeddyBearIcon, BlocksIcon, KiteIcon, PuzzleIcon, RobotIcon, DrumIcon,
  OneIcon, TwoIcon, ThreeIcon, FourIcon, FiveIcon, SixIcon, SevenIcon, EightIcon, NineIcon, TenIcon, ZeroIcon,
  RedColorIcon, BlueColorIcon, YellowColorIcon, GreenColorIcon, OrangeColorIcon,
  PurpleColorIcon, PinkColorIcon, BrownColorIcon, BlackColorIcon, WhiteColorIcon, GrayColorIcon,
  CircleShapeIcon, SquareShapeIcon, TriangleShapeIcon, RectangleShapeIcon, OvalShapeIcon,
  DiamondShapeIcon, StarShapeIcon, HeartShapeIcon, PentagonShapeIcon, HexagonShapeIcon,
  CrescentShapeIcon, CrossShapeIcon, ArrowShapeIcon,
  AntIcon, LadybugIcon, GrasshopperIcon, DragonFlyIcon, CaterpillarIcon,
  JellyfishIcon, ShrimpIcon, LobsterIcon, ClownfishIcon,
  ParrotIcon, FlamingoIcon, PeacockIcon, EagleIcon,
  BatIcon, MooseIcon, GorillaIcon, LlamaIcon, PelicanIcon,
  SoccerIcon, BasketballIcon, TennisIcon, BaseballIcon,
  GuitarIcon, PianoIcon, ViolinIcon, TrumpetIcon,
  MangoIcon, KiwiIcon, CoconutIcon, AvocadoIcon, BroccoliIcon, PepperIcon,
  CastleIcon, LighthouseIcon, WindmillIcon, BarnIcon,
  HappyIcon, SadIcon, AngryIcon, SurprisedIcon, ScaredIcon, SleepyIcon
} from './icons/AnimalIcons';
import { ComponentType, SVGProps } from 'react';

interface WordImage {
  word: string;
  imageUrl: string;
}

interface CombinedWorksheetProps {
  colorData?: WorksheetData;
  countingData?: WorksheetData;
  fillBlankData?: WorksheetData;
  schoolLogo?: string | null;
  schoolName?: string;
  teacherName?: string;
  className?: string;
  wordImages?: WordImage[];
}

type CustomIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

const customIconMap: Record<string, CustomIcon> = {
  goat: GoatIcon, elephant: ElephantIcon, cow: CowIcon, pig: PigIcon,
  horse: HorseIcon, sheep: SheepIcon, chicken: ChickenIcon, duck: DuckIcon,
  lion: LionIcon, tiger: TigerIcon, monkey: MonkeyIcon, bear: BearIcon, frog: FrogIcon,
  giraffe: GiraffeIcon, zebra: ZebraIcon, crocodile: CrocodileIcon, dolphin: DolphinIcon, whale: WhaleIcon,
  penguin: PenguinIcon, owl: OwlIcon, butterfly: ButterflyIcon, bee: BeeIcon, spider: SpiderIcon, snake: SnakeIcon,
  deer: DeerIcon, fox: FoxIcon, wolf: WolfIcon, panda: PandaIcon,
  koala: KoalaIcon, kangaroo: KangarooIcon, hippo: HippoIcon,
  rhino: RhinoIcon, camel: CamelIcon, seal: SealIcon,
  octopus: OctopusIcon, crab: CrabIcon, starfish: StarfishIcon,
  squirrel: SquirrelIcon, hedgehog: HedgehogIcon,
  ant: AntIcon, ladybug: LadybugIcon, grasshopper: GrasshopperIcon, dragonfly: DragonFlyIcon, caterpillar: CaterpillarIcon,
  jellyfish: JellyfishIcon, shrimp: ShrimpIcon, lobster: LobsterIcon, clownfish: ClownfishIcon,
  parrot: ParrotIcon, flamingo: FlamingoIcon, peacock: PeacockIcon, eagle: EagleIcon, pelican: PelicanIcon,
  bat: BatIcon, moose: MooseIcon, gorilla: GorillaIcon, llama: LlamaIcon,
  bread: BreadIcon, rice: RiceIcon, noodle: NoodleIcon, cheese: CheeseIcon, hamburger: HamburgerIcon, hotdog: HotdogIcon,
  sandwich: SandwichIcon, soup: SoupIcon, fries: FriesIcon, donut: DonutIcon, candy: CandyIcon, chocolate: ChocolateIcon,
  lollipop: LollipopIcon, watermelon: WatermelonIcon, strawberry: StrawberryIcon,
  pear: PearIcon, lemon: LemonIcon, pineapple: PineappleIcon, corn: CornIcon,
  tomato: TomatoIcon, potato: PotatoIcon, onion: OnionIcon, mushroom: MushroomIcon,
  mango: MangoIcon, kiwi: KiwiIcon, coconut: CoconutIcon, avocado: AvocadoIcon,
  broccoli: BroccoliIcon, pepper: PepperIcon,
  pants: PantsIcon, dress: DressIcon, skirt: SkirtIcon, socks: SocksIcon, shoes: ShoesIcon,
  boots: BootsIcon, hat: HatIcon, cap: CapIcon, scarf: ScarfIcon, gloves: GlovesIcon, jacket: JacketIcon, coat: CoatIcon,
  kitchen: KitchenIcon, bathroom: BathroomIcon, bedroom: BedroomIcon, livingroom: LivingroomIcon,
  table: TableIcon, desk: DeskIcon, door: DoorIcon, window: WindowIcon,
  mirror: MirrorIcon, curtain: CurtainIcon, carpet: CarpetIcon,
  head: HeadIcon, nose: NoseIcon, mouth: MouthIcon, tooth: ToothIcon, hair: HairIcon, leg: LegIcon, arm: ArmIcon, finger: FingerIcon, toe: ToeIcon,
  run: RunIcon, walk: WalkIcon, jump: JumpIcon, swim: SwimIcon, sleep: SleepIcon, eat: EatIcon, drink: DrinkIcon,
  read: ReadIcon, write: WriteIcon, sing: SingIcon, dance: DanceIcon, play: PlayIcon, cook: CookIcon, clean: CleanIcon, wash: WashIcon,
  sunny: SunnyIcon, cloudy: CloudyIcon, rainy: RainyIcon, snowy: SnowyIcon, windy: WindyIcon, stormy: StormyIcon, rainbow: RainbowIcon,
  crayon: CrayonIcon, ruler: RulerIcon, eraser: EraserIcon, glue: GlueIcon, notebook: NotebookIcon, blackboard: BlackboardIcon, chalk: ChalkIcon, globe: GlobeIcon,
  ball: BallIcon, doll: DollIcon, teddy: TeddyBearIcon, blocks: BlocksIcon, kite: KiteIcon, puzzle: PuzzleIcon, robot: RobotIcon, drum: DrumIcon,
  one: OneIcon, two: TwoIcon, three: ThreeIcon, four: FourIcon, five: FiveIcon, six: SixIcon, seven: SevenIcon, eight: EightIcon, nine: NineIcon, ten: TenIcon, zero: ZeroIcon,
  red: RedColorIcon, blue: BlueColorIcon, yellow: YellowColorIcon, green: GreenColorIcon, orange: OrangeColorIcon,
  purple: PurpleColorIcon, pink: PinkColorIcon, brown: BrownColorIcon, black: BlackColorIcon, white: WhiteColorIcon, gray: GrayColorIcon,
  circle: CircleShapeIcon, square: SquareShapeIcon, triangle: TriangleShapeIcon, rectangle: RectangleShapeIcon, oval: OvalShapeIcon,
  diamond: DiamondShapeIcon, star: StarShapeIcon, heart: HeartShapeIcon, pentagon: PentagonShapeIcon, hexagon: HexagonShapeIcon,
  crescent: CrescentShapeIcon, cross: CrossShapeIcon, arrow: ArrowShapeIcon,
  soccer: SoccerIcon, basketball: BasketballIcon, tennis: TennisIcon, baseball: BaseballIcon,
  guitar: GuitarIcon, piano: PianoIcon, violin: ViolinIcon, trumpet: TrumpetIcon,
  castle: CastleIcon, lighthouse: LighthouseIcon, windmill: WindmillIcon, barn: BarnIcon,
  happy: HappyIcon, sad: SadIcon, angry: AngryIcon, surprised: SurprisedIcon, scared: ScaredIcon, sleepy: SleepyIcon,
};

const lucideIconMap: Record<string, LucideIcon> = {
  fish: Fish, cat: Cat, dog: Dog, bird: Bird, 
  rabbit: Rat, mouse: Rat, rat: Rat, bug: Bug, turtle: Turtle, snail: Snail,
  father: User, mother: User, dad: User, mom: User, parent: User,
  brother: User, sister: User, grandma: User, grandpa: User,
  girl: Baby, boy: Baby, man: User, woman: User, baby: Baby, child: Baby, kid: Baby,
  flower: Flower2, tree: Trees, sun: Sun, moon: Moon,
  leaf: Leaf, mountain: Mountain, cloud: Cloud, rain: Droplets, water: Droplets, fire: Flame,
  apple: Apple, banana: Banana, cherry: Cherry, grape: Grape,
  cookie: Cookie, cake: Cake, pizza: Pizza, icecream: IceCreamCone, milk: Milk,
  egg: Egg, carrot: Carrot,
  car: Car, bus: Bus, bike: Bike, plane: Plane, ship: Ship, train: Train, truck: Truck,
  book: Book, pencil: Pencil, pen: Pencil, house: Home, home: Home, umbrella: Umbrella,
  camera: Camera, music: Music, gift: Gift, clock: Clock, watch: Watch,
  key: Key, lock: Lock, bell: Bell, phone: Phone, shirt: Shirt,
  scissors: Scissors, brush: Brush, palette: Palette,
  trophy: Trophy, medal: Medal, gamepad: Gamepad2,
  tv: Tv, radio: Radio, laptop: Laptop, smartphone: Smartphone, tablet: Tablet, headphones: Headphones,
  wallet: Wallet, backpack: Backpack, briefcase: Briefcase, luggage: Luggage,
  chair: Armchair, sofa: Armchair, bed: Bed, lamp: Lamp, fan: Fan,
  fridge: Refrigerator, bath: Bath, toilet: Toilet,
  wrench: Wrench, hammer: Hammer, flashlight: Flashlight,
  battery: Battery, lightbulb: Lightbulb, plug: Plug, thermometer: Thermometer,
  foot: Footprints, hand: Hand, eye: Eye, ear: Ear, brain: Brain,
};

const findMatchingImage = (word: string, wordImages: WordImage[] = []): string | null => {
  if (!word || !wordImages || wordImages.length === 0) return null;
  const searchWord = word.toLowerCase().trim();
  for (const img of wordImages) {
    const imgWord = img.word.toLowerCase().trim();
    if (imgWord === searchWord || imgWord.includes(searchWord) || searchWord.includes(imgWord)) {
      return img.imageUrl;
    }
  }
  return null;
};

const WordIconOrImage = ({ word, size = 48, className = "", wordImages = [] }: { 
  word: string; size?: number; className?: string; wordImages?: WordImage[];
}) => {
  const str = word.toLowerCase().trim();
  const customImageUrl = findMatchingImage(word, wordImages);
  if (customImageUrl) {
    return <img src={customImageUrl} alt={word} style={{ width: size, height: size }} className={`object-contain ${className}`} />;
  }
  const CustomIconComponent = customIconMap[str];
  if (CustomIconComponent) return <CustomIconComponent size={size} className={className} />;
  const LucideIconComponent = lucideIconMap[str];
  if (LucideIconComponent) return <LucideIconComponent size={size} className={className} strokeWidth={1.5} />;
  return <ImageIcon size={size} className={`${className} text-gray-300`} strokeWidth={1} />;
};

export const CombinedWorksheet = ({
  colorData,
  countingData,
  fillBlankData,
  schoolLogo,
  schoolName = "",
  teacherName = "",
  className = "",
  wordImages = [],
}: CombinedWorksheetProps) => {
  const colorInstructions = colorData?.colorInstructions || [];
  const countingItems = countingData?.countingItems || [];
  const allFillBlankWords = fillBlankData?.fillBlankWords || [];
  const fillBlankWords = allFillBlankWords.filter(item => hasAvailableIcon(item.word, wordImages));

  const hasColoring = colorInstructions.length > 0;
  const hasCounting = countingItems.length > 0;
  const hasFillBlank = fillBlankWords.length > 0;

  if (!hasColoring && !hasCounting && !hasFillBlank) return null;

  let exerciseNumber = 1;

  return (
    <div data-worksheet-card className="bg-white rounded-lg p-1 print:shadow-none">
      {/* Header */}
      <div className="text-center mb-0.5">
        <div className="flex items-center justify-between">
          {schoolLogo ? (
            <img src={schoolLogo} alt="School logo" className="w-6 h-6 object-contain" />
          ) : (
            <div className="w-6 h-6" />
          )}
          <div className="flex-1 text-center">
            {schoolName && <p className="text-[9px] font-semibold text-gray-700">{schoolName}</p>}
            <p className="text-[8px] text-gray-500">
              Class: {className || "______"} | Teacher: {teacherName || "______"}
            </p>
          </div>
          <div className="w-6 h-6" />
        </div>
        <p className="text-[8px] text-gray-600">Name: __________ Date: ______</p>
      </div>

      {/* Coloring Section */}
      {hasColoring && (
        <div className="mb-1">
          <div className="flex items-center gap-1 mb-0.5">
            <span className="bg-gray-800 text-white text-[8px] font-bold px-1 py-0.5 rounded">Ex {exerciseNumber++}</span>
            <h3 className="font-display text-sm font-bold text-gray-800">Coloring</h3>
          </div>
          <div className="px-1 py-0.5 bg-gray-50 rounded text-[8px] mb-0.5">
            <div className="flex flex-wrap gap-x-2 justify-center">
              {colorInstructions.map((ins, idx) => (
                <span key={idx}><strong className="capitalize">{ins.item}</strong>→<strong className="uppercase">{ins.color}</strong></span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-0.5">
            {colorInstructions.slice(0, 8).map((ins, idx) => (
              <div key={idx} className="flex flex-col items-center p-0.5">
                <WordIconOrImage word={ins.item} size={60} className="text-gray-400" wordImages={wordImages} />
                <span className="text-[8px] text-gray-600 capitalize">{ins.item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Counting Section */}
      {hasCounting && (
        <div className="mb-1">
          <div className="flex items-center gap-1 mb-0.5">
            <span className="bg-gray-800 text-white text-[8px] font-bold px-1 py-0.5 rounded">Ex {exerciseNumber++}</span>
            <h3 className="font-display text-sm font-bold text-gray-800">Counting</h3>
          </div>
          <div className="space-y-1">
            {countingItems.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="flex flex-wrap gap-1 flex-1">
                  {Array.from({ length: Math.min(item.count, 10) }).map((_, i) => (
                    <WordIconOrImage key={i} word={item.item} size={36} className="text-gray-600" wordImages={wordImages} />
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-gray-700">= </span>
                  <div className="w-8 h-8 border-2 border-dashed border-gray-500 rounded flex items-center justify-center" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fill in the Blank Section */}
      {hasFillBlank && (
        <div>
          <div className="flex items-center gap-1 mb-0.5">
            <span className="bg-gray-800 text-white text-[8px] font-bold px-1 py-0.5 rounded">Ex {exerciseNumber++}</span>
            <h3 className="font-display text-sm font-bold text-gray-800">Fill in the Blank</h3>
          </div>
          <div className="grid grid-cols-4 gap-1">
            {fillBlankWords.slice(0, 8).map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-0.5">
                <WordIconOrImage word={item.word} size={50} className="text-gray-600" wordImages={wordImages} />
                <span className="text-lg font-bold tracking-wider font-trace">
                  {item.blankedWord.split('').map((char, i) => (
                    <span key={i} className={char === '_' ? 'inline-block w-4 border-b-2 border-gray-800 mx-0.5' : ''}>
                      {char !== '_' ? char : ''}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
