import React from 'react'
import c from './style.module.scss'
import personImage from '../../../assets/images/person.png'


const About = () => {

  return (
    <div className={c.wrap}>
      <div className={c.container} style={{backgroundImage: `url(${personImage})`}}>
        <div className={c.dec} />
        <div className={c.textWrap}>
          <h2 className={c.title}>
            who is morph?
          </h2>
          <h3 className={c.subtitle}>
            we don't know.
          </h3>
        </div>
      </div>
    </div>
  )
}


export {
  About
}