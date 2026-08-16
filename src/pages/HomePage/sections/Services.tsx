import React from "react";
import {
  ShieldCheck,
  Radio,
  UserCheck,
  Video,
  CalendarCheck,
  FileCheck2,
  Check,
} from "lucide-react";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ButtonArrow from "@/components/ui/ButtonArrow";

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  icon: React.ElementType;
  highlights: string[];
  ctaText: string;
  href: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "guard-services",
    tag: "On-Site Protection",
    title: "Armed & Unarmed Guard Services",
    description:
      "Highly trained security professionals providing continuous physical deterrence, access control, and rapid response for commercial and industrial facilities.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3HymNublRvuFtoKZ5cOUF2ujXj0/uploaded-1786913478805-woxln65x.jpg",
    icon: ShieldCheck,
    highlights: [
      "Veteran & law-enforcement trained officers",
      "Rigorous background checks & ongoing certification",
      "Tailored security protocols for high-value assets",
    ],
    ctaText: "Explore Guard Options",
    href: "#contact",
  },
  {
    id: "mobile-patrol",
    tag: "24/7 Patrol",
    title: "Mobile Patrol & Incident Response",
    description:
      "Randomized vehicle patrols equipped with real-time GPS tracking and instant reporting to ensure maximum coverage across expansive properties.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3HymNublRvuFtoKZ5cOUF2ujXj0/uploaded-1786912422730-p3g13oq6.jpg",
    icon: Radio,
    highlights: [
      "Marked patrol vehicles with active deterrence lighting",
      "Digital incident logging with automated client portal",
      "Immediate physical dispatch upon alarm activation",
    ],
    ctaText: "Schedule Patrol Checks",
    href: "#contact",
  },
  {
    id: "executive-protection",
    tag: "Close Protection",
    title: "Executive & VIP Security",
    description:
      "Discreet and comprehensive personal protection for corporate executives, high-profile individuals, and dignitaries operating in high-risk environments.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3HymNublRvuFtoKZ5cOUF2ujXj0/uploaded-1786913478806-bsau3mmv.jpg?_wi=1",
    icon: UserCheck,
    highlights: [
      "Advance route planning & emergency exit strategy",
      "Counter-surveillance & low-profile escort details",
      "Experienced personal protection specialists",
    ],
    ctaText: "Request VIP Detail",
    href: "#contact",
  },
  {
    id: "surveillance-access",
    tag: "Tech Integration",
    title: "Access Control & Surveillance",
    description:
      "Advanced electronic security systems combined with live monitoring to prevent unauthorized entry and maintain clear audit trails for your premises.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3HymNublRvuFtoKZ5cOUF2ujXj0/uploaded-1786913478806-skn1xy6m.jpg",
    icon: Video,
    highlights: [
      "Biometric & smart credential access management",
      "HD thermal & motion-activated surveillance systems",
      "Remote monitoring center with active threat intervention",
    ],
    ctaText: "Review Tech Solutions",
    href: "#contact",
  },
  {
    id: "event-security",
    tag: "Crowd Control",
    title: "Event & Conference Security",
    description:
      "End-to-end security coordination for large-scale public events, private galas, and corporate summits ensuring guest safety and smooth operations.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3HymNublRvuFtoKZ5cOUF2ujXj0/uploaded-1786913478806-bsau3mmv.jpg?_wi=2",
    icon: CalendarCheck,
    highlights: [
      "Perimeter screening & magnetometer checkpoints",
      "Seamless emergency medical & evacuation planning",
      "Professional host-mindset security personnel",
    ],
    ctaText: "Plan Event Safety",
    href: "#contact",
  },
  {
    id: "risk-assessment",
    tag: "Strategic Planning",
    title: "Risk & Threat Assessments",
    description:
      "In-depth vulnerability analysis, physical security audits, and emergency action plans customized to mitigate corporate and structural liabilities.",
    imageSrc: "https://storage.googleapis.com/webild/users/user_3HymNublRvuFtoKZ5cOUF2ujXj0/uploaded-1786913478806-skn1xy6m.jpg",
    icon: FileCheck2,
    highlights: [
      "Comprehensive site vulnerability diagnostics",
      "OSHA & industry compliance risk reporting",
      "Actionable security enhancement roadmap",
    ],
    ctaText: "Book Security Audit",
    href: "#contact",
  },
];

export default function ServicesSection(): React.JSX.Element {
  return (
    <section
      id="services"
      aria-label="Features and Protection Services"
      className="relative bg-background overflow-hidden"
    >
      {/* Background ambient lighting accents for depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[600px] rounded-full bg-primary-cta/5 blur-[120px] pointer-events-none" />

      <div className="w-content-width mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 text-center max-w-content-width">
          <div className="px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wider uppercase card rounded-full border border-accent/30 text-foreground/80 shadow-xs">
            Core Protection Capabilities
          </div>

          <TextAnimation
            text="Comprehensive Security Solutions Built on Precision & Honor"
            variant="slide-up"
            gradientText={true}
            tag="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-balance tracking-tight text-foreground"
          />

          <TextAnimation
            text="From physical armed guards to advanced surveillance integration, our veteran-led teams deliver unmatched security tailored to your exact operational requirements."
            variant="slide-up"
            gradientText={false}
            tag="p"
            className="text-base md:text-lg lg:text-xl text-accent font-medium leading-relaxed max-w-content-width text-balance mt-2"
          />
        </div>

        {/* Multi-Column Card Grid with Generous Whitespace */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal
                key={service.id}
                variant="slide-up"
                delay={index * 0.08}
                className="h-full"
              >
                <div className="card group h-full p-8 rounded-theme flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-accent/20 hover:border-primary-cta/40 relative overflow-hidden">
                  {/* Subtle top border glow accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-cta/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Card Content Top */}
                  <div className="flex flex-col gap-6">
                    {/* Image & Badge Wrapper */}
                    <div className="relative w-full h-52 rounded-xl overflow-hidden mb-2 bg-background/50">
                      <ImageOrVideo
                        imageSrc={service.imageSrc}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-80" />

                      {/* Floating Category Tag */}
                      <div className="absolute bottom-3 left-3 px-3 py-1 text-xs font-semibold rounded-md bg-background/90 text-foreground backdrop-blur-md shadow-xs border border-accent/30">
                        {service.tag}
                      </div>

                      {/* Icon Badge */}
                      <div className="absolute top-3 right-3 size-11 rounded-xl primary-button flex items-center justify-center text-primary-cta-text shadow-md">
                        <IconComponent className="size-5" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl font-bold text-foreground leading-snug tracking-tight group-hover:text-primary-cta transition-colors duration-200">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-base text-accent/90 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Highlights List */}
                    <div className="flex flex-col gap-2.5 pt-2 border-t border-accent/20">
                      {service.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-foreground/90"
                        >
                          <div className="mt-0.5 size-4 rounded-full primary-button shrink-0 flex items-center justify-center">
                            <Check className="size-2.5 text-primary-cta-text" strokeWidth={3} />
                          </div>
                          <span className="leading-tight">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer / Action */}
                  <div className="pt-8 mt-6 border-t border-accent/20 flex items-center justify-between">
                    <ButtonArrow
                      text={service.ctaText}
                      href={service.href}
                      variant="secondary"
                      className="w-full justify-between py-3 text-sm font-semibold"
                    />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}