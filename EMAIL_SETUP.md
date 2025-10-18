# 📧 Configuración de Email - RSYNAPSYSEAI

## Configuración del Formulario de Contacto

El formulario de contacto está configurado para enviar emails a `rsynapseai@gmail.com` usando Nodemailer con Gmail.

### Pasos para Configurar:

#### 1. Crear archivo `.env.local`
Crea un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

```env
EMAIL_USER=rsynapseai@gmail.com
EMAIL_PASS=tu_app_password_de_gmail_aqui
```

#### 2. Configurar Gmail App Password

Para usar Gmail con Nodemailer, necesitas generar una "Contraseña de aplicación":

1. **Habilitar verificación en 2 pasos:**
   - Ve a tu cuenta de Google
   - Seguridad → Verificación en 2 pasos
   - Actívala si no está activada

2. **Generar contraseña de aplicación:**
   - Ve a Seguridad → Contraseñas de aplicaciones
   - Selecciona "Correo" y "Otro (nombre personalizado)"
   - Escribe "RSYNAPSYSEAI Website"
   - Copia la contraseña generada (16 caracteres)

3. **Usar la contraseña de aplicación:**
   - Reemplaza `tu_app_password_de_gmail_aqui` en `.env.local` con la contraseña generada

#### 3. Variables de Entorno

El sistema busca las siguientes variables en este orden:
- `EMAIL_PASS` (recomendado)
- `GMAIL_APP_PASSWORD` (alternativo)

### Funcionalidades Implementadas:

✅ **Envío real de emails** usando Nodemailer
✅ **Validación de formulario** con Zod
✅ **Template HTML** para emails profesionales
✅ **Manejo de errores** específico para email
✅ **Logs detallados** para debugging
✅ **Configuración flexible** con variables de entorno

### Estructura del Email:

- **Asunto:** "Nuevo mensaje de contacto de [Nombre]"
- **Destinatario:** rsynapseai@gmail.com
- **Remitente:** rsynapseai@gmail.com
- **Formato:** HTML con diseño profesional
- **Información incluida:**
  - Nombre del contacto
  - Email del contacto
  - Teléfono (si se proporciona)
  - Mensaje completo
  - Fecha y hora del envío

### Testing:

Para probar el formulario:
1. Configura las variables de entorno
2. Inicia el servidor de desarrollo: `npm run dev`
3. Ve a la sección de contacto
4. Completa y envía el formulario
5. Revisa la consola para logs de confirmación
6. Verifica que el email llegue a rsynapseai@gmail.com

### Troubleshooting:

- **Error de autenticación:** Verifica que la contraseña de aplicación sea correcta
- **Error de conexión:** Asegúrate de que la verificación en 2 pasos esté activada
- **Email no llega:** Revisa la carpeta de spam
- **Error en consola:** Verifica los logs del servidor para más detalles
