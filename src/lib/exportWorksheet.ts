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
  const margin = 10;

  // Get all worksheet cards
  const worksheetCards = element.querySelectorAll('[data-worksheet-card]');
  
  for (let i = 0; i < worksheetCards.length; i++) {
    const card = worksheetCards[i] as HTMLElement;
    
    // Create canvas from the card with better settings
    const canvas = await html2canvas(card, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
      allowTaint: true,
    });

    const imgData = canvas.toDataURL('image/png');
    const imgWidth = pageWidth - (margin * 2);
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    if (i > 0) {
      pdf.addPage();
    }

    // Add worksheet image - fit to page
    const maxHeight = pageHeight - (margin * 2);
    
    if (imgHeight > maxHeight) {
      // Scale down if too tall
      const scaledWidth = (canvas.width * maxHeight) / canvas.height;
      const xOffset = (pageWidth - scaledWidth) / 2;
      pdf.addImage(imgData, 'PNG', xOffset, margin, scaledWidth, maxHeight);
    } else {
      pdf.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
    }
  }

  pdf.save('kidssheet-worksheets.pdf');
};

export const printWorksheets = () => {
  window.print();
};

export const exportToWord = async (worksheets: WorksheetData[]): Promise<void> => {
  // Generate HTML content for Word with embedded styles
  let htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>KidsSheet Worksheets</title>
      <style>
        @page { size: A4; margin: 15mm; }
        body { font-family: Arial, sans-serif; padding: 20px; }
        .worksheet { page-break-after: always; margin-bottom: 30px; border: 2px solid #333; padding: 20px; border-radius: 10px; }
        .worksheet:last-child { page-break-after: avoid; }
        .header { text-align: center; border-bottom: 2px solid #ccc; padding-bottom: 15px; margin-bottom: 20px; }
        .header h2 { margin: 0 0 5px 0; font-size: 24px; }
        .header p { margin: 5px 0; color: #666; }
        .name-date { font-size: 12px; color: #999; }
        .item-box { border: 2px solid #666; border-radius: 8px; padding: 15px; margin: 10px 0; text-align: center; }
        .trace-word { font-size: 36px; letter-spacing: 8px; color: #ccc; font-weight: bold; border: 2px dashed #999; padding: 15px; margin: 10px 0; text-align: center; }
        .practice-line { border-bottom: 2px dashed #999; height: 40px; margin: 10px 0; }
        .grid { display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; }
        .grid-item { width: 45%; border: 2px solid #666; border-radius: 8px; padding: 20px; text-align: center; min-height: 120px; }
        .instruction-box { background: #f5f5f5; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
        .instruction-item { display: flex; align-items: center; gap: 10px; margin: 8px 0; }
        .number-circle { width: 24px; height: 24px; background: #333; color: white; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; }
        .answer-box { width: 50px; height: 50px; border: 2px dashed #666; display: inline-block; margin-left: 10px; }
        .matching-container { display: flex; justify-content: space-between; }
        .matching-col { width: 45%; }
        .matching-item { border: 2px solid #666; border-radius: 8px; padding: 12px 20px; margin: 10px 0; text-align: center; }
        .icon-placeholder { font-size: 48px; margin-bottom: 10px; }
      </style>
    </head>
    <body>
  `;

  worksheets.forEach((worksheet) => {
    htmlContent += `<div class="worksheet">`;
    
    if (worksheet.type === 'trace') {
      htmlContent += `
        <div class="header">
          <h2>✏️ Trace the Words</h2>
          <p>${worksheet.instructions || worksheet.topic}</p>
          <p class="name-date">Name: _________________ Date: _________</p>
        </div>
      `;
      
      if (worksheet.words && worksheet.words.length > 0) {
        htmlContent += `<div class="grid">`;
        worksheet.words.forEach(word => {
          htmlContent += `
            <div class="grid-item">
              <div class="icon-placeholder">📝</div>
              <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">${word}</div>
              <div class="trace-word">${word}</div>
              <div class="practice-line"></div>
              <div class="practice-line"></div>
            </div>
          `;
        });
        htmlContent += `</div>`;
      }
    }
    
    if (worksheet.type === 'color') {
      htmlContent += `
        <div class="header">
          <h2>🎨 Coloring Activity</h2>
          <p>${worksheet.instructions || 'Follow the coloring guide!'}</p>
          <p class="name-date">Name: _________________ Date: _________</p>
        </div>
      `;
      
      if (worksheet.colorInstructions && worksheet.colorInstructions.length > 0) {
        htmlContent += `<div class="instruction-box"><p style="font-weight: bold; margin-bottom: 10px;">Coloring Guide:</p>`;
        worksheet.colorInstructions.forEach((instruction, idx) => {
          htmlContent += `
            <div class="instruction-item">
              <span class="number-circle">${idx + 1}</span>
              <span><strong style="text-transform: capitalize;">${instruction.item}</strong> → <strong style="text-transform: uppercase;">${instruction.color}</strong></span>
            </div>
          `;
        });
        htmlContent += `</div>`;
        
        htmlContent += `<div class="grid">`;
        worksheet.colorInstructions.forEach(instruction => {
          htmlContent += `
            <div class="grid-item">
              <div class="icon-placeholder">🖼️</div>
              <div style="font-weight: bold; text-transform: capitalize;">${instruction.item}</div>
              <div style="font-size: 12px; color: #666;">(${instruction.color})</div>
            </div>
          `;
        });
        htmlContent += `</div>`;
      }
    }
    
    if (worksheet.type === 'counting') {
      htmlContent += `
        <div class="header">
          <h2>🔢 Counting Activity</h2>
          <p>${worksheet.instructions || 'Count and write the number!'}</p>
          <p class="name-date">Name: _________________ Date: _________</p>
        </div>
      `;
      
      if (worksheet.countingItems && worksheet.countingItems.length > 0) {
        worksheet.countingItems.forEach(item => {
          htmlContent += `
            <div class="item-box">
              <div style="margin-bottom: 10px;">`;
          for (let i = 0; i < item.count; i++) {
            htmlContent += `<span style="font-size: 32px; margin: 0 5px;">⭐</span>`;
          }
          htmlContent += `</div>
              <div>How many <strong style="text-transform: capitalize;">${item.item}s</strong>? <span class="answer-box"></span></div>
            </div>
          `;
        });
      }
    }
    
    if (worksheet.type === 'matching') {
      htmlContent += `
        <div class="header">
          <h2>🔗 Matching Activity</h2>
          <p>${worksheet.instructions || 'Draw lines to match pictures with words!'}</p>
          <p class="name-date">Name: _________________ Date: _________</p>
        </div>
      `;
      
      if (worksheet.matchingPairs && worksheet.matchingPairs.length > 0) {
        const shuffled = [...worksheet.matchingPairs].sort(() => Math.random() - 0.5);
        htmlContent += `<div class="matching-container">`;
        htmlContent += `<div class="matching-col">`;
        worksheet.matchingPairs.forEach(pair => {
          htmlContent += `<div class="matching-item"><span style="font-size: 32px;">🖼️</span> ${pair.image}</div>`;
        });
        htmlContent += `</div>`;
        htmlContent += `<div class="matching-col">`;
        shuffled.forEach(pair => {
          htmlContent += `<div class="matching-item" style="font-weight: bold;">${pair.word}</div>`;
        });
        htmlContent += `</div>`;
        htmlContent += `</div>`;
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
