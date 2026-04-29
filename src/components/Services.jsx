import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Wedding Makeup",
      desc: "Comprehensive luxury bridal makeup to ensure you look breathtaking on your most important day."
    },
    {
      title: "Graduation Makeup",
      desc: "Elegant and resilient makeup customized for your milestone, perfect for all-day events."
    },
    {
      title: "Prewedding Makeup",
      desc: "Conceptual makeup artistry tailored to match the mood and location of your photoshoots."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary leading-tight mb-4 uppercase">
              SERVICES
            </h2>
            <div className="w-16 h-[2px] bg-primary"></div>
          </div>
          <p className="text-gray-500 font-light max-w-md md:text-right">
            Curated makeup services focused on precision, elegance, and enhancing authentic beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 group">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              key={index} 
              className="flex flex-col group/item hover:bg-secondary transition-colors duration-500 p-8 -mx-8 sm:mx-0 sm:border sm:border-transparent sm:hover:border-border"
            >
              <span className="text-4xl font-light text-border mb-6 group-hover/item:text-primary transition-colors duration-500">
                0{index + 1}
              </span>
              <h3 className="text-2xl font-bold font-heading text-primary mb-4 uppercase">
                {service.title}
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
