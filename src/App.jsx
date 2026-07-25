import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy loading heavy below-the-fold components for max Lighthouse performance & code splitting
const Services = lazy(() => import('./components/Services'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

// Suspense Fallback Skeleton
function SectionSkeleton() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 flex justify-center items-center" aria-hidden="true">
      <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
    </div>
  );
}

function MainLayout() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans transition-colors duration-300">
      <ParticleBackground />
      <Navbar />
      <main className="flex-grow pt-20 sm:pt-24 relative z-10">
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <Services />
          <Testimonials />
          <Pricing />
          <ContactForm />
        </Suspense>
      </main>
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
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
