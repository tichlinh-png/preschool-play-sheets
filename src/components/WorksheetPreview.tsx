import { WorksheetType } from "./WorksheetTypeSelector";
import { cn } from "@/lib/utils";

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

export const WorksheetPreview = ({ data, type, topic = "Apple" }: WorksheetPreviewProps) => {
  const worksheetType = data?.type || type;
  const worksheetTopic = data?.topic || topic;

  if (worksheetType === "trace") {
    const letters = data?.letters || ["A"];
    const words = data?.words || ["Apple"];
    
    return (
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <h3 className="font-display text-xl font-bold text-center mb-2 text-foreground">
          ✏️ Trace the Letter
        </h3>
        <p className="text-center text-sm text-muted-foreground mb-6">
          {data?.instructions || `Learn about: ${worksheetTopic}`}
        </p>
        <div className="space-y-6">
          {letters.map((letter, idx) => (
            <div key={idx} className="space-y-4">
              <div className="text-center">
                <span 
                  className="text-8xl font-display font-bold text-primary/20 tracking-widest"
                  style={{ 
                    WebkitTextStroke: "3px hsl(var(--primary) / 0.4)"
                  }}
                >
                  {letter}
                </span>
              </div>
              <div className="flex justify-center gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-14 h-14 border-2 border-dashed border-muted-foreground/30 rounded-xl flex items-center justify-center"
                  >
                    <span className="text-2xl font-display text-muted-foreground/20">{letter}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {words && words.length > 0 && (
            <div className="mt-4 p-4 bg-muted/50 rounded-xl">
              <p className="text-center text-sm font-medium text-foreground">
                Words: <span className="text-primary">{words.join(", ")}</span>
              </p>
            </div>
          )}
          <div className="h-16 border-b-4 border-dashed border-primary/30 relative mt-6">
            <div className="absolute -top-2 left-4 text-xs text-muted-foreground">
              Practice writing here...
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (worksheetType === "color") {
    const images = data?.images || ["apple"];
    const words = data?.words || ["red", "green", "yellow"];
    
    return (
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <h3 className="font-display text-xl font-bold text-center mb-2 text-foreground">
          🎨 Color the {worksheetTopic}
        </h3>
        <p className="text-center text-sm text-muted-foreground mb-6">
          {data?.instructions || "Color with your favorite colors!"}
        </p>
        <div className="flex justify-center">
          <div className="w-48 h-48 border-2 border-foreground/20 rounded-2xl flex items-center justify-center bg-muted/30">
            <span className="text-6xl">
              {getEmoji(images[0])}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {words.map((color, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{ backgroundColor: getColorHex(color), color: '#fff' }}
            >
              {color}
            </span>
          ))}
        </div>
        {images.length > 1 && (
          <div className="grid grid-cols-3 gap-3 mt-4">
            {images.slice(1).map((img, idx) => (
              <div key={idx} className="aspect-square border-2 border-dashed border-muted-foreground/30 rounded-xl flex items-center justify-center">
                <span className="text-3xl">{getEmoji(img)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (worksheetType === "oddOneOut") {
    const images = data?.images || ["🍎", "🍎", "🍎", "🍌"];
    const oddItem = data?.oddItem;
    
    return (
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <h3 className="font-display text-xl font-bold text-center mb-2 text-foreground">
          🔍 Find the Odd One Out
        </h3>
        <p className="text-center text-sm text-muted-foreground mb-6">
          {data?.instructions || `Topic: ${worksheetTopic}`}
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
          {images.map((img, i) => (
            <div
              key={i}
              className={cn(
                "aspect-square rounded-2xl border-2 border-border flex items-center justify-center text-4xl",
                "hover:border-primary hover:shadow-soft transition-all cursor-pointer",
                "bg-muted"
              )}
            >
              {typeof img === 'string' && img.match(/\p{Emoji}/u) ? img : getEmoji(img)}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Circle the one that is different!
        </p>
        {oddItem && (
          <p className="text-center text-xs text-primary mt-2 opacity-50">
            (Answer: {oddItem})
          </p>
        )}
      </div>
    );
  }

  return null;
};

function getEmoji(word: string): string {
  const emojiMap: Record<string, string> = {
    apple: "🍎",
    banana: "🍌",
    orange: "🍊",
    grape: "🍇",
    strawberry: "🍓",
    cat: "🐱",
    dog: "🐶",
    bird: "🐦",
    fish: "🐟",
    sun: "☀️",
    moon: "🌙",
    star: "⭐",
    tree: "🌳",
    flower: "🌸",
    car: "🚗",
    bus: "🚌",
    ball: "⚽",
    book: "📚",
    pencil: "✏️",
    house: "🏠",
  };
  return emojiMap[word.toLowerCase()] || "📷";
}

function getColorHex(color: string): string {
  const colorMap: Record<string, string> = {
    red: "#FF6B6B",
    blue: "#4ECDC4",
    yellow: "#FFE66D",
    green: "#95E1D3",
    pink: "#F38181",
    orange: "#FFA502",
    purple: "#A855F7",
    brown: "#8B4513",
    black: "#1A1A1A",
    white: "#F5F5F5",
  };
  return colorMap[color.toLowerCase()] || "#888888";
}
