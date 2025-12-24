# Hospital Infantil - Integración Frontend + Backend AI

Este proyecto combina un frontend Next.js con un backend Node.js que utiliza Groq AI para responder preguntas sobre el proyecto arquitectónico.

## 🚀 Inicio Rápido

### 1. Backend (Puerto 3001)

```bash
cd backend
npm install
npm run dev
```

El backend estará disponible en `http://localhost:3001`

### 2. Frontend (Puerto 3000)

En otra terminal:

```bash
npm install
npm run dev
```

El frontend estará disponible en `http://localhost:3000`

## 📁 Configuración

### Backend (.env en carpeta backend/)
```env
GROQ_API_KEY=tu_api_key_de_groq_aqui
PORT=3001
NODE_ENV=development
PROJECT_NAME=Hospital Infantil
PROJECT_URL=https://hila-sigma.vercel.app/
```

### Frontend (.env.local en raíz del proyecto)
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

## 📄 Agregar Documentos PDF

1. Coloca tus PDFs (presupuestos, cotizaciones, planos) en:
   ```
   backend/PDFS/
   ```

2. El backend lee automáticamente todos los PDFs y los usa como contexto para la IA

3. Si agregas nuevos PDFs mientras el servidor está corriendo, puedes refrescar el cache:
   ```bash
   curl -X POST http://localhost:3001/api/refresh-pdfs
   ```

## 🎯 Uso del Asistente

1. Abre el frontend en `http://localhost:3000`
2. Haz clic en el botón flotante "Asistente" en la esquina inferior derecha
3. Pregunta sobre:
   - Materiales y especificaciones técnicas
   - Presupuestos y costos
   - Cronogramas de construcción
   - Diseño arquitectónico
   - Normativas aplicadas

## 🧪 Probar el Backend Directamente

### Con curl:
```bash
# Verificar estado
curl http://localhost:3001/health

# Enviar pregunta
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d "{\"message\": \"¿Cuál es el presupuesto del proyecto?\"}"
```

### Con JavaScript:
```javascript
const response = await fetch('http://localhost:3001/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    message: '¿Qué materiales se utilizan en los pisos?' 
  })
});

const data = await response.json();
console.log(data.message);
```

## 🔧 Arquitectura

```
Frontend (Next.js)          Backend (Node.js + Express)      Groq AI
    |                              |                             |
    |-- AiAssistant.tsx            |                             |
    |   (Componente UI)            |-- server.js                 |
    |                              |   (API REST)                |
    |                              |                             |
    |-- POST /api/chat -------->   |-- groqService.js ------->   |
    |                              |   (Lógica de IA)            |
    |                              |                             |
    |                              |-- pdfService.js             |
    |                              |   (Lee PDFs)                |
    |                              |                             |
    |<-------- respuesta --------- |<-------- respuesta -------- |
```

## 📦 Estructura de Carpetas

```
Hospital Infantil/
├── app/                    # Next.js app directory
├── components/            
│   └── AiAssistant.tsx    # Componente del chat AI
├── backend/
│   ├── server.js          # Servidor Express
│   ├── .env               # Variables de entorno backend
│   ├── package.json       
│   ├── IA/
│   │   ├── groqService.js # Integración con Groq
│   │   └── pdfService.js  # Lectura de PDFs
│   └── PDFS/              # Documentos del proyecto
│       ├── presupuesto.pdf
│       └── cotizacion.pdf
├── .env.local             # Variables de entorno frontend
└── package.json
```

## 🤖 Características del Asistente AI

- ✅ Responde SOLO preguntas sobre el proyecto arquitectónico
- ✅ Usa contexto de los PDFs subidos
- ✅ Adapta el lenguaje según el interlocutor (técnico/cliente)
- ✅ Respuestas profesionales y precisas
- ✅ No inventa información
- ✅ Modelo: llama-3.3-70b-versatile

## 🚨 Troubleshooting

### Backend no inicia
- Verifica que el archivo `.env` exista en `backend/`
- Confirma que `GROQ_API_KEY` esté configurado
- Revisa que el puerto 3001 no esté en uso

### Frontend no se conecta al backend
- Verifica que el backend esté corriendo en puerto 3001
- Confirma que `.env.local` tenga `NEXT_PUBLIC_BACKEND_URL=http://localhost:3001`
- Revisa la consola del navegador para errores de CORS

### No lee los PDFs
- Verifica que los PDFs estén en `backend/PDFS/`
- Revisa los logs del backend al iniciar
- Usa `/api/refresh-pdfs` para recargar

## 📝 Próximos Pasos Recomendados

1. Agregar tus documentos PDF reales al proyecto
2. Probar el asistente con preguntas típicas de clientes
3. Ajustar el `SYSTEM_PROMPT` en `groqService.js` si necesitas personalizar las respuestas
4. Configurar variables de entorno para producción cuando despliegues

## 🔐 Seguridad

- ⚠️ Nunca subas archivos `.env` al repositorio
- ⚠️ Mantén tu `GROQ_API_KEY` privada
- ✅ Los archivos `.gitignore` ya están configurados correctamente

## 📞 Soporte

Para problemas o preguntas adicionales sobre la integración, revisa:
- Documentación de Groq: https://console.groq.com/docs
- Documentación de Next.js: https://nextjs.org/docs
