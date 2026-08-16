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
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "#",
                },
                {
                  label: "Veteran Mission",
                  href: "#",
                },
              ],
            },
            {
              title: "Services",
              items: [
                {
                  label: "Guard Services",
                  href: "#services",
                },
                {
                  label: "Patrol",
                  href: "#services",
                },
              ],
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Partnership: Swords to Plowshares",
                  href: "#",
                },
                {
                  label: "Contact",
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
          ]}
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}