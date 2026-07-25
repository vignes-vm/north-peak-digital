import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Pricing() {
  const { isDark } = useTheme();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Launch Pad',
      badge: 'Starter Tier',
      price: isAnnual ? '$3,900' : '$4,900',
      period: 'project engagement',
      description: 'Ideal for early-stage startups needing a world-class MVP landing page or web presence.',
      features: [
        'Single Page High-Converting Architecture',
        'Custom Tailwind UI & Brand Styling',
        'Mobile Responsive (360px - 1440px+)',
        'Core Web Vitals Performance Tuning',
        'Basic SEO & Analytics Integration',
        '2 Weeks Post-Launch Support',
      ],
      cta: 'Start Project',
      highlighted: false,
      icon: Zap,
    },
    {
      name: 'Growth Engine',
      badge: 'Most Popular',
      price: isAnnual ? '$9,900' : '$12,500',
      period: 'project basis',
      description: 'Full-stack application development & bespoke growth systems engineered to scale.',
      features: [
        'Full Custom React / Next.js Web App',
        'Advanced Framer Motion Animations',
        'Tailored CMS & API Integration',
        '99.9% Uptime & Cloud Architecture',
        'Enterprise Security & A11y Audit',
        'Dedicated Project Lead & Slack Channel',
        '30 Days Post-Launch Support',
      ],
      cta: 'Scale Your Brand Today',
      highlighted: true,
      icon: Sparkles,
    },
    {
      name: 'Enterprise Scale',
      badge: 'Bespoke',
      price: 'Custom',
      period: 'monthly retainer',
      description: 'Dedicated team of senior engineers and designers for continuous innovation.',
      features: [
        'Dedicated Dev & UI/UX Team',
        'Custom AI Workflow & LLM Integration',
        'Legacy Migration & Micro-frontends',
        '24/7 SLA Uptime Guarantee',
        'Quarterly UX & Conversion Audits',
        'Unlimited Maintenance & Iterations',
      ],
      cta: 'Contact Sales Team',
      highlighted: false,
      icon: Shield,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-4 inline-block ${
            isDark ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300' : 'bg-cyan-100 border-cyan-300 text-cyan-900'
          }`}>
            Transparent Value Tiers
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Invest in Engineering Excellence
          </h2>
          <p className={`mt-4 text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
            Select a project package built for immediate speed and enterprise return.
          </p>
        </motion.div>
      </div>

      {/* Annual / One-Time Toggle Switch */}
      <div className="flex items-center justify-center space-x-4 mb-16">
        <span className={`text-sm font-semibold ${!isAnnual ? (isDark ? 'text-white' : 'text-slate-900') : (isDark ? 'text-gray-400' : 'text-slate-600')}`}>
          Standard Billing
        </span>

        <button
          onClick={() => setIsAnnual(!isAnnual)}
          className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            isAnnual ? 'bg-blue-600' : isDark ? 'bg-white/20' : 'bg-slate-300'
          }`}
          aria-label={isAnnual ? 'Switch to Standard Billing' : 'Switch to Accelerated Growth 20% Discount Billing'}
          aria-pressed={isAnnual}
        >
          <motion.div
            className="w-6 h-6 rounded-full bg-white shadow-md"
            animate={{ x: isAnnual ? 24 : 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </button>

        <div className="flex items-center space-x-2">
          <span className={`text-sm font-semibold ${isAnnual ? (isDark ? 'text-white' : 'text-slate-900') : (isDark ? 'text-gray-400' : 'text-slate-600')}`}>
            Accelerated Growth
          </span>
          <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
            Save 20%
          </span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => {
          const PlanIcon = plan.icon;
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 glass-card ${
                plan.highlighted
                  ? 'gradient-border-glow border-2 border-blue-500 shadow-2xl lg:-translate-y-4'
                  : isDark
                  ? 'border-white/10'
                  : 'border-blue-200 bg-white/90 shadow-md'
              }`}
            >
              {/* Featured Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg-blue text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center space-x-1.5 z-20">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    plan.highlighted
                      ? 'bg-blue-500/20 text-blue-700 dark:text-blue-300'
                      : isDark
                      ? 'bg-white/5 text-gray-300'
                      : 'bg-blue-100 text-blue-900'
                  }`}>
                    {!plan.highlighted && plan.badge}
                    {plan.highlighted && 'Recommended Plan'}
                  </span>
                  <PlanIcon className={`w-6 h-6 ${plan.highlighted ? 'text-blue-600' : (isDark ? 'text-gray-400' : 'text-slate-600')}`} aria-hidden="true" />
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-baseline space-x-2">
                    <span className={`text-4xl sm:text-5xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-xs uppercase font-semibold ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      / {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8" aria-label={`${plan.name} package features`}>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className={`flex items-start space-x-3 text-sm ${isDark ? 'text-gray-200' : 'text-slate-800'}`}>
                      <div className="p-1 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 mt-0.5" aria-hidden="true">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <div>
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center space-x-2 py-4 rounded-full text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    plan.highlighted
                      ? 'gradient-bg-blue text-white shadow-lg shadow-blue-500/30 hover:scale-[1.02] neo-button'
                      : isDark
                      ? 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                      : 'bg-blue-100 hover:bg-blue-200 text-blue-900 border border-blue-300'
                  }`}
                  aria-label={`Select ${plan.name} pricing package`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
