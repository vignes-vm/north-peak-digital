import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap, Code, Cpu, Activity, Database, Lock, CpuIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-16 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute -top-40 -left-40 w-[35rem] h-[35rem] rounded-full blur-3xl animate-pulse-glow ${
          isDark ? 'bg-blue-600/20' : 'bg-blue-400/20'
        }`} />
        <div className={`absolute top-1/3 -right-20 w-[35rem] h-[35rem] rounded-full blur-3xl ${
          isDark ? 'bg-purple-600/20' : 'bg-cyan-400/20'
        }`} />
        <div className={`absolute -bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl ${
          isDark ? 'bg-cyan-500/15' : 'bg-indigo-300/30'
        }`} />

        {/* Animated Grid Background */}
        <div className={`absolute inset-0 [background-size:40px_40px] opacity-30 ${
          isDark
            ? 'bg-[radial-gradient(#3B82F6_1px,transparent_1px)]'
            : 'bg-[radial-gradient(#2563EB_1px,transparent_1px)]'
        }`} />
      </div>

      <div className="relative max-w-7xl mx-auto z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Trust Pill / Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full border backdrop-blur-md mb-6 ${
                isDark
                  ? 'bg-blue-500/10 border-blue-500/30 text-blue-300'
                  : 'bg-blue-100/80 border-blue-200 text-blue-800'
              }`}
            >
              <Sparkles className="w-4 h-4 text-blue-500 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                Next-Gen High Performance Digital Studio
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Architecting Digital Dominance at{' '}
              <span className={isDark ? 'gradient-text-blue' : 'gradient-text-blue-light'}>
                Peak Speed
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 font-normal leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-slate-600'
              }`}
            >
              We design and engineer bespoke web platforms, hyper-scalable cloud solutions, and growth engines built for category-defining enterprises.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-12"
            >
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full text-base font-bold text-white gradient-bg-blue neo-button shadow-xl shadow-blue-500/25 transition-transform duration-300"
                aria-label="Book a strategy call"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#services"
                className={`w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-base font-semibold border transition-all duration-300 ${
                  isDark
                    ? 'glass-card text-gray-200 hover:text-white hover:bg-white/10'
                    : 'bg-white/80 text-slate-700 hover:text-blue-600 border-blue-200 shadow-sm'
                }`}
                aria-label="Explore our services"
              >
                <span>Explore Capabilities</span>
              </a>
            </motion.div>

            {/* Trust Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
            >
              <div>
                <span className={`text-2xl sm:text-3xl font-extrabold block ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>$250M+</span>
                <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  Revenue Generated
                </span>
              </div>
              <div>
                <span className={`text-2xl sm:text-3xl font-extrabold block ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>99.99%</span>
                <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  System SLA Uptime
                </span>
              </div>
              <div>
                <span className={`text-2xl sm:text-3xl font-extrabold block ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>120+</span>
                <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  Global Launches
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Animated Tech Network Diagram & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Interactive SVG Network Circuit Diagram Container */}
            <div className={`relative rounded-3xl p-6 sm:p-8 border glass-card overflow-hidden ${
              isDark ? 'border-white/10' : 'border-blue-200'
            }`}>
              {/* Background Diagram SVG Line Beams */}
              <svg className="w-full h-80 sm:h-96" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Connecting Lines */}
                <path d="M50 200 L150 100 L250 100 L350 200" stroke={isDark ? '#3B82F6' : '#2563EB'} strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
                <path d="M50 200 L150 300 L250 300 L350 200" stroke={isDark ? '#8B5CF6' : '#7C3AED'} strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
                <path d="M150 100 L200 200 L250 100" stroke={isDark ? '#38BDF8' : '#0284C7'} strokeWidth="2" opacity="0.4" />
                <path d="M150 300 L200 200 L250 300" stroke={isDark ? '#38BDF8' : '#0284C7'} strokeWidth="2" opacity="0.4" />

                {/* Animated Pulsing Beams */}
                <motion.circle
                  cx="200" cy="200" r="80"
                  stroke={isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(37, 99, 235, 0.3)'}
                  strokeWidth="1.5"
                  animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <motion.circle
                  cx="200" cy="200" r="120"
                  stroke={isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(124, 58, 237, 0.2)'}
                  strokeWidth="1"
                  animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
              </svg>

              {/* Center Core Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="w-24 h-24 rounded-full border-2 border-dashed border-blue-500/50 flex items-center justify-center p-2"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/40">
                    <CpuIcon className="w-8 h-8" />
                  </div>
                </motion.div>
                <span className={`text-xs font-bold uppercase tracking-widest mt-2 block ${
                  isDark ? 'text-blue-400' : 'text-blue-700'
                }`}>Core AI System</span>
              </div>

              {/* Orbiting Satellite Floating Glass Cards */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute top-6 left-6 p-3 rounded-2xl border flex items-center space-x-3 shadow-lg ${
                  isDark ? 'bg-slate-900/90 border-blue-500/30 text-white' : 'bg-white/90 border-blue-200 text-slate-900'
                }`}
              >
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold block">100% Core Vitals</span>
                  <span className="text-[10px] text-emerald-400 font-semibold">Sub-50ms Latency</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute bottom-6 right-6 p-3 rounded-2xl border flex items-center space-x-3 shadow-lg ${
                  isDark ? 'bg-slate-900/90 border-purple-500/30 text-white' : 'bg-white/90 border-purple-200 text-slate-900'
                }`}
              >
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold block">Cloud Scale</span>
                  <span className="text-[10px] text-purple-300 font-semibold">Serverless Auto-sync</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [-6, 6, -6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute top-12 right-6 p-2.5 rounded-xl border flex items-center space-x-2 text-xs font-bold ${
                  isDark ? 'bg-cyan-950/80 border-cyan-500/30 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-800'
                }`}
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Zero-Trust Security</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
