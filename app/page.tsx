import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/ui/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />

      <section className="py-24 bg-[#000027]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                OUR COMPANY
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                We Give Your Events Complete Expression.
                <br />
                <span className="text-gold-500">We Create Experiences.</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Digi Expression is known for its event production services accrossw the country and is a specialist in large, high profile venue settings. 
                We have sound, video and staging inventory available to ptoduc3e events of all sizes and capabilities and are able to create custom presentation for your key audience
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Our equipment rental and design services join only the latest audio, visual and IT resources and are equiped to supply
                your event with a complete turn-key solution. 
              </p>
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:gap-3 transition-all"
              >
                Learn more about us
                <span className="text-lg leading-none">→</span>
              </a>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-700">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/chinwo.webp')",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <CTABanner
        headline="Let's Build Something Unforgettable"
        buttonText="Start Your Project"
        buttonHref="/contact"
      />
    </>
  );
}
