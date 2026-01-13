import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { WorksheetPreview, WorksheetData } from "@/components/WorksheetPreview";
import { Download, Printer, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface WordImage {
  word: string;
  imageUrl: string;
}

interface PrintPreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  worksheets: WorksheetData[];
  schoolLogo: string | null;
  schoolName: string;
  teacherName: string;
  className: string;
  wordImages: WordImage[];
  onExportPDF: () => void;
  onPrint: () => void;
  isExporting?: boolean;
}

export const PrintPreviewDialog = ({
  open,
  onOpenChange,
  worksheets,
  schoolLogo,
  schoolName,
  teacherName,
  className,
  wordImages,
  onExportPDF,
  onPrint,
  isExporting = false,
}: PrintPreviewDialogProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = worksheets.length;

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  if (worksheets.length === 0) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] flex flex-col p-0 gap-0">
        <DialogHeader className="px-4 py-3 border-b flex-shrink-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-bold">
              Xem trước bản in
            </DialogTitle>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onPrint}
                className="gap-1"
              >
                <Printer className="w-4 h-4" />
                In
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={onExportPDF}
                disabled={isExporting}
                className="gap-1"
              >
                <Download className="w-4 h-4" />
                PDF
              </Button>
            </div>
          </div>
        </DialogHeader>

        {/* Page navigation */}
        <div className="flex items-center justify-center gap-4 py-2 border-b bg-muted/50 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm font-medium">
            Trang {currentPage + 1} / {totalPages}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Preview area - simulates A4 page */}
        <div className="flex-1 overflow-auto bg-gray-200 p-4">
          <div
            className="mx-auto bg-white shadow-lg"
            style={{
              width: "210mm",
              minHeight: "297mm",
              maxWidth: "100%",
              aspectRatio: "210/297",
              padding: "5mm",
              boxSizing: "border-box",
            }}
          >
            <div className="w-full h-full flex flex-col">
              <WorksheetPreview
                data={worksheets[currentPage]}
                schoolLogo={schoolLogo}
                schoolName={schoolName}
                teacherName={teacherName}
                className={className}
                wordImages={wordImages}
              />
            </div>
          </div>
        </div>

        {/* Thumbnail navigation */}
        {totalPages > 1 && (
          <div className="flex-shrink-0 border-t bg-muted/30 p-3 overflow-x-auto">
            <div className="flex gap-2 justify-center min-w-max">
              {worksheets.map((worksheet, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`relative flex-shrink-0 w-16 h-20 bg-white border-2 rounded shadow-sm overflow-hidden transition-all hover:border-primary ${
                    currentPage === idx
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-gray-300"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-500">
                      {idx + 1}
                    </span>
                  </div>
                  {currentPage === idx && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
