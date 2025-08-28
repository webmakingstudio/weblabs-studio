# 🚀 CONFIGURACIÓN DE EMAIL EN VERCEL - WEBLABS STUDIO

## ❌ **PROBLEMA IDENTIFICADO**

**Resend no te está enviando formularios porque las variables de entorno no están configuradas en Vercel.**

---

## 🔧 **SOLUCIÓN INMEDIATA (5 minutos)**

### **PASO 1: Crear cuenta en Resend**
1. **Ve a:** [resend.com](https://resend.com)
2. **Crea cuenta** con tu Gmail
3. **Verifica tu email**
4. **Copia tu API Key** (empieza con `re_`)

### **PASO 2: Configurar Variables en Vercel**
1. **Ve a tu proyecto** en [vercel.com](https://vercel.com)
2. **Settings → Environment Variables**
3. **Añade estas variables:**

```env
# Variable 1:
Nombre: RESEND_API_KEY
Valor: re_xxxxxxxxxxxxx (tu API Key real)
Environment: Production, Preview, Development

# Variable 2:
Nombre: CONTACT_EMAIL
Valor: tuemail@gmail.com
Environment: Production, Preview, Development

# Variable 3:
Nombre: FROM_EMAIL
Valor: onboarding@resend.dev
Environment: Production, Preview, Development
```

### **PASO 3: Redeploy**
1. **Después de añadir las variables**
2. **Ve a Deployments**
3. **Haz click en "Redeploy"** en tu último deployment

---

## 🧪 **VERIFICAR FUNCIONAMIENTO**

### **Test 1: Verificar API**
1. **Ve a:** `https://tu-dominio.vercel.app/api/contact`
2. **Deberías ver:**
```json
{
  "message": "API de contacto funcionando correctamente",
  "emailConfig": "✅ Válida",
  "status": "active",
  "environment": "production"
}
```

### **Test 2: Enviar Formulario**
1. **Ve a tu página de contacto**
2. **Llena y envía el formulario**
3. **Revisa tu email** - Deberías recibir el formulario

---

## 🚨 **SI SIGUE SIN FUNCIONAR**

### **Verificar Logs en Vercel:**
1. **Dashboard → Functions**
2. **Busca `/api/contact`**
3. **Revisa los logs** para errores

### **Logs Esperados:**
```
🔧 Configuración de Email: {
  contactEmail: "✅ Configurado",
  fromEmail: "onboarding@resend.dev",
  resendApiKey: "✅ Configurado",
  nodeEnv: "production",
  vercelEnv: "production"
}

📧 Enviando email con Resend...
✅ Email enviado con Resend: {
  messageId: "msg_xxxxx",
  environment: "production"
}
```

### **Logs de Error Comunes:**
```
❌ ERROR CRÍTICO: RESEND_API_KEY no configurada en producción
❌ ERROR CRÍTICO: CONTACT_EMAIL no configurado en producción
```

---

## 🔍 **DEBUGGING PASO A PASO**

### **1. Verificar Variables en Vercel:**
```bash
# En Vercel Dashboard → Settings → Environment Variables
# Debes ver:
✅ RESEND_API_KEY = re_xxxxxxxxxxxxx
✅ CONTACT_EMAIL = tuemail@gmail.com
✅ FROM_EMAIL = onboarding@resend.dev
```

### **2. Verificar API Key de Resend:**
- **Debe empezar con:** `re_`
- **No debe tener espacios** al inicio o final
- **Debe ser la clave completa** (no solo una parte)

### **3. Verificar Email de Contacto:**
- **Debe ser un email válido** (ej: `tuemail@gmail.com`)
- **No debe tener espacios** al inicio o final

### **4. Verificar Environment:**
- **Production** debe estar marcado
- **Preview** puede estar marcado
- **Development** puede estar marcado

---

## 🚀 **COMANDOS DE VERIFICACIÓN**

### **Test de API (GET):**
```bash
curl https://tu-dominio.vercel.app/api/contact
```

### **Test de Formulario (POST):**
```bash
curl -X POST https://tu-dominio.vercel.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Test User",
    "email": "test@example.com",
    "mensaje": "Test message",
    "consentimientos": {
      "privacidad": true,
      "marketing": false,
      "cookies": true
    }
  }'
```

---

## 📞 **SOPORTE INMEDIATO**

### **Si nada funciona:**
1. **Verifica que Resend esté funcionando:**
   - Ve a [resend.com](https://resend.com)
   - Dashboard → API Keys
   - Verifica que tu API Key esté activa

2. **Verifica límites de Resend:**
   - Gratis: 3,000 emails/mes
   - Verifica que no hayas excedido el límite

3. **Verifica logs de Resend:**
   - Dashboard → Emails
   - Busca intentos de envío fallidos

---

## 🎯 **RESUMEN DE LA SOLUCIÓN**

**El problema es simple:** Las variables de entorno no están configuradas en Vercel.

**La solución es simple:** Configurar 3 variables en Vercel Dashboard.

**El resultado será:** Recibir formularios en tu email inmediatamente.

---

## ✅ **CHECKLIST DE VERIFICACIÓN**

- [ ] **Resend cuenta creada** y verificada
- [ ] **API Key copiada** (empieza con `re_`)
- [ ] **RESEND_API_KEY** configurada en Vercel
- [ ] **CONTACT_EMAIL** configurado en Vercel
- [ ] **FROM_EMAIL** configurado en Vercel
- [ ] **Proyecto redeployed** en Vercel
- [ ] **API responde** correctamente
- [ ] **Formulario envía** emails

---

**🎉 Una vez completado este checklist, Resend funcionará perfectamente en Vercel!**
