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


const HomePage = () => {

  return (
    <div>
      <PreviewInfo />
      <About />
      <Information />
      <Guarantee />
      <Digital />
      <Cyber />
      <OptionsList />
      <Ready />
      <Synchronized />
      <LiveMorph />
    </div>
  )
}

export {
  HomePage
}