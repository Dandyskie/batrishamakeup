import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseMe = () => {
  const advantages = [
    {
      title: 'Long-Lasting Makeup',
      description: 'Using high-end products combined with professional techniques to ensure your look stays flawless from morning until midnight.'
    },
    {
      title: 'Flawless Finish',
      description: 'Precision application that enhances your features without feeling heavy, resulting in a naturally stunning appearance in person and on camera.'
    },
    {
      title: 'Professional Service',
      description: 'Punctual, hygienic, and tailored strictly to your preferences in a relaxing, luxury environment.'
    }
  ];

  return (
    <section id="why-me" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 h-[60vh] relative group"
          >
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Makeup professional" 
              className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />
            {/* Minimalist absolute box accent */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary -z-10 hidden md:block transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary leading-tight mb-4">
                WHY CHOOSE ME
              </h2>
              <div className="w-16 h-[2px] bg-primary"></div>
            </div>

            <div className="space-y-10">
              {advantages.map((adv, index) => (
                <div key={index} className="flex gap-6 pb-10 border-b border-border last:border-0 last:pb-0 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 rounded-full border border-primary flex items-center justify-center bg-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Check size={16} />
                    </div>
                  </div>
                  <div>                   
                    <h3 className="text-xl font-bold font-heading text-primary mb-3">
                      {adv.title}
                    </h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
