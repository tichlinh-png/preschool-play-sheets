import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { WorksheetData } from '@/components/WorksheetPreview';

export const exportToPDF = async (worksheets: WorksheetData[], elementId: string): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Element not found');
  }

  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 15;

  // Get all worksheet cards
  const worksheetCards = element.querySelectorAll('[data-worksheet-card]');
  
  for (let i = 0; i < worksheetCards.length; i++) {
    const card = worksheetCards[i] as HTMLElement;
    
    // Create canvas from the card
    const canvas = await html2canvas(card, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
    });

    const imgData = canvas.toDataURL('image/png');
    const imgWidth = pageWidth - (margin * 2);
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (i > 0) {
      pdf.addPage();
    }

    // Add title
    pdf.setFontSize(20);
    pdf.setFont('helvetica', 'bold');
    pdf.text('KidsSheet - English Worksheet', pageWidth / 2, margin, { align: 'center' });
    
    // Add worksheet image
    const yPosition = margin + 15;
    
    if (imgHeight > pageHeight - yPosition - margin) {
      // Scale down if too tall
      const scaledHeight = pageHeight - yPosition - margin - 10;
      const scaledWidth = (canvas.width * scaledHeight) / canvas.height;
      pdf.addImage(imgData, 'PNG', (pageWidth - scaledWidth) / 2, yPosition, scaledWidth, scaledHeight);
    } else {
      pdf.addImage(imgData, 'PNG', margin, yPosition, imgWidth, imgHeight);
    }

    // Add footer
    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Page ${i + 1} of ${worksheetCards.length}`, pageWidth / 2, pageHeight - 10, { align: 'center' });
  }

  pdf.save('kidssheet-worksheets.pdf');
};

export const exportToWord = async (worksheets: WorksheetData[]): Promise<void> => {
  // Generate HTML content for Word
  let htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>KidsSheet Worksheets</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 40px; }
        .worksheet { page-break-after: always; margin-bottom: 40px; }
        .worksheet:last-child { page-break-after: avoid; }
        h1 { text-align: center; color: #333; font-size: 24px; }
        h2 { text-align: center; color: #0d9488; font-size: 20px; }
        .topic { text-align: center; font-size: 16px; margin: 20px 0; }
        .instructions { text-align: center; font-style: italic; color: #666; margin: 15px 0; }
        .letter-big { text-align: center; font-size: 120px; color: #ccc; font-weight: bold; letter-spacing: 20px; }
        .practice-boxes { text-align: center; margin: 20px 0; }
        .box { display: inline-block; width: 60px; height: 60px; border: 2px dashed #ccc; margin: 5px; }
        .words { text-align: center; background: #f0f0f0; padding: 15px; border-radius: 10px; margin: 20px auto; max-width: 400px; }
        .practice-line { border-bottom: 3px dashed #0d9488; margin: 40px 20px; height: 60px; }
        .grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 30px 0; }
        .grid-item { width: 100px; height: 100px; border: 2px solid #ccc; display: flex; align-items: center; justify-content: center; font-size: 48px; border-radius: 10px; }
        .colors { text-align: center; margin: 20px 0; }
        .color-chip { display: inline-block; padding: 5px 15px; margin: 5px; border-radius: 20px; color: white; }
        .answer { text-align: center; font-size: 12px; color: #999; margin-top: 30px; }
      </style>
    </head>
    <body>
  `;

  worksheets.forEach((worksheet, index) => {
    htmlContent += `<div class="worksheet">`;
    htmlContent += `<h1>KidsSheet - English Worksheet</h1>`;
    
    if (worksheet.type === 'trace') {
      htmlContent += `<h2>✏️ Trace the Letter</h2>`;
      htmlContent += `<div class="topic">Topic: ${worksheet.topic}</div>`;
      if (worksheet.instructions) {
        htmlContent += `<div class="instructions">${worksheet.instructions}</div>`;
      }
      
      if (worksheet.letters) {
        worksheet.letters.forEach(letter => {
          htmlContent += `<div class="letter-big">${letter}</div>`;
          htmlContent += `<div class="practice-boxes">`;
          for (let i = 0; i < 4; i++) {
            htmlContent += `<span class="box"></span>`;
          }
          htmlContent += `</div>`;
        });
      }
      
      if (worksheet.words && worksheet.words.length > 0) {
        htmlContent += `<div class="words"><strong>Words:</strong> ${worksheet.words.join(', ')}</div>`;
      }
      
      htmlContent += `<div class="practice-line"><small style="color: #999;">Practice writing here...</small></div>`;
    }
    
    if (worksheet.type === 'color') {
      htmlContent += `<h2>🎨 Coloring Activity</h2>`;
      htmlContent += `<div class="topic">Topic: ${worksheet.topic}</div>`;
      if (worksheet.instructions) {
        htmlContent += `<div class="instructions">${worksheet.instructions}</div>`;
      }
      
      if (worksheet.images && worksheet.images.length > 0) {
        htmlContent += `<div class="words"><strong>Things to color:</strong> ${worksheet.images.join(', ')}</div>`;
      }
      
      if (worksheet.words && worksheet.words.length > 0) {
        htmlContent += `<div class="colors"><strong>Colors to use:</strong><br/>`;
        worksheet.words.forEach(color => {
          const colorHex = getColorHex(color);
          htmlContent += `<span class="color-chip" style="background-color: ${colorHex};">${color}</span>`;
        });
        htmlContent += `</div>`;
      }
      
      htmlContent += `<div style="border: 2px dashed #ccc; height: 200px; margin: 30px; display: flex; align-items: center; justify-content: center; color: #999;">Drawing Space - Print and let children color here</div>`;
    }
    
    if (worksheet.type === 'oddOneOut') {
      htmlContent += `<h2>🔍 Find the Odd One Out</h2>`;
      htmlContent += `<div class="topic">Topic: ${worksheet.topic}</div>`;
      if (worksheet.instructions) {
        htmlContent += `<div class="instructions">${worksheet.instructions}</div>`;
      }
      
      if (worksheet.images && worksheet.images.length > 0) {
        htmlContent += `<div class="grid">`;
        worksheet.images.forEach(img => {
          htmlContent += `<div class="grid-item">${img}</div>`;
        });
        htmlContent += `</div>`;
        htmlContent += `<div class="instructions">Circle the one that is different!</div>`;
      }
      
      if (worksheet.oddItem) {
        htmlContent += `<div class="answer">(Answer for teacher: ${worksheet.oddItem})</div>`;
      }
    }
    
    htmlContent += `</div>`;
  });

  htmlContent += `</body></html>`;

  // Create blob and download
  const blob = new Blob([htmlContent], { type: 'application/msword' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'kidssheet-worksheets.doc';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

function getColorHex(color: string): string {
  const colorMap: Record<string, string> = {
    red: '#FF6B6B',
    blue: '#4ECDC4',
    yellow: '#FFE66D',
    green: '#95E1D3',
    pink: '#F38181',
    orange: '#FFA502',
    purple: '#A855F7',
    brown: '#8B4513',
    black: '#1A1A1A',
    white: '#F5F5F5',
  };
  return colorMap[color.toLowerCase()] || '#888888';
}
