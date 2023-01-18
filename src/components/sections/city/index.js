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
        Balarama city is a digital city on the coast of the Balarama River, one of the longest rivers on the planet Purgatorium 8. Balarama is famous for its ultra-modern architecture, the silhouette of the city formed by countless skyscrapers, inhabitants and temporary visitors. The city is considered the starting point of every Morph for interpreting his consciousness and mastering a new reality, a digital consciousness.
      </h3>

      <div className={c.cityWrap} style={{backgroundImage: `url("${cityImage}")`}} />
    </div>
  )
}


export {
  City
}
