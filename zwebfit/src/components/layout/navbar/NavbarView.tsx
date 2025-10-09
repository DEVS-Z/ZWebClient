export default function NavbarView(){
    return(
        <nav className="bg-gray-900 text-gray-100 shadow-md">
            <div className="container mx-auto flex justify-between items-center px-4 py-3">
                <a href="/" className="text-2xl font-bold text-green-400">ZFut</a>
                <div className="hidden md:flex space-x-8">
                    <a href="/" className="hover:text-green-400 transition">Home</a>
                    <a href="/about" className="hover:text-green-400 transition">Sobre</a>
                    <a href="/services" className="hover:text-green-400 transition">Servicios</a>
                    <a href="/contact" className="hover:text-green-400 transition">Contacto</a>
                    <a href="/login" className="hover:text-green-400 transition">Login</a>
                </div>
                <button className="md:hidden text-gray-100 focus:outline-none">☰</button>
            </div>
        </nav>
    );
}