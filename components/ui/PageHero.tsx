"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({ title, subtitle, className = "" }: PageHeroProps) {
  return (
    <section className={`relative min-h-[50vh] flex items-center justify-center bg-dark-900 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,197,66,0.06)_0%,_transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
