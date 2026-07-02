"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data/services";

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Full-Service Event Production
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every element of your event, handled by one team with one vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
              
                href={service.href}
                className="group block p-8 rounded-2xl bg-zinc-800 border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1"
              >
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto mb-5 rounded-lg"
                  />
                )}
                <span className="text-4xl block mb-5"></span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{service.shortDescription}</p>
                <span className="inline-flex items-center gap-2 mt-5 text-gold-500 text-sm font-medium group-hover:gap-3 transition-all">
                  Learn more
                  <span className="text-lg leading-none">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
