import { WorksheetType } from "./WorksheetTypeSelector";
import { cn } from "@/lib/utils";

interface WorksheetPreviewProps {
  type: WorksheetType;
  topic?: string;
}

export const WorksheetPreview = ({ type, topic = "Apple" }: WorksheetPreviewProps) => {
  if (type === "trace") {
    return (
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <h3 className="font-display text-xl font-bold text-center mb-6 text-foreground">
          ✏️ Trace the Letter
        </h3>
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-8xl font-display font-bold text-primary/20 tracking-widest"
              style={{ 
                textShadow: "2px 2px 0 hsl(var(--primary) / 0.1)",
                WebkitTextStroke: "3px hsl(var(--primary) / 0.3)"
              }}>
              A
            </span>
          </div>
          <div className="flex justify-center gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-16 h-16 border-2 border-dashed border-muted-foreground/30 rounded-xl flex items-center justify-center"
              >
                <span className="text-3xl font-display text-muted-foreground/20">A</span>
              </div>
            ))}
          </div>
          <div className="h-20 border-b-4 border-dashed border-primary/30 relative">
            <div className="absolute -top-2 left-4 text-xs text-muted-foreground">
              Practice writing here...
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "color") {
    return (
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <h3 className="font-display text-xl font-bold text-center mb-6 text-foreground">
          🎨 Color the {topic}
        </h3>
        <div className="flex justify-center">
          <svg viewBox="0 0 200 200" className="w-48 h-48">
            <circle cx="100" cy="80" r="60" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <path d="M100 20 Q110 10 115 15 Q120 20 115 25" fill="none" stroke="hsl(var(--foreground))" strokeWidth="2" />
            <ellipse cx="100" cy="90" rx="8" ry="5" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1.5" />
            <path d="M70 160 Q100 180 130 160" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1" strokeDasharray="4" />
          </svg>
        </div>
        <div className="flex justify-center gap-3 mt-6">
          {["#FF6B6B", "#4ECDC4", "#FFE66D", "#95E1D3", "#F38181"].map((color) => (
            <div
              key={color}
              className="w-8 h-8 rounded-full border-2 border-foreground/20 shadow-soft"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (type === "oddOneOut") {
    return (
      <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
        <h3 className="font-display text-xl font-bold text-center mb-6 text-foreground">
          🔍 Find the Odd One Out
        </h3>
        <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={cn(
                "aspect-square rounded-2xl border-2 border-border flex items-center justify-center text-4xl",
                "hover:border-primary hover:shadow-soft transition-all cursor-pointer",
                i === 3 ? "bg-sunshine/20" : "bg-muted"
              )}
            >
              {i === 3 ? "🍌" : "🍎"}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          Circle the one that is different!
        </p>
      </div>
    );
  }

  return null;
};
