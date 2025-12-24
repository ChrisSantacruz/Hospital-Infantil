import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { generateAIResponse, generateAIResponseStream } from './IA/groqService.js';
import { refreshPDFCache } from './IA/pdfService.js';

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

/**
 * GET /health
 * Health check endpoint
 */
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Hospital Infantil AI Backend',
    timestamp: new Date().toISOString()
  });
});

/**
 * POST /api/chat
 * Endpoint principal para interactuar con el asistente AI
 * Body: { message: string }
 */
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        error: 'El campo "message" es requerido y debe ser un string'
      });
    }

    if (message.trim().length === 0) {
      return res.status(400).json({
        error: 'El mensaje no puede estar vacío'
      });
    }

    console.log('📩 Mensaje recibido:', message);

    // Generar respuesta
    const response = await generateAIResponse(message);

    res.json({
      success: true,
      message: response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Error en /api/chat:', error);
    res.status(500).json({
      error: 'Error al procesar la solicitud',
      details: error.message
    });
  }
});

/**
 * POST /api/chat/stream
 * Endpoint para respuestas en streaming
 * Body: { message: string }
 */
app.post('/api/chat/stream', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        error: 'El campo "message" es requerido y debe ser un string'
      });
    }

    if (message.trim().length === 0) {
      return res.status(400).json({
        error: 'El mensaje no puede estar vacío'
      });
    }

    console.log('📩 Mensaje recibido (stream):', message);

    // Configurar headers para streaming
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    // Callback para cada chunk
    const onChunk = (content) => {
      res.write(`data: ${JSON.stringify({ content })}\n\n`);
    };

    // Generar respuesta con streaming
    await generateAIResponseStream(message, onChunk);

    // Enviar evento de finalización
    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();

  } catch (error) {
    console.error('❌ Error en /api/chat/stream:', error);
    res.write(`data: ${JSON.stringify({ error: error.message })}\n\n`);
    res.end();
  }
});

/**
 * POST /api/refresh-pdfs
 * Recarga el cache de PDFs
 */
app.post('/api/refresh-pdfs', (req, res) => {
  try {
    refreshPDFCache();
    console.log('🔄 Cache de PDFs refrescado');
    res.json({
      success: true,
      message: 'Cache de PDFs refrescado correctamente',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('❌ Error al refrescar PDFs:', error);
    res.status(500).json({
      error: 'Error al refrescar cache de PDFs',
      details: error.message
    });
  }
});

/**
 * 404 Handler
 */
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint no encontrado',
    path: req.path
  });
});

/**
 * Error Handler
 */
app.use((error, req, res, next) => {
  console.error('❌ Error no manejado:', error);
  res.status(500).json({
    error: 'Error interno del servidor',
    details: error.message
  });
});

/**
 * Iniciar servidor
 */
app.listen(PORT, () => {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`🏥 Hospital Infantil AI Backend`);
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`📊 Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🤖 Modelo: llama-3.3-70b-versatile`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('\nEndpoints disponibles:');
  console.log(`  GET  /health              - Health check`);
  console.log(`  POST /api/chat            - Chat con IA`);
  console.log(`  POST /api/chat/stream     - Chat con streaming`);
  console.log(`  POST /api/refresh-pdfs    - Refrescar cache de PDFs`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
});

export default app;
