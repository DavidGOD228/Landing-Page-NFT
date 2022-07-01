import React from 'react'
import c from './style.module.scss'
import cityImage from '../../../assets/images/city.png'


const City = () => {

  return (
    <div className={c.wrap}>
      <h2 className={c.title}>
        Balarama City
      </h2>
      <h3 className={c.subtitle}>
        Cyber DNA represents the cybernetic imprint that
        identifies each Morph, in fact, it contains a crossroads of information that
        determine the future genetic combination of your Morph starting from the physical aspect
        up to the deepest cratterial traits
      </h3>

      <div className={c.cityWrap} style={{backgroundImage: `url("${cityImage}")`}} />
    </div>
  )
}


export {
  City
}