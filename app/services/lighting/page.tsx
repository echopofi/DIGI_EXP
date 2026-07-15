"use client";

import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import { motion } from "framer-motion";
import { services } from "@/lib/data/services";

const features = [
  "Intelligent lighting",
  "LED wash & effect lighting",
  "Truss systems, staging & rigging",
  "Scenic design & set construction",
  "Atmospheric effects (haze, fog, smoke)",
  "Lighting control consoles",
  "Network design & WiFi deployment",
  "Technical staffing & on-site support",
  "Show control & automation systems",
  "Safety inspections",
];

export default function LightingPage() {
  const service = services.find((s) => s.id === "lighting")!;

  return (
    <>
      <PageHero title={service.title} subtitle={service.description} />

      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                What We Provide
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">
                Set the Mood. Make a Statement.
              </h2>
              <ul className="space-y-4">
                {features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3 text-zinc-300"
                  >
                    <span className="text-gold-500 mt-1 flex-shrink-0">▸</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-700"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(/newImages/stage-light.jpeg)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner headline="Light Up Your Next Event" buttonText="Start Designing" buttonHref="/contact" />
    </>
  );
}
