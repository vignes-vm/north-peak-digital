import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Launch Pad',
      badge: 'Starter Tier',
      price: '$4,900',
      period: 'one-time engagement',
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
      price: '$12,500',
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
      period: 'tailored monthly retainer',
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
      {/* Background Accent Mesh */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-3 block">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Invest in Engineering Excellence
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Clear, value-driven pricing plans designed for rapid execution and measurable returns.
          </p>
        </motion.div>
      </div>

      {/* Pricing Cards */}
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
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-[#1E293B] to-[#0F172A] border-2 border-blue-500 shadow-2xl shadow-blue-500/20 lg:-translate-y-4'
                  : 'glass-panel border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Featured Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                    plan.highlighted ? 'bg-blue-500/20 text-blue-300' : 'bg-white/5 text-gray-400'
                  }`}>
                    {!plan.highlighted && plan.badge}
                    {plan.highlighted && 'Recommended Plan'}
                  </span>
                  <PlanIcon className={`w-6 h-6 ${plan.highlighted ? 'text-blue-400' : 'text-gray-400'}`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-gray-400 uppercase font-semibold">
                      / {plan.period}
                    </span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-3.5 mb-8" aria-label={`${plan.name} features`}>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-3 text-sm text-gray-300">
                      <div className={`p-1 rounded-full mt-0.5 ${
                        plan.highlighted ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-blue-400'
                      }`}>
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
                  className={`w-full inline-flex items-center justify-center space-x-2 py-4 rounded-full text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 ${
                    plan.highlighted
                      ? 'gradient-button text-white shadow-lg shadow-blue-500/30 hover:scale-[1.02]'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                  aria-label={`Select ${plan.name} pricing package`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
