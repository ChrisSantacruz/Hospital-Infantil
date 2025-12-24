# 🚀 Guía Rápida de Despliegue

Despliega tu proyecto Hospital Infantil en minutos.

## 📋 Orden de Despliegue

**1️⃣ Backend primero (Render)**  
**2️⃣ Frontend después (Vercel)**

---

## 🔥 PASO 1: Backend en Render (10 min)

### A. Prepara el código

```bash
# Asegúrate de estar en la raíz del proyecto
git add .
git commit -m "Deploy backend y frontend"
git push origin main
```

### B. Crea Web Service en Render

1. 🌐 Ve a https://dashboard.render.com/
2. ➕ Click **"New +"** → **"Web Service"**
3. 🔗 Conecta tu repo de GitHub
4. ⚙️ Configura:
   - **Name:** `hospital-infantil-backend`
   - **Root Directory:** `backend`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

### C. Agrega Variables de Entorno

En **Environment** tab:

```env
GROQ_API_KEY=tu_api_key_de_groq_aqui
PORT=3001
NODE_ENV=production
PROJECT_NAME=Hospital Infantil
PROJECT_URL=https://hila-sigma.vercel.app/
```

### D. Deploy

- Click **"Create Web Service"**
- Espera 3-5 minutos
- ✅ Copia tu URL: `https://hospital-infantil-backend.onrender.com`

### E. Prueba que funcione

```bash
curl https://hospital-infantil-backend.onrender.com/health
```

Debes ver:
```json
{"status":"ok","service":"Hospital Infantil AI Backend",...}
```

---

## 🎨 PASO 2: Frontend en Vercel (5 min)

### A. Despliega en Vercel

1. 🌐 Ve a https://vercel.com/dashboard
2. ➕ Click **"Add New..."** → **"Project"**
3. 🔗 Importa tu repo de GitHub
4. ⚙️ Vercel detecta Next.js automáticamente
5. ⏭️ Click **"Deploy"**

### B. Agrega Variable de Entorno

⚠️ **IMPORTANTE:** Configura la URL del backend

1. Ve a **Settings** → **Environment Variables**
2. Agrega:

```
Variable: NEXT_PUBLIC_BACKEND_URL
Value: https://hospital-infantil-backend.onrender.com
```

(Usa TU URL de Render del Paso 1)

### C. Re-Deploy

1. Ve a **Deployments**
2. Click **"..."** en el último deploy
3. Click **"Redeploy"**

### D. ¡Listo! 🎉

Tu app está en:
```
https://hospital-infantil-[hash].vercel.app
```

---

## 🧪 Prueba el Asistente AI

1. Abre tu app en Vercel
2. Click en **"Asistente"** (botón flotante)
3. Pregunta: _"¿Qué puedes decirme sobre el proyecto?"_

⏱️ **Primera vez:** Puede tardar 30-60 seg (Render Free "despierta")

---

## 📄 PASO 3: Subir PDFs (Opcional)

Si quieres que el asistente lea tus documentos:

### Opción 1: En el repositorio

```bash
# Edita backend/.gitignore y comenta:
# *.pdf

# Agrega tus PDFs
cp presupuesto.pdf backend/PDFS/
cp cotizacion.pdf backend/PDFS/

git add backend/PDFS/*.pdf
git commit -m "Agregar documentos PDF"
git push

# Render re-desplegará automáticamente
```

### Opción 2: Manualmente en Render

Contacta a Render Support para subir archivos (más complejo)

---

## 🔧 Actualizar CORS (Recomendado)

Una vez desplegado todo, actualiza el backend para mayor seguridad:

En `backend/server.js`, cambia:

```javascript
// De:
app.use(cors());

// A:
app.use(cors({
  origin: [
    'https://tu-app.vercel.app',  // Tu URL de Vercel
    'http://localhost:3000'        // Para desarrollo
  ]
}));
```

Guarda, commit y push:
```bash
git add .
git commit -m "Actualizar CORS"
git push
```

---

## 📊 Monitoreo

### Render (Backend)
- 📈 Logs: https://dashboard.render.com → Tu servicio → **Logs**
- 🔄 Status: Verifica que esté "Live"

### Vercel (Frontend)
- 📈 Analytics: Tu proyecto → **Analytics**
- 🔍 Logs: Tu proyecto → **Deployments** → Click en uno → **Logs**

---

## 🐛 Troubleshooting Rápido

### ❌ Backend no responde
```bash
# Verifica el status
curl https://tu-backend.onrender.com/health
```
- Si tarda 30+ seg → Normal en Render Free (cold start)
- Si error 500 → Revisa logs en Render
- Si error 404 → Verifica la URL

### ❌ Frontend no conecta al backend
1. ✅ Verifica variable en Vercel: **Settings** → **Environment Variables**
2. ✅ Confirma que re-desplegaste después de agregar la variable
3. ✅ Abre DevTools (F12) → **Console** para ver errores

### ❌ Asistente no responde
1. ✅ Backend funcionando? → Prueba `/health`
2. ✅ Variable configurada? → Vercel Settings
3. ✅ Primera petición? → Espera 30-60 seg (Render Free)

---

## ✅ Checklist Final

- [ ] Backend desplegado en Render
- [ ] `/health` responde OK
- [ ] Frontend desplegado en Vercel
- [ ] Variable `NEXT_PUBLIC_BACKEND_URL` configurada
- [ ] Re-desplegado después de agregar variable
- [ ] Asistente responde correctamente
- [ ] (Opcional) PDFs subidos
- [ ] (Opcional) CORS configurado

---

## 📝 URLs para Guardar

```
Backend:  https://hospital-infantil-backend.onrender.com
Frontend: https://hospital-infantil-[hash].vercel.app
```

---

## 💰 Costos

| Servicio | Plan | Costo | Límites |
|----------|------|-------|---------|
| Render   | Free | $0    | 750h/mes, cold starts |
| Vercel   | Hobby| $0    | 100GB bandwidth |

**Para eliminar cold starts:** Upgrade Render a $7/mes

---

## 📚 Documentación Completa

- [DEPLOY_RENDER.md](backend/DEPLOY_RENDER.md) - Guía detallada backend
- [DEPLOY_VERCEL.md](DEPLOY_VERCEL.md) - Guía detallada frontend
- [INTEGRATION.md](INTEGRATION.md) - Cómo funciona la integración

---

## 🎉 ¡Felicidades!

Tu proyecto está en producción. Comparte tu URL de Vercel con clientes.

**¿Necesitas ayuda?**
- Render: https://render.com/support
- Vercel: https://vercel.com/docs
