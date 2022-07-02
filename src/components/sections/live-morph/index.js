import React from 'react'
import c from './style.module.scss'
import phoneImage from '../../../assets/images/phone.png'
import personImage from '../../../assets/images/person5.png'
import backgroundDarkImage from '../../../assets/images/bacakground-dark.png'


const LiveMorph = () => {

  return (
    <div className={c.wrap} style={{backgroundImage: `url("${backgroundDarkImage}")`}}>
      <div className={c.personWrap}>
        <div className={c.dec} />
        <img className={c.person} src={personImage} alt=""/>
      </div>

      <div className={c.phone}>
        <div className={c.textWrap}>
          <div className={c.text}>
            Now your Morph live on your device
          </div>
        </div>

        <img className={c.phoneImage}  src={phoneImage} alt=""/>
      </div>

    </div>
  )
}


export {
  LiveMorph
}