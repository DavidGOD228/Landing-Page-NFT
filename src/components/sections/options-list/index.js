import React from 'react'
import c from './style.module.scss'
import signImage from '../../../assets/images/icons/sign1.png'


const OptionsList = () => {

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <div className={c.top}>
          <div className={`${c.item} ${c.borderRight}`}>
            <div>
              <img src={signImage} alt=""/>
            </div>
            <div className={c.firstItemContent}>
              <h4 className={c.title}>
                Exchange to everyone
              </h4>

              <p className={c.text}>
                Each character is unique is a whole,
                it is indispensable, each has its own core
              </p>
            </div>
          </div>
          <div className={c.item}>
            <div>
              <img src={signImage} alt=""/>
            </div>
            <div className={c.secondItemContent}>
              <h4 className={c.subtitle}>
                Unique character
              </h4>

              <p className={c.text}>
                Each character is unique is a whole,
                it is indispensable, each has its own core
              </p>
            </div>
          </div>
        </div>

        <div className={c.center}>
          <div className={`${c.item} ${c.borderRight}`}>
            <div>
              <img src={signImage} alt=""/>
            </div>
            <div className={c.secondItemContent}>
              <h4 className={c.subtitle}>
                In the capsule
              </h4>

              <p className={c.text}>
                Each character is unique is a whole,
                it is indispensable, each has its own core
              </p>
            </div>
          </div>

          <div className={c.item}>
            <div>
              <img src={signImage} alt=""/>
            </div>
            <div className={c.fourthItemContent}>
              <h4 className={c.title}>
                Life is a story
              </h4>

              <p className={c.text}>
                Each character is unique is a whole,
                it is indispensable, each has its own core
              </p>
            </div>
          </div>
        </div>

        <div className={c.bottom}>
          <div className={`${c.item} ${c.borderRight}`}>
            <div>
              <img src={signImage} alt=""/>
            </div>
            <div className={c.fifthItemContent}>
              <h4 className={c.title}>
                Unique to everyone
              </h4>

              <p className={c.text}>
                Each character is unique is a whole,
                it is indispensable, each has its own core
              </p>
            </div>
          </div>

          <div className={c.item}>
            <div>
              <img src={signImage} alt=""/>
            </div>
            <div className={c.sixthItemContent}>
              <h4 className={c.subtitle}>
                Living creature
              </h4>

              <p className={c.text}>
                Each character is unique is a whole, it is indispensable, each has its own core
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export {
  OptionsList
}