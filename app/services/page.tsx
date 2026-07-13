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
        subtitle="Digi Expressions is known for its event production services across the country and is a specialist in large, high profile venue settings. We have sound, video,  lights, LED screens and staging inventory available to produce events of all sizes and capabilities and are able to create a custom presentation system for your key audience. Our equipment rental and design services join only the latest audio visual and IT resources and are equipped to supply your event with a complete, turn-key solution. We are set apart from other event solutions providers in that we bring professional talent who builds an event experience. Our rental staging and design teams throughout the nation collaborate to deliver high-end equipment and ensure your guests are engaged and entertained. We simplify the planning process and bring the most skilled and industry certified production engineers and technicians to your project, whether your event duration is one day or one month. With our depth of expertise, we can offer services above and beyond others, including: multi-point video conferencing, webcasting, litigation support, video mapping, staging, scenic design, and online event registration"
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
                    "url(/images/657551391_18135236527522132_4050183051312568486_n.webp)",
                }}
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-gold-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                Professional sound Reinforcement
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                Let transform your sound so your event resonates
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                We have capabilities for large venues but serve small sounds systems as well. If your amphitheater becomes inoperative, we will be there to bring a full concert quality resource for complete live event reinforcement and support. If your personal sound system simply needs a boost, we are able to supplement that as well. Let us show you how to achieve sound reinforcement with an array of audio systems that bring an immersive sound experience, supply equal dispersion of frequency and balanced productions.
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
