import React from 'react'
import c from './style.module.scss'
import smileImage from '../../../assets/images/smile.png'
import {MobileVideo} from "../../ui/mobile-video";
import videoFile1 from '../../../assets/videos/3.mp4'
import videoFile2 from '../../../assets/videos/1.mp4'
import videoFile3 from '../../../assets/videos/4.mp4'


const Autonomous = () => {

  return (
    <div className={c.wrap}>
      <h3 className={c.title}>
        Respect his
        privacy!
      </h3>
      <h4 className={c.subtitle}>
        Morph lives his private life, would you like to be spied on?
      </h4>

      <div className={c.container}>
        <div>
          <MobileVideo path={videoFile1} />
        </div>

        <div className={c.rightWrap}>
          <MobileVideo path={videoFile2} />
        </div>

        <div>
          <MobileVideo path={videoFile3} />
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
          Challenge other players in the world of Metamorph to improve the version of your morph.
        </h3>
      </div>
    </div>
  )
}


export {
  Autonomous
}
