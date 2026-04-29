import React, { useState } from 'react';
import { X } from 'lucide-react';
import img1 from "/image/image1.jpeg";
  
const Portfolio = () => {
 const images = [
  { src: "/image/image1.jpeg", name: "Dinar Bella.", package: "Wedding Makeup" },
  { src: "/image/image1.jpeg", name: "Alfi Naswa.", package: "Kartini Event" },
  { src: "/image/image1.jpeg", name: "Nazla Rani", package: "Prewedding" },
];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="portfolio" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary leading-tight mb-4 uppercase">
            PORTFOLIO
          </h2>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 font-light max-w-2xl mx-auto">
            A curation of my finest work. Explore the elegance and precision in every brushstroke.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden group cursor-pointer bg-white flex flex-col shadow-sm md:shadow-none"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={item.src} 
                  alt={`Portfolio ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex items-center justify-center">
                  <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-sm backdrop-blur-sm">View</span>
                </div>
              </div>
              <div className="p-5 md:hidden text-center bg-white">
                <h4 className="font-heading font-bold uppercase text-primary text-[13px] tracking-[0.15em] mb-1">{item.name}</h4>
                <p className="text-gray-400 font-light text-xs uppercase tracking-widest">{item.package}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center justify-center px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-bold uppercase tracking-[0.2em] text-sm">
            <a href="https://www.instagram.com/batrisha_make_up">Lihat Semua Portofolio</a>
          </button>
        </div>

      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <button 
            className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} strokeWidth={1} />
          </button>
          <img 
            src={selectedImage} 
            alt="Preview" 
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
          />
        </div>
      )}

    </section>
  );
};

export default Portfolio;
