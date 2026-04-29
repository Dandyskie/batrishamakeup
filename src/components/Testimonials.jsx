import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      event: "Wedding Makeup",
      text: "Batrisha elevated my standard of beauty. Her professionalism and attention to detail made me feel like royalty on my special day. The makeup lasted flawlessly.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Elsa Pratama",
      event: "Graduation Makeup",
      text: "Minimalist, elegant, and entirely me. I didn't want heavy makeup, and she delivered the perfect natural glow that looked amazing in every single photo.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Diana Wijaya",
      event: "Prewedding Photo",
      text: "An absolute luxury experience. The way she handles her tools, the premium products she uses, and the final result—everything was top tier.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Aurelia Sanjaya",
      event: "Kartini Day Event",
      text: "An annual celebration held on April 21st to commermoate the birth of Raden Ajeng Kartini, a national heroine of indonesia who fought for women ights and eduction",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Ranum Saputri",
      event: "Photoshoot Fashion",
      text: "Is photo shoot event aimed at showcasing clothing, accesories, or other fashion products with a specific style and concept. ",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Jessica Karmilla Anjani",
      event: "Wedding Makeup",
      text: "Is photo shoot event aimed at showcasing clothing, accesories, or other fashion products with a specific style and concept. ",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    
  ];

  return ( 
    <section className="py-28 bg-primary text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white leading-tight mb-4 uppercase">
            TESTIMONIALS
          </h2>
          <div className="w-16 h-[2px] bg-white/30 mx-auto"></div>
        </div>

        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={30}
          slidesPerView={1}
          grabCursor={true}
          navigation={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="pb-10 !pt-4"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center space-y-8 px-10 md:px-24">
                <p className="text-xl md:text-3xl font-light italic leading-relaxed text-secondary/90">
                  "{review.text}"
                </p>
                
                <div className="flex flex-col items-center space-y-5 pt-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-white/30 shadow-lg">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-full h-full object-cover grayscale opacity-90 transition-transform hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-white font-bold uppercase tracking-widest text-sm mb-1">{review.name}</h4>
                    <p className="text-[11px] font-light text-white/50 tracking-widest uppercase">{review.event}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;
