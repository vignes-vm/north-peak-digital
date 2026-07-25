import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Trust Pill / Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-blue-300">
            Next-Gen Digital Product & Growth Studio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6"
        >
          Engineered to Scale Your Brand to{' '}
          <span className="gradient-text">New Peaks</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-normal leading-relaxed"
        >
          We build high-converting web applications, bespoke digital experiences, and growth engines for industry leaders obsessed with speed, design, and measurable revenue.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full text-base font-bold text-white gradient-button shadow-xl shadow-blue-600/30 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Book a strategy call"
          >
            <span>Book a Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full text-base font-semibold text-gray-200 glass-panel hover:bg-white/10 hover:text-white border border-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Explore our digital services"
          >
            <span>Explore Services</span>
          </a>
        </motion.div>

        {/* Key Metrics / Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center border border-white/5">
            <div className="p-2 bg-blue-500/10 rounded-lg mb-3">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-3xl font-extrabold text-white tracking-tight">$250M+</span>
            <span className="text-sm font-medium text-gray-400 mt-1">Client Revenue Generated</span>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center border border-white/5">
            <div className="p-2 bg-purple-500/10 rounded-lg mb-3">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-3xl font-extrabold text-white tracking-tight">99.9%</span>
            <span className="text-sm font-medium text-gray-400 mt-1">Uptime & Performance SLA</span>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center border border-white/5">
            <div className="p-2 bg-cyan-500/10 rounded-lg mb-3">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-3xl font-extrabold text-white tracking-tight">120+</span>
            <span className="text-sm font-medium text-gray-400 mt-1">Successful Launches</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
