import React from 'react'
import c from './style.module.scss'
import personImage from '../../../assets/images/person4.png'


const Guarantee = () => {

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <h3 className={c.title}>
          But we
          garant
          you that
        </h3>

        <div className={c.imageWrap}>
          <img className={c.image} src={personImage} alt=""/>
        </div>

        <h3 className={c.titleRight}>
          Feeling
          will be
          strange
        </h3>
      </div>
    </div>
  )
}

export {
  Guarantee
}