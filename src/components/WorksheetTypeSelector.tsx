import { cn } from "@/lib/utils";
import { Pencil, Palette, HelpCircle, LucideIcon } from "lucide-react";

export type WorksheetType = "trace" | "color" | "oddOneOut";

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
    label: "Trace chữ",
    icon: Pencil,
    description: "Tập viết chữ theo nét chấm",
    color: "text-primary",
    bgColor: "bg-primary/10 hover:bg-primary/20 border-primary/30",
  },
  {
    id: "color",
    label: "Tô màu",
    icon: Palette,
    description: "Tô màu hình ảnh đơn giản",
    color: "text-coral",
    bgColor: "bg-coral/10 hover:bg-coral/20 border-coral/30",
  },
  {
    id: "oddOneOut",
    label: "Odd One Out",
    icon: HelpCircle,
    description: "Tìm hình khác biệt",
    color: "text-lavender",
    bgColor: "bg-lavender/10 hover:bg-lavender/20 border-lavender/30",
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
