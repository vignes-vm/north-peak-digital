import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Testimonials() {
  const { isDark } = useTheme();

  const caseStudies = [
    {
      metric: '+340%',
      metricLabel: 'Organic Conversion Rate',
      quote:
        'North Peak Digital completely transformed our web platform. Their architectural choices and speed optimization directly contributed to our $15M Series B funding round.',
      author: 'Marcus Vance',
      title: 'VP of Product',
      company: 'Fintech Velocity',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      badge: 'Fintech & SaaS',
    },
    {
      metric: '45ms',
      metricLabel: 'Global Latency (P99)',
      quote:
        'The engineering quality delivered by North Peak is unmatched. They rebuilt our core e-commerce engine, cutting load times by 70% and doubling mobile revenue.',
      author: 'Elena Rostova',
      title: 'Chief Technology Officer',
      company: 'Aura Luxury Retail',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
      badge: 'E-Commerce',
    },
    {
      metric: '$4.2M',
      metricLabel: 'ARR Added in 90 Days',
      quote:
        'From brand identity to cloud infra, North Peak executed seamlessly. They operate like elite co-founders who care about profit metrics as much as pixel precision.',
      author: 'David Chen',
      title: 'Founder & CEO',
      company: 'Nexus AI Systems',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      badge: 'AI & Enterprise',
    },
  ];

  return (
    <section id="results" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Ambient Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-indigo-600/10' : 'bg-cyan-200/30'
      }`} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-4 inline-block ${
            isDark ? 'bg-purple-500/10 border-purple-500/20 text-purple-300' : 'bg-purple-100 border-purple-300 text-purple-900'
          }`}>
            Proven Growth & Impact
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Real Results Delivered to Market Leaders
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            Quantifiable growth, engineering benchmarks, and testimonial evidence from our partners.
          </p>
        </motion.div>
      </div>

      {/* Animated SVG Growth Curve Diagram Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`mb-16 p-8 rounded-3xl border glass-card relative overflow-hidden ${
          isDark ? 'border-white/10' : 'border-blue-200 bg-white/90 shadow-lg'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center space-x-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
              <TrendingUp className="w-4 h-4" aria-hidden="true" />
              <span>Aggregate Growth Trajectory</span>
            </div>
            <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Average 3.4x Conversion Lift Post-Launch
            </h3>
          </div>
          <div className="flex items-center space-x-3 text-xs font-semibold">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30">
              Q1 - Q4 Benchmark
            </span>
          </div>
        </div>

        {/* Animated Line Chart SVG */}
        <div className="relative w-full h-48 sm:h-56">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200" preserveAspectRatio="none" role="img" aria-label="Growth trajectory chart showing 3.4x conversion lift">
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>

            <line x1="0" y1="50" x2="800" y2="50" stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'} strokeDasharray="4 4" />
            <line x1="0" y1="100" x2="800" y2="100" stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'} strokeDasharray="4 4" />
            <line x1="0" y1="150" x2="800" y2="150" stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'} strokeDasharray="4 4" />

            <path d="M0 180 Q 200 160, 400 100 T 800 20 L 800 200 L 0 200 Z" fill="url(#chartGradient)" />

            <motion.path
              d="M0 180 Q 200 160, 400 100 T 800 20"
              fill="none"
              stroke="#2563EB"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            <circle cx="200" cy="160" r="6" fill="#0284C7" />
            <circle cx="400" cy="100" r="7" fill="#2563EB" />
            <circle cx="800" cy="20" r="8" fill="#7C3AED" />
          </svg>
        </div>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {caseStudies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`p-8 rounded-3xl flex flex-col justify-between border relative overflow-hidden glass-card ${
              isDark ? 'border-white/10' : 'border-blue-200 bg-white/90 shadow-md'
            }`}
          >
            {/* Category Tag */}
            <div className="flex items-center justify-between mb-6">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                isDark ? 'bg-white/5 border-white/10 text-gray-200' : 'bg-blue-100 border-blue-300 text-blue-900'
              }`}>
                {item.badge}
              </span>
              <div className="flex items-center space-x-1 text-amber-500" aria-label="5 out of 5 stars rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Metric Highlight */}
            <div className="mb-6">
              <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 tracking-tight block">
                {item.metric}
              </span>
              <span className={`text-xs font-bold uppercase tracking-wider mt-1 block ${
                isDark ? 'text-gray-300' : 'text-slate-700'
              }`}>
                {item.metricLabel}
              </span>
            </div>

            {/* Blockquote */}
            <blockquote className={`text-sm leading-relaxed mb-8 flex-grow italic relative ${
              isDark ? 'text-gray-200' : 'text-slate-800'
            }`}>
              <Quote className="w-8 h-8 opacity-10 absolute -top-4 -left-2 pointer-events-none" aria-hidden="true" />
              "{item.quote}"
            </blockquote>

            {/* Author Profile */}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <img
                src={item.avatar}
                alt={item.author}
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
                className="w-12 h-12 rounded-full object-cover border border-blue-400/40"
              />
              <div>
                <h4 className={`text-sm font-bold leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {item.author}
                </h4>
                <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                  {item.title}, <span className="text-blue-600 font-bold">{item.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
