import { useState, useEffect, useMemo } from "react";
import { Sparkles, Download, RefreshCw, FileText, Wand2, Printer, Image, User, School, Users, MessageCircle } from "lucide-react";
import signatureImage from "@/assets/signature.png";
import { useVisitorCount } from "@/hooks/useVisitorCount";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileUpload } from "@/components/FileUpload";
import { WorksheetTypeSelector, WorksheetType } from "@/components/WorksheetTypeSelector";
import { WorksheetPreview, WorksheetData } from "@/components/WorksheetPreview";
import { LogoUpload } from "@/components/LogoUpload";
import { WordImageUpload } from "@/components/WordImageUpload";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { exportToPDF, exportToWord, printWorksheets } from "@/lib/exportWorksheet";

interface WordImage {
  word: string;
  imageUrl: string;
}

const Index = () => {
  const visitorCount = useVisitorCount();
  const [files, setFiles] = useState<File[]>([]);
  const [description, setDescription] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<WorksheetType[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [generatedWorksheets, setGeneratedWorksheets] = useState<WorksheetData[]>([]);
  const [schoolLogo, setSchoolLogo] = useState<string | null>(null);
  const [teacherName, setTeacherName] = useState("");
  const [className, setClassName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [wordImages, setWordImages] = useState<WordImage[]>([]);

  // Load saved teacher/class/school from localStorage
  useEffect(() => {
    const savedTeacher = localStorage.getItem('kidssheet_teacher');
    const savedClass = localStorage.getItem('kidssheet_class');
    const savedSchool = localStorage.getItem('kidssheet_school');
    if (savedTeacher) setTeacherName(savedTeacher);
    if (savedClass) setClassName(savedClass);
    if (savedSchool) setSchoolName(savedSchool);
  }, []);

  // Save teacher/class/school to localStorage
  useEffect(() => {
    localStorage.setItem('kidssheet_teacher', teacherName);
  }, [teacherName]);

  useEffect(() => {
    localStorage.setItem('kidssheet_class', className);
  }, [className]);

  useEffect(() => {
    localStorage.setItem('kidssheet_school', schoolName);
  }, [schoolName]);

  // Parse words from description
  const parsedWords = useMemo(() => {
    return description
      .split(/[\n,;]+/)
      .map(word => word.replace(/[.,;:!?]+/g, '').trim())
      .filter(word => word.length > 0);
  }, [description]);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const cleanDescription = (text: string): string => {
    return text
      .split(/[\n,;]+/)
      .map(word => word.replace(/[.,;:!?]+/g, '').trim())
      .filter(word => word.length > 0)
      .join(', ');
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
        
        // Show notification about skipped words if any
        if (data.skippedWords && data.skippedWords.length > 0) {
          toast.warning(
            `Đã bỏ qua ${data.skippedWords.length} từ không có icon: ${data.skippedWords.join(', ')}`,
            { duration: 6000 }
          );
        }
        
        toast.success("Worksheets created successfully!");
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
      toast.success("PDF exported!");
    } catch { toast.error("Error exporting PDF"); }
    finally { setIsExporting(false); }
  };

  const handleExportWord = async () => {
    setIsExporting(true);
    try {
      await exportToWord(generatedWorksheets, 'worksheets-container');
      toast.success("Word file exported!");
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
          Upload an image or describe content - Generate tracing, coloring, counting and matching worksheets
        </p>
      </section>

      <main className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            {/* Teacher & Class Info */}
            <Card variant="playful">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Teacher & Class Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="school">School Name</Label>
                  <Input
                    id="school"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="Trường Mầm Non ABC"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="teacher">Teacher Name</Label>
                    <Input
                      id="teacher"
                      value={teacherName}
                      onChange={(e) => setTeacherName(e.target.value)}
                      placeholder="Ms. Nguyen"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class">Class Name</Label>
                    <Input
                      id="class"
                      value={className}
                      onChange={(e) => setClassName(e.target.value)}
                      placeholder="Sunflower"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* School Logo */}
            <Card variant="playful">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <School className="w-5 h-5 text-primary" />
                  School Logo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <LogoUpload onLogoChange={setSchoolLogo} />
              </CardContent>
            </Card>

            {/* Describe Content */}
            <Card variant="playful">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5 text-secondary" />
                  Describe Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Example: Fish, Father, Goat, Girl..."
                  className="w-full h-24 p-4 rounded-2xl border-2 border-border bg-card text-foreground focus:border-primary outline-none resize-none"
                />
              </CardContent>
            </Card>

            {/* Word Images Upload */}
            <Card variant="playful">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Image className="w-5 h-5 text-primary" />
                  Word Images
                </CardTitle>
              </CardHeader>
              <CardContent>
                <WordImageUpload words={parsedWords} onImagesChange={setWordImages} />
              </CardContent>
            </Card>

            {/* Worksheet Type */}
            <Card variant="playful">
              <CardHeader>
                <CardTitle>Choose Worksheet Type</CardTitle>
              </CardHeader>
              <CardContent>
                <WorksheetTypeSelector selected={selectedTypes} onChange={setSelectedTypes} />
              </CardContent>
            </Card>

            <Button variant="accent" size="xl" className="w-full" onClick={handleGenerate} disabled={isGenerating}>
              {isGenerating ? <><RefreshCw className="w-5 h-5 animate-spin" />Generating...</> : <><Sparkles className="w-5 h-5" />Generate Worksheet</>}
            </Button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold">Preview</h3>
              {generatedWorksheets.length > 0 && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={printWorksheets}><Printer className="w-4 h-4" />Print</Button>
                  <Button variant="outline" size="sm" onClick={handleExportPDF} disabled={isExporting}><Download className="w-4 h-4" />PDF</Button>
                  <Button variant="outline" size="sm" onClick={handleExportWord} disabled={isExporting}><Download className="w-4 h-4" />Word</Button>
                </div>
              )}
            </div>
            <div id="worksheets-container">
              {generatedWorksheets.length > 0 ? (
                <div className="space-y-6">
                  {generatedWorksheets.map((w, i) => (
                    <div key={i} data-worksheet-card>
                      <WorksheetPreview
                        data={w}
                        schoolLogo={schoolLogo}
                        schoolName={schoolName}
                        teacherName={teacherName}
                        className={className}
                        wordImages={wordImages}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <Card variant="elevated" className="min-h-[400px] flex items-center justify-center">
                  <CardContent className="text-center py-12">
                    <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center">
                      <FileText className="w-12 h-12 text-muted-foreground" />
                    </div>
                    <p className="font-display text-lg font-semibold mt-4">No worksheets yet</p>
                    <p className="text-sm text-muted-foreground mt-1">Enter a description to generate content</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-border bg-card/50 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">Made with love for preschool teachers</p>
            
            <div className="flex items-center gap-6">
              {/* Visitor count */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-primary" />
                <span>{visitorCount} đang online</span>
              </div>
              
              {/* Contact */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://zalo.me/0862936906" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Zalo</span>
                </a>
                <a 
                  href="https://www.facebook.com/linhyookie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
              
              {/* Signature */}
              <img 
                src={signatureImage} 
                alt="Caitlin signature" 
                className="h-12 w-auto brightness-75 contrast-125"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
