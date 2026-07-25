import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const caseStudies = [
    {
      metric: '+340%',
      metricLabel: 'Organic Conversion Rate',
      quote:
        'North Peak Digital completely transformed our web platform. Their architectural choices and speed optimization directly contributed to our $15M Series B funding round.',
      author: 'Marcus Vance',
      title: 'VP of Product',
      company: 'Fintech Velocity',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
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
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      badge: 'E-Commerce',
    },
    {
      metric: '$4.2M',
      metricLabel: 'Arr Added in 90 Days',
      quote:
        'From brand identity to cloud infra, North Peak executed seamlessly. They operate like elite co-founders who care about profit metrics as much as pixel precision.',
      author: 'David Chen',
      title: 'Founder & CEO',
      company: 'Nexus AI Systems',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      badge: 'AI & Enterprise',
    },
  ];

  return (
    <section id="results" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[25rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-purple-400 mb-3 block">
            Proven Impact & ROI
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Client Success Stories & Quantifiable Results
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Don't just take our word for it. Here is how we accelerate growth for high-stakes digital ventures.
          </p>
        </motion.div>
      </div>

      {/* Testimonials / Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {caseStudies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="glass-panel p-8 rounded-3xl flex flex-col justify-between border border-white/10 relative overflow-hidden group hover:border-purple-500/40 transition-all duration-300"
          >
            {/* Category Tag */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                {item.badge}
              </span>
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            {/* Metric Highlight */}
            <div className="mb-6">
              <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 tracking-tight block">
                {item.metric}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-1 block">
                {item.metricLabel}
              </span>
            </div>

            {/* Blockquote */}
            <blockquote className="text-gray-300 text-sm leading-relaxed mb-8 flex-grow italic relative">
              <Quote className="w-8 h-8 text-white/5 absolute -top-4 -left-2 pointer-events-none" />
              "{item.quote}"
            </blockquote>

            {/* Author Profile */}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/10">
              <img
                src={item.avatar}
                alt={item.author}
                className="w-12 h-12 rounded-full object-cover border border-white/20"
              />
              <div>
                <h4 className="text-sm font-bold text-white leading-snug">{item.author}</h4>
                <p className="text-xs text-gray-400">
                  {item.title}, <span className="text-blue-400 font-medium">{item.company}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
