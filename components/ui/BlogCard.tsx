"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  index?: number;
}

export default function BlogCard({ slug, title, date, excerpt, image, category, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${slug}`} className="group block">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-dark-700">
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent z-10" />
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <span className="absolute top-4 left-4 z-20 px-3 py-1 text-xs font-medium text-dark-900 bg-gold-500 rounded-full">
            {category}
          </span>
        </div>
        <p className="text-zinc-500 text-xs mb-2">{date}</p>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-500 transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{excerpt}</p>
      </Link>
    </motion.article>
  );
}
