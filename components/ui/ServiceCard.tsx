"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  image?: string;
  href: string;
  index?: number;
}

export default function ServiceCard({ title, shortDescription, image, href, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={href}
        className="group block p-8 rounded-2xl bg-dark-800/50 border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5 hover:-translate-y-1"
      >
        {image && (
         <div
          className="w-full h-[200px] bg-cover bg-center rounded-xl mb-5"
          style={{ backgroundImage: `url('${image}')` }}
          />
        )}
        <span className="text-4xl block mb-5"></span>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{shortDescription}</p>
        <span className="inline-flex items-center gap-2 mt-5 text-gold-500 text-sm font-medium group-hover:gap-3 transition-all">
          Learn more
          <span className="text-lg leading-none">→</span>
        </span>
      </Link>
    </motion.div>
  );
}
