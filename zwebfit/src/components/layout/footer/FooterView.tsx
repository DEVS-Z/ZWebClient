import Link from "next/link";

export default function FooterView() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Marca */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">ZFut ®</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Aplicacion web para facilitar el manejo de sesiones de tu equipo de futbol soccer de forma facil, eficiente y inteligente
            </p>
          </div>

          {/* Conoce ZFut */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Conoce ZFut</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">Nosotros</Link></li>
              <li><Link href="/how-it-works" className="text-sm text-gray-600 hover:text-gray-900">Cómo funciona</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Planes</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contáctanos</Link></li>
            </ul>
          </div>

          {/* Medios de contacto */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Medios de contacto</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hola@zfut.app" className="text-sm text-gray-600 hover:text-gray-900">
                  soporte@zfut.app
                </a>
              </li>
              <li>
                <a href="tel:+526641234567" className="text-sm text-gray-600 hover:text-gray-900">
                  +52 664 257 2380
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">¡Síguenos!</h3>
            <div className="flex items-center gap-4">
              
              <a href="#" aria-label="X (Twitter)" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                </svg>
              </a>

      
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 7.838a4.162 4.162 0 1 0 0 8.324 4.162 4.162 0 0 0 0-8.324z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior con color */}
      <div className="bg-neutral-900 py-4">
        <p className="text-xs text-white text-center">
          © {new Date().getFullYear()} ZFut — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
