import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-secondary flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 flex flex-col justify-center space-y-8 z-10 order-2 md:order-1 mt-10 md:mt-0"
          >
            <div className="space-y-4">
              <h2 className="text-sm md:text-base tracking-[0.3em] font-medium text-text uppercase">
                Premium Makeup Artistry
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-primary leading-[1.1]">
                ENHANCING YOUR NATURAL BEAUTY
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-light">
              Experience flawless, luxury makeup services tailored to your unique features. Elevate your presence for weddings, graduations, and special occasions.
            </p>
            
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white border border-primary text-sm font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-primary transition-all duration-300"
              >
                Book Now
              </a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full md:w-1/2 order-1 md:order-2 h-[50vh] md:h-[80vh] relative flex justify-center items-end mt-10"
          >
            <img 
              src="image/model-removebg.png" 
              alt="Elegant makeup model" 
              className="w-full h-full object-contain filter grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105 drop-shadow-2xl"
              style={{ mixBlendMode: 'darken' }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
