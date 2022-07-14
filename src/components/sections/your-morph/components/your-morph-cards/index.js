import React from 'react'
import c from './style.module.scss'
import badgeImage2 from '../../../../../assets/images/badge2.png'


const YourMorphCards = () => {

  return (
    <div className={c.wrap}>
      {
        [1,2,3,4,5,6,7].map(item => (
          <div key={item} className={c.imageWrap}>
            <img className={c.image} src={item === 4 ? badgeImage2 : badgeImage2} alt=""/>
          </div>
        ))
      }
    </div>
  )
}

export {
  YourMorphCards
}