import React from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle, Award, ArrowRight } from 'lucide-react';
import TextAnimation from '@/components/ui/TextAnimation';
import ButtonArrow from '@/components/ui/ButtonArrow';
import Button from '@/components/ui/Button';

export default function HeroSection(): React.JSX.Element {
  const centerImage = "https://storage.googleapis.com/webild/users/user_3HymNublRvuFtoKZ5cOUF2ujXj0/uploaded-1786850939473-b9jnl07w.webp";

  return (
    <div data-webild-section="hero" data-section="hero" id="hero" className="relative bg-background overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-primary-cta/10 blur-[140px] pointer-events-none" />

      <div className="w-content-width mx-auto flex flex-col items-center text-center">
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full card border border-accent/30 text-xs sm:text-sm font-semibold tracking-wider text-foreground mb-6 shadow-sm"
        >
          <Shield className="size-4 text-primary-cta" />
          <span>VETERAN-LED ARMED & UNARMED PRIVATE PROTECTION</span>
        </motion.div>

        {/* Main Header */}
        <TextAnimation
          text="DLJ PROTECTION"
          variant="slide-up"
          gradientText={true}
          tag="h1"
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-none mb-4"
        />

        <TextAnimation
          text="Professional Protection & High-Grade Security Solutions tailored to safeguard your commercial, corporate, and private assets with 24/7 rapid response."
          variant="slide-up"
          gradientText={false}
          tag="p"
          className="text-base sm:text-lg md:text-xl text-accent font-medium max-w-3xl text-balance leading-relaxed mb-8"
        />

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <ButtonArrow
            text="Request Free Consultation"
            href="#contact"
            variant="primary"
            className="px-6 py-3.5 text-base font-semibold"
          />
          <Button
            text="Explore Guard Services"
            href="#services"
            variant="secondary"
            className="px-6 py-3.5 text-base font-semibold"
          />
        </motion.div>

        {/* Centerpiece Image Wrapper */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden card border-2 border-primary-cta/30 shadow-2xl group"
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-foreground/5">
            <img 
              src={centerImage} 
              alt="DLJ Security Patrol Officers and Vehicle"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          </div>

          {/* Overlay Floating Badges */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-background/90 backdrop-blur-md border border-accent/30 text-xs sm:text-sm font-bold text-foreground shadow-lg">
            <Award className="size-4 text-primary-cta shrink-0" />
            <span>PPO#122014 Licensed</span>
          </div>

          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-background/90 backdrop-blur-md border border-accent/30 text-xs sm:text-sm font-bold text-foreground shadow-lg">
            <CheckCircle className="size-4 text-emerald-500 shrink-0" />
            <span>24/7 Active Patrol</span>
          </div>

          {/* Bottom Card Caption */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl bg-background/85 backdrop-blur-md border border-accent/30 text-left shadow-xl">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">Elite Command & Patrol Team</h3>
              <p className="text-xs sm:text-sm text-accent">High-visibility physical deterrence, rapid response, and executive escort.</p>
            </div>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-primary-cta hover:underline shrink-0"
            >
              <span>Verify Patrol Coverage</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
