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

export const exportToWord = async (worksheets: WorksheetData[], elementId: string = 'worksheets-container'): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Element not found');
  }

  // Get all worksheet cards and convert to images
  const worksheetCards = element.querySelectorAll('[data-worksheet-card]');
  const images: string[] = [];

  for (let i = 0; i < worksheetCards.length; i++) {
    const card = worksheetCards[i] as HTMLElement;
    const canvas = await html2canvas(card, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
      allowTaint: true,
    });
    images.push(canvas.toDataURL('image/png'));
  }

  // Generate HTML with embedded images for Word
  let htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>KidsSheet Worksheets</title>
      <style>
        @page { size: A4; margin: 10mm; }
        body { font-family: Arial, sans-serif; padding: 0; margin: 0; }
        .worksheet-page { page-break-after: always; text-align: center; padding: 10px; }
        .worksheet-page:last-child { page-break-after: avoid; }
        .worksheet-image { max-width: 100%; height: auto; }
      </style>
    </head>
    <body>
  `;

  images.forEach((imgSrc, idx) => {
    htmlContent += `
      <div class="worksheet-page">
        <img src="${imgSrc}" class="worksheet-image" alt="Worksheet ${idx + 1}" />
      </div>
    `;
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
