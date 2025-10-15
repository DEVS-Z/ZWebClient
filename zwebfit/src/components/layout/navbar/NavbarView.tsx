export default function NavbarView(){
    return(
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <span className="text-white text-xs">⚽</span>
            </div>
            <span className="text-xl font-semibold">ZFut</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Community</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Resources</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Contact</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Link</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
              Sign in
            </button>
            <button className="px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>

    );
}