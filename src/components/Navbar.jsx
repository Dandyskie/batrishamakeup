import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#why-me' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-latin font-bold text-2xl tracking-widest text-primary flex items-center">
              Batrisha <span className="font-light ml-2 text-text">Make Up</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text hover:text-primary transition-colors duration-300 uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-8 inline-flex items-center justify-center px-6 py-2 border border-primary bg-primary text-white text-sm font-medium uppercase tracking-widest hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-text hover:bg-secondary hover:text-primary uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full px-3 py-4 text-center mt-4 border border-primary bg-primary text-white text-base font-medium uppercase tracking-widest hover:bg-white hover:text-primary transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
