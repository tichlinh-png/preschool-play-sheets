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
  const container = document.getElementById('worksheets-container');
  if (!container) {
    console.error('Worksheets container not found');
    return;
  }

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    // Fallback to regular print if popup blocked
    window.print();
    return;
  }

  const worksheetContent = container.innerHTML;
  
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Print Worksheets</title>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&family=Fredoka:wght@400;500;600;700&family=Edu+TAS+Beginner:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        body {
          font-family: 'Nunito', sans-serif;
          background: white;
          padding: 20px;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Fredoka', sans-serif;
        }
        .font-display {
          font-family: 'Fredoka', sans-serif;
        }
        [data-worksheet-card] {
          page-break-inside: avoid;
          page-break-after: always;
          margin-bottom: 20px;
          background: white;
          border: 2px solid #d1d5db;
          border-radius: 8px;
          padding: 24px;
        }
        [data-worksheet-card]:last-child {
          page-break-after: auto;
        }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .space-y-1 > * + * { margin-top: 0.25rem; }
        .grid { display: grid; }
        .grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
        .gap-6 { gap: 1.5rem; }
        .gap-4 { gap: 1rem; }
        .gap-3 { gap: 0.75rem; }
        .gap-2 { gap: 0.5rem; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .flex-wrap { flex-wrap: wrap; }
        .flex-1 { flex: 1; }
        .items-start { align-items: flex-start; }
        .items-center { align-items: center; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .justify-end { justify-content: flex-end; }
        .text-center { text-align: center; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .text-xs { font-size: 0.75rem; }
        .text-sm { font-size: 0.875rem; }
        .text-base { font-size: 1rem; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-3xl { font-size: 1.875rem; }
        .tracking-widest { letter-spacing: 0.1em; }
        .capitalize { text-transform: capitalize; }
        .uppercase { text-transform: uppercase; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-full { border-radius: 9999px; }
        .rounded { border-radius: 0.25rem; }
        .border { border-width: 1px; border-style: solid; }
        .border-2 { border-width: 2px; border-style: solid; }
        .border-dashed { border-style: dashed; }
        .border-gray-200 { border-color: #e5e7eb; }
        .border-gray-300 { border-color: #d1d5db; }
        .border-gray-400 { border-color: #9ca3af; }
        .border-gray-500 { border-color: #6b7280; }
        .border-gray-800 { border-color: #1f2937; }
        .border-b { border-bottom-width: 1px; }
        .border-b-2 { border-bottom-width: 2px; }
        .border-t-2 { border-top-width: 2px; }
        .bg-white { background-color: white; }
        .bg-gray-50 { background-color: #f9fafb; }
        .bg-gray-800 { background-color: #1f2937; }
        .text-white { color: white; }
        .text-gray-300 { color: #d1d5db; }
        .text-gray-400 { color: #9ca3af; }
        .text-gray-500 { color: #6b7280; }
        .text-gray-600 { color: #4b5563; }
        .text-gray-700 { color: #374151; }
        .text-gray-800 { color: #1f2937; }
        .p-2 { padding: 0.5rem; }
        .p-3 { padding: 0.75rem; }
        .p-4 { padding: 1rem; }
        .p-6 { padding: 1.5rem; }
        .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
        .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .pb-3 { padding-bottom: 0.75rem; }
        .mb-1 { margin-bottom: 0.25rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mt-1 { margin-top: 0.25rem; }
        .mt-3 { margin-top: 0.75rem; }
        .mx-1 { margin-left: 0.25rem; margin-right: 0.25rem; }
        .w-6 { width: 1.5rem; }
        .w-8 { width: 2rem; }
        .w-10 { width: 2.5rem; }
        .w-12 { width: 3rem; }
        .w-14 { width: 3.5rem; }
        .w-16 { width: 4rem; }
        .w-20 { width: 5rem; }
        .w-24 { width: 6rem; }
        .h-6 { height: 1.5rem; }
        .h-10 { height: 2.5rem; }
        .h-12 { height: 3rem; }
        .h-14 { height: 3.5rem; }
        .h-16 { height: 4rem; }
        .h-20 { height: 5rem; }
        .h-24 { height: 6rem; }
        .min-w-\\[80px\\] { min-width: 80px; }
        .aspect-square { aspect-ratio: 1/1; }
        .inline-block { display: inline-block; }
        .block { display: block; }
        .object-contain { object-fit: contain; }
        
        /* SVG icons */
        svg { display: inline-block; vertical-align: middle; }
        
        @media print {
          body { padding: 0; }
          [data-worksheet-card] {
            border: 1px solid #d1d5db;
            padding: 15mm;
            margin: 0;
          }
        }
      </style>
    </head>
    <body>
      ${worksheetContent}
      <script>
        window.onload = function() {
          window.print();
          window.onafterprint = function() {
            window.close();
          };
        };
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
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
