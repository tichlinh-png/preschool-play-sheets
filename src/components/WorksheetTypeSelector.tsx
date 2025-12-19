import { cn } from "@/lib/utils";
import { Pencil, Palette, Hash, Link2, CircleDot, Shapes, Circle, LayoutList, LucideIcon } from "lucide-react";

export type WorksheetType = "trace" | "color" | "counting" | "matching" | "fill-blank" | "odd-one-out" | "circle-correct" | "pattern";

interface WorksheetTypeSelectorProps {
  selected: WorksheetType[];
  onChange: (types: WorksheetType[]) => void;
}

interface TypeOption {
  id: WorksheetType;
  label: string;
  icon: LucideIcon;
  description: string;
  color: string;
  bgColor: string;
}

const typeOptions: TypeOption[] = [
  {
    id: "trace",
    label: "Trace Words",
    icon: Pencil,
    description: "Practice tracing dotted letters",
    color: "text-primary",
    bgColor: "bg-primary/10 hover:bg-primary/20 border-primary/30",
  },
  {
    id: "color",
    label: "Coloring",
    icon: Palette,
    description: "Follow coloring instructions",
    color: "text-coral",
    bgColor: "bg-coral/10 hover:bg-coral/20 border-coral/30",
  },
  {
    id: "counting",
    label: "Counting",
    icon: Hash,
    description: "Count objects and write numbers",
    color: "text-lavender",
    bgColor: "bg-lavender/10 hover:bg-lavender/20 border-lavender/30",
  },
  {
    id: "matching",
    label: "Matching",
    icon: Link2,
    description: "Match pictures to words",
    color: "text-mint",
    bgColor: "bg-mint/10 hover:bg-mint/20 border-mint/30",
  },
  {
    id: "fill-blank",
    label: "Fill in the Blank",
    icon: CircleDot,
    description: "Complete words with missing letters",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10 hover:bg-amber-500/20 border-amber-500/30",
  },
  {
    id: "odd-one-out",
    label: "Odd One Out",
    icon: Shapes,
    description: "Find the different item in group",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10 hover:bg-rose-500/20 border-rose-500/30",
  },
  {
    id: "circle-correct",
    label: "Circle Correct",
    icon: Circle,
    description: "Circle the correct answer",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/30",
  },
  {
    id: "pattern",
    label: "Pattern",
    icon: LayoutList,
    description: "Complete the pattern sequence",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10 hover:bg-violet-500/20 border-violet-500/30",
  },
];

export const WorksheetTypeSelector = ({
  selected,
  onChange,
}: WorksheetTypeSelectorProps) => {
  const toggleType = (type: WorksheetType) => {
    if (selected.includes(type)) {
      onChange(selected.filter((t) => t !== type));
    } else {
      onChange([...selected, type]);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {typeOptions.map((option) => {
        const isSelected = selected.includes(option.id);
        const Icon = option.icon;

        return (
          <button
            key={option.id}
            onClick={() => toggleType(option.id)}
            className={cn(
              "relative p-5 rounded-2xl border-2 transition-all duration-300 text-left group",
              option.bgColor,
              isSelected && "ring-2 ring-offset-2 ring-offset-background scale-[1.02]",
              isSelected ? `ring-current ${option.color}` : "border-transparent"
            )}
          >
            <div className="flex items-start gap-4">
              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300",
                  isSelected ? "scale-110" : "group-hover:scale-105",
                  option.color,
                  option.bgColor.replace("bg-", "bg-").replace("/10", "/20")
                )}
              >
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className={cn("font-display font-bold text-lg", option.color)}>
                  {option.label}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {option.description}
                </p>
              </div>
            </div>
            {isSelected && (
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full gradient-primary flex items-center justify-center">
                <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};
