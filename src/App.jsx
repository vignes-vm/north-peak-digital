import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-24">
        <Hero />
        <Services />
        <Testimonials />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
