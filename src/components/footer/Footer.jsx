

import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
            <h1>faygo</h1>
            <p>choose your favorite destinations</p>
        </div>

        <div>
            <a href='/'>
            <i className='fa-brands fa-facebook-square'></i>
            </a>
            <a href='/'>
            <i className='fa-brands fa-twitter-square'></i>
            </a> 
            <a href='/'>
            <i className='fa-brands fa-instagram-square'></i>
            </a> 
            <a href='/'>
            <i className='fa-brands fa-whatsapp-square'></i>
            </a>
        </div>
      </div>

      <div className='bottom'>
        <div>
            <h4>Projects</h4>
            <a href='/'>changelog</a>
            <a href='/'>status</a>
            <a href='/'>license</a>
            <a href='/'>All versions</a>
        </div>

        <div>
            <h4>Community</h4>
            <a href='/'>Github</a>
            <a href='/'>Issues</a>
            <a href='/'>Project</a>
            <a href='/'>twitter</a>
        </div>

        <div>
            <h4>Help</h4>
            <a href='/'>support</a>
            <a href='/'>troubleshooting</a>
            <a href='/'>contact</a>
            <a href='/'>All versions</a>
        </div>

        <div>
            <h4>Others</h4>
            <a href='/'>support</a>
            <a href='/'>troubleshooting</a>
            <a href='/'>contact</a>
            <a href='/'>All versions</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
