import { useState } from "react";
import { Sparkles, Download, RefreshCw, FileText, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUpload } from "@/components/FileUpload";
import { WorksheetTypeSelector, WorksheetType } from "@/components/WorksheetTypeSelector";
import { WorksheetPreview, WorksheetData } from "@/components/WorksheetPreview";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { exportToPDF, exportToWord } from "@/lib/exportWorksheet";

const Index = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [description, setDescription] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<WorksheetType[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [generatedWorksheets, setGeneratedWorksheets] = useState<WorksheetData[]>([]);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  // Clean input: remove punctuation, normalize spacing
  const cleanDescription = (text: string): string => {
    return text
      .split(/[\n,;]+/) // Split by newlines, commas, semicolons
      .map(word => word.replace(/[.,;:!?]+/g, '').trim()) // Remove punctuation
      .filter(word => word.length > 0) // Remove empty entries
      .join(', '); // Join with comma and space
  };

  const handleGenerate = async () => {
    if (selectedTypes.length === 0) {
      toast.error("Please select at least one worksheet type!");
      return;
    }
    if (!description && files.length === 0) {
      toast.error("Please enter a description or upload a file!");
      return;
    }
    setIsGenerating(true);
    try {
      let imageBase64: string | undefined;
      const imageFile = files.find(f => f.type.startsWith('image/'));
      if (imageFile) {
        imageBase64 = await fileToBase64(imageFile);
      }
      const cleanedDescription = cleanDescription(description) || "Fun learning activities";
      const { data, error } = await supabase.functions.invoke('generate-worksheet', {
        body: { description: cleanedDescription, worksheetTypes: selectedTypes, imageBase64 },
      });
      if (error) throw new Error(error.message);
      if (data?.worksheets) {
        setGeneratedWorksheets(data.worksheets);
        toast.success("Worksheets created successfully! 🎉");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again!");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      await exportToPDF(generatedWorksheets, 'worksheets-container');
      toast.success("PDF exported! 📄");
    } catch { toast.error("Error exporting PDF"); }
    finally { setIsExporting(false); }
  };

  const handleExportWord = async () => {
    setIsExporting(true);
    try {
      await exportToWord(generatedWorksheets);
      toast.success("Word file exported! 📝");
    } catch { toast.error("Error exporting Word"); }
    finally { setIsExporting(false); }
  };

  return (
    <div className="min-h-screen gradient-hero">
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-soft animate-wiggle">
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">KidsSheet</h1>
            <p className="text-sm text-muted-foreground">AI Worksheet Generator</p>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
          Create Worksheets for Kids
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          Upload an image or describe content - Generate tracing, coloring, and odd one out worksheets
        </p>
      </section>

      <main className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card variant="playful"><CardHeader><CardTitle className="flex items-center gap-2"><FileText className="w-5 h-5 text-primary" />Upload Files</CardTitle></CardHeader><CardContent><FileUpload onFilesChange={setFiles} /></CardContent></Card>
            <Card variant="playful"><CardHeader><CardTitle className="flex items-center gap-2"><Wand2 className="w-5 h-5 text-secondary" />Describe Content</CardTitle></CardHeader><CardContent><textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Example: Fish, Father, Goat, Girl..." className="w-full h-32 p-4 rounded-2xl border-2 border-border bg-card text-foreground focus:border-primary outline-none resize-none" /></CardContent></Card>
            <Card variant="playful"><CardHeader><CardTitle>Choose Worksheet Type</CardTitle></CardHeader><CardContent><WorksheetTypeSelector selected={selectedTypes} onChange={setSelectedTypes} /></CardContent></Card>
            <Button variant="accent" size="xl" className="w-full" onClick={handleGenerate} disabled={isGenerating}>
              {isGenerating ? <><RefreshCw className="w-5 h-5 animate-spin" />Generating...</> : <><Sparkles className="w-5 h-5" />Generate Worksheet</>}
            </Button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">Preview</h3>
              {generatedWorksheets.length > 0 && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleExportPDF} disabled={isExporting}><Download className="w-4 h-4" />PDF</Button>
                  <Button variant="outline" size="sm" onClick={handleExportWord} disabled={isExporting}><Download className="w-4 h-4" />Word</Button>
                </div>
              )}
            </div>
            <div id="worksheets-container">
              {generatedWorksheets.length > 0 ? (
                <div className="space-y-6">{generatedWorksheets.map((w, i) => <div key={i} data-worksheet-card><WorksheetPreview data={w} /></div>)}</div>
              ) : (
                <Card variant="elevated" className="min-h-[400px] flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center"><FileText className="w-12 h-12 text-muted-foreground" /></div>
                    <p className="font-display text-lg font-semibold mt-4">No worksheets yet</p>
                    <p className="text-sm text-muted-foreground mt-1">Enter a description to generate content</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-border bg-card/50 py-6"><p className="text-center text-sm text-muted-foreground">Made with 💖 for preschool teachers</p></footer>
    </div>
  );
};

export default Index;
