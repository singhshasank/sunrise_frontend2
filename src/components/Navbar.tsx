
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 top-0 left-0">
         <Link 
    to="/" 
    className="flex items-center space-x-3 md:space-x-4 text-2xl md:text-3xl font-extrabold text-white transition-all duration-300 hover:text-yellow-400 group"
  >
    <img 
      src="https://media-hosting.imagekit.io/5bf2174532fe41b2/Adobe%20Express%20-%20file.png?Expires=1838214115&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wZIC8XJWiqJMRIFUT6lVi9rsJZ7TV6Z3V3KkmchzdVN0377Ta1Abb4pPKPj5kw6jQ14hX8BMCX50AOZ7TtBzEFw0WXCzTWxYaDoKrw5B2Ka7p9yUjCzMOELkQLGvowNGeT3LtPjd3VRlY8okzGSBgY8i2FSwI0BhrY8SYq1QcIbMmkczhSbpnNswWB3lF8R9q4AumeDbcdlNd9TsDZKiDyF4nAvCuAeg-qyIvuy7b4LLRlewETqWf1s~B-h2lGAcwQEFd8eLgVYp7c01O9xX2JnLxrHXO2oYQRGuhHOmMeu52fbJ38HWH9Plr0d~tWJZS6CGsP0-CNQL2zIqJCz70Q__" 
      alt="Sunrise Media House Director" 
      className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
    />
    <div className="text-left">
      <span className="text-media-blue">Sunrise</span>
      <span className="text-media-green">Media</span>
      <span className="text-media-blue">House</span>
    </div>
  </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <Link to="/industry" className={`nav-link ${isActive('/industry') ? 'active' : ''}`}>
              Industry
            </Link>
            <Link to="/career" className={`nav-link ${isActive('/career') ? 'active' : ''}`}>
              Career
            </Link>
            <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
              Services
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
              About
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 pt-2 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Home
              </Link>
              <Link to="/industry" className={`nav-link ${isActive('/industry') ? 'active' : ''}`}>
                Industry
              </Link>
              <Link to="/career" className={`nav-link ${isActive('/career') ? 'active' : ''}`}>
                Career
              </Link>
              <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>
                Services
              </Link>
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                About
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
