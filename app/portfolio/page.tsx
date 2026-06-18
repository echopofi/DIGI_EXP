"use client";

import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/ui/GalleryGrid";
import CTABanner from "@/components/ui/CTABanner";
import { portfolioItems, categories } from "@/lib/data/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        title="Our Portfolio"
        subtitle="A showcase of our finest work across corporate events, concerts, trade shows, and more."
      />

      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <GalleryGrid items={portfolioItems} categories={categories} />
        </div>
      </section>

      <CTABanner
        headline="Want to See What We Can Do for You?"
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
