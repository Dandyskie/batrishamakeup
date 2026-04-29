import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 md:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mb-16">
          
          {/* Brand */}
          <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left pb-12 lg:pb-0 border-b border-white/10 lg:border-none">
            <h2 className="font-latin text-3xl md:text-4xl font-bold tracking-widest mb-6 text-white min-w-max">
              Batrisha <span className="font-light text-white/80">Make Up</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed max-w-sm">
              Enhancing natural beauty through elegant, minimalist, and luxury makeup artistry.
            </p>
          </div>

          {/* Links */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row justify-around lg:justify-end gap-12 sm:gap-24 pt-4 lg:pt-0">
            
            {/* Navigation */}
            <div className="flex flex-col space-y-4 text-center sm:text-left">
              <h4 className="font-heading font-bold uppercase tracking-[0.2em] mb-4 text-sm text-white">Navigation</h4>
              <a href="#home" className="text-white/60 hover:text-white transition-colors duration-300 font-light">Home</a>
              <a href="#portfolio" className="text-white/60 hover:text-white transition-colors duration-300 font-light">Portfolio</a>
              <a href="#services" className="text-white/60 hover:text-white transition-colors duration-300 font-light">Services</a>
              <a href="#contact" className="text-white/60 hover:text-white transition-colors duration-300 font-light">Contact</a>
            </div>

            {/* Social */}
            <div className="flex flex-col space-y-4 text-center sm:text-left">
              <h4 className="font-heading font-bold uppercase tracking-[0.2em] mb-4 text-sm text-white">Follow Me</h4>
              <a href="https://instagram.com/batrisha_make_up" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors duration-300 font-light">Instagram</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 font-light">TikTok</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 font-light">Facebook</a>
            </div>
            
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-white/40 text-sm font-light uppercase tracking-widest mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Batrisha Make Up. All rights reserved.
          </p>
          <div className="text-white/40 text-sm font-light uppercase tracking-widest space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
