# WebMaking Studio - Sitio Web Profesional

Sitio web moderno y profesional para WebMaking Studio, expertos en creación de páginas web.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante y profesional con tema oscuro/claro
- **Responsive**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Metadatos completos, Open Graph, y estructura semántica
- **Formulario de Contacto**: Sistema de envío de emails funcional con Resend
- **Página de Precios**: Planes transparentes y atractivos
- **PWA Ready**: Manifest y configuración para Progressive Web App
- **Analytics**: Integración con Google Analytics 4
- **Rendimiento**: Optimizado con Next.js 15 y Tailwind CSS

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v3
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **Email**: Resend API
- **Deploy**: Vercel

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/webmakingstudio/weblabs-studio.git
   cd weblabs-studio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp .env.example .env.local
   # Editar .env.local con tus configuraciones
   ```

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador**
   Navegar a [http://localhost:3000](http://localhost:3000)

## 🎯 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Ejecutar ESLint

## 🏗️ Estructura del Proyecto

```
src/
├── app/                    # Páginas de la aplicación
│   ├── contacto/          # Página de contacto
│   ├── precios/           # Página de precios
│   ├── legal/             # Páginas legales
│   └── layout.tsx         # Layout principal
├── components/             # Componentes reutilizables
│   ├── ContactForm.tsx    # Formulario de contacto
│   ├── PricingCard.tsx    # Tarjetas de precios
│   └── ui/                # Componentes de UI
├── lib/                    # Utilidades y configuraciones
│   ├── emailConfig.ts     # Configuración de email
│   └── emailService.ts    # Servicio de envío de emails
└── app/api/               # API routes
    └── contact/           # Endpoint de contacto
```

## 📧 Configuración de Email

El proyecto utiliza **Resend** para el envío de emails. Configura estas variables:

```env
RESEND_API_KEY=tu_clave_api_de_resend
CONTACT_EMAIL=tu_email_de_contacto
FROM_EMAIL=email_remitente
```

## 🚀 Deploy

El proyecto está configurado para deploy automático en **Vercel**:

1. Conecta tu repositorio de GitHub a Vercel
2. Configura las variables de entorno en Vercel Dashboard
3. El deploy se ejecuta automáticamente en cada push a `main`

## 📱 PWA

El sitio incluye configuración PWA con:
- Manifest para instalación
- Service Worker para cache offline
- Iconos para diferentes dispositivos

## 🔍 SEO

Optimización completa para motores de búsqueda:
- Metadatos dinámicos
- Open Graph tags
- Twitter Cards
- Sitemap automático
- Robots.txt
- Estructura semántica HTML

## 📄 Licencia

MIT License - Libre para uso comercial y personal.

## 🙏 Créditos

Desarrollado por **WEBLABS STUDIO** - Expertos en creación de páginas web profesionales.

---

**¿Necesitas una web profesional?** [Contacta con nosotros](https://weblabs.studio/contacto) 🚀