import React from 'react'

import HeroCarousel from './HeroCarousel'
import AboutUsSection from './AboutUsSection'
import { BecomeAVolunteer } from './BecomeAVolunteer'
import { Events } from './Events'
import { OurServices } from './OurServices'
import { Testimonies } from './Testimonies'
import Footer from './Footer'
{/*import { Header } from './Header'*/}



export const LandingPage = () => {
  return (
    <div>
        {/*} <Header />*/}
        <HeroCarousel />
        <AboutUsSection />
      
        <BecomeAVolunteer />
        <OurServices />
        <Events />
        <Testimonies />
        <Footer />
    </div>
  )
}
