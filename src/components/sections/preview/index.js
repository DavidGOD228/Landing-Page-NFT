import React from 'react'
import c from './style.module.scss'
import metaIcon from '../../../assets/images/meta.png'
import alanImage from '../../../assets/images/alan.png'
import metaMorphImage from '../../../assets/images/metamorph.png'

const Preview = () => {

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <img className={c.icon} src={metaIcon} alt=""/>
        <img className={c.iconName} src={metaMorphImage} alt=""/>
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