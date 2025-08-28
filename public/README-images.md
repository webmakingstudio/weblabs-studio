# 🎨 Imágenes Open Graph para WEBLABS STUDIO

## 📱 Imágenes Creadas

### 1. **og-image.svg** (1200x630px)
- **Uso**: Imagen principal para la página de inicio
- **Contenido**: Logo, título principal y características
- **Colores**: Gradientes naranja-rojo-rosa con acentos verdes

### 2. **og-precios.svg** (1200x630px)
- **Uso**: Imagen específica para la página de precios
- **Contenido**: Planes de precios con tarjetas visuales
- **Colores**: Mismo esquema pero enfocado en precios

### 3. **og-mobile.svg** (750x1334px)
- **Uso**: Imagen para dispositivos móviles
- **Contenido**: Versión vertical optimizada para móviles
- **Colores**: Esquema adaptado para pantallas pequeñas

## 🚀 Cómo Convertir SVG a JPG/PNG

### Opción 1: Automática (Recomendada)
```bash
# Instalar herramienta de conversión
npm install -g svgexport

# Ejecutar script de conversión
node scripts/convert-images.js
```

### Opción 2: Manual con Herramientas Online
1. **Convertio.co** - Sube el SVG y descarga JPG
2. **CloudConvert** - Conversión en la nube
3. **Inkscape** - Software gratuito de diseño

### Opción 3: Herramientas de Diseño
- **Figma** - Importa SVG y exporta como JPG
- **Adobe Illustrator** - Exporta con calidad profesional
- **Sketch** - Para usuarios Mac

## 📐 Especificaciones Técnicas

### Dimensiones Estándar
- **Facebook/LinkedIn**: 1200x630px
- **Twitter**: 1200x600px (mínimo)
- **Instagram**: 1080x1080px (cuadrado)
- **Móvil**: 750x1334px (vertical)

### Formatos Recomendados
- **JPG**: Para fotografías y gradientes
- **PNG**: Para logos y transparencias
- **WebP**: Para mejor compresión (moderno)

## 🎯 Uso en Metadatos

### Layout Principal
```tsx
openGraph: {
  images: [
    {
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'WEBLABS STUDIO - Expertos en Desarrollo Web',
    },
  ],
}
```

### Página de Precios
```tsx
openGraph: {
  images: [
    {
      url: '/og-precios.jpg',
      width: 1200,
      height: 630,
      alt: 'Planes de Precios WEBLABS STUDIO',
    },
  ],
}
```

## 🔧 Personalización

### Cambiar Colores
Edita los gradientes en los archivos SVG:
```xml
<linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
  <stop offset="0%" style="stop-color:#tu-color-1" />
  <stop offset="50%" style="stop-color:#tu-color-2" />
  <stop offset="100%" style="stop-color:#tu-color-3" />
</linearGradient>
```

### Cambiar Texto
Modifica los elementos `<text>` en los SVG:
```xml
<text x="600" y="320" text-anchor="middle" font-size="72">
  TU TÍTULO AQUÍ
</text>
```

## 📊 Optimización SEO

### Nombres de Archivo
- ✅ `og-image.jpg` - Clara y descriptiva
- ✅ `og-precios.jpg` - Específica para la página
- ❌ `image1.jpg` - No descriptiva

### Texto Alternativo
- ✅ Descriptivo y con palabras clave
- ✅ Incluye el nombre de la empresa
- ❌ Genérico como "imagen"

### Tamaño de Archivo
- **Objetivo**: < 1MB por imagen
- **Compresión**: Usa herramientas como TinyPNG
- **Formato**: JPG para fotos, PNG para logos

## 🎨 Paleta de Colores

### Colores Principales
- **Verde**: `#22c55e` (Accent principal)
- **Azul**: `#3b82f6` (Secundario)
- **Naranja**: `#f97316` (Call-to-action)
- **Rosa**: `#ec4899` (Acento)

### Gradientes
- **Título**: Naranja → Rojo → Rosa
- **Fondo**: Negro → Gris oscuro
- **Acentos**: Verde → Azul

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200x630px
- **Tablet**: 800x420px
- **Móvil**: 750x1334px

### Adaptaciones
- Texto más grande en móviles
- Elementos reorganizados verticalmente
- Botones más grandes para touch

## 🚀 Próximos Pasos

1. ✅ **Convertir SVG a JPG** usando el script
2. 🔄 **Probar en redes sociales** (Facebook Debugger, Twitter Card Validator)
3. 📱 **Optimizar para móviles** si es necesario
4. 🎨 **Crear variaciones** para diferentes páginas
5. 📊 **Monitorear engagement** en redes sociales

---

**Nota**: Estas imágenes están optimizadas para SEO y engagement en redes sociales. Mantén la consistencia visual con tu marca.
