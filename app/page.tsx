import AboutSection from '@/components/About'
import ApproachSection from '@/components/Approach'
import BeforeAfter from '@/components/Before-After'
import CTASection from '@/components/CTA'
import FAQSection from '@/components/Faq'
import CTAAndFooter from '@/components/Footer'

import GallerySection from '@/components/Gallary'
import Landing from '@/components/Landing'
import ServicesSection from '@/components/Services'
import Stats from '@/components/Stats'
import TestimonialsSection from '@/components/Testemonial'
import WhyCleanSection from '@/components/WhyClean'
import React from 'react'

const page = () => {
  return (
    <div>

      <Landing />
      <Stats/>
      <AboutSection />
      <WhyCleanSection />
      <ServicesSection />
      <ApproachSection />
      <GallerySection />
      <BeforeAfter/>
      <FAQSection />
      <TestimonialsSection />
      <CTASection />
      <CTAAndFooter />
    </div>
  );
}

export default page
