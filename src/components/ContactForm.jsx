import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, User, Briefcase } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ContactForm() {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Engineering',
    budget: '$15k - $50k',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgets = ['$5k - $15k', '$15k - $50k', '$50k+'];

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address (e.g. name@domain.com)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    return newErrors;
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validationErrors = validateForm();
    setErrors(validationErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const validationErrors = validateForm();
      setErrors((prev) => ({
        ...prev,
        [name]: validationErrors[name] || undefined,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          service: 'Full-Stack Engineering',
          budget: '$15k - $50k',
          message: '',
        });
        setTouched({});
      }, 1200);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Ambient Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full blur-3xl pointer-events-none ${
        isDark ? 'bg-blue-600/10' : 'bg-cyan-200/30'
      }`} />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        {/* Left Column: Heading & Availability */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className={`text-xs sm:text-sm font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full border mb-4 inline-block ${
              isDark ? 'bg-blue-500/10 border-blue-500/20 text-blue-300' : 'bg-blue-100 border-blue-300 text-blue-900'
            }`}>
              Let's Connect
            </span>

            <h2 className={`text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Initiate Your Digital Project
            </h2>

            <p className={`text-base leading-relaxed mb-8 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
              Have an ambitious deadline or technical target? Share your requirements and our senior engineering leads will respond within 24 hours.
            </p>

            {/* Availability Indicator */}
            <div className={`p-6 rounded-2xl border glass-card mb-8 ${
              isDark ? 'border-white/10' : 'border-blue-200 bg-white/90 shadow-sm'
            }`}>
              <div className="flex items-center space-x-3 mb-3">
                <span className="relative flex h-3 w-3" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className={`text-xs font-bold uppercase tracking-wider ${
                  isDark ? 'text-emerald-300' : 'text-emerald-800'
                }`}>
                  Studio Availability: Q3/Q4 Openings
                </span>
              </div>
              <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                Currently onboarding select enterprise partners for rapid 4-8 week execution sprints.
              </p>
            </div>

            {/* Direct Contact */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400" aria-hidden="true">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className={`text-xs font-medium block ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Direct Proposals</span>
                  <a href="mailto:hello@northpeakdigital.com" className={`text-sm font-semibold hover:text-blue-600 transition-colors ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    hello@northpeakdigital.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-8 sm:p-10 rounded-3xl border glass-card relative overflow-hidden ${
              isDark ? 'border-white/10' : 'border-blue-200 bg-white/95 shadow-xl'
            }`}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Proposal Received!
                </h3>
                <p className={`max-w-md mx-auto text-sm leading-relaxed ${isDark ? 'text-gray-200' : 'text-slate-700'}`}>
                  Thank you for reaching out. Our engineering directors will evaluate your requirements and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name-input" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-slate-800'}`}>
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400" aria-hidden="true">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="name-input"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                      placeholder="Alex Mercer"
                      aria-required="true"
                      aria-invalid={!!(touched.name && errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                        isDark
                          ? 'bg-white/5 text-white placeholder-gray-400 border-white/10'
                          : 'bg-slate-50 text-slate-900 placeholder-slate-500 border-blue-200'
                      } ${
                        touched.name && errors.name ? 'border-red-500 bg-red-500/10' : ''
                      }`}
                    />
                  </div>
                  {touched.name && errors.name && (
                    <p id="name-error" className="mt-2 text-xs text-red-600 dark:text-red-400 font-medium flex items-center space-x-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email-input" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-slate-800'}`}>
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400" aria-hidden="true">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      id="email-input"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      placeholder="alex@company.com"
                      aria-required="true"
                      aria-invalid={!!(touched.email && errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                        isDark
                          ? 'bg-white/5 text-white placeholder-gray-400 border-white/10'
                          : 'bg-slate-50 text-slate-900 placeholder-slate-500 border-blue-200'
                      } ${
                        touched.email && errors.email ? 'border-red-500 bg-red-500/10' : ''
                      }`}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p id="email-error" className="mt-2 text-xs text-red-600 dark:text-red-400 font-medium flex items-center space-x-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Budget Selection */}
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-slate-800'}`}>
                    Estimated Budget Range
                  </label>
                  <div className="grid grid-cols-3 gap-3" role="radiogroup" aria-label="Estimated budget range options">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                        aria-checked={formData.budget === b}
                        role="radio"
                        className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          formData.budget === b
                            ? 'gradient-bg-blue text-white border-blue-500 shadow-md'
                            : isDark
                            ? 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/10'
                            : 'bg-blue-50 border-blue-200 text-slate-800 hover:bg-blue-100'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message-input" className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-200' : 'text-slate-800'}`}>
                    Project Brief <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message-input"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={() => handleBlur('message')}
                    placeholder="Tell us about your timeline, tech stack, and growth goals..."
                    aria-required="true"
                    aria-invalid={!!(touched.message && errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full p-4 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ${
                      isDark
                        ? 'bg-white/5 text-white placeholder-gray-400 border-white/10'
                        : 'bg-slate-50 text-slate-900 placeholder-slate-500 border-blue-200'
                    } ${
                      touched.message && errors.message ? 'border-red-500 bg-red-500/10' : ''
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p id="message-error" className="mt-2 text-xs text-red-600 dark:text-red-400 font-medium flex items-center space-x-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-full text-base font-bold text-white gradient-bg-blue neo-button shadow-lg shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                  aria-label="Submit project inquiry"
                >
                  {isSubmitting ? (
                    <span>Encrypting & Sending Brief...</span>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <Send className="w-4 h-4 ml-1" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
