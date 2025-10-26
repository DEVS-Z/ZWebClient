import Link from "next/link";

export default function PublicNavbarView() {
  return (
<header className="bg-white border-b border-gray-200">
  <div className="w-full grid grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 lg:px-8 h-24">
        {/* IZQUIERDA: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xs">⚽</span>
          </div>
          <span className="text-xl font-bold text-black">ZFut</span>
        </div>

        {/* CENTRO (espaciador flexible) */}
        <div />

        {/* DERECHA: Nav + Botones */}
        <div className="flex items-center gap-8 justify-end">
          {/* Nav pública */}
          <nav className="hidden md:flex items-center gap-8">
           <nav className="hidden md:flex items-center gap-8">
  <Link href="/home" className="text-gray-600 hover:text-gray-900 text-sm hover:underline underline-offset-4">Inicio</Link>
  <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 text-sm hover:underline underline-offset-4">Cómo funciona</Link>
  <Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm hover:underline underline-offset-4">Planes</Link>
 {/* <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm hover:underline underline-offset-4">Conócenos</Link>
 */} <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm hover:underline underline-offset-4">Contacto</Link>
</nav>
        </nav>

          {/* Botones */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-200 hover:text-black transition-colors"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 text-sm font-medium bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-colors"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
