# Hospital Infantil - Proyecto Arquitectónico con IA

Sitio web del proyecto arquitectónico Hospital Infantil con asistente AI integrado usando Groq.

![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![Groq](https://img.shields.io/badge/Groq-AI-purple)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🌟 Características

- ✨ **Frontend moderno** con Next.js 14 y Tailwind CSS
- 🤖 **Asistente AI** con Groq (llama-3.3-70b-versatile)
- 📄 **Lectura automática de PDFs** (presupuestos, cotizaciones)
- 🎨 **Diseño profesional** con animaciones Framer Motion
- 📱 **Responsive** y optimizado para móviles
- ⚡ **Rendimiento óptimo** con Server-Side Rendering

## 🏗️ Arquitectura

```
Frontend (Next.js)  ←→  Backend (Express + Groq)  ←→  Groq AI
      ↓                           ↓
   Vercel                      Render
```

## 🚀 Inicio Rápido

### Desarrollo Local

**1. Clonar el repositorio**
```bash
git clone <tu-repo>
cd hospital-infantil
```

**2. Instalar dependencias**
```bash
# Frontend
npm install

# Backend
cd backend
npm install
cd ..
```

**3. Configurar variables de entorno**

Crear `.env.local` en la raíz:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

Crear `backend/.env`:
```env
GROQ_API_KEY=tu_api_key_aqui
PORT=3001
NODE_ENV=development
PROJECT_NAME=Hospital Infantil
PROJECT_URL=https://hila-sigma.vercel.app/
```

**4. Iniciar servidores**

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
npm run dev
```

**5. Abrir en el navegador**
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## 📦 Despliegue en Producción

### Opción Rápida
Sigue la guía paso a paso: **[DEPLOYMENT.md](DEPLOYMENT.md)**

### Despliegue Manual

**Backend en Render:**
1. Conecta tu repo en [Render](https://dashboard.render.com/)
2. Root Directory: `backend`
3. Build: `npm install`
4. Start: `npm start`
5. Agrega variables de entorno
6. Deploy

Ver guía completa: [DEPLOY_RENDER.md](backend/DEPLOY_RENDER.md)

**Frontend en Vercel:**
1. Importa tu repo en [Vercel](https://vercel.com/)
2. Framework: Next.js (auto-detectado)
3. Agrega `NEXT_PUBLIC_BACKEND_URL` con la URL de Render
4. Deploy

Ver guía completa: [DEPLOY_VERCEL.md](DEPLOY_VERCEL.md)

## 📁 Estructura del Proyecto

```
hospital-infantil/
├── app/                        # Next.js App Router
│   ├── page.tsx               # Página principal
│   ├── layout.tsx             # Layout global
│   └── globals.css            # Estilos globales
├── components/                 # Componentes React
│   ├── Hero.tsx               # Sección hero
│   ├── AiAssistant.tsx        # 🤖 Asistente AI
│   ├── Projects.tsx           # Proyectos
│   └── ...
├── backend/                    # Backend API
│   ├── server.js              # Servidor Express
│   ├── package.json           
│   ├── IA/
│   │   ├── groqService.js     # Integración Groq
│   │   └── pdfService.js      # Lectura PDFs
│   └── PDFS/                  # 📄 Documentos
├── .env.local                 # Config frontend
├── package.json               
└── README.md
```

## 🤖 Asistente AI

El asistente AI está especializado en:
- ✅ Diseño arquitectónico del proyecto
- ✅ Materiales y especificaciones técnicas
- ✅ Presupuestos y costos
- ✅ Cronogramas de construcción
- ✅ Normativa aplicada (Resolución 1633/2025)

**Características:**
- Responde SOLO sobre el proyecto
- Lee documentos PDF automáticamente
- Adapta lenguaje técnico/cliente según contexto
- Streaming de respuestas en tiempo real

## 📄 Agregar Documentos

Coloca tus PDFs en `backend/PDFS/`:
```bash
cp presupuesto.pdf backend/PDFS/
cp cotizacion.pdf backend/PDFS/
```

El backend los lee automáticamente y los usa como contexto para el AI.

## 🛠️ Tecnologías

### Frontend
- **Next.js 14** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web Framework
- **Groq SDK** - AI Integration
- **pdf-parse** - PDF Reading
- **CORS** - Cross-Origin Support

### Infraestructura
- **Vercel** - Frontend Hosting
- **Render** - Backend Hosting
- **Groq** - AI Model (llama-3.3-70b)

## 🧪 Testing

### Backend
```bash
cd backend

# Health check
curl http://localhost:3001/health

# Test chat
curl -X POST http://localhost:3001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hola"}'
```

### Frontend
```bash
npm run dev
# Abre http://localhost:3000
# Click en "Asistente" y envía un mensaje
```

## 📊 Scripts Disponibles

### Frontend
```bash
npm run dev      # Desarrollo
npm run build    # Build para producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

### Backend
```bash
npm run dev      # Desarrollo con watch mode
npm start        # Producción
```

## 🔒 Seguridad

- ✅ Variables de entorno protegidas
- ✅ `.env` excluido en `.gitignore`
- ✅ CORS configurado
- ✅ API key de Groq privada
- ✅ Rate limiting (próximamente)

## 📚 Documentación

- [DEPLOYMENT.md](DEPLOYMENT.md) - Guía rápida de despliegue
- [DEPLOY_RENDER.md](backend/DEPLOY_RENDER.md) - Despliegue backend detallado
- [DEPLOY_VERCEL.md](DEPLOY_VERCEL.md) - Despliegue frontend detallado
- [INTEGRATION.md](INTEGRATION.md) - Integración frontend-backend
- [backend/README.md](backend/README.md) - Documentación del backend

## 🐛 Troubleshooting

### "Backend no responde"
- Verifica que esté corriendo en puerto 3001
- En Render Free, primera petición tarda 30-60 seg

### "Error de CORS"
- Confirma `NEXT_PUBLIC_BACKEND_URL` en `.env.local`
- Verifica CORS en `backend/server.js`

### "PDFs no se leen"
- Coloca PDFs en `backend/PDFS/`
- Usa `/api/refresh-pdfs` para recargar

Ver más en las guías de despliegue.

## 💰 Costos

| Servicio | Plan | Costo/mes |
|----------|------|-----------|
| Vercel   | Hobby| $0        |
| Render   | Free | $0        |
| Groq     | Free | $0*       |

*Groq tiene límites de rate. Ver [console.groq.com](https://console.groq.com/)

**Para eliminar cold starts:** Upgrade Render a $7/mes

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es privado. Todos los derechos reservados.

## 👤 Autor

Proyecto arquitectónico Hospital Infantil

## 🙏 Agradecimientos

- [Groq](https://groq.com/) por el modelo AI
- [Vercel](https://vercel.com/) por el hosting frontend
- [Render](https://render.com/) por el hosting backend
- [Next.js](https://nextjs.org/) por el framework

---

**¿Necesitas ayuda?** Revisa la documentación completa en los archivos DEPLOY_*.md

**¿Listo para desplegar?** Empieza con [DEPLOYMENT.md](DEPLOYMENT.md)
