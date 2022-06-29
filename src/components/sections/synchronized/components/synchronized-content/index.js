import React from 'react'
import c from './style.module.scss'

const SynchronizedContent = ({title, text}) => {

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <h4 className={c.title}>
          {title}
        </h4>

        <div className={c.text}>
          {text}
        </div>
      </div>
    </div>
  )
}


export {
  SynchronizedContent
}