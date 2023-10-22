

import React from 'react'
import './hero.css'

function Hero(props) {
  return (
    <div className={props.cName}>
       <img alt='heroimg' src={props.heroImg}/>

       <div className={props.hero_text}>
        <h1 >{props.tittle}</h1>
        <p>{props.text}</p>
       
       </div>

       <a href={props.url} className={props.btnClass}> 
       {props.btnText}
       </a>
       
    </div>
  )
}

export default Hero
