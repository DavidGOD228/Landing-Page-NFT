import React from 'react'
import video from '../../../assets/videos/croped.mp4'
import c from './style.module.scss'


const Tether = () => {

  return (
    <div className={c.wrap}>
      <video  className={c.video} autoPlay={true} muted={true}>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}


export {
  Tether
}