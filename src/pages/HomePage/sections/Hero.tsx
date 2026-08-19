// Created by add_section_from_catalog (HeroBrandCarousel).

import React from 'react';
import HeroBrandCarousel from '@/components/sections/hero/HeroBrandCarousel';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBrandCarousel
        primaryButton={{"href":"#contact","text":"Request Free Consultation"}}
        description="Professional Protection & High-Grade Security Solutions tailored to safeguard your commercial, corporate, and private assets with 24/7 veteran-led response."
        items={[{"imageSrc":"https://storage.googleapis.com/webild/users/user_3HymNublRvuFtoKZ5cOUF2ujXj0/uploaded-1786850139072-spnpazqf.jpg"},{"imageSrc":"https://storage.googleapis.com/webild/users/user_3HymNublRvuFtoKZ5cOUF2ujXj0/uploaded-1786909729809-ixd2hkov.jpg"},{"imageSrc":"https://storage.googleapis.com/webild/users/user_3HymNublRvuFtoKZ5cOUF2ujXj0/uploaded-1787166025282-ttmim0v0.png"}]}
        textAnimation="slide-up"
        secondaryButton={{"href":"#services","text":"Explore Guard Services"}}
        brand="DLJ PROTECTION"
      />
    </div>
  );
}
