import React from 'react'
import c from './style.module.scss'

const UniqueMorphs = () => {

  return (
    <div className={c.wrapper}>
      <div className={c.wrap}>
        <div className={c.container}>
          <h2 className={c.title }>
            10.000
          </h2>

          <h3 className={c.subtitle}>
            unique morphs
          </h3>
        </div>
      </div>
    </div>
  )
}


export {
  UniqueMorphs
}
