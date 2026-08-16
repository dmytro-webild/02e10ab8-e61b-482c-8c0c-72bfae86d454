import { ShieldCheck, Clock, Radio, Award, Shield, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function HeroSection() {
  return (
    <section id="hero" aria-label="Hero section" className="relative overflow-hidden">
      <div className="w-content-width mx-auto flex flex-col">
        {/* Main Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left Column: Tagline, Headline, Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold card rounded-full w-fit">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-cta opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-primary-cta"></span>
              </span>
              <span className="tracking-wide">Veteran-Owned & Operated Protection</span>
            </div>

            {/* Main Headline */}
            <TextAnimation
              text="Professional Protection & High-Grade Security Solutions"
              variant="slide-up"
              gradientText={true}
              tag="h1"
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            />

            {/* Subtitle */}
            <TextAnimation
              text="DLJ Protection delivers certified security officers, 24/7 mobile patrol, and proactive risk management tailored to safeguard your commercial, corporate, and private assets."
              variant="slide-up"
              gradientText={false}
              tag="p"
              className="text-lg md:text-xl text-accent leading-relaxed max-w-content-width"
            />

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                text="Request Free Consultation"
                href="#contact"
                variant="primary"
                className="text-base px-6 py-3.5"
              />
              <Button
                text="Explore Guard Services"
                href="#services"
                variant="secondary"
                className="text-base px-6 py-3.5"
              />
            </div>

            {/* Trust Badges Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-accent/20">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded card shrink-0">
                  <ShieldCheck className="size-4 text-primary-cta" />
                </div>
                <span className="text-xs font-medium text-foreground">Licensed & Fully Insured</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded card shrink-0">
                  <Clock className="size-4 text-primary-cta" />
                </div>
                <span className="text-xs font-medium text-foreground">24/7 Dispatch & Patrol</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded card shrink-0">
                  <Award className="size-4 text-primary-cta" />
                </div>
                <span className="text-xs font-medium text-foreground">100% Veteran Staffed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Feature Container */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal variant="slide-up">
              <div className="relative p-2 card rounded-theme overflow-hidden shadow-2xl">
                {/* Main Media Visual */}
                <div className="relative h-[380px] sm:h-[460px] w-full rounded-xl overflow-hidden">
                  <ImageOrVideo
                    imageSrc=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Floating Status Pill Top Right */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3.5 py-2 rounded-lg card flex items-center gap-2.5 border border-white/20">
                    <span className="relative flex size-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-semibold tracking-wide">Active Patrol Online</span>
                  </div>

                  {/* Floating Stat Card Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 bg-background/85 backdrop-blur-md p-4 rounded-xl card border border-white/20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 primary-button rounded-lg flex items-center justify-center shrink-0">
                        <Shield className="size-5 text-primary-cta-text" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Rapid Response Unit</p>
                        <p className="text-xs text-accent">Average dispatch under 10 mins</p>
                      </div>
                    </div>
                    <div className="hidden sm:block text-right">
                      <span className="text-lg font-bold text-primary-cta">100%</span>
                      <p className="text-[10px] uppercase text-accent font-semibold">Certified Guards</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Centered Grid Highlight Cards */}
        <ScrollReveal variant="slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 card rounded-xl flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300">
              <div className="size-10 primary-button rounded-lg flex items-center justify-center">
                <ShieldCheck className="size-5 text-primary-cta-text" />
              </div>
              <h3 className="text-lg font-bold text-foreground">On-Site Guard Services</h3>
              <p className="text-sm text-accent leading-relaxed">
                Dedicated armed and unarmed officers maintaining physical security, access control, and visible deterrent.
              </p>
            </div>

            <div className="p-6 card rounded-xl flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300">
              <div className="size-10 primary-button rounded-lg flex items-center justify-center">
                <Radio className="size-5 text-primary-cta-text" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Mobile Vehicle Patrol</h3>
              <p className="text-sm text-accent leading-relaxed">
                GPS-monitored mobile patrol units providing scheduled checks and immediate emergency incident response.
              </p>
            </div>

            <div className="p-6 card rounded-xl flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300">
              <div className="size-10 primary-button rounded-lg flex items-center justify-center">
                <CheckCircle2 className="size-5 text-primary-cta-text" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Custom Risk Assessments</h3>
              <p className="text-sm text-accent leading-relaxed">
                Tailored security protocols and site vulnerability evaluations conducted by experienced military veterans.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}