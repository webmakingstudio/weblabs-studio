export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-800 border-t border-zinc-300 dark:border-zinc-700 py-4" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Left Section - Navigation Links */}
          <nav className="flex items-center space-x-6 text-sm text-zinc-500 dark:text-zinc-400" aria-label="Enlaces del pie de página">
            <a href="/precios" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Precios</a>
            <a href="/blog" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Blog</a>
            <a href="/contacto" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Contacto</a>
            <a href="/privacidad" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Privacidad</a>
            <a href="/terminos" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Términos</a>
            <a href="/cookies" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Cookies</a>
            <a href="/aviso-legal" className="hover:text-zinc-700 dark:hover:text-white transition-colors">/Aviso Legal</a>
          </nav>
          
          {/* Center Section - Company Information */}
          <div className="flex flex-col items-center text-center space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">© WebMaking Studio // 2025</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">EXPERTOS EN CREACION DE PAGINAS WEB</p>
          </div>
          
          {/* Right Section - Credit */}
          <div className="flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">
            <span>built for you by</span>
            <a href="#" className="text-orange-500 underline hover:text-orange-400 transition-colors">WebMaking</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
