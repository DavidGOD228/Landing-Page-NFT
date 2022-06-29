import React from 'react'
import c from './style.module.scss'
import circleImage from "../../../../../assets/images/circle-light.png";

const SynchronizedLine = () => {

  return (
    <div className={c.wrap}>
      <img src={circleImage} alt=""/>
      <div className={c.line}>
        <span className={c.span} />
      </div>
    </div>
  )
}


export {
  SynchronizedLine
}