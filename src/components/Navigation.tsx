"use client";

import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = "home" }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 p-4" role="banner">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-100 dark:from-zinc-900 dark:via-zinc-600 dark:to-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-2xl p-2">
          <div className="flex items-center justify-between h-10">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <h1 className="text-lg font-bold text-zinc-900 dark:text-white">WebMaking Studio</h1>
                </a>
              </div>
              
              {/* Separador con gradiente */}
              <div className="hidden md:flex items-center mx-4">
                <div className="w-px h-4 bg-gradient-to-b from-zinc-400 via-zinc-300 to-zinc-400 dark:from-zinc-500 dark:via-zinc-400 dark:to-zinc-500"></div>
              </div>
              
              <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Navegación principal">
                <a 
                  href="/" 
                  className={`text-sm transition-colors ${
                    currentPage === "home" 
                      ? "text-zinc-900 dark:text-white font-semibold" 
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  Inicio
                </a>
                <a 
                  href="/precios" 
                  className={`text-sm transition-colors ${
                    currentPage === "precios" 
                      ? "text-zinc-900 dark:text-white font-semibold" 
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  Precios
                </a>
                <a 
                  href="/blog" 
                  className={`text-sm transition-colors relative ${
                    currentPage === "blog" 
                      ? "text-zinc-900 dark:text-white font-semibold" 
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  Blog
                  <span className="absolute -top-2 -right-12 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-sm">New</span>
                </a>
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* CTA Button */}
              <button className="hidden lg:flex items-center space-x-2 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                <span>🔥</span>
                <span>Explore 70+ new components and templates</span>
              </button>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Cambiar tema"
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
                aria-label="Menú móvil"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-zinc-700 mt-4">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="/" 
                  className={`transition-colors ${
                    currentPage === "home" 
                      ? "text-white font-semibold" 
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Inicio
                </a>
                <a 
                  href="/precios" 
                  className={`transition-colors ${
                    currentPage === "precios" 
                      ? "text-white font-semibold" 
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Precios
                </a>
                <a 
                  href="/blog" 
                  className={`transition-colors relative ${
                    currentPage === "blog" 
                      ? "text-white font-semibold" 
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  Blog
                  <span className="inline-block ml-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">New</span>
                </a>
                <button className="flex items-center space-x-2 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium text-left">
                  <span>🔥</span>
                  <span>Explore 70+ new components and templates</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium text-left"
                >
                  {isDark ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span>Tema Claro</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>
                      <span>Tema Oscuro</span>
                    </>
                  )}
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
