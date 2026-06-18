"use client";

import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";

const team = [
  { name: "Alex Chen", role: "Founder & CEO", bio: "Visionary leader with 20+ years in event production." },
  { name: "Maria Santos", role: "Director of Operations", bio: "Ensures every event runs flawlessly from start to finish." },
  { name: "James Kowalski", role: "Technical Director", bio: "Master of audio, video, and lighting systems design." },
  { name: "Sarah Park", role: "Creative Director", bio: "Award-winning designer behind our most ambitious productions." },
  { name: "David Okafor", role: "Head of Rigging", bio: "Safety-first engineer specializing in complex structural designs." },
  { name: "Rachel Torres", role: "Client Relations", bio: "Dedicated to making every client feel heard and supported." },
];

const stats = [
  { value: "2,500+", label: "Events Produced" },
  { value: "25+", label: "Years Experience" },
  { value: "150+", label: "Cities Covered" },
  { value: "99.7%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About DIGI Expressions"
        subtitle="We're a team of producers, engineers, and creatives united by one mission: delivering extraordinary event experiences."
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
              <p className="text-gold-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                Built on a Passion for Live Events
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  DIGI Expressions was founded with a simple belief: every event deserves to be extraordinary. What started as a small audio rental operation has grown into a full-service production company serving clients across the country.
                </p>
                <p>
                  Our growth has been driven by a relentless commitment to quality. We invest in the best technology, hire the most talented people, and approach every project with the same energy and attention to detail — whether it's a 50-person corporate meeting or a 50,000-person concert.
                </p>
                <p>
                  Today, we're proud to be one of the most trusted names in event production, known for our technical expertise, creative innovation, and the ability to deliver under pressure.
                </p>
              </div>
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
                    "url(https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">By the Numbers</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Our Impact</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-dark-800/50 border border-white/5"
              >
                <p className="text-4xl sm:text-5xl font-bold text-gold-500 mb-2">{stat.value}</p>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Our Team</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Meet the People Behind the Production</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-dark-900/50 border border-white/5 hover:border-gold-500/30 transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-600/20 flex items-center justify-center mb-5 text-2xl font-bold text-gold-500">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gold-500 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">What Sets Us Apart</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">The DIGI Difference</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Excellence",
                description: "We invest in the best technology and the best people. Our team holds industry certifications and stays ahead of emerging trends.",
              },
              {
                title: "Creative Innovation",
                description: "Every event is a blank canvas. We bring fresh ideas and creative solutions that make your event stand out and leave a lasting impression.",
              },
              {
                title: "Unwavering Reliability",
                description: "When you work with DIGI, you can sleep soundly. Our redundant systems, rigorous testing, and experienced team ensure flawless execution.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-8 rounded-2xl bg-dark-800/50 border border-white/5"
              >
                <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mb-5">
                  <span className="text-gold-500 font-bold text-lg">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
