"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-dark-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            See what our clients say about working with DIGI Expressions.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex gap-6 px-6 overflow-x-auto pb-4 scrollbar-none"
        style={{
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </motion.div>
    </section>
  );
}
