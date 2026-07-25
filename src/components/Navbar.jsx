import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Mountain, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#060913]/90 backdrop-blur-lg border-b border-white/10 py-2.5 sm:py-3 shadow-xl shadow-black/30'
            : 'bg-white/90 backdrop-blur-lg border-b border-blue-100 py-2.5 sm:py-3 shadow-md shadow-blue-500/5'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
            aria-label="North Peak Digital Home"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              <Mountain className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              North Peak <span className="text-blue-500">Digital</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs sm:text-sm font-medium transition-colors relative py-1 focus:outline-none after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 hover:after:w-full after:transition-all after:duration-300 ${
                  isDark
                    ? 'text-gray-300 hover:text-white'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Switcher Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark
                  ? 'bg-white/5 border-white/10 text-yellow-400 hover:bg-white/10'
                  : 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
              }`}
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              <motion.div
                key={isDark ? 'dark' : 'light'}
                initial={{ rotate: -90, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </motion.div>
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center space-x-1.5 px-4 py-2 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white gradient-bg-blue neo-button focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Start your digital project"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>

          {/* Mobile Actions: Theme Toggle & Hamburger */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full border transition-colors ${
                isDark ? 'bg-white/5 border-white/10 text-yellow-400' : 'bg-blue-50 border-blue-200 text-blue-700'
              }`}
              aria-label="Toggle light and dark theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 rounded-lg transition-colors ${
                isDark ? 'text-gray-300 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-b px-4 pt-3 pb-5 space-y-3 shadow-2xl backdrop-blur-xl ${
              isDark
                ? 'bg-[#060913]/95 border-white/10'
                : 'bg-white/95 border-blue-100'
            }`}
          >
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    isDark
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white gradient-bg-blue shadow-lg shadow-blue-500/25"
                aria-label="Start your digital project mobile CTA"
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
