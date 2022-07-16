import React, {useEffect, useRef, useState} from 'react'
import video from '../../../assets/videos/croped.mp4'
import c from './style.module.scss'


const Tether = ({isVideoStarted, setVideoStarted}) => {
  const videoRef = useRef(null);
  const [isPlaying, setPlaying] = useState(false);
  const [isMuted, setMuted] = useState(false);
  const [isVideoVisible, setVideoVisible] = useState(true);

  const handleVideoPlay = (videoStatus) => {
    if(isVideoStarted) {
      if(videoStatus === 'play') {
        videoRef.current.play()
        setPlaying(true)
      }
      else {
        videoRef.current.pause()
        setPlaying(false)
      }
    }
  }

  const options =  {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  const handleVideoVisibility = (entries) => {
    const [entry] = entries
    if(isVideoStarted) {
      if(entry.isIntersecting) {
        handleVideoPlay('play')
        setVideoVisible(true)
      }
      else {
        handleVideoPlay('pause')
        setVideoVisible(false)
      }
    }
  }

  const restartVideo = () => {
    setVideoStarted(false)
    videoRef.currentTime = 0
    videoRef.current.load()
  }

  useEffect(() => {
    let observerRefValue = null
    const observer = new IntersectionObserver(handleVideoVisibility, options)
    if(videoRef.current) {
      observer.observe(videoRef.current)
      observerRefValue = videoRef.current
    }

    return () => {
      if(observerRefValue) {
        observer.unobserve(observerRefValue)
      }
    }
  }, [isVideoStarted])

  return (
    <div className={c.wrap} style={{pointerEvents: isVideoVisible? 'all': 'none'}}>
      <video onClick={() => handleVideoPlay(isPlaying ? 'pause': 'play')} className={c.video} autoPlay={false} muted={isMuted} ref={videoRef} onEnded={restartVideo} playsInline={true}>
        <source src={video} type="video/mp4" />
      </video>
      {
        isVideoStarted ?  <>
          <button className={c.videoPlay}>
            {
              isPlaying ? <svg onClick={() => handleVideoPlay('pause')} width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z"
                  fill="white" fillRule="evenodd" clipRule="evenodd"
                 ></path>
              </svg>:
                <svg onClick={() => handleVideoPlay('play')} width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
                  fill="white" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            }
          </button>
          <button className={c.videoSound}>
            {
              isMuted ? <svg onClick={() => setMuted(false)} width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.72361 1.05279C7.893 1.13749 8 1.31062 8 1.5V13.5C8 13.6894 7.893 13.8625 7.72361 13.9472C7.55421 14.0319 7.35151 14.0136 7.2 13.9L3.33333 11H1.5C0.671573 11 0 10.3284 0 9.5V5.5C0 4.67158 0.671573 4 1.5 4H3.33333L7.2 1.1C7.35151 0.986371 7.55421 0.968093 7.72361 1.05279ZM7 2.5L3.8 4.9C3.71345 4.96491 3.60819 5 3.5 5H1.5C1.22386 5 1 5.22386 1 5.5V9.5C1 9.77614 1.22386 10 1.5 10H3.5C3.60819 10 3.71345 10.0351 3.8 10.1L7 12.5V2.5ZM14.8536 5.14645C15.0488 5.34171 15.0488 5.65829 14.8536 5.85355L13.2071 7.5L14.8536 9.14645C15.0488 9.34171 15.0488 9.65829 14.8536 9.85355C14.6583 10.0488 14.3417 10.0488 14.1464 9.85355L12.5 8.20711L10.8536 9.85355C10.6583 10.0488 10.3417 10.0488 10.1464 9.85355C9.95118 9.65829 9.95118 9.34171 10.1464 9.14645L11.7929 7.5L10.1464 5.85355C9.95118 5.65829 9.95118 5.34171 10.1464 5.14645C10.3417 4.95118 10.6583 4.95118 10.8536 5.14645L12.5 6.79289L14.1464 5.14645C14.3417 4.95118 14.6583 4.95118 14.8536 5.14645Z"
                  fill="white" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>: <svg onClick={() => setMuted(true)} width="25" height="25" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.46968 1.05085C7.64122 1.13475 7.75 1.30904 7.75 1.5V13.5C7.75 13.691 7.64122 13.8653 7.46968 13.9492C7.29813 14.0331 7.09377 14.0119 6.94303 13.8947L3.2213 11H1.5C0.671571 11 0 10.3284 0 9.5V5.5C0 4.67158 0.671573 4 1.5 4H3.2213L6.94303 1.10533C7.09377 0.988085 7.29813 0.966945 7.46968 1.05085ZM6.75 2.52232L3.69983 4.89468C3.61206 4.96294 3.50405 5 3.39286 5H1.5C1.22386 5 1 5.22386 1 5.5V9.5C1 9.77615 1.22386 10 1.5 10H3.39286C3.50405 10 3.61206 10.0371 3.69983 10.1053L6.75 12.4777V2.52232ZM10.2784 3.84804C10.4623 3.72567 10.7106 3.77557 10.833 3.95949C12.2558 6.09798 12.2558 8.90199 10.833 11.0405C10.7106 11.2244 10.4623 11.2743 10.2784 11.1519C10.0944 11.0296 10.0445 10.7813 10.1669 10.5973C11.4111 8.72728 11.4111 6.27269 10.1669 4.40264C10.0445 4.21871 10.0944 3.97041 10.2784 3.84804ZM12.6785 1.43044C12.5356 1.2619 12.2832 1.24104 12.1147 1.38386C11.9462 1.52667 11.9253 1.77908 12.0681 1.94762C14.7773 5.14488 14.7773 9.85513 12.0681 13.0524C11.9253 13.2209 11.9462 13.4733 12.1147 13.6161C12.2832 13.759 12.5356 13.7381 12.6785 13.5696C15.6406 10.0739 15.6406 4.92612 12.6785 1.43044Z"
                  fill="white" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            }
          </button>
        </>: null
      }
    </div>
  )
}


export {
  Tether
}
