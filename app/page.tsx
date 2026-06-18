import HeroSection from "@/components/sections/HeroSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/ui/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />

      <section className="py-24 bg-dark-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 text-sm font-medium tracking-[0.2em] uppercase mb-4">
                About DIGI Expressions
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
                We Don&apos;t Just Produce Events.
                <br />
                <span className="text-gold-500">We Create Experiences.</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                With years of experience across thousands of events, DIGI Expressions has earned a
                reputation for technical excellence, creative innovation, and unwavering reliability.
                From intimate corporate gatherings to large-scale concert tours, we bring the same
                dedication to every project.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Our team of skilled engineers, designers, and technicians works collaboratively to
                deliver seamless production experiences that let you focus on what matters most —
                your audience.
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
                    "url(https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1978&auto=format&fit=crop)",
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
