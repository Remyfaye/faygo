

import React from 'react'
import image1 from '../assets/uti4.avif'
import Hero from '../components/hero/Hero'
import ResentTrips from '../components/resent trips/ResentTrips'

function Services() {
  return (
    <div>
      <Hero
        cName='hero_about'
        hero_text='hero_about_text'
        heroImg= {image1}
        tittle='Services'
        text=''
        btnText=''
        url='/'
        btnClass='hide'
        />
        <ResentTrips/>
    </div>
  )
}

export default Services

