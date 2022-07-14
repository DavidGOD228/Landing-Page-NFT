import React, {useLayoutEffect, useState} from 'react'
import c from './style.module.scss'
import planetsImage from '../../../assets/images/planets.png'
import planetsMobImage from '../../../assets/images/planetsMobile.png'


const MetaMorph = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const imageValue = width > 600 ? planetsImage : planetsMobImage


  return (
    <div className={c.wrap}>
      <h2 className={c.title}>
        Metamorph
        &metaverse
      </h2>

      <div className={c.planets} style={{backgroundImage: `url("${imageValue}")`}} />
    </div>
  )
}


export {
  MetaMorph
}