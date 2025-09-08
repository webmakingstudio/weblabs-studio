"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const blogPosts = [
  {
    id: 1,
    title: "10 Tendencias de Diseño Web para 2025 que Debes Conocer",
    excerpt: "Descubre las nuevas tendencias que están transformando el diseño web y cómo implementarlas en tu sitio para mantenerte a la vanguardia.",
    author: "WebMaking Team",
    date: "2025-01-15",
    readTime: "5 min",
    category: "Diseño Web",
    image: "/api/placeholder/600/400",
    featured: true
  },
  {
    id: 2,
    title: "SEO Local: Cómo Posicionar tu Negocio en Google Maps",
    excerpt: "Aprende las estrategias más efectivas para aparecer en las búsquedas locales y atraer clientes de tu zona geográfica.",
    author: "María García",
    date: "2025-01-12",
    readTime: "7 min",
    category: "SEO",
    image: "/api/placeholder/600/400"
  },
  {
    id: 3,
    title: "WordPress vs Next.js: ¿Cuál Elegir para tu Proyecto Web?",
    excerpt: "Análisis completo de ambas plataformas para ayudarte a tomar la decisión correcta según las necesidades de tu negocio.",
    author: "Carlos Rodríguez",
    date: "2025-01-10",
    readTime: "8 min",
    category: "Tecnología",
    image: "/api/placeholder/600/400"
  },
  {
    id: 4,
    title: "Cómo Crear una Estrategia de Marketing Digital Efectiva",
    excerpt: "Guía paso a paso para desarrollar una estrategia de marketing digital que genere resultados reales para tu empresa.",
    author: "Ana Martínez",
    date: "2025-01-08",
    readTime: "6 min",
    category: "Marketing Digital",
    image: "/api/placeholder/600/400"
  },
  {
    id: 5,
    title: "Optimización de Velocidad: Técnicas para Acelerar tu Web",
    excerpt: "Implementa estas técnicas probadas para mejorar significativamente la velocidad de carga de tu sitio web.",
    author: "Luis Fernández",
    date: "2025-01-05",
    readTime: "9 min",
    category: "Rendimiento",
    image: "/api/placeholder/600/400"
  },
  {
    id: 6,
    title: "Diseño Responsive: Por qué es Crucial para tu Negocio",
    excerpt: "Descubre cómo el diseño responsive puede mejorar la experiencia del usuario y aumentar las conversiones en tu web.",
    author: "Sofia López",
    date: "2025-01-03",
    readTime: "4 min",
    category: "Diseño Web",
    image: "/api/placeholder/600/400"
  }
];

const categories = ["Todos", "Diseño Web", "SEO", "Tecnología", "Marketing Digital", "Rendimiento"];

export default function BlogPage() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    if (selectedCategory === "Todos") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <Navigation currentPage="blog" />
      
      <main className="bg-white dark:bg-black min-h-screen" role="main">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
              Blog de <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent">WebMaking</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl mx-auto">
              Descubre las últimas tendencias en desarrollo web, SEO, marketing digital y diseño. 
              Mantente actualizado con consejos prácticos y estrategias probadas.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-500 text-white'
                    : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          {filteredPosts.filter(post => post.featured).length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Artículo Destacado</h2>
              {filteredPosts.filter(post => post.featured).map((post) => (
                <div key={post.id} className="bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-zinc-900 dark:text-white leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-2 text-sm text-zinc-600 dark:text-zinc-400">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                          <span>Leer más</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="bg-zinc-300 dark:bg-zinc-600 rounded-xl h-64 flex items-center justify-center">
                      <span className="text-zinc-600 dark:text-zinc-400">Imagen del artículo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-zinc-50 dark:bg-zinc-900 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-zinc-300 dark:bg-zinc-600 h-48 flex items-center justify-center">
                  <span className="text-zinc-600 dark:text-zinc-400">Imagen del artículo</span>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4 text-sm text-zinc-500 dark:text-zinc-400">
                      <span className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <button className="text-green-500 hover:text-green-600 font-medium transition-colors flex items-center space-x-1">
                      <span>Leer</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres recibir nuestros mejores artículos?
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Suscríbete a nuestro newsletter y recibe semanalmente consejos prácticos, 
              tendencias del sector y estrategias para hacer crecer tu negocio online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50 text-zinc-900"
              />
              <button className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
