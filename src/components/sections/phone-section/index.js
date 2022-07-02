import React from 'react'
import  c from './style.module.scss'


const PhoneSection = ({title, subtitle, images, phoneImage, iconsTitle, isRevers, isBigPadding}) => {
  const wrapClass = isRevers ? `${c.wrap} ${c.wrapRevers}` : c.wrap
  const wrapClassValue = isBigPadding ? `${wrapClass} ${c.bigPadding}` : wrapClass
  const containerClass = isRevers ? `${c.container} ${c.containerRevers}` : c.container

  const content = (
    <div className={c.content}>
      <h2 className={c.title}>
        {title}
      </h2>

      <h4 className={c.subtitle}>
        {subtitle}
      </h4>

      <div className={c.iconsWrap}>
        <div className={c.iconTitle}>
          {iconsTitle}
        </div>

        <div className={c.iconsList}>
          {
            images.map(item => (
              <img src={item} alt=""/>
            ))
          }
        </div>
      </div>
    </div>
  )
  const imageContent = (
    <div className={c.phoneWrap}>
      <img className={c.phoneImage} src={phoneImage} alt=""/>
    </div>
  )


  const contentToShow = isRevers ? (
    <>
      {imageContent}
      {content}
    </>
  ) : (
    <>
      {content}
      {imageContent}
    </>
  )

  return (
    <div className={wrapClassValue}>
      <div className={containerClass}>
        {contentToShow}
      </div>
    </div>
  )
}


export {
  PhoneSection
}