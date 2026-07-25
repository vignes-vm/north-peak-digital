import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Code2, Zap, Cloud, Cpu, Compass, ArrowRight, Layers, Workflow, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Services() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Core Engineering', 'AI & Cloud', 'Design & Growth'];

  const services = [
    {
      category: 'Design & Growth',
      icon: Palette,
      title: 'UI/UX & Web Design',
      description: 'Bespoke, high-converting digital interfaces engineered for seamless user journeys and striking modern aesthetics.',
      diagramType: 'design',
      badge: 'Framer & Figma',
    },
    {
      category: 'Core Engineering',
      icon: Code2,
      title: 'Full-Stack Engineering',
      description: 'Scalable React, Next.js, and Node systems built with clean architecture, high throughput, and zero technical debt.',
      diagramType: 'code',
      badge: 'React & Node',
    },
    {
      category: 'Design & Growth',
      icon: Zap,
      title: 'Performance & SEO',
      description: 'Lightning-fast Core Web Vitals optimization and algorithmic search strategies that dominate organic growth.',
      diagramType: 'speed',
      badge: '100 Vitals SLA',
    },
    {
      category: 'AI & Cloud',
      icon: Cloud,
      title: 'Cloud & DevOps Solutions',
      description: 'Automated CI/CD pipelines, serverless infrastructure, and bulletproof AWS/Vercel cloud architectures.',
      diagramType: 'cloud',
      badge: 'AWS & Vercel',
    },
    {
      category: 'AI & Cloud',
      icon: Cpu,
      title: 'AI & Automation Integration',
      description: 'LLM agents, intelligent workflow automation, and custom predictive models integrated directly into your stack.',
      diagramType: 'ai',
      badge: 'LLMs & Agents',
    },
    {
      category: 'Design & Growth',
      icon: Compass,
      title: 'Digital Brand Strategy',
      description: 'Data-driven positioning, GTM launch roadmaps, and competitive intelligence to establish category leadership.',
      diagramType: 'strategy',
      badge: 'GTM & Revenue',
    },
  ];

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Section Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[25rem] rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-blue-600/10' : 'bg-blue-300/20'
      }`} />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-4 inline-block ${
            isDark
              ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
              : 'bg-blue-100 border-blue-200 text-blue-700'
          }`}>
            Full-Spectrum Capabilities
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering Excellence Meets Masterful Design
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
            Explore our specialized capability units tailored for enterprise speed and conversion.
          </p>
        </motion.div>
      </div>

      {/* Interactive Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeCategory === cat
                ? 'gradient-bg-blue text-white shadow-lg shadow-blue-500/25 scale-105'
                : isDark
                ? 'bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10'
                : 'bg-white hover:bg-blue-50 text-slate-700 border border-blue-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Cards Grid with Micro Schematics */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative rounded-3xl p-8 flex flex-col justify-between border overflow-hidden glass-card ${
                  isDark ? 'border-white/10' : 'border-blue-100 bg-white/80'
                }`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border group-hover:scale-110 transition-transform duration-300 ${
                      isDark
                        ? 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                        : 'bg-blue-50 border-blue-200 text-blue-600'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                      isDark
                        ? 'bg-white/5 border-white/10 text-gray-300'
                        : 'bg-blue-50 border-blue-200 text-blue-700'
                    }`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className={`text-xl font-bold mb-3 transition-colors ${
                    isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    {service.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-gray-400' : 'text-slate-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Micro Line Schematic Illustration */}
                  <div className={`p-3 rounded-xl border mb-6 relative overflow-hidden ${
                    isDark ? 'bg-slate-950/60 border-white/5' : 'bg-blue-50/50 border-blue-100'
                  }`}>
                    <svg className="w-full h-12" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <line x1="10" y1="20" x2="190" y2="20" stroke={isDark ? '#3B82F6' : '#2563EB'} strokeWidth="2" strokeDasharray="4 4" />
                      <circle cx="30" cy="20" r="5" fill="#38BDF8" />
                      <circle cx="100" cy="20" r="7" fill="#3B82F6" />
                      <circle cx="170" cy="20" r="5" fill="#8B5CF6" />
                      <path d="M30 20 Q 65 5, 100 20 T 170 20" stroke={isDark ? '#38BDF8' : '#0284C7'} strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="flex items-center space-x-2 text-xs font-bold text-blue-500 group-hover:text-blue-400 transition-colors">
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
