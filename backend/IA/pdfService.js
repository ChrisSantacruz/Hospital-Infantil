import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pdf from 'pdf-parse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Trunca el texto de un PDF a un máximo de caracteres
 * Límite aumentado para capturar información técnica completa de las láminas
 */
function truncateText(text, maxChars = 8000) {
  if (text.length <= maxChars) return text;
  return text.substring(0, maxChars) + '\n... (contenido truncado)\n';
}

/**
 * Lee y extrae el texto de todos los PDFs en la carpeta PDFS
 * @returns {Promise<string>} Texto combinado de todos los PDFs
 */
export async function extractPDFContent() {
  const pdfsDir = path.join(__dirname, '../PDFS');
  
  try {
    // Verificar si el directorio existe
    if (!fs.existsSync(pdfsDir)) {
      console.warn('La carpeta PDFS no existe');
      return '';
    }

    // Leer todos los archivos PDF del directorio
    const files = fs.readdirSync(pdfsDir).filter(file => file.toLowerCase().endsWith('.pdf'));
    
    if (files.length === 0) {
      console.warn('No se encontraron archivos PDF en la carpeta PDFS');
      return '';
    }

    console.log(`📄 Encontrados ${files.length} archivos PDF`);

    // Extraer texto de cada PDF
    const pdfContents = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(pdfsDir, file);
        const dataBuffer = fs.readFileSync(filePath);
        
        try {
          const data = await pdf(dataBuffer);
          console.log(`✓ Procesado: ${file} (${data.numpages} páginas)`);
          
          // Truncar el texto para reducir tokens pero mantener toda la información técnica
          const truncatedText = truncateText(data.text, 8000);
          
          return {
            filename: file,
            text: truncatedText,
            pages: data.numpages
          };
        } catch (error) {
          console.error(`✗ Error procesando ${file}:`, error.message);
          return null;
        }
      })
    );

    // Filtrar PDFs que no se pudieron procesar
    const validPDFs = pdfContents.filter(pdf => pdf !== null);

    // Combinar todo el contenido
    const combinedText = validPDFs
      .map(pdf => `\n--- DOCUMENTO: ${pdf.filename} ---\n${pdf.text}`)
      .join('\n\n');

    return combinedText;
  } catch (error) {
    console.error('Error al leer PDFs:', error);
    return '';
  }
}

/**
 * Cache del contenido de los PDFs para evitar leerlos en cada request
 */
let cachedPDFContent = null;
let lastCacheTime = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

/**
 * Obtiene el contenido de los PDFs usando cache
 * @returns {Promise<string>}
 */
export async function getCachedPDFContent() {
  const now = Date.now();
  
  // Si no hay cache o ha expirado, recargar
  if (!cachedPDFContent || !lastCacheTime || (now - lastCacheTime) > CACHE_DURATION) {
    console.log('🔄 Recargando contenido de PDFs...');
    cachedPDFContent = await extractPDFContent();
    lastCacheTime = now;
  }
  
  return cachedPDFContent;
}

/**
 * Fuerza la recarga del cache de PDFs
 */
export function refreshPDFCache() {
  cachedPDFContent = null;
  lastCacheTime = null;
}
