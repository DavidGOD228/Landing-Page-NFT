import React, {useState} from 'react'
import c from './style.module.scss'
import metaIcon from '../../../assets/images/meta.png'
import alanImage from '../../../assets/images/alan.png'
import metaMorphImage from '../../../assets/images/metamorph.png'
import {Tether} from "../tether";

const Preview = () => {
  const [isVideoStarted, setVideoStarted] = useState(false);

  const handleMainPlayBtn = () => {
    setVideoStarted(true)
  }

  return (
    <div className={c.wrap}>
      <div className={c.container}>
        <img className={c.icon} src={metaIcon} alt=""/>
        <img className={c.iconName} src={metaMorphImage} alt=""/>
      </div>
      <div className={c.image}>
        <img src={alanImage} alt=""/>
        <button className={c.videoButton} onClick={handleMainPlayBtn}>
          <svg width="157" height="157" viewBox="0 0 157 157" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_835_1034)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M68.7834 4.27518C45.4732 8.83291 28.2132 21.5606 18.6023 41.2801C13.4968 51.7568 11.9966 58.461 12 70.7991C12.0025 82.497 13.8136 90.3895 18.7557 100.245C26.2487 115.186 38.94 126.758 54.335 132.685C62.7138 135.912 68.9368 137.008 78.8411 137C112.731 136.976 140.712 111.663 144.588 77.5235C148.251 45.2677 127.127 14.552 95.3307 5.90041C90.3432 4.54338 72.881 3.4748 68.7834 4.27518ZM92.3684 12.6535C107.714 16.2734 122.253 27.3388 130.536 41.7018C136.989 52.8937 139.502 69.7322 136.652 82.6843C128.849 118.143 92.6549 138.404 58.4081 126.486C42.0903 120.807 28.5394 107.291 22.2557 90.4275C18.8736 81.35 18.0452 67.4331 20.287 57.3486C24.9593 36.3328 42.1527 18.5252 63.0661 13.0423C70.7707 11.0215 84.6688 10.8377 92.3684 12.6535ZM59.8964 42.929L57.8274 44.9987V72.0262C57.8274 97.9287 57.8973 99.1229 59.5129 100.74C60.44 101.667 61.673 102.423 62.2519 102.42C62.8318 102.416 73.9243 96.0589 86.903 88.2929C109.05 75.0405 110.501 74.0242 110.501 71.7504C110.501 69.4893 108.97 68.3844 87.4314 55.0933C74.7435 47.264 63.8229 40.8584 63.163 40.8584C62.5039 40.8584 61.0341 41.7904 59.8964 42.929Z" fill="white" fill-opacity="0.65" shape-rendering="crispEdges"/>
            </g>
            <defs>
              <filter id="filter0_d_835_1034" x="0" y="0" width="157" height="157" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="8"/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_835_1034"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_835_1034" result="shape"/>
              </filter>
            </defs>
          </svg>
          <span className={c.mainPlayBtn}>play trailer</span>
        </button>
      </div>
      {
        isVideoStarted ? <Tether isVideoStarted={isVideoStarted} setVideoStarted={setVideoStarted}/> : null
      }
    </div>
  )
}

export {
  Preview
}
