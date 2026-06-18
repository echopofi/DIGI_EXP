"use client";

import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import CTABanner from "@/components/ui/CTABanner";

const eventTypes = [
  "Corporate Event",
  "Concert",
  "Trade Show",
  "Wedding",
  "Gala",
  "Product Launch",
  "Political Rally",
  "Press Event",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Let's Work Together"
        subtitle="Tell us about your event and we'll create a production plan tailored to your vision."
      />

      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-12 rounded-2xl bg-dark-900/50 border border-green-500/20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl text-green-500">✓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Thank You!</h3>
                  <p className="text-zinc-400 max-w-md mx-auto">
                    Your inquiry has been received. Our team will review your event details and reach
                    out within 24 hours to discuss next steps.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-zinc-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-colors"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-zinc-300 mb-2">
                        Event Type *
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-colors"
                      >
                        <option value="" disabled>
                          Select event type
                        </option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-zinc-300 mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                      Tell Us About Your Event *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500/50 focus:ring-1 focus:ring-gold-500/20 transition-colors resize-none"
                      placeholder="Describe your event — type, size, location, technical requirements, and any specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-4 text-base font-semibold text-dark-900 bg-gold-500 rounded-full hover:bg-gold-400 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/25"
                  >
                    Send Inquiry
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-2xl bg-dark-900/50 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-gold-500 text-sm font-medium mb-1">Address</p>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      123 Production Way<br />
                      Suite 200<br />
                      Los Angeles, CA 90028
                    </p>
                  </div>

                  <div>
                    <p className="text-gold-500 text-sm font-medium mb-1">Phone</p>
                    <a href="tel:+15551234567" className="text-zinc-300 text-sm hover:text-gold-500 transition-colors">
                      (555) 123-4567
                    </a>
                  </div>

                  <div>
                    <p className="text-gold-500 text-sm font-medium mb-1">Email</p>
                    <a href="mailto:info@digiexpressions.com" className="text-zinc-300 text-sm hover:text-gold-500 transition-colors">
                      info@digiexpressions.com
                    </a>
                  </div>

                  <div>
                    <p className="text-gold-500 text-sm font-medium mb-1">Office Hours</p>
                    <p className="text-zinc-300 text-sm">
                      Mon – Fri: 8:00 AM – 6:00 PM<br />
                      Weekend: By appointment
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-8 rounded-2xl bg-dark-900/50 border border-white/5 aspect-[4/3] overflow-hidden">
                <div className="w-full h-full rounded-xl bg-dark-700 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-zinc-500 text-sm mb-2">Map Placeholder</p>
                    <p className="text-zinc-600 text-xs">Google Maps integration</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need a Quick Response?"
        buttonText="Call Us: (555) 123-4567"
        buttonHref="tel:+15551234567"
      />
    </>
  );
}
