# Configuración de Email en Producción

## 🚨 Problema Actual
El formulario de contacto muestra "Error al enviar el mensaje. Por favor, inténtalo de nuevo." en producción.

## 🔍 Causas Posibles

### 1. Variables de Entorno No Configuradas
Las variables de entorno necesarias no están configuradas en tu plataforma de hosting.

### 2. Credenciales de Gmail Incorrectas
Las credenciales de Gmail no están configuradas correctamente.

### 3. Configuración de Gmail App Password
Gmail requiere una contraseña de aplicación específica para aplicaciones de terceros.

## ✅ Solución Paso a Paso

### Paso 1: Configurar Gmail App Password

1. **Activar 2FA en Gmail** (si no está activado):
   - Ve a tu cuenta de Google
   - Seguridad → Verificación en 2 pasos
   - Actívala si no está activada

2. **Generar App Password**:
   - Ve a Seguridad → Contraseñas de aplicaciones
   - Selecciona "Aplicación" → "Otro (nombre personalizado)"
   - Escribe "RSYNAPSYSEAI Website"
   - Copia la contraseña generada (16 caracteres)

### Paso 2: Configurar Variables de Entorno

#### Para Vercel:
1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega estas variables:
   ```
   EMAIL_USER=rsynapseai@gmail.com
   EMAIL_PASS=tu_app_password_aqui
   ```

#### Para Netlify:
1. Ve a Site Settings → Environment Variables
2. Agrega las mismas variables

#### Para otros hosts:
Configura las variables de entorno según la documentación de tu proveedor.

### Paso 3: Verificar Configuración

1. **Redeploy** tu aplicación después de configurar las variables
2. **Prueba el formulario** de contacto
3. **Revisa los logs** en tu plataforma de hosting

## 🔧 Debugging

### Verificar Variables de Entorno
Puedes crear un endpoint temporal para verificar:

```javascript
// app/api/debug/route.ts
export async function GET() {
  return NextResponse.json({
    hasEmailUser: !!process.env.EMAIL_USER,
    hasEmailPass: !!process.env.EMAIL_PASS,
    nodeEnv: process.env.NODE_ENV
  })
}
```

### Logs de Error
Revisa los logs de tu plataforma de hosting para ver errores específicos:
- Vercel: Functions → View Function Logs
- Netlify: Functions → View Function Logs

## 🚨 Errores Comunes

### "Invalid login"
- **Causa**: Credenciales incorrectas
- **Solución**: Verifica EMAIL_USER y EMAIL_PASS

### "Authentication failed"
- **Causa**: Gmail App Password incorrecto
- **Solución**: Genera una nueva App Password

### "Connection timeout"
- **Causa**: Problemas de red o firewall
- **Solución**: Verifica conectividad del servidor

## 📧 Configuración Alternativa

Si Gmail no funciona, puedes usar otros proveedores:

### SendGrid
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
})
```

### Mailgun
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  auth: {
    user: process.env.MAILGUN_SMTP_USER,
    pass: process.env.MAILGUN_SMTP_PASSWORD
  }
})
```

## ✅ Verificación Final

Una vez configurado correctamente, deberías ver en los logs:
```
✅ Conexión SMTP verificada correctamente
✅ Email enviado exitosamente: <message-id>
```

Y el formulario debería mostrar:
```
✅ Mensaje enviado exitosamente
```
