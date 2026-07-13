"use client";

import PageHero from "@/components/ui/PageHero";
import CTABanner from "@/components/ui/CTABanner";
import { motion } from "framer-motion";

export default function EventConsultingPage() {
  return (
    <>
      <PageHero
        title="Event Production and Consulting"
        subtitle="A successful performance is the result of thorough preparation and development"
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
                From Concept to Curtain
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                An event of any scale requires thoughtful planning and involves a
                proven process. Digi Expressions works closely with you to
                understand your expectations to design and produce full-service
                events. The experience we have with gatherings of all sizes will
                bring insight to the many options available to you.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Digi Expressions not only consults in planning, but produces
                events that are memorable and bring engaging experiences to your
                guests. We recognize your event has to operate within a technology
                budget and will work with you to understand the most strategic way
                to accomplish this.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Prior to the event, our work begins with a technology plan and
                description of presentation services. We can also begin work that
                includes scripting and PowerPoint, as well as pre-event video
                recording and editing for promotion at this stage. We will provide
                you with a written event plan to bring order and strategy and
                assure you the details are covered so you can focus on the
                program.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Throughout your event we provide technical assistance and
                presenter support to operate and capture content. This can be used
                for recording, large screen streaming, as well as webcasting live
                online video to share worldwide, and as video-on-demand.
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
                    "url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Planning an Event? Let's Talk."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
