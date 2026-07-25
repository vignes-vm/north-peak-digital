import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code2, Zap, Cloud, Cpu, Compass, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'UI/UX & Web Design',
      description: 'Bespoke, high-converting digital interfaces engineered for seamless user journeys and striking modern aesthetics.',
      accent: 'from-blue-500/20 to-indigo-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: Code2,
      title: 'Full-Stack Engineering',
      description: 'Scalable React, Next.js, and Node systems built with clean architecture, high throughput, and zero technical debt.',
      accent: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: Zap,
      title: 'Performance & SEO',
      description: 'Lightning-fast Core Web Vitals optimization and algorithmic search strategies that dominate organic growth.',
      accent: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Solutions',
      description: 'Automated CI/CD pipelines, serverless infrastructure, and bulletproof AWS/Vercel cloud architectures.',
      accent: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400',
    },
    {
      icon: Cpu,
      title: 'AI & Automation Integration',
      description: 'LLM agents, intelligent workflow automation, and custom predictive models integrated directly into your stack.',
      accent: 'from-emerald-500/20 to-teal-500/20',
      iconColor: 'text-emerald-400',
    },
    {
      icon: Compass,
      title: 'Digital Brand Strategy',
      description: 'Data-driven positioning, GTM launch roadmaps, and competitive intelligence to establish category leadership.',
      accent: 'from-rose-500/20 to-red-500/20',
      iconColor: 'text-rose-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3 block">
            Capabilities & Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Full-Spectrum Digital Services for High-Growth Brands
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            We combine design mastery with deep technical rigor to build solutions that outpace competitors.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between border border-white/10 overflow-hidden"
            >
              {/* Background Accent Glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.accent} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none`}
              />

              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                  <Icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Link */}
              <div className="flex items-center space-x-2 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors pt-2">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
