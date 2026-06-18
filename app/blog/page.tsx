"use client";

import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/lib/data/blog";

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Insights, guides, and stories from the DIGI Expressions production team."
      />

      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} {...post} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
