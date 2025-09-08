"use client";

import { useState, useEffect } from "react";
import { Pricing } from "@/components/ui/pricing";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTheme } from "@/contexts/ThemeContext";

const pricingPlans = [
  {
    name: "STARTER",
    price: "49",
    yearlyPrice: "39",
    period: "por mes",
    features: [
      "Hasta 5 páginas internas",
      "Diseño personalizado básico",
      "Adaptación móvil incluida",
      "Implementación de contacto y mapa",
      "Integración con tus redes sociales",
      "Soporte por email (respuesta en 48 horas)",
      "1 ronda de revisiones / mes",
    ],
    description: "Ideal para emprendedores y pequeños negocios que buscan una web profesional básica.",
    buttonText: "Contratar",
    href: "/contacto",
    isPopular: false,
  },
  {
    name: "PROFESIONAL",
    price: "99",
    yearlyPrice: "79",
    period: "por mes",
    features: [
      "Páginas ilimitadas",
      "Diseño premium personalizado",
      "Optimización SEO inicial y avanzada",
      "Blog integrado y gestión de contenidos",
      "Integración WhatsApp, redes y formularios avanzados",
      "Soporte prioritario (respuesta en 24 horas)",
      "3 rondas de revisiones / mes",
      "Acceso a panel de estadísticas y analítica",
    ],
    description: "Pensado para empresas que quieren una web avanzada y herramientas para crecer online.",
    buttonText: "Comenzar Ahora",
    href: "/contacto",
    isPopular: true,
  },
  {
    name: "EMPRESARIAL",
    price: "249",
    yearlyPrice: "199",
    period: "por mes",
    features: [
      "Todo lo del Plan Profesional",
      "Funcionalidades personalizadas (tienda online, membresías, áreas privadas…)",
      "Integración con CRM y APIs externas",
      "Gestor de cuenta dedicado",
      "Seguridad avanzada y certificados SSL",
      "Actualizaciones y mantenimiento continuo",
      "Soporte en 1 hora (prioridad máxima)",
      "Contrato personalizado y acuerdo SLA",
    ],
    description: "Solución integral para marcas consolidadas y proyectos con necesidades avanzadas.",
    buttonText: "Contactar Ventas",
    href: "/contacto",
    isPopular: false,
  },
];

export default function PreciosPage() {
  const { isDark } = useTheme();

  // Manejar errores de renderizado
  if (!pricingPlans || pricingPlans.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
            Error al cargar los precios
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Por favor, intenta recargar la página
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation currentPage="precios" />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-4 mb-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
              Planes de <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">Precios</span> Transparentes
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tu negocio. Todos incluyen acceso a nuestra plataforma, herramientas de generación de leads y soporte dedicado.
            </p>
          </div>

          {/* Pricing Component */}
          <div className="mt-8">
            <Pricing 
              plans={pricingPlans}
              title="Planes de Precios Transparentes"
              description="Elige el plan que mejor funcione para ti\nTodos los planes incluyen acceso a nuestra plataforma, herramientas de generación de leads y soporte dedicado."
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
