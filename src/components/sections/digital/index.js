import React from 'react'
import c from './style.module.scss'

const Digital = () => {

  return (
    <div className={c.wrap}>
      <h3 className={c.title}>
        First digital <span className={c.blackText}>creature
        completely autonomous</span> living in your device
      </h3>
    </div>
  )
}


export {
  Digital
}