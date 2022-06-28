import React from 'react'
import c from './style.module.scss'


const OptionsList = () => {

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <div className={c.top}>
          <div className={c.item}>
            1
          </div>
          <div className={c.item}>
            2
          </div>
        </div>
      </div>
    </div>
  )
}


export {
  OptionsList
}