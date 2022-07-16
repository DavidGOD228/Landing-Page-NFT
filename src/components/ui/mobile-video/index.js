import React from 'react'
import c from './style.module.scss'


const MobileVideo = ({path}) => {

  if (!path) return

  return (
   <div className={c.video}>
     <div className={c.videoWrap}>
       <div className={c.videoContainer}>
         <video loop={true} className={c.video} width={400} muted={true} autoPlay={true}>
           <source src={path} type="video/mp4" />
         </video>
       </div>
     </div>
   </div>
  )
}


export  {
  MobileVideo
}
