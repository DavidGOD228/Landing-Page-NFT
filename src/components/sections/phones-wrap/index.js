import React from 'react'
import cityImage1 from "../../../assets/images/icons/city1.png";
import cityImage2 from "../../../assets/images/icons/city2.png";
import cityImage3 from "../../../assets/images/icons/city3.png";
import cityImage4 from "../../../assets/images/icons/city4.png";
import clothingImage1 from '../../../assets/images/icons/clothing1.png'
import clothingImage2 from '../../../assets/images/icons/clothing2.png'
import clothingImage3 from '../../../assets/images/icons/clothing3.png'
import clothingImage4 from '../../../assets/images/icons/clothing4.png'
import phoneImage from '../../../assets/images/phone4.png'
import {PhoneSection} from "../phone-section";
import videoFile1 from '../../../assets/videos/1.mp4'
import videoFile2 from '../../../assets/videos/5.mp4'
import videoFile3 from '../../../assets/videos/2.mp4'

const firstItemData = {
  title: 'Moved in an appartment',
  subtitle: 'Each character is unique is a whole it is indispensable, each has its own core Each character is unique is a whole, it is indispensable, each has its own core.',
  images: [cityImage1, cityImage2, cityImage3, cityImage4],
  iconsTitle: 'More than 30.000 NFT appartment',
  phoneImage: phoneImage,
}

const secondItemData = {
  title: 'Dress it up',
  subtitle: 'Each character is unique is a whole it is indispensable, each has its own core Each character is unique is a whole, it is indispensable, each has its own core.',
  images: [clothingImage1, clothingImage2, clothingImage3, clothingImage4],
  iconsTitle: 'More than 10.000 NFT outfits',
  phoneImage: phoneImage,
}

const thirdItemData = {
  title: 'Change the furniture',
  subtitle: 'Each character is unique is a whole it is indispensable, each has its own core Each character is unique is a whole, it is indispensable, each has its own core.',
  images: [clothingImage1, clothingImage2, clothingImage3, clothingImage4],
  iconsTitle: 'More than 30.000 NFT appartment',
  phoneImage: phoneImage,
}

const PhonesWrap = () => {

  return (
    <div>
      <PhoneSection
        videoPath={videoFile1}
        phoneImage={firstItemData.phoneImage}
        images={firstItemData.images}
        subtitle={firstItemData.subtitle}
        iconsTitle={firstItemData.iconsTitle}
        title={firstItemData.title}
      />

      <PhoneSection
        videoPath={videoFile2}
        phoneImage={secondItemData.phoneImage}
        images={secondItemData.images}
        subtitle={secondItemData.subtitle}
        iconsTitle={secondItemData.iconsTitle}
        title={secondItemData.title}
        isRevers={true}
      />

      <PhoneSection
        videoPath={videoFile3}
        phoneImage={thirdItemData.phoneImage}
        images={thirdItemData.images}
        subtitle={thirdItemData.subtitle}
        iconsTitle={thirdItemData.iconsTitle}
        title={thirdItemData.title}
        isBigPadding={true}
      />
    </div>
  )
}


export {
  PhonesWrap
}