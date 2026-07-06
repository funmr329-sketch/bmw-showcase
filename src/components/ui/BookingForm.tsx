'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, Phone, User, Send, CheckCircle } from 'lucide-react';
import { bmwModels } from '@/lib/bmwModels';

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.model || !formData.date) return;
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle size={40} className="text-accent" />
        </motion.div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted max-w-md mx-auto">
          Your test drive request has been submitted. Our BMW representative will contact you within 24 hours to confirm your appointment.
        </p>
        <button
          onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', model: '', date: '', message: '' }); }}
          className="btn-primary mt-8"
        >
          Book Another
        </button>
      </motion.div>
    );
  }

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Experience It Firsthand</p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Book a<span className="text-gradient"> Test Drive</span>
        </h2>
        <p className="mt-4 text-muted max-w-lg mx-auto">
          Schedule your appointment to experience the power, luxury, and innovation of BMW.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="relative">
            <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-sm"
            />
          </div>
          <div className="relative">
            <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-sm"
            />
          </div>
          <div className="relative">
            <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-sm"
            />
          </div>
          <div className="relative">
            <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-sm [color-scheme:dark]"
            />
          </div>
        </div>

        <div className="relative">
          <select
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-sm appearance-none"
          >
            <option value="" disabled>Select Model</option>
            {bmwModels.map((m) => (
              <option key={m.id} value={m.name} className="bg-background">{m.name}</option>
            ))}
          </select>
        </div>

        <div className="relative">
          <textarea
            name="message"
            placeholder="Additional Notes (Optional)"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-sm resize-none"
          />
        </div>

        <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
          <Send size={16} />
          Submit Booking Request
        </button>

        <p className="text-xs text-center text-muted">
          By submitting, you agree to our Privacy Policy. We will contact you within 24 hours.
        </p>
      </motion.form>
    </section>
  );
}