"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTABannerProps {
  headline: string;
  buttonText: string;
  buttonHref: string;
}

export default function CTABanner({ headline, buttonText, buttonHref }: CTABannerProps) {
  return (
    <section className="relative py-24 bg-dark-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,197,66,0.08)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
          {headline}
        </h2>
        <Link
          href={buttonHref}
          className="inline-flex items-center px-8 py-4 text-base font-semibold text-dark-900 bg-gold-500 rounded-full hover:bg-gold-400 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/25 hover:-translate-y-0.5"
        >
          {buttonText}
          <span className="ml-2 text-lg">→</span>
        </Link>
      </motion.div>
    </section>
  );
}
