

import React from 'react'
import Hero from '../components/hero/Hero'
import image1 from '../assets/uti2.avif'
import AboutUs from '../components/about info/AboutUs'

function About() {
  return (
    <div>
        <Hero
        cName='hero_about'
        hero_text='hero_about_text'
        heroImg= {image1}
        tittle='About'
        text=''
        btnText=''
        url='/'
        btnClass='hide'
        />

        <div className='about'> 
        <AboutUs
        heading='our mission'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Recusandae molestiae tenetur molestias possimus perspiciatis 
        laudantium amet quidem debitis, sapiente nesciunt voluptate corporis laboriosam
         numquam rerum ratione, dignissimos excepturi rem quisquam!'
        />

<AboutUs
        heading='our vission'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Recusandae molestiae tenetur molestias possimus perspiciatis 
        laudantium amet quidem debitis, sapiente nesciunt voluptate corporis laboriosam
         numquam rerum ratione, dignissimos excepturi rem quisquam!'
        />

<AboutUs
        heading='our history'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Recusandae molestiae tenetur molestias possimus perspiciatis 
        laudantium amet quidem debitis, sapiente nesciunt voluptate corporis laboriosam
         numquam rerum ratione, dignissimos excepturi rem quisquam!'
        />

        </div>
        
    </div>
  )
}

export default About
