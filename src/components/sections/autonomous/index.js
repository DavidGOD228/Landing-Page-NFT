import React from 'react'
import c from './style.module.scss'
import phoneImage from '../../../assets/images/phone2.png'
import iphoneImage from '../../../assets/images/phone3.png'
import smileImage from '../../../assets/images/smile.png'

const Autonomous = () => {

  return (
    <div className={c.wrap}>
      <h3 className={c.title}>
        He lives autonomous
      </h3>
      <h4 className={c.subtitle}>
        Each character is unique is a whole, it each has its own coreis indispensable, each has its own core
      </h4>

      <div className={c.container}>
        <div>
          <img src={phoneImage} className={c.phoneImage} alt=""/>
        </div>

        <div className={c.rightWrap}>
          <img src={phoneImage} className={c.phoneImage} alt=""/>
        </div>

        <div>
          <img src={iphoneImage} className={c.phoneImage} alt=""/>
        </div>

        <div className={c.imageBlock}>
          <div className={c.textWrap}>
            <h4 className={c.text}>
              He lives autonomous
            </h4>

            <div className={c.smileWrap}>
              <img src={smileImage} alt=""/>
            </div>
          </div>
        </div>
      </div>

      <div className={c.bottomWrap}>
        <h3 className={c.bottomText}>
          Challenge yourself with other players in the world of Agaron. A changeable world with different opportunities and dangers
        </h3>
      </div>
    </div>
  )
}


export {
  Autonomous
}
