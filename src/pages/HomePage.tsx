import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesBentoGrid from '@/components/sections/features/FeaturesBentoGrid';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import TeamOverlayCards from '@/components/sections/team/TeamOverlayCards';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Veteran-Owned & Operated"
      title="Security You Can Trust. Protection You Can Count On."
      description="DLJ Protection delivers dependable, professional security solutions designed around the specific needs of your business, property, or community. Veteran leadership, human-centered vigilance."
      primaryButton={{
        text: "Request a Security Consultation",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Explore Our Services",
        href: "#services",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/airport-security-officer-using-hand-held-metal-detector-check-commuter_107420-95855.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-businessman_23-2148102454.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="trust" data-section="trust">
    <SectionErrorBoundary name="trust">
          <AboutTestimonial
      tag="Our Core Values"
      quote="Our commitment is defined by unwavering professionalism, reliability, and vigilance. We provide responsive security that respects the people and environments we are trusted to protect."
      author="The DLJ Protection Leadership"
      role="Veteran-Led Security Excellence"
      textAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/computer-security-with-3d-shields-with-padlocks_107791-16214.jpg"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesBentoGrid
      tag="Comprehensive Protection"
      title="Tailored Security Services"
      description="Customized security programs designed for your specific environment, ensuring peace of mind for employees, residents, and stakeholders."
      features={[
        {
          title: "Security Guard Services",
          description: "Professional on-site security personnel for businesses, properties, and organizations.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-airport-security-officer-holding-metal-detector-airport-terminal_107420-95848.jpg",
        },
        {
          title: "Patrol Services",
          description: "Visible and consistent patrols designed to deter unwanted activity and identify potential issues.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-valet-parking-man-s-car_23-2149901435.jpg",
        },
        {
          title: "Construction Site Security",
          description: "Specialized solutions to protect equipment, materials, and property perimeters.",
          imageSrc: "http://img.b2bpic.net/free-photo/robot-working-construction_1048-1764.jpg",
        },
        {
          title: "Commercial Property Security",
          description: "Reliable security for offices, retail, warehouses, and complex commercial environments.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-people-entering-office-building_107420-74364.jpg",
        },
      ]}
      primaryButton={{
        text: "Request Consultation",
        href: "#contact",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamOverlayCards
      tag="Our Leadership"
      title="Veteran-Led Accountability"
      description="Our team brings military-grade discipline and a human-centered approach to every engagement, ensuring we always operate with respect and excellence."
      members={[
        {
          name: "Marcus Thorne",
          role: "Director of Operations",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-businessman-smiling_23-2147985511.jpg",
        },
        {
          name: "Elena Rodriguez",
          role: "Client Relations Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-male-cop-with-ammunition-holding-gun-with-both-hands-front-view-bearded-man-black_7502-10633.jpg",
        },
        {
          name: "David Chen",
          role: "Security Compliance Lead",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-holding-mini-notebook-black-shirt-cap_176474-11287.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeOverlayCards
      tag="Client Trust"
      title="What Our Partners Say"
      description="We are proud to serve communities and businesses that value professionalism and reliable security."
      testimonials={[
        {
          name: "Sarah Miller",
          role: "Property Manager",
          company: "Highview Commercial",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-people-working-from-home_23-2149173331.jpg",
        },
        {
          name: "James Anderson",
          role: "Site Lead",
          company: "Summit Construction",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/asian-construction-firm-executive-business-suit-safety-vest-sitting-office_1098-17514.jpg",
        },
        {
          name: "Linda Wu",
          role: "Director",
          company: "Urban Residential",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-smiley-business-woman_23-2148356286.jpg",
        },
        {
          name: "Michael Reed",
          role: "Operations VP",
          company: "Northstar Logistics",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-businessman-sitting-desk-table-business-company-office_482257-16773.jpg",
        },
        {
          name: "Jessica Patel",
          role: "Facilities Mgr",
          company: "Grand Center",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-interviewee-taking-notes_23-2149037865.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Support"
      title="Frequently Asked Questions"
      description="Understand how DLJ Protection prioritizes your safety and communication needs."
      categories={[
        {
          name: "General Services",
          items: [
            {
              question: "What is the difference between patrol and on-site guards?",
              answer: "On-site guards provide constant presence at a specific location, while patrol services provide random, visible deterrents across larger or multiple areas.",
            },
            {
              question: "Are your security personnel trained?",
              answer: "Yes, our team undergoes rigorous training focusing on communication, professionalism, and preparedness.",
            },
          ],
        },
        {
          name: "Partnerships",
          items: [
            {
              question: "Can we get custom security protocols?",
              answer: "Absolutely. We pride ourselves on creating security programs built around the unique requirements and challenges of your specific property or business.",
            },
          ],
        },
      ]}
      cta={{
        name: "Need a Consultation?",
        role: "Speak to our team today",
        buttonText: "Contact DLJ Protection",
        buttonHref: "#contact",
        imageSrc: "http://img.b2bpic.net/free-photo/young-man-black-shirt-with-cap-holding-gift-box-looking-cheerful_176474-11304.jpg",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Get Started"
      text="Ready to enhance the security and safety of your organization? Contact DLJ Protection today for a comprehensive security consultation."
      primaryButton={{
        text: "Schedule a Consultation",
        href: "#",
      }}
      secondaryButton={{
        text: "Email Our Team",
        href: "mailto:info@dljprotection.com",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
