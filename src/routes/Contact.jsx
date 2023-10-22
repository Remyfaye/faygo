

import React from 'react'
import image1 from '../assets/ti3.jpg'
import Hero from '../components/hero/Hero'
import ContactForm from '../components/contact form/ContactForm'

function Contact() {
  return (
    <div>
      <Hero
        cName='hero_about'
        hero_text='hero_contact_text'
        heroImg= {image1}
        tittle='Contact'
        text=''
        btnText=''
        url='/'
        btnClass='hide'
        />

        <ContactForm/>
    </div>
  )
}

export default Contact
