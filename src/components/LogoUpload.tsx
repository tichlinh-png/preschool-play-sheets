import { useState, useRef } from 'react';
import { Upload, X, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LogoUploadProps {
  onLogoChange: (logoUrl: string | null) => void;
}

export const LogoUpload = ({ onLogoChange }: LogoUploadProps) => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setLogoPreview(result);
        onLogoChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = () => {
    setLogoPreview(null);
    onLogoChange(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="flex items-center gap-4">
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id="logo-upload"
      />
      
      {logoPreview ? (
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 border-2 border-gray-300 rounded-lg overflow-hidden bg-white flex items-center justify-center">
            <img src={logoPreview} alt="School logo" className="w-full h-full object-contain" />
          </div>
          <Button variant="outline" size="sm" onClick={handleRemove}>
            <X className="w-4 h-4 mr-1" />
            Remove
          </Button>
        </div>
      ) : (
        <label
          htmlFor="logo-upload"
          className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
        >
          <Image className="w-5 h-5 text-gray-500" />
          <span className="text-sm text-gray-600">Upload School Logo</span>
        </label>
      )}
    </div>
  );
};
