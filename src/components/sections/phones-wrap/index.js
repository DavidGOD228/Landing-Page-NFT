import React from 'react'
import cityImage1 from "../../../assets/images/icons/city1.png";
import cityImage2 from "../../../assets/images/icons/city2.png";
import cityImage3 from "../../../assets/images/icons/city3.png";
import cityImage4 from "../../../assets/images/icons/city4.png";
import clothingImage1 from '../../../assets/images/icons/clothing1.png'
import clothingImage2 from '../../../assets/images/icons/clothing2.png'
import clothingImage3 from '../../../assets/images/icons/clothing3.png'
import clothingImage4 from '../../../assets/images/icons/clothing4.png'
import land1 from '../../../assets/images/icons/land1.png'
import land2 from '../../../assets/images/icons/land2.png'
import land3 from '../../../assets/images/icons/land3.png'
import land4 from '../../../assets/images/icons/land4.png'
import phoneImage from '../../../assets/images/phone4.png'
import {PhoneSection} from "../phone-section";
import videoFile1 from '../../../assets/videos/1.mp4'
import videoFile2 from '../../../assets/videos/5.mp4'
import videoFile3 from '../../../assets/videos/2.mp4'

const firstItemData = {
  title: 'Claim your land',
  subtitle: 'Everyone in this world is entitled to his corner, the morph is no exception. Each morph has its own home, it can be improved by diversity and thus create a place for its existence.',
  images: [land1, land2, land3, land4],
  iconsTitle: 'NFT lands',
  phoneImage: phoneImage,
}

const secondItemData = {
  title: 'Dress it up',
  subtitle: 'Clothing is divided into four different types. Head, Upper Body, Lower Body and Shoes. Each individual category has its own slots.',
  images: [clothingImage2, clothingImage4, clothingImage1, clothingImage3],
  iconsTitle: 'NFT outfits',
  phoneImage: phoneImage,
}

const thirdItemData = {
  title: 'Build infrastructure',
  subtitle: 'Farm for resources, craft, build and develop your corner of the universe. You have full ability to make your own changes. Each category contains different options for the Morph’s place to stay.',
  images: [cityImage1, cityImage2, cityImage3, cityImage4],
  iconsTitle: 'NFT furniture',
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
      />
    </div>
  )
}


export {
  PhonesWrap
}
