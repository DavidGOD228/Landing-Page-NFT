import React from 'react'
import c from './style.module.scss'
import cyberImage from '../../../assets/images/cyber.png'


const Cyber = () => {

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <h3 className={c.title}>CYBER<span>DNA</span></h3>
        <img className={c.image} src={cyberImage} alt="" />

        <div className={c.text}>
          Cyber DNA represents the cybernetic imprint that identifies each Morph, in fact, it contains a crossroads
          of information that determine the future genetic combination of your Morph starting
          from the physical aspect up to the deepest cratterial traits
        </div>
      </div>
    </div>
  )
}

export {
  Cyber
}