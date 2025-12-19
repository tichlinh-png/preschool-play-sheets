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

// Helper to safely convert to string
function safeString(value: unknown): string {
  if (typeof value === 'string') return value;
  if (value === null || value === undefined) return '';
  return String(value);
}

function getEmoji(word: unknown): string {
  const str = safeString(word).toLowerCase();
  if (!str) return "📷";
  
  const emojiMap: Record<string, string> = {
    apple: "🍎", banana: "🍌", orange: "🍊", grape: "🍇", strawberry: "🍓",
    cat: "🐱", dog: "🐶", bird: "🐦", fish: "🐟", rabbit: "🐰", lion: "🦁",
    sun: "☀️", moon: "🌙", star: "⭐", tree: "🌳", flower: "🌸",
    car: "🚗", bus: "🚌", ball: "⚽", book: "📚", pencil: "✏️", house: "🏠",
  };
  return emojiMap[str] || str.match(/\p{Emoji}/u) ? str : "📷";
}

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
              {/* Word with emoji */}
              <div className="flex items-center gap-3 justify-center">
                <span className="text-4xl">{getEmoji(word)}</span>
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
            <span className="text-6xl">{getEmoji(images[0])}</span>
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
                <span className="text-3xl">{getEmoji(img)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (worksheetType === "oddOneOut") {
    const images = (data?.images || ["🍎", "🍎", "🍎", "🍌"]).map(safeString).filter(Boolean);
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
              "aspect-square rounded-2xl border-2 border-border flex items-center justify-center text-4xl",
              "hover:border-primary hover:shadow-soft transition-all cursor-pointer bg-muted"
            )}>
              {img.match(/\p{Emoji}/u) ? img : getEmoji(img)}
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
