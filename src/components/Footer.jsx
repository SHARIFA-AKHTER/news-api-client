const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-800 pb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">TeslaNews</h3>
            <p className="text-sm">
              Your number one source for everything Tesla. Delivering real-time data from MongoDB.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4 text-sm">
              <span className="hover:text-white cursor-pointer transition-colors">Twitter</span>
              <span className="hover:text-white cursor-pointer transition-colors">LinkedIn</span>
              <span className="hover:text-white cursor-pointer transition-colors">Facebook</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} TeslaNews Central. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;