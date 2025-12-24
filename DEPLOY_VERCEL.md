# Desplegar Frontend en Vercel

## 📝 Pasos para el Despliegue

### 1. Preparar el Proyecto

Asegúrate de que tu código esté actualizado en GitHub:

```bash
git add .
git commit -m "Preparar frontend para Vercel"
git push origin main
```

### 2. Desplegar en Vercel

#### Opción A: Desde la Web (Recomendado)

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Click en **"Add New..."** → **"Project"**
3. Importa tu repositorio de GitHub
4. Configura el proyecto:

**Framework Preset:** Next.js (detectado automáticamente)
**Root Directory:** `./` (raíz del proyecto)
**Build Command:** `next build` (automático)
**Output Directory:** `.next` (automático)

#### Opción B: Desde la CLI

```bash
# Instalar Vercel CLI (si no lo tienes)
npm i -g vercel

# Desde la raíz del proyecto
vercel

# Seguir las instrucciones
# - Set up and deploy? Yes
# - Which scope? Tu cuenta
# - Link to existing project? No
# - What's your project's name? hospital-infantil
# - In which directory is your code located? ./
# - Want to modify settings? No
```

### 3. Configurar Variables de Entorno

**IMPORTANTE:** Debes configurar la URL del backend de Render.

En Vercel Dashboard:
1. Ve a tu proyecto → **Settings** → **Environment Variables**
2. Agrega:

```
NEXT_PUBLIC_BACKEND_URL=https://hospital-infantil-backend.onrender.com
```

**⚠️ Reemplaza la URL con tu URL real de Render**

### 4. Re-Deploy después de agregar Variables

Las variables de entorno requieren un nuevo deploy:

1. Ve a **Deployments**
2. Click en los **"..."** del último deploy
3. Click en **"Redeploy"**

O desde la CLI:
```bash
vercel --prod
```

### 5. Verificar el Despliegue

Tu app estará disponible en:
```
https://hospital-infantil-[hash].vercel.app
```

Vercel te dará una URL automática. Puedes configurar un dominio personalizado después.

## 🔧 Configuración Avanzada

### Configurar Dominio Personalizado

1. Ve a **Settings** → **Domains**
2. Agrega tu dominio
3. Configura los DNS según las instrucciones

### Optimización de Build

Crea `vercel.json` en la raíz (opcional):

```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### Redirects y Rewrites

Si necesitas configurar redirects, edita `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://hospital-infantil-backend.onrender.com/api/:path*'
      }
    ]
  }
}

module.exports = nextConfig
```

## 🧪 Probar el Asistente AI

1. Abre tu app en Vercel: `https://tu-app.vercel.app`
2. Click en el botón flotante **"Asistente"**
3. Envía un mensaje de prueba

**Primera vez:** Si usas Render Free, la primera petición puede tardar 30-60 segundos mientras el backend "despierta".

## 🔄 Auto-Deploy

Vercel hace auto-deploy automáticamente cuando:
- ✅ Pusheas a `main` (producción)
- ✅ Pusheas a cualquier branch (preview)
- ✅ Abres un Pull Request (preview)

Cada push genera un preview único.

## 🐛 Troubleshooting

### Error: "NEXT_PUBLIC_BACKEND_URL is not defined"
- Asegúrate de agregar la variable en Vercel Settings
- Re-deploya después de agregar la variable
- Verifica que el nombre sea exactamente `NEXT_PUBLIC_BACKEND_URL`

### Error: "Failed to fetch" en el asistente
- Verifica que el backend esté corriendo en Render
- Confirma que la URL del backend sea correcta
- Revisa la consola del navegador para más detalles
- Verifica que CORS esté configurado correctamente en el backend

### Asistente tarda mucho en responder
- Es normal la primera vez con Render Free (cold start)
- Considera upgradar Render a plan paid ($7/mes)
- O implementa un "keep-alive" ping al backend

### Cambios no se reflejan
- Verifica que el deploy haya terminado
- Limpia cache del navegador (Ctrl+Shift+R)
- Espera a que se propague (1-2 minutos)

## 📊 Monitoreo

Vercel proporciona:
- 📈 Analytics de tráfico
- 📉 Métricas de rendimiento
- 🔍 Logs en tiempo real
- 🔄 Historial de deployments
- 🌍 Distribución geográfica

## 💰 Costos

**Plan Hobby (Free):**
- ✅ Perfecto para proyectos personales
- ✅ Deployments ilimitados
- ✅ HTTPS automático
- ✅ CDN global
- ⚠️ 100GB bandwidth/mes

**Plan Pro ($20/mes):**
- ✅ Más bandwidth
- ✅ Password protection
- ✅ Analytics avanzados

## 🔐 Seguridad

### Proteger Variables de Entorno

- ✅ Usa `NEXT_PUBLIC_` solo para variables que pueden ser públicas
- ❌ Nunca pongas API keys secretas con `NEXT_PUBLIC_`
- ✅ Las variables sin `NEXT_PUBLIC_` solo están en el servidor

### CORS

Si tienes problemas de CORS, actualiza el backend en `server.js`:

```javascript
app.use(cors({
  origin: [
    'https://tu-app.vercel.app',
    'http://localhost:3000'
  ]
}));
```

## 🎯 Checklist Final

Antes de compartir tu app:

- [ ] Backend desplegado en Render y funcionando
- [ ] Variable `NEXT_PUBLIC_BACKEND_URL` configurada en Vercel
- [ ] PDFs subidos al backend
- [ ] Asistente AI responde correctamente
- [ ] Probado en diferentes navegadores
- [ ] Probado en mobile
- [ ] HTTPS funcionando (automático en Vercel)

## 📝 URLs Finales

Guarda estas URLs:

**Backend (Render):**
```
https://hospital-infantil-backend.onrender.com
```

**Frontend (Vercel):**
```
https://hospital-infantil-[hash].vercel.app
```

**Dominio Personalizado (opcional):**
```
https://tu-dominio.com
```

## 🚀 Próximos Pasos

1. **Configura un dominio personalizado** en Vercel (opcional)
2. **Agrega tus PDFs reales** al backend
3. **Prueba el asistente** con preguntas reales de clientes
4. **Monitorea el uso** en Vercel Analytics
5. **Considera upgradar Render** si el cold start es un problema

## 🆘 Soporte

**Render:**
- Docs: https://render.com/docs
- Support: https://render.com/support

**Vercel:**
- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord

---

¡Tu proyecto está listo para producción! 🎉
