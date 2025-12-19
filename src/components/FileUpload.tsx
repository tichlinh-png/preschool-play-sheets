import { useCallback, useState } from "react";
import { Upload, FileText, Image, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFilesChange: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
}

export const FileUpload = ({
  onFilesChange,
  accept = ".pdf,image/*",
  multiple = true,
  maxFiles = 5,
}: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const droppedFiles = Array.from(e.dataTransfer.files).slice(0, maxFiles);
      setFiles(droppedFiles);
      onFilesChange(droppedFiles);
    },
    [maxFiles, onFilesChange]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const selectedFiles = Array.from(e.target.files).slice(0, maxFiles);
        setFiles(selectedFiles);
        onFilesChange(selectedFiles);
      }
    },
    [maxFiles, onFilesChange]
  );

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onFilesChange(newFiles);
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) return <Image className="w-5 h-5 text-sky" />;
    if (file.type === "application/pdf") return <FileText className="w-5 h-5 text-coral" />;
    return <FileText className="w-5 h-5 text-muted-foreground" />;
  };

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        className={cn(
          "relative border-3 border-dashed rounded-3xl p-8 transition-all duration-300 cursor-pointer",
          "hover:border-primary hover:bg-primary/5",
          isDragging
            ? "border-primary bg-primary/10 scale-[1.02]"
            : "border-muted-foreground/30 bg-muted/30"
        )}
      >
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInput}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center animate-bounce-soft">
            <Upload className="w-8 h-8 text-primary-foreground" />
          </div>
          <div>
            <p className="text-lg font-display font-semibold text-foreground">
              Kéo thả file vào đây
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              hoặc click để chọn file (PDF, ảnh)
            </p>
          </div>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border shadow-soft animate-fade-in"
            >
              {getFileIcon(file)}
              <span className="flex-1 text-sm font-medium truncate">{file.name}</span>
              <span className="text-xs text-muted-foreground">
                {(file.size / 1024).toFixed(1)} KB
              </span>
              <button
                onClick={() => removeFile(index)}
                className="p-1 rounded-full hover:bg-destructive/10 text-destructive transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
