import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { WorksheetData } from '@/components/WorksheetPreview';

// A4 dimensions in mm
const A4_WIDTH_MM = 210;
const A4_HEIGHT_MM = 297;
const MARGIN_MM = 15;

export const exportToPDF = async (worksheets: WorksheetData[], elementId: string): Promise<void> => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('Element not found');
  }

  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const contentWidth = pageWidth - (MARGIN_MM * 2);
  const contentHeight = pageHeight - (MARGIN_MM * 2);

  // Get all worksheet cards
  const worksheetCards = element.querySelectorAll('[data-worksheet-card]');
  
  for (let i = 0; i < worksheetCards.length; i++) {
    const card = worksheetCards[i] as HTMLElement;
    
    // Store original styles
    const originalStyle = card.getAttribute('style') || '';
    
    // Temporarily set fixed width for consistent rendering
    card.style.width = '800px';
    card.style.maxWidth = '800px';
    card.style.backgroundColor = '#ffffff';
    
    // Create canvas from the card with high quality settings
    const canvas = await html2canvas(card, {
      scale: 3, // Higher scale for better quality
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
      allowTaint: true,
      windowWidth: 850,
    });

    // Restore original styles
    card.setAttribute('style', originalStyle);

    const imgData = canvas.toDataURL('image/png', 1.0);
    
    // Calculate dimensions to fit A4 while maintaining aspect ratio
    const imgAspectRatio = canvas.width / canvas.height;
    const pageAspectRatio = contentWidth / contentHeight;
    
    let finalWidth: number;
    let finalHeight: number;
    
    if (imgAspectRatio > pageAspectRatio) {
      // Image is wider - fit to width
      finalWidth = contentWidth;
      finalHeight = contentWidth / imgAspectRatio;
    } else {
      // Image is taller - fit to height
      finalHeight = contentHeight;
      finalWidth = contentHeight * imgAspectRatio;
    }
    
    // Center the image on page
    const xOffset = (pageWidth - finalWidth) / 2;
    const yOffset = (pageHeight - finalHeight) / 2;

    if (i > 0) {
      pdf.addPage();
    }

    // Add worksheet image centered on page
    pdf.addImage(imgData, 'PNG', xOffset, yOffset, finalWidth, finalHeight);
    
    // Add page number
    pdf.setFontSize(10);
    pdf.setTextColor(150, 150, 150);
    pdf.text(`Page ${i + 1} of ${worksheetCards.length}`, pageWidth / 2, pageHeight - 8, { align: 'center' });
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
      <title>KidsSheet - Worksheets</title>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&family=Fredoka:wght@400;500;600;700&family=Edu+TAS+Beginner:wght@400;500;600;700&display=swap" rel="stylesheet">
      <style>
        @page {
          size: A4;
          margin: 15mm;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }
        
        html, body {
          width: 100%;
          height: 100%;
          background: white;
        }
        
        body {
          font-family: 'Nunito', -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          color: #1f2937;
        }
        
        h1, h2, h3, h4, h5, h6, .font-display {
          font-family: 'Fredoka', sans-serif;
        }
        
        /* Each worksheet card is a separate page */
        [data-worksheet-card] {
          page-break-after: always;
          page-break-inside: avoid;
          break-after: page;
          break-inside: avoid;
          
          background: white !important;
          border: 2px solid #e5e7eb !important;
          border-radius: 12px;
          padding: 24px;
          margin: 0;
          min-height: calc(100vh - 30mm);
          display: flex;
          flex-direction: column;
        }
        
        [data-worksheet-card]:last-child {
          page-break-after: auto;
          break-after: auto;
        }
        
        /* Hide wrapper div margins */
        .space-y-6 > [data-worksheet-card] {
          margin-top: 0 !important;
        }
        
        /* Layout utilities */
        .space-y-8 > * + * { margin-top: 2rem; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .space-y-3 > * + * { margin-top: 0.75rem; }
        .space-y-2 > * + * { margin-top: 0.5rem; }
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
        .items-end { align-items: flex-end; }
        .justify-center { justify-content: center; }
        .justify-between { justify-content: space-between; }
        .justify-end { justify-content: flex-end; }
        
        .text-center { text-align: center; }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        .font-medium { font-weight: 500; }
        
        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-base { font-size: 1rem; line-height: 1.5rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-6xl { font-size: 3.75rem; line-height: 1; }
        
        .tracking-widest { letter-spacing: 0.1em; }
        .tracking-\\[0\\.2em\\] { letter-spacing: 0.2em; }
        .capitalize { text-transform: capitalize; }
        .uppercase { text-transform: uppercase; }
        
        /* Border utilities */
        .rounded { border-radius: 0.25rem; }
        .rounded-lg { border-radius: 0.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-2xl { border-radius: 1rem; }
        .rounded-full { border-radius: 9999px; }
        
        .border { border-width: 1px; border-style: solid; }
        .border-2 { border-width: 2px; border-style: solid; }
        .border-3 { border-width: 3px; border-style: solid; }
        .border-dashed { border-style: dashed; }
        .border-dotted { border-style: dotted; }
        
        .border-gray-200 { border-color: #e5e7eb; }
        .border-gray-300 { border-color: #d1d5db; }
        .border-gray-400 { border-color: #9ca3af; }
        .border-gray-500 { border-color: #6b7280; }
        .border-gray-800 { border-color: #1f2937; }
        
        .border-b { border-bottom-width: 1px; }
        .border-b-2 { border-bottom-width: 2px; }
        .border-t { border-top-width: 1px; }
        .border-t-2 { border-top-width: 2px; }
        
        /* Background utilities */
        .bg-white { background-color: white !important; }
        .bg-gray-50 { background-color: #f9fafb !important; }
        .bg-gray-100 { background-color: #f3f4f6 !important; }
        .bg-gray-800 { background-color: #1f2937 !important; }
        
        /* Text colors */
        .text-white { color: white !important; }
        .text-gray-300 { color: #d1d5db; }
        .text-gray-400 { color: #9ca3af; }
        .text-gray-500 { color: #6b7280; }
        .text-gray-600 { color: #4b5563; }
        .text-gray-700 { color: #374151; }
        .text-gray-800 { color: #1f2937; }
        
        /* Padding utilities */
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
        .pb-1 { padding-bottom: 0.25rem; }
        .pb-3 { padding-bottom: 0.75rem; }
        
        /* Margin utilities */
        .mb-1 { margin-bottom: 0.25rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mt-1 { margin-top: 0.25rem; }
        .mt-3 { margin-top: 0.75rem; }
        .mx-1 { margin-left: 0.25rem; margin-right: 0.25rem; }
        .mr-\\[2px\\] { margin-right: 2px; }
        
        /* Size utilities */
        .w-6 { width: 1.5rem; }
        .w-8 { width: 2rem; }
        .w-10 { width: 2.5rem; }
        .w-12 { width: 3rem; }
        .w-14 { width: 3.5rem; }
        .w-16 { width: 4rem; }
        .w-20 { width: 5rem; }
        .w-24 { width: 6rem; }
        .w-full { width: 100%; }
        
        .h-6 { height: 1.5rem; }
        .h-10 { height: 2.5rem; }
        .h-12 { height: 3rem; }
        .h-14 { height: 3.5rem; }
        .h-16 { height: 4rem; }
        .h-20 { height: 5rem; }
        .h-24 { height: 6rem; }
        .h-full { height: 100%; }
        
        .min-w-\\[80px\\] { min-width: 80px; }
        .aspect-square { aspect-ratio: 1/1; }
        
        /* Display utilities */
        .inline-block { display: inline-block; }
        .block { display: block; }
        .hidden { display: none; }
        .inline { display: inline; }
        
        /* Position utilities */
        .relative { position: relative; }
        .absolute { position: absolute; }
        .top-1\\/2 { top: 50%; }
        .left-0 { left: 0; }
        .right-0 { right: 0; }
        .left-1\\/2 { left: 50%; }
        .-top-1 { top: -0.25rem; }
        .-translate-x-1\\/2 { transform: translateX(-50%); }
        
        /* Object utilities */
        .object-contain { object-fit: contain; }
        
        /* SVG icons - ensure visibility */
        svg {
          display: inline-block;
          vertical-align: middle;
          color: inherit;
        }
        
        /* Image handling */
        img {
          max-width: 100%;
          height: auto;
          display: inline-block;
        }
        
        /* Special font for tracing */
        [style*="Edu TAS Beginner"] {
          font-family: 'Edu TAS Beginner', cursive !important;
        }
        
        /* Print-specific overrides */
        @media print {
          html, body {
            width: 210mm;
            height: 297mm;
          }
          
          body {
            padding: 0;
            margin: 0;
          }
          
          /* Force each worksheet to its own page */
          [data-worksheet-card] {
            page-break-after: always !important;
            break-after: page !important;
            margin: 0 !important;
            border-radius: 0 !important;
            border: 1px solid #e5e7eb !important;
            min-height: auto;
            height: auto;
          }
          
          [data-worksheet-card]:last-child {
            page-break-after: auto !important;
            break-after: auto !important;
          }
          
          /* Ensure colors print */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      </style>
    </head>
    <body>
      ${worksheetContent}
      <script>
        // Wait for fonts and images to load
        window.onload = function() {
          // Give fonts time to load
          setTimeout(function() {
            window.print();
            window.onafterprint = function() {
              window.close();
            };
          }, 500);
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

  // Get all worksheet cards and convert to high-quality images
  const worksheetCards = element.querySelectorAll('[data-worksheet-card]');
  const images: string[] = [];

  for (let i = 0; i < worksheetCards.length; i++) {
    const card = worksheetCards[i] as HTMLElement;
    
    // Store original styles
    const originalStyle = card.getAttribute('style') || '';
    
    // Set consistent width for rendering
    card.style.width = '800px';
    card.style.maxWidth = '800px';
    card.style.backgroundColor = '#ffffff';
    
    const canvas = await html2canvas(card, {
      scale: 2,
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
      allowTaint: true,
      windowWidth: 850,
    });
    
    // Restore original styles
    card.setAttribute('style', originalStyle);
    
    images.push(canvas.toDataURL('image/png', 1.0));
  }

  // Generate HTML optimized for Word with proper page breaks
  let htmlContent = `
    <!DOCTYPE html>
    <html xmlns:o="urn:schemas-microsoft-com:office:office" 
          xmlns:w="urn:schemas-microsoft-com:office:word"
          xmlns="http://www.w3.org/TR/REC-html40">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <title>KidsSheet Worksheets</title>
      <!--[if gte mso 9]>
      <xml>
        <w:WordDocument>
          <w:View>Print</w:View>
          <w:Zoom>100</w:Zoom>
          <w:DoNotOptimizeForBrowser/>
        </w:WordDocument>
      </xml>
      <![endif]-->
      <style>
        @page {
          size: A4;
          margin: 15mm;
        }
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        .worksheet-page {
          page-break-after: always;
          text-align: center;
          padding: 0;
          margin: 0;
          width: 100%;
        }
        .worksheet-page:last-child {
          page-break-after: avoid;
        }
        .worksheet-image {
          max-width: 100%;
          width: 180mm;
          height: auto;
          border: 1px solid #e5e7eb;
        }
        .page-number {
          text-align: center;
          font-size: 10pt;
          color: #999;
          margin-top: 10mm;
        }
      </style>
    </head>
    <body>
  `;

  images.forEach((imgSrc, idx) => {
    htmlContent += `
      <div class="worksheet-page">
        <img src="${imgSrc}" class="worksheet-image" alt="Worksheet ${idx + 1}" />
        <div class="page-number">Page ${idx + 1} of ${images.length}</div>
      </div>
    `;
  });

  htmlContent += `</body></html>`;

  // Create blob and download as .doc
  const blob = new Blob(['\ufeff', htmlContent], { 
    type: 'application/msword' 
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'kidssheet-worksheets.doc';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
