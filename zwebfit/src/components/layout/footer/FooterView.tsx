export default function FooterView(){
    return(
         <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="text-lg font-semibold">
                ZFut <span className="text-green-400">© {new Date().getFullYear()}</span>
                </div>
                <nav className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition">Sobre</a>
                <a href="#" className="hover:text-white transition">Contacto</a>
                <a href="#" className="hover:text-white transition">Privacidad</a>
                </nav>
                <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition">Twitter</a>
                <a href="#" className="hover:text-white transition">GitHub</a>
                </div>
            </div>
        </footer>
    );
}