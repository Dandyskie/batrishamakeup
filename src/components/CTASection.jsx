import React from 'react';
import { MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-32 bg-primary text-white text-center border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold font-heading mb-10 tracking-wide uppercase leading-tight">
          Ready to Look Stunning?
        </h2>
        
        <p className="text-lg md:text-xl text-secondary/80 font-light mb-12 max-w-2xl mx-auto">
          Secure your date and experience the pinnacle of luxury makeup artistry. Let's create an unforgettable look together.
        </p>

        <a 
          href="https://wa.me/009985783533" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary text-sm font-bold uppercase tracking-[0.2em] border border-white hover:bg-transparent hover:text-white transition-all duration-300 group"
        >
          <MessageCircle className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
          Book Now Via WhatsApp
        </a>

      </div>
    </section>
  );
};

export default CTASection;
