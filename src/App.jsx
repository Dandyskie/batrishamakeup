import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseMe from './components/WhyChooseMe';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import PriceSection from './components/PriceSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white text-text scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseMe />
        <Portfolio />
        <Testimonials />
        <Services />
        <PriceSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
