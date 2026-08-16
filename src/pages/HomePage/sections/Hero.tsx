// Created by add_section_from_catalog (HeroBrandCarousel).

import React from 'react';
import HeroBrandCarousel from '@/components/sections/hero/HeroBrandCarousel';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBrandCarousel
        primaryButton={{"href":"#contact","text":"Request Free Consultation"}}
        description="Professional Protection & High-Grade Security Solutions tailored to safeguard your commercial, corporate, and private assets with 24/7 veteran-led response."
        items={[{"imageSrc":"http://img.b2bpic.net/free-photo/attractive-male-cop-with-ammunition-holding-gun-with-both-hands-front-view-bearded-man-black_7502-10633.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/young-man-holding-mini-notebook-black-shirt-cap_176474-11287.jpg"},{"imageSrc":"https://storage.googleapis.com/webild/users/user_3HymNublRvuFtoKZ5cOUF2ujXj0/uploaded-1786850139072-spnpazqf.jpg"}]}
        textAnimation="slide-up"
        secondaryButton={{"href":"#services","text":"Explore Guard Services"}}
        brand="DLJ PROTECTION"
      />
    </div>
  );
}
