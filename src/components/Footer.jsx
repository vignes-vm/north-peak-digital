import React from 'react';
import { Mountain, Globe, Mail, Share2, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={`border-t text-sm pt-16 pb-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark
        ? 'bg-[#04060C] border-white/10 text-gray-400'
        : 'bg-slate-100 border-blue-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                <Mountain className="w-6 h-6" />
              </div>
              <span className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                North Peak <span className="text-blue-500">Digital</span>
              </span>
            </div>
            <p className={`text-sm max-w-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
              Engineering high-performance web products, scalable platforms, and bespoke growth engines for modern digital leaders.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#results" className="hover:text-blue-500 transition-colors">Results & Case Studies</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-500 transition-colors">Pricing Plans</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Connect
            </h4>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                    : 'bg-white border-blue-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                aria-label="GitHub Profile"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@northpeakdigital.com"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                    : 'bg-white border-blue-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://digitalheroesco.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                    : 'bg-white border-blue-200 text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                aria-label="Share Agency Profile"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} North Peak Digital Agency. All rights reserved.</p>

          {/* Mandatory Task Requirement */}
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 font-medium">
            <span>Built for Digital Heroes Training Task</span>
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center underline hover:text-blue-600 font-semibold ml-1 transition-colors"
              aria-label="Digital Heroes Website"
            >
              <span>digitalheroesco.com</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
