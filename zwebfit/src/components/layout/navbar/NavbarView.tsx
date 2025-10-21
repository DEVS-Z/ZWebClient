import Link from "next/link";

export default function NavbarView(){
    return(
    <header className="bg-white border-b border-gray-200">
      <div className="w-full grid grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 lg:px-8 h-30">
        
        {/* IZQUIERDA: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-xs">⚽</span>
          </div>
          <span className="text-xl font-semibold">ZFut</span>
        </div>

        {/* CENTRO (espaciador flexible) */}
        <div></div>

        {/* DERECHA: Nav + Botones */}
        <div className="flex items-center gap-8 justify-end">
          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm hover:underline underline-offset-4">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm hover:underline underline-offset-4">Community</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm hover:underline underline-offset-4">Resources</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm hover:underline underline-offset-4">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm hover:underline underline-offset-4">Contact</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm hover:underline underline-offset-4">Link</a>
          </nav>

          {/* Botones */}
          <div className="flex items-center gap-3">
            <Link href="/login" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
              Sign in
            </Link>
            <Link href="/login" className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800">
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>



    );
}