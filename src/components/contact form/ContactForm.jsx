

import React from 'react'
import './contactForm.css'

function ContactForm() {
  return (
    <div className='contact-container'>
      <h1>Send a message to us</h1>

      <form className='form'>
        <input placeholder='name'/>
        <input placeholder='name'/>
        <input placeholder='name'/>
        <textarea placeholder='message'/>
        <button>send message</button>
      </form>
    </div>
  )
}

export default ContactForm
