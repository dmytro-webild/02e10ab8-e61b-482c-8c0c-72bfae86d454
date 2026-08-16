import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { useButtonClick } from "@/hooks/useButtonClick";

export interface NavItem {
  name: string;
  href: string;
}

export interface NavbarFloatingLogoProps {
  logo: string;
  logoImageSrc?: string;
  navItems: NavItem[];
  ctaButton?: {
    text: string;
    href: string;
  };
  className?: string;
}

export default function NavbarFloatingLogo({
  logo,
  navItems,
  ctaButton,
  className = "",
}: NavbarFloatingLogoProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHeroClick = useButtonClick("#hero");

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 pointer-events-none ${isScrolled ? "py-3" : "py-5"} ${className}`}>
      <div className="w-content-width mx-auto px-2 sm:px-4">
        <div
          className={`pointer-events-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 card backdrop-blur-xl border border-accent/20 ${ isScrolled ? "shadow-lg shadow-black/5 bg-card/90 py-2 sm:py-2.5"
              : "bg-card/75 shadow-sm"
          }`}
        >
          {/* Logo & Brand */}
          <a
            href="#hero"
            onClick={handleHeroClick}
            className="flex items-center gap-2.5 group shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-cta rounded-full"
          >
            <img
              src="https://storage.googleapis.com/webild/users/user_3HymNublRvuFtoKZ5cOUF2ujXj0/uploaded-1786907592716-628y5o8n.jpg"
              alt="DLJ Protection Logo"
              className="size-8 sm:size-9 rounded-full object-cover shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-bold text-sm sm:text-base tracking-tight text-foreground group-hover:text-primary-cta transition-colors">
              {logo}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <NavItemLink key={item.name} item={item} />
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            {ctaButton && (
              <div className="hidden sm:block">
                <Button
                  text={ctaButton.text}
                  href={ctaButton.href}
                  variant="primary"
                  className="!px-4 !py-2 !text-xs sm:!text-sm rounded-full shadow-sm"
                />
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 p-4 card backdrop-blur-xl bg-card/95 border border-accent/20 rounded-theme shadow-xl flex flex-col gap-2">
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
              {navItems.map((item) => (
                <MobileNavItemLink
                  key={item.name}
                  item={item}
                  onClose={() => setMobileMenuOpen(false)}
                />
              ))}
            </nav>
            {ctaButton && (
              <div className="mt-2 pt-2 border-t border-accent/20">
                <Button
                  text={ctaButton.text}
                  href={ctaButton.href}
                  variant="primary"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center !py-2.5 rounded-xl"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

function NavItemLink({ item }: { item: NavItem }) {
  const handleClick = useButtonClick(item.href);

  return (
    <a
      href={item.href}
      onClick={handleClick}
      className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-foreground/75 hover:text-foreground hover:bg-foreground/5 rounded-full transition-all duration-200 relative group"
    >
      {item.name}
      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-cta rounded-full transition-all duration-200 group-hover:w-1/2 opacity-0 group-hover:opacity-100" />
    </a>
  );
}

function MobileNavItemLink({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) {
  const handleClick = useButtonClick(item.href, onClose);

  return (
    <a
      href={item.href}
      onClick={handleClick}
      className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-colors flex items-center justify-between"
    >
      <span>{item.name}</span>
      <ArrowRight className="size-3.5 opacity-40" />
    </a>
  );
}