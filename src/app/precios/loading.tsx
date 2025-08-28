export default function Loading() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-500 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
          Cargando precios...
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Preparando nuestros planes para ti
        </p>
      </div>
    </div>
  );
}
