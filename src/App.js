import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoWorks from './components/DemoWorks';

function App() {
  return (
    <div className="antialiased selection:bg-blue-500/30">
      {/* Navbar Minimalist */}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <DemoWorks />
        <WhyChooseUs/>
        <Testimonials />
        {/* Simple Footer/CTA */}
        <Footer />
      </main>
    </div>
  );
}

export default App;