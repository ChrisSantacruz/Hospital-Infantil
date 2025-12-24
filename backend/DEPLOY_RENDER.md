# Desplegar Backend en Render

## 📝 Pasos para el Despliegue

### 1. Preparar el Repositorio

Asegúrate de que tu código esté en GitHub:

```bash
git add .
git commit -m "Preparar backend para Render"
git push origin main
```

### 2. Crear Web Service en Render

1. Ve a [Render Dashboard](https://dashboard.render.com/)
2. Click en **"New +"** → **"Web Service"**
3. Conecta tu repositorio de GitHub
4. Configura el servicio:

**Build & Deploy:**
- **Name:** `hospital-infantil-backend`
- **Region:** Oregon (US West) o la más cercana
- **Branch:** `main`
- **Root Directory:** `backend`
- **Runtime:** Node
- **Build Command:** `npm install`
- **Start Command:** `npm start`

**Plan:** Free (para empezar)

### 3. Configurar Variables de Entorno

En Render, ve a **Environment** y agrega:

```
GROQ_API_KEY=tu_api_key_de_groq_aqui
PORT=3001
NODE_ENV=production
PROJECT_NAME=Hospital Infantil
PROJECT_URL=https://hila-sigma.vercel.app/
```

### 4. Configurar CORS

Tu backend ya tiene CORS habilitado para todos los orígenes. Cuando tengas la URL de Vercel, puedes restringirlo editando `server.js`:

```javascript
app.use(cors({
  origin: 'https://tu-app.vercel.app'
}));
```

### 5. Deploy

Click en **"Create Web Service"**

Render automáticamente:
- ✅ Clonará tu repo
- ✅ Instalará dependencias
- ✅ Iniciará el servidor
- ✅ Te dará una URL como: `https://hospital-infantil-backend.onrender.com`

### 6. Verificar el Despliegue

Una vez desplegado, prueba:

```bash
curl https://hospital-infantil-backend.onrender.com/health
```

Deberías recibir:
```json
{
  "status": "ok",
  "service": "Hospital Infantil AI Backend",
  "timestamp": "2025-12-24T..."
}
```

## 📄 Subir PDFs a Render

Los PDFs no se suben automáticamente con el código. Tienes dos opciones:

### Opción 1: Incluir PDFs en el Repositorio (Recomendado)

1. Edita `backend/.gitignore` y comenta la línea de PDFs:
   ```
   # *.pdf
   # !PDFS/*.pdf
   ```

2. Agrega los PDFs:
   ```bash
   cd backend/PDFS
   git add *.pdf
   git commit -m "Agregar documentos PDF"
   git push
   ```

3. Redeploy en Render (automático si tienes auto-deploy)

### Opción 2: Usar Storage Externo (Para PDFs grandes)

Considera usar:
- AWS S3
- Google Cloud Storage
- Cloudinary

## 🔄 Auto-Deploy

Render puede hacer auto-deploy cuando pushes a GitHub:

1. En Render, ve a **Settings**
2. Busca **Auto-Deploy**
3. Actívalo para `main` branch

## 🐛 Troubleshooting

### Error: "Failed to start"
- Revisa los logs en Render Dashboard
- Verifica que todas las variables de entorno estén configuradas
- Confirma que `GROQ_API_KEY` sea válida

### Error: "Cannot find module"
- Asegúrate de que `package.json` esté en la carpeta `backend/`
- Verifica que el **Root Directory** en Render sea `backend`

### PDFs no se leen
- Confirma que los PDFs estén en `backend/PDFS/`
- Revisa los logs para errores de lectura
- Usa el endpoint `/api/refresh-pdfs` después del deploy

## 📊 Monitoreo

Render te proporciona:
- 📈 Logs en tiempo real
- 📉 Métricas de uso
- 🔔 Alertas de errores
- 🔄 Historial de deploys

## 💰 Costos

**Plan Free:**
- ✅ Ideal para desarrollo y pruebas
- ⚠️ Se "duerme" después de 15 min de inactividad
- ⚠️ Tarda ~30 segundos en "despertar"
- ✅ 750 horas gratis al mes

**Plan Paid ($7/mes):**
- ✅ Siempre activo
- ✅ Mejor rendimiento
- ✅ Sin "cold starts"

## 📝 Notas Importantes

1. **Primera petición lenta:** En el plan free, la primera petición puede tardar 30-60 segundos
2. **Variables de entorno:** Nunca las subas al repo, siempre configúralas en Render
3. **PDFs:** Asegúrate de subirlos o el asistente no tendrá contexto
4. **Logs:** Revisa los logs regularmente para detectar errores

## 🔗 Siguiente Paso

Una vez desplegado el backend, copia la URL de Render y úsala en el despliegue de Vercel.

Tu URL será algo como:
```
https://hospital-infantil-backend.onrender.com
```

¡Guárdala! La necesitarás para configurar el frontend en Vercel.
