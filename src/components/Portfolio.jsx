import React, { useState } from 'react';
import { X } from 'lucide-react';

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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden group cursor-pointer bg-white flex flex-col"
              onClick={() => setSelectedImage(item.src)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={item.src} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-5 text-center bg-white">
                <h4 className="font-bold uppercase text-primary text-sm mb-1">
                  {item.name}
                </h4>
                <p className="text-gray-400 text-xs uppercase">
                  {item.package}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://www.instagram.com/batrisha_make_up"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition"
          >
            Lihat Semua Portofolio
          </a>
        </div>

      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button 
            className="absolute top-8 right-8 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>

          <img 
            src={selectedImage} 
            alt="Preview" 
            className="max-w-full max-h-[90vh]"
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;