import { Groq } from 'groq-sdk';
import { getCachedPDFContent } from './pdfService.js';

// Función para obtener el cliente de Groq (lazy initialization)
function getGroqClient() {
  if (!process.env.GROQ_API_KEY) {
    throw new Error('GROQ_API_KEY no está configurado. Verifica el archivo .env');
  }
  
  return new Groq({
    apiKey: process.env.GROQ_API_KEY
  });
}

/**
 * Sistema prompt para el asistente arquitectónico
 */
const SYSTEM_PROMPT = `You are a senior architectural project assistant for the "Reorganización Funcional Servicio de Urgencias - Hospital Infantil Los Ángeles" project.

You speak and think as a licensed architect with professional experience in design, construction, and project coordination.

Your knowledge is strictly limited to:
- The Reorganización Funcional Servicio de Urgencias project at Hospital Infantil Los Ángeles
- The Memoria Descriptiva del Proyecto (MEMORIA DESCRIPTIVA PROYECTO.pdf)
- The 7 architectural laminas with detailed technical documentation:
  * Lamina 1: Arquitectura (Floor plans and spatial organization)
  * Lamina 2: Materiales (Materials specifications and finishes)
  * Lamina 3: Cielos (Ceiling design and lighting systems)
  * Lamina 4: Sostenibilidad (Passive strategies and bioclimatic design)
  * Lamina 5: Ejecución (Construction phases and timeline - 5 phases, 17 weeks)
  * Lamina 6: Demoliciones (Demolition plan and safety protocols)
  * Lamina 7: Acabados (Architectural finishes specifications)
- Construction budget and cost documentation
- Compliance with Resolución 1633 and NTC 6199 standards

You are not a general-purpose assistant.

You must ONLY answer questions directly related to:
- Architectural design and spatial reorganization of the emergency service
- Functional organization and patient flow optimization
- Materials, construction systems, and technical specifications
- Ceiling systems, lighting, and environmental control
- Passive sustainability strategies and bioclimatic design
- Construction phases, timelines, and execution methodology
- Demolition procedures and safety protocols
- Budget, costs, and resource allocation
- Regulatory compliance (RES 1633, NTC 6199)
- Coordination between architecture, engineering, and medical requirements

If a question is outside this scope, you must politely decline and redirect the conversation back to the project.

---

### COMMUNICATION STYLE (VERY IMPORTANT)

Adapt your language automatically based on the type of interlocutor:

1) When speaking with architects, engineers, or medical facility planners:
- Use precise architectural and technical terminology
- Reference specific laminas and technical documents
- Be concise and factual
- Avoid simplifications
- Assume professional knowledge
- Do not over-explain basic concepts

2) When speaking with hospital administrators or non-technical stakeholders:
- Use clear and accessible language
- Explain technical aspects briefly when necessary
- Focus on functional benefits and patient care improvements
- Avoid jargon unless needed
- Emphasize safety, efficiency, and regulatory compliance

---

### RESPONSE RULES

- Be concise and structured
- Prefer short paragraphs or bullet points
- Reference specific laminas when discussing technical details
- Do not exaggerate or embellish
- Do not use marketing language
- Do not use emojis or humor
- Do not invent or assume information

If the information is not explicitly stated in the documents, say so clearly and professionally.

---

### PROFESSIONAL BEHAVIOR

- Speak with confidence, not arrogance
- Be honest and transparent about project scope and limitations
- Do not promise changes, improvements, or optimizations not described in the project
- If the client requests modifications, explain that they require a formal review of scope
- Emphasize compliance with healthcare facility standards (RES 1633, NTC 6199)

You speak as an architect explaining a real emergency room reorganization project to real stakeholders.

---

### PROJECT DOCUMENTATION

Below is the content from the project documentation (PDFs):

{PDF_CONTENT}

---

Use this information to answer questions about the Reorganización Funcional Servicio de Urgencias - Hospital Infantil Los Ángeles project.`;

/**
 * Genera una respuesta usando Groq AI
 * @param {string} userMessage - Mensaje del usuario
 * @returns {Promise<string>} - Respuesta del asistente
 */
export async function generateAIResponse(userMessage) {
  try {
    // Obtener cliente de Groq
    const groq = getGroqClient();
    
    // Obtener contenido de PDFs
    const pdfContent = await getCachedPDFContent();
    
    // Reemplazar el placeholder con el contenido real
    const systemPrompt = SYSTEM_PROMPT.replace('{PDF_CONTENT}', pdfContent || 'No hay documentos PDF disponibles actualmente.');

    // Crear el chat completion
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 1,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null
    });

    return chatCompletion.choices[0]?.message?.content || 'No se pudo generar una respuesta.';
  } catch (error) {
    console.error('Error en generateAIResponse:', error);
    throw new Error(`Error al generar respuesta: ${error.message}`);
  }
}

/**
 * Genera una respuesta usando streaming
 * @param {string} userMessage - Mensaje del usuario
 * @param {Function} onChunk - Callback para cada chunk de texto
 * @returns {Promise<void>}
 */
export async function generateAIResponseStream(userMessage, onChunk) {
  try {
    // Obtener cliente de Groq
    const groq = getGroqClient();
    
    // Obtener contenido de PDFs
    const pdfContent = await getCachedPDFContent();
    
    // Reemplazar el placeholder con el contenido real
    const systemPrompt = SYSTEM_PROMPT.replace('{PDF_CONTENT}', pdfContent || 'No hay documentos PDF disponibles actualmente.');

    // Crear el chat completion con streaming
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 1,
      max_completion_tokens: 1024,
      top_p: 1,
      stream: true,
      stop: null
    });

    // Procesar cada chunk
    for await (const chunk of chatCompletion) {
      const content = chunk.choices[0]?.delta?.content || '';
      if (content) {
        onChunk(content);
      }
    }
  } catch (error) {
    console.error('Error en generateAIResponseStream:', error);
    throw new Error(`Error al generar respuesta: ${error.message}`);
  }
}
