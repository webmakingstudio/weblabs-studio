# 🚀 Configuración de PRODUCCIÓN para Vercel - WEBLABS STUDIO

## 🎯 **Sistema REAL para Producción**

Este sistema está diseñado para funcionar **PERFECTAMENTE** en Vercel con Resend.

---

## 📋 **Paso 1: Configurar Resend (OBLIGATORIO)**

### **Crear cuenta en Resend:**
1. **Ve a:** [resend.com](https://resend.com)
2. **Crea cuenta gratuita** con tu Gmail
3. **Verifica tu email**
4. **Obtén tu API Key** (empieza con `re_`)

---

## 🔧 **Paso 2: Configurar Variables en Vercel**

### **Opción A: Dashboard de Vercel (Recomendado)**
1. **Ve a tu proyecto** en [vercel.com](https://vercel.com)
2. **Settings → Environment Variables**
3. **Añade estas variables:**

```env
# Nombre: RESEND_API_KEY
# Valor: re_xxxxxxxxxxxxx (tu API Key real)
# Environment: Production, Preview, Development

# Nombre: CONTACT_EMAIL  
# Valor: tuemail@gmail.com
# Environment: Production, Preview, Development

# Nombre: FROM_EMAIL
# Valor: onboarding@resend.dev
# Environment: Production, Preview, Development
```

### **Opción B: CLI de Vercel**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Añadir variables
vercel env add RESEND_API_KEY
vercel env add CONTACT_EMAIL
vercel env add FROM_EMAIL

# Desplegar
vercel --prod
```

---

## 🚀 **Paso 3: Desplegar a Producción**

### **Con GitHub (Automático):**
1. **Push a main/master** → Vercel se despliega automáticamente
2. **Verifica** que las variables estén configuradas
3. **Testea** el formulario en tu dominio real

### **Manual:**
```bash
vercel --prod
```

---

## ✅ **Verificación del Sistema**

### **En Producción:**
1. **Envía formulario** desde tu dominio real
2. **Revisa tu email** - Deberías recibir el formulario
3. **Revisa logs** en Vercel Dashboard

### **Logs esperados:**
```
🚀 Enviando email con Resend (PRODUCCIÓN)...
✅ Email enviado con Resend: { id: "msg_xxxxx" }
```

---

## 🚨 **Solución de Problemas en Producción**

### **Error: "RESEND_API_KEY obligatoria"**
- ✅ **Variable configurada** en Vercel Dashboard
- ✅ **Environment correcto** (Production)
- ✅ **Redeploy** después de añadir variables

### **Error: "Failed to send email"**
- ✅ **API Key válida** (empieza con `re_`)
- ✅ **Cuenta verificada** en Resend
- ✅ **Límites no excedidos** (3,000 emails/mes gratis)

### **Error: "Email no recibido"**
- ✅ **Spam folder** - Revisa carpeta de spam
- ✅ **Email correcto** en CONTACT_EMAIL
- ✅ **Resend Dashboard** - Verifica logs de envío

---

## 🔒 **Seguridad en Producción**

### **Variables protegidas:**
- ✅ **RESEND_API_KEY** - Solo visible en Vercel
- ✅ **CONTACT_EMAIL** - Solo visible en Vercel
- ✅ **FROM_EMAIL** - Solo visible en Vercel

### **Validaciones:**
- ✅ **RGPD compliance** - Consentimientos obligatorios
- ✅ **Rate limiting** - Protección contra spam
- ✅ **Validación de datos** - Sanitización completa

---

## 📊 **Monitoreo en Producción**

### **Vercel Dashboard:**
- ✅ **Function logs** - Ver logs de `/api/contact`
- ✅ **Performance** - Tiempo de respuesta
- ✅ **Errors** - Errores en tiempo real

### **Resend Dashboard:**
- ✅ **Email delivery** - Estado de envíos
- ✅ **Analytics** - Estadísticas de envío
- ✅ **Bounces** - Emails rechazados

---

## 🎉 **¡Sistema Listo para Producción!**

### **Beneficios:**
- ✅ **Escalable** - Sin límites de usuarios
- ✅ **Profesional** - Emails con tu marca
- ✅ **Confiable** - 99.9% uptime garantizado
- ✅ **Seguro** - RGPD compliant
- ✅ **Gratis** - 3,000 emails/mes

### **Próximos pasos:**
1. **Configura Resend** (5 minutos)
2. **Añade variables** en Vercel (2 minutos)
3. **Deploy automático** desde GitHub
4. **¡Listo!** Recibes formularios en tu email

---

## 📞 **Soporte Técnico**

### **Para problemas en producción:**
1. **Revisa logs** en Vercel Dashboard
2. **Verifica variables** de entorno
3. **Testea API** directamente
4. **Contacta soporte** si persiste

**¿Necesitas ayuda con la configuración de Resend o Vercel?**
