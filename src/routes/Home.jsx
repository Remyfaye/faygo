

import React from 'react'
import Hero from '../components/hero/Hero'
import image1 from "../assets/uti3.avif";
import Destination from '../components/destinations/Destination.jsx';
import ResentTrips from '../components/resent trips/ResentTrips';
import Footer from '../components/footer/Footer';
 
function Home() { 
  return (
    <>
      <Hero
      cName='hero'
      hero_text='hero_text'
      heroImg= {image1}
      tittle='your journey your story'
      text='choose your favorite destination'
      btnText='Travel plan'
      url='/'
      btnClass='show'
      />
      <Destination/>
      <ResentTrips/>
      <Footer/>
    </>
  )
}

export default Home 