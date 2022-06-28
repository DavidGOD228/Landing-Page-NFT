import React from 'react'
import c from './style.module.scss'
import personRight from '../../../assets/images/person2.png'
import personLeft from '../../../assets/images/person3.png'

const mockData = [
  {title: 'a Creature', subtitle: "a unique morph"},
  {title: 'a Ai', subtitle: "a unique clothes morph"},
  {title: 'a Soul', subtitle: "a unique clothes morph"},
  {title: 'a Cyberfriend', subtitle: "a unique morph"},
  {title: '92.222', subtitle: "a unique morph"}
]

const Information = () => {

  return (
    <div className={c.wrap}>
      <img className={c.personLeft} src={personLeft} alt=""/>
      <img className={c.personRight} src={personRight} alt=""/>
      <div className={c.container}>
        {
          mockData.map(item => (
            <div className={c.item}>
              <h3 className={c.title}>{item.title}</h3>
              <h5 className={c.subtitle}>{item.subtitle}</h5>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export {
  Information
}