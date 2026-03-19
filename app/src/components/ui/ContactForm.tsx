'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  general?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, this would send to an API endpoint
      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrors({ general: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card-glass p-8 space-y-6"
    >
      {/* Success message */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-green-500/10 border border-green-500/30"
        >
          <p className="text-green-400 text-sm">
            ✓ Message sent successfully! We&apos;ll be in touch soon.
          </p>
        </motion.div>
      )}

      {/* General error */}
      {errors.general && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-red-500/10 border border-red-500/30"
        >
          <p className="text-red-400 text-sm">{errors.general}</p>
        </motion.div>
      )}

      {/* Name field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-warm-white mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Cosmo, Nova, Stella, or Luna"
          className="w-full px-4 py-2 rounded-lg bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder-warm-white/40 focus:outline-none focus:border-gold/50 focus:bg-warm-white/10 transition-all duration-300"
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-warm-white mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-2 rounded-lg bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder-warm-white/40 focus:outline-none focus:border-gold/50 focus:bg-warm-white/10 transition-all duration-300"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Subject field */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-warm-white mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's on your mind?"
          className="w-full px-4 py-2 rounded-lg bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder-warm-white/40 focus:outline-none focus:border-gold/50 focus:bg-warm-white/10 transition-all duration-300"
        />
        {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
      </div>

      {/* Message field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-warm-white mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us your thoughts, questions, or ideas..."
          rows={5}
          className="w-full px-4 py-2 rounded-lg bg-warm-white/5 border border-warm-white/20 text-warm-white placeholder-warm-white/40 focus:outline-none focus:border-gold/50 focus:bg-warm-white/10 transition-all duration-300 resize-none"
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
        <p className="text-warm-white/40 text-xs mt-1">{formData.message.length} / 1000 characters</p>
      </div>

      {/* Submit button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 rounded-lg bg-gold text-rich-black font-semibold transition-all duration-300 hover:bg-gold/80 disabled:bg-gold/50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-rich-black border-t-transparent rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </motion.button>

      {/* Form info */}
      <p className="text-warm-white/50 text-xs text-center">
        We typically respond within 24 hours. For urgent matters, reach out to us on Discord or X.
      </p>
    </motion.form>
  );
}
