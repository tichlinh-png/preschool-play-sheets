import { cn } from "@/lib/utils";
import { Pencil, Palette, Hash, Link2, CircleDot, LucideIcon } from "lucide-react";

export type WorksheetType = "trace" | "color" | "counting" | "matching" | "fill-blank";

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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {typeOptions.map((option) => {
        const isSelected = selected.includes(option.id);
        const Icon = option.icon;

        return (
          <button
            key={option.id}
            onClick={() => toggleType(option.id)}
            className={cn(
              "relative p-3 rounded-xl border-2 transition-all duration-300 text-left group",
              option.bgColor,
              isSelected && "ring-2 ring-offset-1 ring-offset-background scale-[1.02]",
              isSelected ? `ring-current ${option.color}` : "border-transparent"
            )}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300",
                  isSelected ? "scale-110" : "group-hover:scale-105",
                  option.color,
                  option.bgColor.replace("bg-", "bg-").replace("/10", "/20")
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className={cn("font-display font-semibold text-sm leading-tight", option.color)}>
                  {option.label}
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                  {option.description}
                </p>
              </div>
            </div>
            {isSelected && (
              <div className="absolute top-2 right-2 w-5 h-5 rounded-full gradient-primary flex items-center justify-center">
                <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
