import React from 'react'
import c from './style.module.scss'
import metaIcon from '../../../assets/images/meta.png'
import alanImage from '../../../assets/images/alan.png'

const Preview = () => {

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <img src={metaIcon} alt=""/>
        <h1 className={c.title}>metamorph</h1>
      </div>

      <div className={c.image}>
        <img src={alanImage} alt=""/>
      </div>
    </div>
  )
}

export {
  Preview
}