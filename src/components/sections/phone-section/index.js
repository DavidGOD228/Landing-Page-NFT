import React from 'react'
import  c from './style.module.scss'
import {MobileVideo} from "../../ui/mobile-video";


const PhoneSection = ({title, subtitle, images, videoPath, iconsTitle, isRevers, isBigPadding}) => {
  const wrapClass = isRevers ? `${c.wrap} ${c.wrapRevers}` : c.wrap
  const wrapClassValue = isBigPadding ? `${wrapClass} ${c.bigPadding}` : wrapClass
  const containerClass = isRevers ? `${c.container} ${c.containerRevers}` : c.container
  const iconListClass = isRevers || isBigPadding ? `${c.iconsList} ${c.iconsListRevers}` : c.iconsList

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

        <div className={iconListClass}>
            {
              images.map(item => (
                <div>
                  <img src={item} alt=""/>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
  const imageContent = <MobileVideo path={videoPath} />


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