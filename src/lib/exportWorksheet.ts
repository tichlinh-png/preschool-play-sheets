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
        h2 { text-align: center; color: #333; font-size: 20px; }
        .topic { text-align: center; font-size: 16px; margin: 20px 0; }
        .instructions { text-align: center; font-style: italic; color: #666; margin: 15px 0; }
        .letter-big { text-align: center; font-size: 120px; color: #ccc; font-weight: bold; letter-spacing: 20px; }
        .practice-boxes { text-align: center; margin: 20px 0; }
        .box { display: inline-block; width: 60px; height: 60px; border: 2px dashed #999; margin: 5px; }
        .words { text-align: center; background: #f5f5f5; padding: 15px; border-radius: 10px; margin: 20px auto; max-width: 400px; }
        .practice-line { border-bottom: 3px dashed #999; margin: 40px 20px; height: 60px; }
        .grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin: 30px 0; }
        .grid-item { width: 100px; height: 100px; border: 2px solid #999; display: flex; align-items: center; justify-content: center; font-size: 48px; border-radius: 10px; }
        .instruction-list { background: #f5f5f5; padding: 20px; border-radius: 10px; margin: 20px 0; }
        .instruction-item { margin: 10px 0; }
        .answer-box { width: 60px; height: 60px; border: 2px dashed #999; display: inline-block; margin: 10px; }
        .matching-row { display: flex; justify-content: space-between; align-items: center; margin: 20px 0; }
        .matching-item { padding: 15px 25px; border: 2px solid #999; border-radius: 10px; }
      </style>
    </head>
    <body>
  `;

  worksheets.forEach((worksheet, index) => {
    htmlContent += `<div class="worksheet">`;
    htmlContent += `<h1>KidsSheet - English Worksheet</h1>`;
    
    if (worksheet.type === 'trace') {
      htmlContent += `<h2>Trace the Words</h2>`;
      htmlContent += `<div class="topic">Topic: ${worksheet.topic}</div>`;
      if (worksheet.instructions) {
        htmlContent += `<div class="instructions">${worksheet.instructions}</div>`;
      }
      
      if (worksheet.words && worksheet.words.length > 0) {
        worksheet.words.forEach(word => {
          htmlContent += `<div style="text-align: center; margin: 30px 0;">`;
          htmlContent += `<div style="font-size: 24px; font-weight: bold; margin-bottom: 10px;">${word}</div>`;
          htmlContent += `<div style="font-size: 48px; color: #ccc; letter-spacing: 10px; border: 2px dashed #ccc; padding: 20px; display: inline-block;">${word}</div>`;
          htmlContent += `</div>`;
          htmlContent += `<div class="practice-line"><small style="color: #999;">Write here:</small></div>`;
        });
      }
    }
    
    if (worksheet.type === 'color') {
      htmlContent += `<h2>Coloring Activity</h2>`;
      htmlContent += `<div class="topic">Topic: ${worksheet.topic}</div>`;
      if (worksheet.instructions) {
        htmlContent += `<div class="instructions">${worksheet.instructions}</div>`;
      }
      
      if (worksheet.colorInstructions && worksheet.colorInstructions.length > 0) {
        htmlContent += `<div class="instruction-list">`;
        htmlContent += `<p><strong>Instructions:</strong></p>`;
        worksheet.colorInstructions.forEach((instruction, idx) => {
          htmlContent += `<div class="instruction-item">${idx + 1}. Color the <strong>${instruction.item}</strong> → <strong>${instruction.color.toUpperCase()}</strong></div>`;
        });
        htmlContent += `</div>`;
        
        htmlContent += `<div class="grid">`;
        worksheet.colorInstructions.forEach(instruction => {
          htmlContent += `<div class="grid-item" style="flex-direction: column;"><div style="font-size: 24px;">🖼️</div><div style="font-size: 14px; margin-top: 5px;">${instruction.item}</div></div>`;
        });
        htmlContent += `</div>`;
      }
    }
    
    if (worksheet.type === 'counting') {
      htmlContent += `<h2>Counting Activity</h2>`;
      htmlContent += `<div class="topic">Topic: ${worksheet.topic}</div>`;
      if (worksheet.instructions) {
        htmlContent += `<div class="instructions">${worksheet.instructions}</div>`;
      }
      
      if (worksheet.countingItems && worksheet.countingItems.length > 0) {
        worksheet.countingItems.forEach(item => {
          htmlContent += `<div style="border: 2px solid #999; border-radius: 10px; padding: 20px; margin: 20px 0;">`;
          htmlContent += `<div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 15px;">`;
          for (let i = 0; i < item.count; i++) {
            htmlContent += `<span style="font-size: 32px;">⭐</span>`;
          }
          htmlContent += `</div>`;
          htmlContent += `<div style="text-align: center;">How many <strong>${item.item}s</strong>? <span class="answer-box"></span></div>`;
          htmlContent += `</div>`;
        });
      }
    }
    
    if (worksheet.type === 'matching') {
      htmlContent += `<h2>Matching Activity</h2>`;
      htmlContent += `<div class="topic">Topic: ${worksheet.topic}</div>`;
      if (worksheet.instructions) {
        htmlContent += `<div class="instructions">${worksheet.instructions}</div>`;
      }
      
      if (worksheet.matchingPairs && worksheet.matchingPairs.length > 0) {
        htmlContent += `<div style="display: flex; justify-content: space-around;">`;
        htmlContent += `<div>`;
        worksheet.matchingPairs.forEach(pair => {
          htmlContent += `<div class="matching-item" style="margin: 15px 0;">🖼️ ${pair.image}</div>`;
        });
        htmlContent += `</div>`;
        htmlContent += `<div>`;
        const shuffled = [...worksheet.matchingPairs].sort(() => Math.random() - 0.5);
        shuffled.forEach(pair => {
          htmlContent += `<div class="matching-item" style="margin: 15px 0;">${pair.word}</div>`;
        });
        htmlContent += `</div>`;
        htmlContent += `</div>`;
        htmlContent += `<div class="instructions">Draw lines to match pictures with words!</div>`;
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
