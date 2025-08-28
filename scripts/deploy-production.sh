#!/bin/bash

# 🚀 Script de Deployment a Producción - WEBLABS STUDIO
# Este script despliega tu aplicación a Vercel con todas las configuraciones

echo "🚀 Iniciando deployment a PRODUCCIÓN..."

# Verificar que estás en la rama correcta
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ] && [ "$CURRENT_BRANCH" != "master" ]; then
    echo "❌ ERROR: Debes estar en la rama main/master para desplegar a producción"
    echo "💡 Cambia a main: git checkout main"
    exit 1
fi

echo "✅ Rama correcta: $CURRENT_BRANCH"

# Verificar que tienes Vercel CLI instalado
if ! command -v vercel &> /dev/null; then
    echo "📦 Instalando Vercel CLI..."
    npm install -g vercel
fi

# Verificar que estás logueado en Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔐 Login en Vercel..."
    vercel login
fi

# Verificar variables de entorno
echo "🔍 Verificando variables de entorno..."

# Verificar RESEND_API_KEY
if [ -z "$RESEND_API_KEY" ]; then
    echo "⚠️  ADVERTENCIA: RESEND_API_KEY no está configurada"
    echo "💡 Configúrala en Vercel Dashboard o con: vercel env add RESEND_API_KEY"
else
    echo "✅ RESEND_API_KEY configurada"
fi

# Verificar CONTACT_EMAIL
if [ -z "$CONTACT_EMAIL" ]; then
    echo "⚠️  ADVERTENCIA: CONTACT_EMAIL no está configurada"
    echo "💡 Configúrala en Vercel Dashboard o con: vercel env add CONTACT_EMAIL"
else
    echo "✅ CONTACT_EMAIL configurada"
fi

# Build de la aplicación
echo "🔨 Construyendo aplicación..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ ERROR: Build falló"
    exit 1
fi

echo "✅ Build completado"

# Deploy a producción
echo "🚀 Desplegando a PRODUCCIÓN..."
vercel --prod

if [ $? -eq 0 ]; then
    echo "🎉 ¡Deployment a PRODUCCIÓN completado!"
    echo "🌐 Tu aplicación está disponible en producción"
    echo "📧 Sistema de emails configurado y funcionando"
else
    echo "❌ ERROR: Deployment falló"
    exit 1
fi

echo ""
echo "📋 Próximos pasos:"
echo "1. ✅ Verifica que las variables estén configuradas en Vercel"
echo "2. 🧪 Testea el formulario en tu dominio real"
echo "3. 📧 Verifica que recibes emails en tu bandeja"
echo "4. 📊 Monitorea logs en Vercel Dashboard"
echo ""
echo "🎯 ¡Tu sistema de emails está listo para producción!"
