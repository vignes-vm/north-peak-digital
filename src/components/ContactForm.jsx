import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, User, MessageSquare, Briefcase } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Engineering',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      // Simulate API Submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          service: 'Full-Stack Engineering',
          message: '',
        });
        setTouched({});
      }, 1200);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Glow Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        {/* Left Column: Heading & Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3 block">
              Start a Project
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Let's Build Something Exceptional Together
            </h2>
            <p className="text-base text-gray-300 leading-relaxed mb-8">
              Have a launch deadline or ambitious growth target? Tell us about your project and our team will get back to you within 24 hours.
            </p>

            {/* Direct Contacts List */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-400 block">Direct Inquiries</span>
                  <a href="mailto:hello@northpeakdigital.com" className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                    hello@northpeakdigital.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-medium text-gray-400 block">Headquarters</span>
                  <span className="text-sm font-semibold text-white">San Francisco, CA & Remote Global</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Contact Form with Strict Validation */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                <p className="text-gray-300 max-w-md mx-auto text-sm leading-relaxed">
                  Thank you for reaching out to North Peak Digital. Our senior team has received your message and will review it promptly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name-input" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
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
                      className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/5 border text-white text-sm placeholder-gray-500 focus:outline-none transition-all duration-200 ${
                        touched.name && errors.name
                          ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/30 bg-red-500/5'
                          : 'border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      }`}
                    />
                  </div>
                  {touched.name && errors.name && (
                    <p id="name-error" className="mt-2 text-xs text-red-400 flex items-center space-x-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email-input" className="block text-sm font-medium text-gray-300 mb-2">
                    Work Email <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
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
                      className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/5 border text-white text-sm placeholder-gray-500 focus:outline-none transition-all duration-200 ${
                        touched.email && errors.email
                          ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/30 bg-red-500/5'
                          : 'border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      }`}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p id="email-error" className="mt-2 text-xs text-red-400 flex items-center space-x-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service-input" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service-input"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#111827] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  >
                    <option value="Full-Stack Engineering">Full-Stack Engineering</option>
                    <option value="UI/UX & Web Design">UI/UX & Web Design</option>
                    <option value="Performance & SEO Optimization">Performance & SEO Optimization</option>
                    <option value="Cloud Architecture & DevOps">Cloud Architecture & DevOps</option>
                    <option value="AI Integration & Automation">AI Integration & Automation</option>
                    <option value="Digital Brand Strategy">Digital Brand Strategy</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message-input" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="message-input"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      placeholder="Tell us about your timeline, goals, and core requirements..."
                      aria-required="true"
                      aria-invalid={!!(touched.message && errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full p-4 rounded-xl bg-white/5 border text-white text-sm placeholder-gray-500 focus:outline-none transition-all duration-200 ${
                        touched.message && errors.message
                          ? 'border-red-500/80 focus:ring-2 focus:ring-red-500/30 bg-red-500/5'
                          : 'border-white/10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
                      }`}
                    />
                  </div>
                  {touched.message && errors.message && (
                    <p id="message-error" className="mt-2 text-xs text-red-400 flex items-center space-x-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center space-x-2 py-4 rounded-full text-base font-bold text-white gradient-button shadow-lg shadow-blue-500/25 hover:scale-[1.01] transition-transform duration-200 disabled:opacity-50"
                  aria-label="Submit project inquiry"
                >
                  {isSubmitting ? (
                    <span>Sending Proposal Request...</span>
                  ) : (
                    <>
                      <span>Send Project Brief</span>
                      <Send className="w-4 h-4 ml-1" />
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
