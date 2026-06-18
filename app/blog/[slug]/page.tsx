"use client";

import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data/blog";
import CTABanner from "@/components/ui/CTABanner";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900 pt-20">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-zinc-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:gap-3 transition-all"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <article className="min-h-screen bg-dark-900 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-gold-500 transition-colors text-sm mb-8"
            >
              ← Back to Blog
            </Link>

            <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
              <span className="px-3 py-1 text-xs font-medium text-dark-900 bg-gold-500 rounded-full">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span>{post.author}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8 leading-tight">
              {post.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-dark-700"
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-invert prose-zinc max-w-none"
          >
            {post.content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-white mt-12 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }
              if (line.startsWith("**")) {
                const boldText = line.replace(/\*\*/g, "");
                if (boldText.trim()) {
                  return (
                    <h3 key={i} className="text-lg font-semibold text-gold-500 mt-8 mb-3">
                      {boldText}
                    </h3>
                  );
                }
              }
              if (line.startsWith("- ")) {
                return (
                  <li key={i} className="text-zinc-300 ml-4 mb-1">
                    {line.replace("- ", "")}
                  </li>
                );
              }
              if (line.trim() === "") {
                return <div key={i} className="h-4" />;
              }
              return (
                <p key={i} className="text-zinc-300 leading-relaxed mb-4">
                  {line}
                </p>
              );
            })}
          </motion.div>
        </div>
      </article>

      <CTABanner
        headline="Ready to Start Your Next Event?"
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
