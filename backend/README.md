# Hospital Infantil - Backend AI

Backend API con integración de Groq AI para el proyecto arquitectónico Hospital Infantil.

## 🚀 Características

- ✅ Asistente AI especializado en arquitectura
- ✅ Lectura automática de documentos PDF
- ✅ API REST con Express
- ✅ Streaming de respuestas en tiempo real
- ✅ Cache inteligente de documentos

## 📋 Requisitos

- Node.js 18+
- npm o yarn

## 🛠️ Instalación

1. Instalar dependencias:
```bash
cd backend
npm install
```

2. Configurar variables de entorno (`.env`):
```env
GROQ_API_KEY=tu_api_key_aqui
PORT=3001
NODE_ENV=development
PROJECT_NAME=Hospital Infantil
PROJECT_URL=https://hila-sigma.vercel.app/
```

## 🎯 Uso

### Iniciar el servidor

**Modo desarrollo (con auto-reload):**
```bash
npm run dev
```

**Modo producción:**
```bash
npm start
```

El servidor estará disponible en `http://localhost:3001`

## 📡 Endpoints API

### 1. Health Check
```http
GET /health
```

Verifica el estado del servidor.

**Respuesta:**
```json
{
  "status": "ok",
  "service": "Hospital Infantil AI Backend",
  "timestamp": "2025-12-24T..."
}
```

---

### 2. Chat con IA (respuesta completa)
```http
POST /api/chat
Content-Type: application/json

{
  "message": "¿Cuál es el presupuesto del proyecto?"
}
```

**Respuesta:**
```json
{
  "success": true,
  "message": "Según los documentos del proyecto...",
  "timestamp": "2025-12-24T..."
}
```

---

### 3. Chat con Streaming
```http
POST /api/chat/stream
Content-Type: application/json

{
  "message": "Explícame los materiales utilizados"
}
```

Responde con Server-Sent Events (SSE) para streaming en tiempo real.

**Eventos:**
```
data: {"content": "Los materiales principales..."}
data: {"content": " incluyen..."}
data: {"done": true}
```

---

### 4. Refrescar Cache de PDFs
```http
POST /api/refresh-pdfs
```

Fuerza la recarga del contenido de los PDFs.

**Respuesta:**
```json
{
  "success": true,
  "message": "Cache de PDFs refrescado correctamente",
  "timestamp": "2025-12-24T..."
}
```

## 📁 Estructura del Proyecto

```
backend/
├── server.js                 # Servidor Express
├── package.json             # Dependencias
├── .env                     # Variables de entorno
├── .gitignore              
├── IA/
│   ├── groqService.js      # Servicio de Groq AI
│   └── pdfService.js       # Lectura de PDFs
└── PDFS/                    # Documentos del proyecto
    ├── presupuesto.pdf
    └── cotizacion.pdf
```

## 🤖 Modelo de IA

- **Proveedor:** Groq
- **Modelo:** llama-3.3-70b-versatile
- **Contexto:** Documentos PDF + información del proyecto
- **Especialización:** Asistente arquitectónico profesional

## 📦 Dependencias

- `express` - Framework web
- `groq-sdk` - SDK de Groq AI
- `pdf-parse` - Extracción de texto de PDFs
- `cors` - CORS habilitado
- `dotenv` - Variables de entorno

## 🔒 Seguridad

- ⚠️ **Nunca** subas el archivo `.env` al repositorio
- ⚠️ Mantén tu API key de Groq privada
- ✅ El `.gitignore` ya excluye `.env` y `node_modules/`

## 🧪 Testing

### Con curl:
```bash
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hola, cuéntame sobre el proyecto"}'
```

### Con JavaScript (fetch):
```javascript
const response = await fetch('http://localhost:3001/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    message: '¿Cuánto cuesta el proyecto?' 
  })
});

const data = await response.json();
console.log(data.message);
```

## 📝 Notas

- Los PDFs se cachean por 5 minutos para mejor rendimiento
- El asistente SOLO responde preguntas sobre el proyecto arquitectónico
- Usa `/api/refresh-pdfs` después de agregar nuevos PDFs

## 🐛 Troubleshooting

**Error: "GROQ_API_KEY not found"**
- Verifica que el archivo `.env` exista
- Confirma que `GROQ_API_KEY` esté configurado correctamente

**No se leen los PDFs**
- Verifica que los PDFs estén en la carpeta `PDFS/`
- Revisa los logs del servidor para errores de lectura
- Usa `/api/refresh-pdfs` para recargar

## 📄 Licencia

ISC
