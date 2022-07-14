import React from 'react'
import c from './style.module.scss'
import personImage from '../../../assets/images/person5.png'
import backgroundDarkImage from '../../../assets/images/bacakground-dark.png'
import videoFile from '../../../assets/videos/6.mp4'
import {MobileVideo} from "../../ui/mobile-video";


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

        <MobileVideo path={videoFile} />
      </div>

    </div>
  )
}


export {
  LiveMorph
}