import AboutSection from '@/components/About'
import ApproachSection from '@/components/Approach'
import FAQSection from '@/components/Faq'
import CTAAndFooter from '@/components/Footer'

import GallerySection from '@/components/Gallary'
import Landing from '@/components/Landing'
import ServicesSection from '@/components/Services'
import TestimonialsSection from '@/components/Testemonial'
import WhyCleanSection from '@/components/WhyClean'
import React from 'react'

const page = () => {
  return (
    <div>
      <Landing/>
      <AboutSection/>
      <WhyCleanSection/>
      <ServicesSection/>
      <ApproachSection/>
      <GallerySection/>
      <FAQSection/>
      <TestimonialsSection/>
      <CTAAndFooter/>
    </div>
  )
}

export default page
