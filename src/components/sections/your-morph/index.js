import React, {useLayoutEffect, useState} from 'react'
import c from './style.module.scss'
import {YourMorphCards} from "./components/your-morph-cards";
import personImage from '../../../assets/images/person6.png'
import personMobileImage from '../../../assets/images/person7.png'
import faceImage from '../../../assets/images/face2.png'
import codeImage from '../../../assets/images/code.png'
import skill1 from '../../../assets/images/icons/skill1.png'
import skill2 from '../../../assets/images/icons/skill2.png'
import skill3 from '../../../assets/images/icons/skill3.png'
import skill4 from '../../../assets/images/icons/skill4.png'
import skill5 from '../../../assets/images/icons/skill5.png'
import skill6 from '../../../assets/images/icons/skill6.png'
import bar36Image from '../../../assets/images/bars/bar36.png'


const barData = [
  {
    title: 'Aggressive',
    image: bar36Image
  },
  {
    title: 'Sociable',
    image: bar36Image
  },
  {
    title: 'Unsociable',
    image: bar36Image
  },
  {
    title: 'Careful',
    image: bar36Image
  },
  {
    title: 'Leadership',
    image: bar36Image
  },
  {
    title: 'Resourceful',
    image: bar36Image
  }
]



const YourMorph = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const imageValue = width > 799 ? personImage : personMobileImage

  return (
    <div className={c.wrap}>
      <div className={c.titleWrap}>
        <h2 className={c.title}>
          Unique CyberDNA
        </h2>

        <h2 className={c.title}>
          of your Morph
        </h2>
      </div>

      <YourMorphCards />

      <div className={c.line}>
        <div className={c.lineFirst} />
        <div className={c.lineSecond} />
      </div>

      <div className={c.person}>
        <div>
          <img className={c.image} src={imageValue} alt=""/>
        </div>

        <div className={c.about}>
          <div className={c.info}>
            <div className={c.aboutPerson}>
              <h5 className={c.number}>
                <span>#732</span>

                <img className={c.faceImageMobile} src={faceImage} alt=""/>
              </h5>

              <div className={c.nameWrap}>
                <h5 className={c.nameTitle}>Name</h5>
                <h3 className={c.name}>
                  Alan Becker
                </h3>
                <div className={c.numeric}>
                  M93874JDKMCNDSSKLIR9200
                </div>
              </div>
            </div>

            <img className={c.faceImage} src={faceImage} alt=""/>
          </div>

          <div className={c.codeWrap}>
            <div className={c.codeAbout}>
              <div className={c.birth}>
                <h5 className={c.nameTitle}>
                  Birth
                </h5>
                <h3 className={c.subtitle}>
                  02.06.2001
                </h3>
              </div>

              <div className={c.location}>
                <h5 className={c.nameTitle}>
                  Location
                </h5>
                <h3 className={c.subtitle}>
                  Los Angeles United States
                </h3>
              </div>
            </div>

            <img className={c.codeImage} src={codeImage} alt=""/>
          </div>

          <div className={c.parameters}>
            <h5 className={c.nameTitle}>Parametres</h5>
            <h3 className={c.subtitle}>1.78 cm 76 kg</h3>
          </div>

          <div className={c.skill}>
            <h5 className={c.nameTitle}>Skill</h5>
            <div className={c.skillBox}>
              <img src={skill6} alt=""/>
              <img src={skill1} alt=""/>
              <img src={skill2} alt=""/>
              <img src={skill3} alt=""/>
              <img src={skill4} alt=""/>
              <img src={skill5} alt=""/>
            </div>
          </div>

          <div className={c.barWrap}>
            {
              barData.map(item => (
                <div key={item.title} className={c.barItem}>
                  <h6 className={c.barTitle}>{item.title}</h6>
                  <img className={c.barImage} src={item.image} alt=""/>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      <div className={c.barWrapMobile}>
        {
          barData.map(item => (
            <div key={item.title + "2"} className={c.barItem}>
              <h6 className={c.barTitle}>{item.title}</h6>
              <img className={c.barImage} src={item.image} alt=""/>
            </div>
          ))
        }
      </div>
    </div>
  )
}


export {
  YourMorph
}