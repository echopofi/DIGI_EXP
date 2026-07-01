"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,197,66,0.08)_0%,_transparent_70%)]" />

      <div className="z-3 absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/20 to-dark-900" />
        <div
          className="w-full h-full bg-cover bg-center "
          style={{
            backgroundImage:
              "url('/images/dg-bg.webp')",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold-500 text-sm sm:text-base font-medium tracking-[0.2em] uppercase mb-6"
        >
          DIGI Expressions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8"
        >
          Your Events.
          <br />
          <span className="text-gold-500">Complete Expressions.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Our expertise and technology will amplify your event success!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-8 py-4 text-base font-semibold text-dark-900 bg-gold-500 rounded-full hover:bg-gold-400 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/25 hover:-translate-y-0.5"
          >
            Plan Your Event
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-full hover:border-gold-500/50 hover:text-gold-500 transition-all duration-300"
          >
            View Our Work
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
