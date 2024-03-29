import React from 'react'
import c from './style.module.scss'
import faceImage from '../../../assets/images/face.png'
import {SynchronizedContent} from "./components/synchronized-content";
import {SynchronizedLine} from "./components/synchronized-line";


const Synchronized = () => {

  return (
    <div className={c.wrap}>
      <div className={c.textWrap}>
        <h3 className={c.textTop}>Synchronize</h3>
        <h3 className={c.textCenter}>with your</h3>
        <h3 className={c.textBottom}>Morph</h3>
      </div>

      <div className={c.bottomWrap}>
        <img src={faceImage} alt="" className={c.image}/>

        <div className={c.listWrap}>
          <div className={c.list}>
            <div className={`${c.listItem} ${c.listItemLeft}`}>
              <SynchronizedLine />

              <SynchronizedContent
                title="Web3 "
                text="Experience the transparent synchronization of worlds through decentralization"
              />
            </div>

            <div className={`${c.listItem} ${c.listItemCenter}`}>
              <SynchronizedLine />

              <SynchronizedContent
                title="Connect device"
                text="Human beings have awareness of themselves, others and their environment"
              />

            </div>

            <div className={`${c.listItem} ${c.listItemRight}`}>
              <SynchronizedLine />

              <SynchronizedContent
                title="Activate CyberDNA"
                text="Initialize your morph DNA by connecting your wallet"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}


export {
  Synchronized
}
