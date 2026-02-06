import { useState, useRef, useEffect } from 'react';
import { X, Image, Clipboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface WordImage {
  word: string;
  imageUrl: string;
}

interface WordImageUploadProps {
  words: string[];
  onImagesChange: (images: WordImage[]) => void;
}

const STORAGE_KEY = 'kidssheet_word_images';

// Load saved images from localStorage
const loadSavedImages = (): WordImage[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

// Save images to localStorage
const saveImagesToStorage = (images: WordImage[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
  } catch (e) {
    console.warn('Could not save images to localStorage:', e);
  }
};

export const WordImageUpload = ({ words, onImagesChange }: WordImageUploadProps) => {
  const [wordImages, setWordImages] = useState<WordImage[]>(() => loadSavedImages());
  const [activeWord, setActiveWord] = useState<string | null>(null);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  // On mount, notify parent of any saved images
  useEffect(() => {
    const saved = loadSavedImages();
    if (saved.length > 0) {
      onImagesChange(saved);
    }
  }, []);

  const processImage = (word: string, file: File | Blob) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const newImages = wordImages.filter(img => img.word.toLowerCase() !== word.toLowerCase());
        newImages.push({ word: word.toLowerCase(), imageUrl: result });
        setWordImages(newImages);
        saveImagesToStorage(newImages);
        onImagesChange(newImages);
        toast.success(`Đã thêm ảnh cho "${word}"`);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (word: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImage(word, file);
    }
  };

  const handlePaste = async (word: string) => {
    try {
      const clipboardItems = await navigator.clipboard.read();
      for (const item of clipboardItems) {
        const imageType = item.types.find(type => type.startsWith('image/'));
        if (imageType) {
          const blob = await item.getType(imageType);
          processImage(word, blob);
          return;
        }
      }
      toast.error('Không tìm thấy ảnh trong clipboard');
    } catch (err) {
      toast.error('Không thể đọc clipboard. Hãy thử upload file.');
    }
  };

  const handleRemove = (word: string) => {
    const newImages = wordImages.filter(img => img.word.toLowerCase() !== word.toLowerCase());
    setWordImages(newImages);
    saveImagesToStorage(newImages);
    onImagesChange(newImages);
    if (inputRefs.current[word]) {
      inputRefs.current[word]!.value = '';
    }
  };

  const getImageForWord = (word: string) => {
    return wordImages.find(img => img.word.toLowerCase() === word.toLowerCase())?.imageUrl;
  };

  // Handle global paste when a word is active
  useEffect(() => {
    const handleGlobalPaste = (e: ClipboardEvent) => {
      if (activeWord && e.clipboardData) {
        const items = e.clipboardData.items;
        for (let i = 0; i < items.length; i++) {
          if (items[i].type.startsWith('image/')) {
            const file = items[i].getAsFile();
            if (file) {
              processImage(activeWord, file);
              e.preventDefault();
              return;
            }
          }
        }
      }
    };

    document.addEventListener('paste', handleGlobalPaste);
    return () => document.removeEventListener('paste', handleGlobalPaste);
  }, [activeWord, wordImages]);

  if (words.length === 0) {
    return (
      <p className="text-sm text-muted-foreground text-center py-4">
        Nhập các từ ở trên để upload hình ảnh tương ứng
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">
        Upload hoặc paste ảnh cho từng từ (không bắt buộc):
      </p>
      <div className="grid grid-cols-2 gap-3">
        {words.map((word) => {
          const imageUrl = getImageForWord(word);
          return (
            <div 
              key={word} 
              className={`flex items-center gap-2 p-2 border rounded-lg bg-background transition-colors ${
                activeWord === word ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setActiveWord(word)}
              onFocus={() => setActiveWord(word)}
              tabIndex={0}
            >
              <input
                ref={(el) => { inputRefs.current[word] = el; }}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(word, e)}
                className="hidden"
                id={`word-image-${word}`}
              />
              
              {imageUrl ? (
                <div className="flex items-center gap-2 flex-1">
                  <div className="w-10 h-10 border rounded overflow-hidden bg-white flex-shrink-0">
                    <img src={imageUrl} alt={word} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm font-medium truncate flex-1">{word}</span>
                  <Button variant="ghost" size="sm" onClick={(e) => { e.stopPropagation(); handleRemove(word); }} className="p-1 h-auto">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2 flex-1">
                  <label
                    htmlFor={`word-image-${word}`}
                    className="flex items-center gap-2 cursor-pointer hover:bg-muted/50 rounded p-1 transition-colors flex-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="w-10 h-10 border-2 border-dashed rounded flex items-center justify-center bg-muted/30">
                      <Image className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-medium">{word}</span>
                  </label>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={(e) => { e.stopPropagation(); handlePaste(word); }}
                    className="p-1 h-auto"
                    title="Paste từ clipboard"
                  >
                    <Clipboard className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground">
        💡 Click vào ô từ rồi nhấn Ctrl+V để paste ảnh, hoặc click icon để paste từ clipboard
      </p>
    </div>
  );
};
