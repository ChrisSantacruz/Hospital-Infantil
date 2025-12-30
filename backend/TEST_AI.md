# Testing AI Assistant

## PDFs Disponibles

El asistente de IA ahora tiene acceso a todos los PDFs del proyecto:

### Láminas Arquitectónicas (7 total)
1. **ARQUITECTONICO LAMINA 1.pdf** - Planta arquitectónica y programa médico-arquitectónico
2. **LAMINA 2 DISEÑO PISOS.pdf** - Diseño de pisos, materiales y acabados
3. **ARQUITECTONICO LAMINA 3 DISEÑO CIELOS.pdf** - Diseño de cielorrasos, iluminación y pérgola
4. **ARQUITECTONICO Lamina 4 sustentabilidad.pdf** - Estrategias pasivas, ventilación y sustentabilidad
5. **LAMINA 5 FASES DE EJECUCION DEL PROYECTO (1).pdf** - 4 fases de construcción (15 semanas)
6. **LAMINA 6 DEMOLICIOINES.pdf** - Plan de demoliciones y protocolos de seguridad
7. **LAMINA 7 ACABADOS.pdf** - Especificaciones de acabados arquitectónicos

### Documentación Adicional
- **MEMORIA DESCRIPTIVA PROYECTO.pdf** - Memoria descriptiva completa del proyecto
- **cotizacion_diseño.pdf** - Cotización de diseño
- **presupuesto_obra.pdf** - Presupuesto de obra

## Cómo Iniciar el Servidor

```bash
cd backend
npm start
```

El servidor estará disponible en `http://localhost:3001`

## Probar la IA

### Endpoint: POST /api/chat

```bash
# Ejemplo con curl
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "¿Cuántas fases tiene el proyecto y cuánto dura cada una?"}'

# Ejemplo con PowerShell
Invoke-RestMethod -Uri "http://localhost:3001/api/chat" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"message": "¿Cuántas fases tiene el proyecto?"}'
```

### Endpoint: POST /api/chat/stream (Streaming)

Para respuestas en tiempo real.

## Preguntas de Prueba

### Sobre Fases de Ejecución
- "¿Cuántas fases de construcción tiene el proyecto?"
- "¿Cuál es la duración total de la obra?"
- "Explica la Fase 1 de preparación"

### Sobre Arquitectura
- "¿Cuál es el área total de intervención?"
- "¿Cuántos consultorios hay en el diseño?"
- "Describe la Sala de Observación"

### Sobre Materiales
- "¿Qué tipo de pisos se utilizan?"
- "¿Qué materiales se usan en los muros?"
- "Describe el sistema de cielos falsos"

### Sobre Sustentabilidad
- "¿Qué estrategias pasivas se implementan?"
- "¿Cómo funciona la ventilación natural?"
- "Explica el sistema de pérgola"

### Sobre Presupuesto
- "¿Cuál es el presupuesto del proyecto?"
- "¿Cuánto cuesta el diseño?"

## Características del Asistente

### ✅ El asistente PUEDE responder sobre:
- Diseño arquitectónico y reorganización funcional
- Fases constructivas (4 fases, 15 semanas)
- Materiales y acabados técnicos
- Sistemas de cielos e iluminación
- Estrategias de sustentabilidad
- Plan de demoliciones
- Presupuestos y costos
- Normativa (RES 1633, NTC 6199)

### ❌ El asistente NO responderá sobre:
- Temas no relacionados con el proyecto
- Información general o externa
- Cambios o modificaciones no documentadas

## Notas Importantes

1. **Cache de PDFs**: Los PDFs se cachean por 5 minutos para mejorar el rendimiento
2. **Modelo**: Usa `llama-3.3-70b-versatile` de Groq
3. **Contexto Limitado**: Solo responde sobre la información contenida en los PDFs
4. **Estilo Adaptativo**: Ajusta su lenguaje según el interlocutor (técnico vs. administrativo)

## Actualización del Sistema

Si agregas o modificas PDFs:
1. Copia los PDFs a la carpeta `backend/PDFS/`
2. Reinicia el servidor (el cache se actualizará automáticamente)

## Variables de Entorno Requeridas

Asegúrate de tener configurado en `.env`:
```
GROQ_API_KEY=tu_api_key_aqui
PORT=3001
```
