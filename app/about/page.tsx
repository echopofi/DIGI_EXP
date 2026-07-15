"use client";

import PageHero from "@/components/ui/PageHero";
import { motion } from "framer-motion";

const team = [
  { name: "Miriam Yepwi", role: "CEO", image: "/team/CEO.jpg.jpeg" },
  { name: "Engr. Emmanuel Atna Yepwi", role: "Director of Operations", image: "/team/dop.jpeg" },
  { name: "Simon Shagba Emmanuel", role: "Technical Director", image: "/team/simon-technical.jpeg" },
  { name: "Shedrach Effiong", role: "Creative Director", image: "/team/shedrach-creative.jpeg" },
  { name: "Judah Godfrey", role: "Head of Rigging", image: "/team/judah-rigging-head.jpeg" },
  { name: "Judah Sunwar", role: "Lights Technician", image: "team/judah-lightening.jpeg" },
  { name: "Nanpon Ernest", role: "Audio Technician", image: "team/" },
  { name: "Danan Jason", role: "Head of Logistics", image: "team/" },
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
        image="/images/soundcheck2.webp"
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
                Event Solutions
              </h2>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  Digi Expressions is known for its event production services across the country and is a specialist in large, high profile venue settings. We have sound, video,  lights, LED screens and staging inventory available to produce events of all sizes and capabilities and are able to create a custom presentation system for your key audience. Our equipment rental and design services join only the latest audio visual and IT resources and are equipped to supply your event with a complete, turn-key solution. We are set apart from other event solutions providers in that we bring professional talent who builds an event experience. Our rental staging and design teams throughout the nation collaborate to deliver high-end equipment and ensure your guests are engaged and entertained. We simplify the planning process and bring the most skilled and industry certified production engineers and technicians to your project, whether your event duration is one day or one month. With our depth of expertise, we can offer services above and beyond others, including: multi-point video conferencing, webcasting, litigation support, video mapping, staging, scenic design, and online event registration
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
                    "url(/images/video2.jpeg)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/chat-about2.png')" }}
      >
        <div className="absolute inset-0 bg-dark-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">Experienced Support Staff</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Our highly trained technicians are your event advantage </h2>
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
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
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
                <div className="w-50 h-90 rounded-2xl overflow-hidden mb-5 border-2 border-gold-500/30">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-gold-500 text-sm font-medium mb-3">{member.role}</p>
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
