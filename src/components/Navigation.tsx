import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-300' : 'bg-transparent border-gray-400/30'
    } relative overflow-hidden`}>
      {/* Subtle Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`particle-nav particle-nav-${i}`}
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-24 md:h-48">
          {/* Logo */}
          <div className="logo-section flex items-center">
            <a href="#home" className="relative group">
              {/* Base logo with improved blue color */}
              <img 
                src="/assets/images/group3 logo.PNG" 
                alt="GROUP3 Digital Marketing" 
                className="h-20 md:h-48 w-auto logo-base transition-all duration-300"
              />
              {/* Hover effect with orange accent */}
              <img 
                src="/assets/images/group3 logo.PNG" 
                alt="GROUP3 Digital Marketing" 
                className="h-20 md:h-48 w-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-300 logo-hover"
              />
            </a>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-baseline space-x-8">
              {['Home', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="nav-link text-gray-700 hover:text-primary transition-all duration-200 font-medium relative group"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>

          {/* Right side - placeholder for CTA or empty div for balance */}
          <div className="hidden md:block flex-shrink-0">
            <div className="w-24"></div> {/* Empty spacer for balance */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t absolute w-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block px-3 py-2 text-gray-700 hover:text-primary font-medium w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
