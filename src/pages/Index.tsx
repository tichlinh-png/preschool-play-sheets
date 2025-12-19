import { useState } from "react";
import { Sparkles, Download, RefreshCw, FileText, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUpload } from "@/components/FileUpload";
import { WorksheetTypeSelector, WorksheetType } from "@/components/WorksheetTypeSelector";
import { WorksheetPreview, WorksheetData } from "@/components/WorksheetPreview";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [description, setDescription] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<WorksheetType[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedWorksheets, setGeneratedWorksheets] = useState<WorksheetData[]>([]);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleGenerate = async () => {
    if (selectedTypes.length === 0) {
      toast.error("Vui lòng chọn ít nhất một loại worksheet!");
      return;
    }

    if (!description && files.length === 0) {
      toast.error("Vui lòng nhập mô tả hoặc upload file!");
      return;
    }

    setIsGenerating(true);
    
    try {
      let imageBase64: string | undefined;
      
      // Convert first image to base64 if available
      const imageFile = files.find(f => f.type.startsWith('image/'));
      if (imageFile) {
        imageBase64 = await fileToBase64(imageFile);
      }

      const { data, error } = await supabase.functions.invoke('generate-worksheet', {
        body: {
          description: description || "Fun learning activities for preschool children",
          worksheetTypes: selectedTypes,
          imageBase64,
        },
      });

      if (error) {
        console.error('Edge function error:', error);
        throw new Error(error.message || 'Failed to generate worksheets');
      }

      if (data?.worksheets) {
        setGeneratedWorksheets(data.worksheets);
        toast.success("Tạo worksheet thành công! 🎉");
      } else {
        throw new Error('No worksheets returned');
      }
    } catch (error) {
      console.error('Generation error:', error);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    toast.success("Tính năng tải xuống sẽ sớm được cập nhật!");
  };

  return (
    <div className="min-h-screen gradient-hero">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-soft animate-wiggle">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">
                KidsSheet
              </h1>
              <p className="text-sm text-muted-foreground">
                AI Worksheet Generator
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Tạo worksheet tiếng Anh
            <span className="gradient-primary bg-clip-text text-transparent"> bằng AI </span>
            cho bé yêu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload ảnh, PDF hoặc mô tả chủ đề - AI sẽ tự động tạo worksheet 
            với hình ảnh và từ vựng phù hợp cho trẻ mầm non.
          </p>
        </div>

        {/* Floating decorations */}
        <div className="relative h-8">
          <div className="absolute left-1/4 top-0 w-8 h-8 rounded-full bg-coral/30 animate-float" />
          <div className="absolute right-1/4 top-4 w-6 h-6 rounded-full bg-lavender/40 animate-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute left-1/3 top-2 w-4 h-4 rounded-full bg-mint/50 animate-float" style={{ animationDelay: "1s" }} />
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Section */}
          <div className="space-y-6">
            {/* File Upload */}
            <Card variant="playful" className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <FileText className="w-5 h-5 text-primary" />
                  Upload tài liệu (tùy chọn)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FileUpload onFilesChange={setFiles} />
                <p className="text-xs text-muted-foreground mt-2">
                  AI sẽ phân tích ảnh để tạo worksheet phù hợp
                </p>
              </CardContent>
            </Card>

            {/* Description */}
            <Card variant="playful" className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Wand2 className="w-5 h-5 text-secondary" />
                  Mô tả nội dung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Ví dụ: Chữ cái A với hình con Apple, Animal, Ant..."
                  className="w-full h-32 p-4 rounded-2xl border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none font-body"
                />
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Chữ cái ABC", "Con vật", "Trái cây", "Màu sắc", "Số đếm"].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setDescription((prev) => prev ? `${prev}, ${tag}` : tag)}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      + {tag}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Worksheet Type */}
            <Card variant="playful" className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="text-foreground">Chọn loại worksheet</CardTitle>
              </CardHeader>
              <CardContent>
                <WorksheetTypeSelector
                  selected={selectedTypes}
                  onChange={setSelectedTypes}
                />
              </CardContent>
            </Card>

            {/* Generate Button */}
            <Button
              variant="accent"
              size="xl"
              className="w-full"
              onClick={handleGenerate}
              disabled={isGenerating}
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  AI đang tạo worksheet...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Tạo Worksheet bằng AI
                </>
              )}
            </Button>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-foreground">
                Preview Worksheet
              </h3>
              {generatedWorksheets.length > 0 && (
                <Button variant="outline" size="sm" onClick={handleDownload}>
                  <Download className="w-4 h-4" />
                  Tải xuống
                </Button>
              )}
            </div>

            {generatedWorksheets.length > 0 ? (
              <div className="space-y-6">
                {generatedWorksheets.map((worksheet, index) => (
                  <div key={index} className="animate-scale-in">
                    <WorksheetPreview data={worksheet} />
                  </div>
                ))}
              </div>
            ) : (
              <Card variant="elevated" className="min-h-[400px] flex items-center justify-center">
                <CardContent className="text-center space-y-4 py-12">
                  <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
                    <FileText className="w-12 h-12 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-foreground">
                      Chưa có worksheet
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Nhập mô tả và chọn loại worksheet để AI tạo nội dung
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            Made with 💖 for preschool teachers & parents • Powered by AI
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
