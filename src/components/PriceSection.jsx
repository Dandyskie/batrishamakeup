import React from 'react';
import { motion } from 'framer-motion';

const PriceSection = () => {
  const pricing = [
    {
      title: "Graduation & Event",
      price: "150K",
      features: ["Flawless Foundation", "Standard Eyelashes", "Hairdo/Hijab Styling"]
    },
    {
      title: "Prewedding Session",
      price: "450K",
      features: ["Premium Products", "Touch up assistance", "Multiple Looks"]
    },
    {
      title: "Wedding Day",
      price: "1.5Jt",
      features: ["Luxury Brands Only", "Trial Makeup Included", "Unlimited Touch Ups"]
    },
    {
      title: "National Event",
      price: "2.5Jt",
      features: ["Luxury Brands Only", "Trial Makeup Included", "Unlimited Touch Ups", "Testing & Quality Testing"]
    },
    {
      title: "Gala Premier Event",
      price: "2,1Jt",
      features: ["Luxury Brands Only", "Trial Makeup Inclued", "Testing & Quality Test", "Delivery"]
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary leading-tight mb-4 uppercase">
            INVESTMENT
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {pricing.map((tier, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              key={index} 
            >
              <div
                className={`h-full p-10 border border-border flex flex-col bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2
                  ${index === 1 ? 'py-14 border-primary/20 shadow-xl relative' : ''}
                `}
              >
              {index === 1 && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold font-heading text-primary mb-2 uppercase text-center tracking-widest">
                {tier.title}
              </h3>
              <div className="mt-6 mb-8 text-center flex items-end justify-center">
                <span className="text-sm text-gray-400 font-medium pb-2 mr-2">Start from Rp</span>
                <span className="text-5xl font-bold font-heading text-primary uppercase">
                  {tier.price}
                </span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 font-light justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300 border
                  ${index === 1 
                    ? 'bg-primary text-white border-primary hover:bg-white hover:text-primary' 
                    : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'}
                `}
              >
                Inquire Now
              </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PriceSection;
