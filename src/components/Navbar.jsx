const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-gray-900">
              TESLA<span className="text-blue-600">NEWS</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Latest</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Stock</a>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;