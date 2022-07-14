import React from 'react'
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
import {Tether} from "../../components/sections/tether";


const HomePage = () => {

  return (
    <div>
      <Tether />
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