"use client";

import PageHero from "@/components/ui/PageHero";
import { services } from "@/lib/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import CTABanner from "@/components/ui/CTABanner";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive event production solutions — from audio and lighting to full-scale technical production."
        image="/images/serve.webp"
      />

      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-700 order-2 lg:order-1">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop)",
                }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                End-to-End Production
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                One Partner. Complete Coverage.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Unlike working with separate vendors for audio, video, lighting, and staging, DIGI Expressions provides a unified production experience. Our integrated approach means fewer coordination headaches, consistent quality across all elements, and a single point of accountability.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                From initial consultation and design through load-in, show execution, and strike, we manage every detail so you can focus on your audience and your message.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-dark-900 bg-gold-500 rounded-full hover:bg-gold-400 transition-all"
              >
                Discuss Your Event
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to Bring Your Event to Life?"
        buttonText="Get a Quote"
        buttonHref="/contact"
      />
    </>
  );
}
