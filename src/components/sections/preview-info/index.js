import React from 'react'
import c from './style.module.scss'
import spotImage from '../../../assets/images/spot.png'


const PreviewInfo = () => {

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <div className={c.text}>
          <h3 className={c.title}>
            it lives
          </h3>
          <h3 className={c.title}>
            it thinks
          </h3>
          <h3 className={c.title}>
            it breathes
          </h3>
        </div>
        <div className={c.imageWrap}>
          <img src={spotImage} className={c.image} alt=""/>
        </div>
      </div>
    </div>
  )
}


export {
  PreviewInfo
}