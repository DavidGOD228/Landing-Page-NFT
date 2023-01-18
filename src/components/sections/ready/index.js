import React from 'react'
import c from './style.module.scss'
import personLie from '../../../assets/images/person-lie.png'


const Ready = () => {

  return (
    <div className={c.wrap}>
      <h3 className={c.title}>
        Your Morph is Ready.
      </h3>
      <div className={c.lie} style={{backgroundImage: `url("${personLie}")`}}>

      </div>
    </div>
  )
}


export {
  Ready
}