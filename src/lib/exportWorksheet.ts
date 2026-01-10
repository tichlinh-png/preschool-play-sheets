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
  
  // Use smaller margins to maximize content area
  const marginX = 8;
  const marginTop = 8;
  const marginBottom = 12; // Leave space for page number
  const contentWidth = pageWidth - (marginX * 2);
  const contentHeight = pageHeight - marginTop - marginBottom;

  // Get all worksheet cards
  const worksheetCards = element.querySelectorAll('[data-worksheet-card]');
  
  for (let i = 0; i < worksheetCards.length; i++) {
    const card = worksheetCards[i] as HTMLElement;
    
    // Store original styles
    const originalStyle = card.getAttribute('style') || '';
    
    // Temporarily set fixed width for consistent rendering - wider for better A4 fit
    card.style.width = '700px';
    card.style.maxWidth = '700px';
    card.style.backgroundColor = '#ffffff';
    card.style.padding = '24px';
    
    // Wait for images to load
    const images = card.querySelectorAll('img');
    await Promise.all(Array.from(images).map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise(resolve => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    }));
    
    // Create canvas from the card with high quality settings
    const canvas = await html2canvas(card, {
      scale: 3, // Higher scale for better quality
      backgroundColor: '#ffffff',
      logging: false,
      useCORS: true,
      allowTaint: true,
      windowWidth: 750,
    });

    // Restore original styles
    card.setAttribute('style', originalStyle);

    const imgData = canvas.toDataURL('image/png', 1.0);
    
    // Calculate dimensions to FILL A4 page as much as possible
    const imgAspectRatio = canvas.width / canvas.height;
    const pageAspectRatio = contentWidth / contentHeight;
    
    let finalWidth: number;
    let finalHeight: number;
    
    // Always try to fill the page width first for worksheets
    finalWidth = contentWidth;
    finalHeight = contentWidth / imgAspectRatio;
    
    // If height exceeds available space, scale down
    if (finalHeight > contentHeight) {
      finalHeight = contentHeight;
      finalWidth = contentHeight * imgAspectRatio;
    }
    
    // Center horizontally, align to top
    const xOffset = (pageWidth - finalWidth) / 2;
    const yOffset = marginTop;

    if (i > 0) {
      pdf.addPage();
    }

    // Add worksheet image
    pdf.addImage(imgData, 'PNG', xOffset, yOffset, finalWidth, finalHeight);
    
    // Add page number at bottom
    pdf.setFontSize(9);
    pdf.setTextColor(150, 150, 150);
    pdf.text(`${i + 1} / ${worksheetCards.length}`, pageWidth / 2, pageHeight - 5, { align: 'center' });
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
        /* Reset and base */
        *, *::before, *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        @page {
          size: A4 portrait;
          margin: 8mm;
        }
        
        html, body {
          width: 100%;
          min-height: 100%;
          background: white !important;
          font-family: 'Nunito', Arial, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          color: #000 !important;
        }
        
        h1, h2, h3, h4, h5, h6, .font-display {
          font-family: 'Fredoka', Arial, sans-serif;
        }
        
        /* Images - ensure they display properly */
        img {
          max-width: 100% !important;
          height: auto !important;
          display: inline-block !important;
        }
        
        svg {
          max-width: 100%;
          display: inline-block !important;
          vertical-align: middle !important;
          color: #000 !important;
          stroke: currentColor !important;
        }
        
        /* Worksheet card - each on separate page, FILL the page */
        [data-worksheet-card] {
          page-break-after: always !important;
          page-break-inside: avoid !important;
          break-after: page !important;
          break-inside: avoid !important;
          
          display: block !important;
          width: 100% !important;
          min-height: calc(297mm - 20mm) !important;
          max-width: none !important;
          margin: 0 !important;
          padding: 20px !important;
          background: white !important;
          border: 2px solid #333 !important;
          border-radius: 8px !important;
          box-sizing: border-box !important;
        }
        
        [data-worksheet-card]:last-child {
          page-break-after: auto !important;
          break-after: auto !important;
        }
        
        /* Hide any wrapper spacing */
        .space-y-6 {
          display: block !important;
        }
        
        .space-y-6 > * {
          margin-top: 0 !important;
        }
        
        /* Layout utilities */
        .space-y-8 > * + * { margin-top: 2rem; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .space-y-3 > * + * { margin-top: 0.75rem; }
        .space-y-2 > * + * { margin-top: 0.5rem; }
        .space-y-1 > * + * { margin-top: 0.25rem; }
        
        .grid { display: grid !important; }
        .grid-cols-2 { grid-template-columns: repeat(2, 1fr) !important; }
        .gap-6 { gap: 1.5rem !important; }
        .gap-4 { gap: 1rem !important; }
        .gap-3 { gap: 0.75rem !important; }
        .gap-2 { gap: 0.5rem !important; }
        
        .flex { display: flex !important; }
        .flex-col { flex-direction: column !important; }
        .flex-wrap { flex-wrap: wrap !important; }
        .flex-1 { flex: 1 !important; }
        .items-start { align-items: flex-start !important; }
        .items-center { align-items: center !important; }
        .items-end { align-items: flex-end !important; }
        .justify-center { justify-content: center !important; }
        .justify-between { justify-content: space-between !important; }
        .justify-end { justify-content: flex-end !important; }
        
        .text-center { text-align: center !important; }
        .font-bold { font-weight: 700 !important; }
        .font-semibold { font-weight: 600 !important; }
        .font-medium { font-weight: 500 !important; }
        
        .text-xs { font-size: 0.75rem !important; }
        .text-sm { font-size: 0.875rem !important; }
        .text-base { font-size: 1rem !important; }
        .text-lg { font-size: 1.125rem !important; }
        .text-xl { font-size: 1.25rem !important; }
        .text-2xl { font-size: 1.5rem !important; }
        .text-3xl { font-size: 1.875rem !important; }
        .text-4xl { font-size: 2.25rem !important; }
        .text-6xl { font-size: 3.75rem !important; }
        
        .tracking-widest { letter-spacing: 0.1em !important; }
        .capitalize { text-transform: capitalize !important; }
        .uppercase { text-transform: uppercase !important; }
        
        /* Border utilities */
        .rounded { border-radius: 0.25rem !important; }
        .rounded-lg { border-radius: 0.5rem !important; }
        .rounded-xl { border-radius: 0.75rem !important; }
        .rounded-2xl { border-radius: 1rem !important; }
        .rounded-full { border-radius: 9999px !important; }
        
        .border { border: 1px solid #333 !important; }
        .border-2 { border: 2px solid #333 !important; }
        .border-3 { border: 3px solid #333 !important; }
        .border-dashed { border-style: dashed !important; }
        .border-dotted { border-style: dotted !important; }
        
        .border-gray-200, .border-gray-300, .border-gray-400, 
        .border-gray-500, .border-gray-800 { border-color: #555 !important; }
        
        .border-b { border-bottom: 1px solid #333 !important; }
        .border-b-2 { border-bottom: 2px solid #333 !important; }
        .border-t { border-top: 1px solid #333 !important; }
        .border-t-2 { border-top: 2px solid #333 !important; }
        
        /* Background - all white for B&W printing */
        .bg-white, .bg-gray-50, .bg-gray-100, 
        [class*="bg-"] { background-color: white !important; }
        
        .bg-gray-800 { background-color: #333 !important; }
        
        /* Text colors - optimize for B&W */
        .text-white { color: white !important; }
        .text-gray-300, .text-gray-400, .text-gray-500, 
        .text-gray-600, .text-gray-700, .text-gray-800,
        [class*="text-"] { color: #000 !important; }
        
        /* Padding utilities */
        .p-2 { padding: 0.5rem !important; }
        .p-3 { padding: 0.75rem !important; }
        .p-4 { padding: 1rem !important; }
        .p-6 { padding: 1.5rem !important; }
        .px-2 { padding-left: 0.5rem !important; padding-right: 0.5rem !important; }
        .px-3 { padding-left: 0.75rem !important; padding-right: 0.75rem !important; }
        .px-4 { padding-left: 1rem !important; padding-right: 1rem !important; }
        .py-1 { padding-top: 0.25rem !important; padding-bottom: 0.25rem !important; }
        .py-2 { padding-top: 0.5rem !important; padding-bottom: 0.5rem !important; }
        .py-3 { padding-top: 0.75rem !important; padding-bottom: 0.75rem !important; }
        .pb-1 { padding-bottom: 0.25rem !important; }
        .pb-3 { padding-bottom: 0.75rem !important; }
        
        /* Margin utilities */
        .mb-1 { margin-bottom: 0.25rem !important; }
        .mb-2 { margin-bottom: 0.5rem !important; }
        .mb-3 { margin-bottom: 0.75rem !important; }
        .mb-4 { margin-bottom: 1rem !important; }
        .mt-1 { margin-top: 0.25rem !important; }
        .mt-3 { margin-top: 0.75rem !important; }
        .mx-1 { margin-left: 0.25rem !important; margin-right: 0.25rem !important; }
        
        /* Size utilities */
        .w-6 { width: 1.5rem !important; }
        .w-8 { width: 2rem !important; }
        .w-10 { width: 2.5rem !important; }
        .w-12 { width: 3rem !important; }
        .w-14 { width: 3.5rem !important; }
        .w-16 { width: 4rem !important; }
        .w-20 { width: 5rem !important; }
        .w-24 { width: 6rem !important; }
        .w-full { width: 100% !important; }
        
        .h-6 { height: 1.5rem !important; }
        .h-10 { height: 2.5rem !important; }
        .h-12 { height: 3rem !important; }
        .h-14 { height: 3.5rem !important; }
        .h-16 { height: 4rem !important; }
        .h-20 { height: 5rem !important; }
        .h-24 { height: 6rem !important; }
        .h-full { height: 100% !important; }
        
        .min-w-\\[80px\\] { min-width: 80px !important; }
        .aspect-square { aspect-ratio: 1/1 !important; }
        
        /* Display utilities */
        .inline-block { display: inline-block !important; }
        .block { display: block !important; }
        .hidden { display: none !important; }
        .inline { display: inline !important; }
        
        /* Position utilities */
        .relative { position: relative !important; }
        .absolute { position: absolute !important; }
        
        /* Object utilities */
        .object-contain { object-fit: contain !important; }
        
        /* SVG icons */
        svg {
          display: inline-block !important;
          vertical-align: middle !important;
          color: #000 !important;
          stroke: currentColor !important;
        }
        
        /* Image handling */
        img {
          max-width: 100% !important;
          height: auto !important;
          display: inline-block !important;
        }
        
        /* Special font for tracing */
        [style*="Edu TAS Beginner"] {
          font-family: 'Edu TAS Beginner', cursive !important;
        }
        
        /* Gradient text fix for B&W */
        [class*="bg-gradient"], [class*="bg-clip-text"] {
          background: none !important;
          -webkit-background-clip: unset !important;
          background-clip: unset !important;
          -webkit-text-fill-color: #000 !important;
          color: #000 !important;
        }
        
        /* Print specific */
        @media print {
          html, body {
            width: 210mm !important;
            background: white !important;
          }
          
          body {
            padding: 0 !important;
            margin: 0 !important;
          }
          
          [data-worksheet-card] {
            page-break-after: always !important;
            break-after: page !important;
            border: 2px solid #000 !important;
          }
          
          [data-worksheet-card]:last-child {
            page-break-after: auto !important;
            break-after: auto !important;
          }
        }
      </style>
    </head>
    <body>
      ${worksheetContent}
      <script>
        // Wait for fonts and images to load
        document.fonts.ready.then(function() {
          setTimeout(function() {
            window.print();
            window.onafterprint = function() {
              window.close();
            };
          }, 300);
        }).catch(function() {
          // Fallback if fonts API not supported
          setTimeout(function() {
            window.print();
            window.onafterprint = function() {
              window.close();
            };
          }, 800);
        });
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
};
