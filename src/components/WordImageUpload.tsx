import { useState, useRef } from 'react';
import { Upload, X, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WordImage {
  word: string;
  imageUrl: string;
}

interface WordImageUploadProps {
  words: string[];
  onImagesChange: (images: WordImage[]) => void;
}

export const WordImageUpload = ({ words, onImagesChange }: WordImageUploadProps) => {
  const [wordImages, setWordImages] = useState<WordImage[]>([]);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleFileChange = (word: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const newImages = wordImages.filter(img => img.word !== word);
        newImages.push({ word, imageUrl: result });
        setWordImages(newImages);
        onImagesChange(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (word: string) => {
    const newImages = wordImages.filter(img => img.word !== word);
    setWordImages(newImages);
    onImagesChange(newImages);
    if (inputRefs.current[word]) {
      inputRefs.current[word]!.value = '';
    }
  };

  const getImageForWord = (word: string) => {
    return wordImages.find(img => img.word.toLowerCase() === word.toLowerCase())?.imageUrl;
  };

  if (words.length === 0) {
    return (
      <p className="text-sm text-muted-foreground text-center py-4">
        Nhập các từ ở trên để upload hình ảnh tương ứng
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Upload hình ảnh cho từng từ (không bắt buộc):</p>
      <div className="grid grid-cols-2 gap-3">
        {words.map((word) => {
          const imageUrl = getImageForWord(word);
          return (
            <div key={word} className="flex items-center gap-2 p-2 border rounded-lg bg-background">
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
                  <Button variant="ghost" size="sm" onClick={() => handleRemove(word)} className="p-1 h-auto">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <label
                  htmlFor={`word-image-${word}`}
                  className="flex items-center gap-2 cursor-pointer flex-1 hover:bg-muted/50 rounded p-1 transition-colors"
                >
                  <div className="w-10 h-10 border-2 border-dashed rounded flex items-center justify-center bg-muted/30">
                    <Image className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <span className="text-sm font-medium">{word}</span>
                </label>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
