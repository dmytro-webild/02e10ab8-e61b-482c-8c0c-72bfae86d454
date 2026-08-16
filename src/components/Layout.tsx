import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    {
      "name": "Home",
      "href": "#hero"
    },
    {
      "name": "Services",
      "href": "#services"
    },
    {
      "name": "Team",
      "href": "#team"
    },
    {
      "name": "Trust",
      "href": "#trust"
    },
    {
      "name": "Testimonials",
      "href": "#testimonials"
    },
    {
      "name": "FAQ",
      "href": "#faq"
    },
    {
      "name": "Contact",
      "href": "#contact"
    }
  ];

  return (
    <StyleProvider buttonVariant="default" siteBackground="noise" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
          logo="DLJ Protection"
          ctaButton={{
            text: "Free Consultation",
            href: "#contact",
          }}
          navItems={navItems}
        />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
          brand="DLJ Protection"
          columns={[
            {
              title: "Quick Navigation",
              items: [
                {
                  label: "Home",
                  href: "#hero",
                },
                {
                  label: "Services",
                  href: "#services",
                },
                {
                  label: "Leadership Team",
                  href: "#team",
                },
                {
                  label: "Trust & Mission",
                  href: "#trust",
                },
                {
                  label: "Client Reviews",
                  href: "#testimonials",
                },
                {
                  label: "FAQ",
                  href: "#faq",
                },
                {
                  label: "Contact Us",
                  href: "#contact",
                },
              ],
            },
            {
              title: "Security Services",
              items: [
                {
                  label: "Guard Services",
                  href: "#services",
                },
                {
                  label: "Mobile Patrol",
                  href: "#services",
                },
                {
                  label: "Executive Protection",
                  href: "#services",
                },
                {
                  label: "Access Control",
                  href: "#services",
                },
              ],
            },
            {
              title: "Mission & Partners",
              items: [
                {
                  label: "Veteran Mission",
                  href: "#trust",
                },
                {
                  label: "Swords to Plowshares",
                  href: "#trust",
                },
                {
                  label: "Licensing & PPO",
                  href: "#trust",
                },
                {
                  label: "Careers for Veterans",
                  href: "#contact",
                },
              ],
            },
          ]}
          copyright="© 2024 DLJ Protection. All rights reserved."
          links={[
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Licensing Disclosures",
              href: "#",
            },
          ]}
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}