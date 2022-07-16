import React, {useEffect, useState} from 'react'
import {PreviewInfo} from "../../components/sections/preview-info";
import {About} from "../../components/sections/about";
import {Information} from "../../components/sections/information";
import {Guarantee} from "../../components/sections/guarantee";
import {Digital} from "../../components/sections/digital";
import {Cyber} from "../../components/sections/cyber";
import {OptionsList} from "../../components/sections/options-list";
import {Ready} from "../../components/sections/ready";
import {Synchronized} from "../../components/sections/synchronized";
import {LiveMorph} from "../../components/sections/live-morph";
import {Autonomous} from "../../components/sections/autonomous";
import {MetaMorph} from "../../components/sections/meta-morph";
import {City} from "../../components/sections/city";
import {Preview} from "../../components/sections/preview";
import {UniqueMorphs} from "../../components/sections/unique-morphs";
import {YourMorph} from "../../components/sections/your-morph";
import {WhiteList} from "../../components/sections/white-list";
import {PhonesWrap} from "../../components/sections/phones-wrap";
import Loader2220 from '../../assets/loaders/Gif-2220x1080.gif'
import Loader1920 from '../../assets/loaders/Gif-1080x1920.gif'
import Loader1000 from '../../assets/loaders/Gif-1080x2220.gif'
import LoaderMobile from '../../assets/loaders/Gif-1080x1920.gif'

const HomePage = () => {
    const [isLoading, setLoading] = useState(true)
  const meta = {
    title: 'Some Meta Title',
    description: 'I am a description, and I can create multiple tags',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      }
    }
  }
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

  return (
        isLoading ? <picture style={{margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
            <source srcSet={Loader2220} media="(min-width: 1920px)" />
            <source srcSet={Loader1920} media="(min-width: 1000px)" />
            <source srcSet={Loader1000} media="(min-width: 500px)" />
            <img src={LoaderMobile} alt="Loader"/>
        </picture>
          :
          <div>
            <Preview />
            <PreviewInfo />
            <About />
            <Information />
            <Guarantee />
            <Digital />
            <Cyber />
            <OptionsList />
            <YourMorph />
            <UniqueMorphs />
            <WhiteList />
            <Ready />
            <Synchronized />
            <LiveMorph />
            <PhonesWrap />
            <Autonomous />
            <MetaMorph />
            <City />
        </div>
  )
}

export {
  HomePage
}
