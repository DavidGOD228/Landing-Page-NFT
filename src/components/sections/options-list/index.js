import React from 'react'
import c from './style.module.scss'
import signImage from '../../../assets/images/icons/sign1.png'
import signImage2 from '../../../assets/images/icons/sign2.png'
import signImage3 from '../../../assets/images/icons/sign3.png'
import signImage4 from '../../../assets/images/icons/sign4.png'
import signImage5 from '../../../assets/images/icons/sign5.png'
import signImage6 from '../../../assets/images/icons/sign6.png'


const OptionsList = () => {

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <div className={c.itemWrap}>
          <div className={c.top}>
            <div className={`${c.item} ${c.borderRight} ${c.itemMobile}`}>
              <div>
                <img src={signImage} alt=""/>
              </div>
              <div className={`${c.firstItemContent} ${c.itemContentMobile}`}>
                <h4 className={c.title}>
                  Exchange to everyone
                </h4>

                <p className={c.text}>
                  Each character is unique is a whole,
                  it is indispensable, each has its own core
                </p>
              </div>
            </div>
            <div className={`${c.item} ${c.itemMobile}`}>
              <div>
                <img src={signImage2} alt=""/>
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
        </div>

        <div className={c.itemWrap}>
          <div className={c.center}>
          <div className={`${c.item} ${c.borderRight} ${c.itemMobile}`}>
            <div>
              <img src={signImage3} alt=""/>
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

          <div className={`${c.item} ${c.itemMobile}`}>
            <div>
              <img src={signImage4} alt=""/>
            </div>
            <div className={`${c.fourthItemContent} ${c.itemContentMobile}`}>
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
        </div>

        <div className={c.itemWrap}>
          <div className={c.bottom}>
          <div className={`${c.item} ${c.borderRight} ${c.itemMobile}`}>
            <div>
              <img src={signImage5} alt=""/>
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

          <div className={`${c.item} ${c.itemMobile} ${c.itemSmall}`}>
            <div>
              <img className={c.smallImage} src={signImage6} alt=""/>
            </div>
            <div className={`${c.sixthItemContent} ${c.itemContentMobile}`}>
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
    </div>
  )
}


export {
  OptionsList
}