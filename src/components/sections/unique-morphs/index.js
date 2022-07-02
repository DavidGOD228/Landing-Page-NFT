import React from 'react'
import c from './style.module.scss'
import backgroundImage from '../../../assets/images/background-morphs.png'


const UniqueMorphs = () => {

  return (
    <div className={c.wrapper}>
      <div className={c.wrap} style={{backgroundImage: `url("${backgroundImage}")`}}>
        <div className={c.container}>
          <h2 className={c.title }>
            10.000
          </h2>

          <h3 className={c.subtitle}>
            unuque morphs
          </h3>
        </div>
      </div>
    </div>
  )
}


export {
  UniqueMorphs
}