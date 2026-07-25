import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-gray-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <Hero />
        <Services />
        <Testimonials />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
