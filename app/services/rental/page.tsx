"use client";

import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import { motion } from "framer-motion";

export default function RentalPage() {
  return (
    <>
      <PageHero
        title="Equipment Rental"
        subtitle="Advanced equipment for high-end solutions"
      />

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
                Everything You Need for a Successful Event
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Digi Expressions supports a full line of professional grade
                equipment for your next meeting or event. Our items range from
                individual or packaged components that consist of flipcharts,
                screens, microphones, speakers and small data projectors, to
                high-definition complete stage events with full concert sound and
                lighting.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                If your need is for an all-inclusive event we can be there for
                setup, operation and tear down of your equipment to manage all the
                work for you. We also are able to provide highly skilled
                technicians to be on-site to operate the items and ensure that
                your program goes perfectly.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Digi Expressions will deliver and pick up your audio visual
                equipment to save you time and travel. If you prefer customer pick
                up, we have a location to serve you and assist with loading and
                instruction to help prepare you for your meeting or show. We can
                provide everything you need for a cohesive, cost-effective solution
                for a successful event and provide only the latest and most
                innovative equipment and technology.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                As members of exhibit associations throughout the country, we can
                serve you wherever your next event ensues.
              </p>
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
                    "url(/images/658086711_18113564929664894_8713297414420528774_n.jpg)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need Equipment for Your Event?"
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
