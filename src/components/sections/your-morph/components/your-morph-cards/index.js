import React from 'react'
import c from './style.module.scss'
import badgeImage from '../../../../../assets/images/badge.png'


const YourMorphCards = () => {

  return (
    <div className={c.wrap}>
      {
        [1,2,3,4,5].map(item => (
          <div key={item} className={c.imageWrap}>
            <img className={c.image} src={badgeImage} alt=""/>
          </div>
        ))
      }
    </div>
  )
}

export {
  YourMorphCards
}