import React from 'react'
import c from './style.module.scss'
import planetsImage from '../../../assets/images/planets.png'


const MetaMorph = () => {

  return (
    <div className={c.wrap}>
      <h2 className={c.title}>
        Metamorph
        &metaverse
      </h2>

      <div className={c.planets} style={{backgroundImage: `url("${planetsImage}")`}} />
    </div>
  )
}


export {
  MetaMorph
}