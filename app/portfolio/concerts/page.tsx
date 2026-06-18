"use client";

import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";
import { portfolioItems } from "@/lib/data/portfolio";

const items = portfolioItems.filter((item) => item.category === "Concerts");

export default function ConcertsPortfolioPage() {
  return (
    <>
      <PageHero
        title="Concerts & Live Events"
        subtitle="Electric performances demand flawless production. We deliver world-class audio, lighting, and staging for live music events of every scale."
      />

      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-dark-700 group cursor-pointer"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:gap-3 transition-all"
            >
              View all projects
              <span className="text-lg leading-none">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
