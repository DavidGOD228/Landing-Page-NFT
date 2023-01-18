import React, {useLayoutEffect, useState} from 'react'
import c from './style.module.scss'
import {YourMorphCards} from "./components/your-morph-cards";
import personImage from '../../../assets/images/person6.png'
import personMobileImage from '../../../assets/images/person7.png'
import faceImage from '../../../assets/images/face2.png'
import codeImage from '../../../assets/images/code.png'
import bar36Image from '../../../assets/images/bars/bar36.png'


const barData = [
  {
    title: 'Aggressive',
    image: bar36Image,
    percentage: '77%'
  },
  {
    title: 'Sociable',
    image: bar36Image,
    percentage: '77%'
  },
  {
    title: 'Unsociable',
    image: bar36Image,
    percentage: '77%'
  },
  {
    title: 'Careful',
    image: bar36Image,
    percentage: '77%'
  },
  {
    title: 'Leadership',
    image: bar36Image,
    percentage: '77%'
  },
  {
    title: 'Resourceful',
    image: bar36Image,
    percentage: '77%'
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
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_376_5926)">
                  <path d="M24.5144 10C24.0714 13.1123 23.7448 14.8037 23.7891 16.2712C22.8565 16.4451 21.9275 16.7405 21.0097 17.1686C18.2308 13.0671 11.6807 12.3822 6 15.7221C8.92725 19.3477 10.8064 21.0858 15.549 20.9823C12.9973 25.3153 13.7424 28.1041 15.215 32.3832C20.6348 29.1967 23.3983 23.4437 21.8969 18.9664C22.6269 18.6282 23.3636 18.3907 24.1064 18.2432C24.4674 19.5032 25.1637 20.9882 26.3461 23.3896C26.9283 20.9664 27.2571 19.4072 27.3208 18.1495C28.5031 18.3051 29.6824 18.6617 30.849 19.1842C30.2176 20.9714 29.7737 23.0265 29.4188 25.6867C31.2926 23.8896 32.6221 22.3343 33.6115 20.7378C34.2039 21.1403 34.7889 21.5815 35.3655 22.0571C35.8394 22.448 36.3035 22.8623 36.7586 23.2961C34.8197 25.4384 33.1035 27.7887 31.7192 30.2839C34.3275 29.2001 36.7527 27.5892 38.9678 25.6466C39.8742 26.7163 40.7216 27.8503 41.4875 29.0217C38.6455 30.873 36.0203 33.0382 33.8914 35.4338C36.9968 34.8824 40.1593 33.6026 43.1641 31.8812C43.742 32.988 44.2402 34.1 44.6482 35.1927C41.4009 36.8374 38.4596 39.1682 35.8244 42.1872C40.9751 47.6093 47.0085 52.8418 54.1736 54C54.4197 53.385 54.654 52.7676 54.8752 52.1451C48.3605 50.0421 43.0389 46.5449 39.1636 42.5924L40.6106 41.1963C44.2569 44.915 49.306 48.2396 55.5027 50.2399C57.3087 44.3214 57.7524 38.1702 55.3036 32.3233C52.1594 32.5408 49.22 33.2171 46.483 34.349C46.0409 33.179 45.5077 31.9982 44.8945 30.8298C48.2015 28.7092 51.2583 26.0987 53.7553 23.4032C50.3153 24.3571 46.6481 25.9237 43.2079 27.9537C42.3741 26.6751 41.4499 25.436 40.4523 24.2704C43.3339 21.4326 45.8131 18.0574 47.8121 14.6241C44.3962 16.4408 41.0665 18.9103 38.1449 21.8396C37.6592 21.3789 37.1627 20.9366 36.6541 20.5169C35.9791 19.9601 35.2796 19.4419 34.5628 18.9699C35.6737 16.5658 36.222 13.8694 36.816 10.03C34.3812 12.8576 32.7516 14.9424 31.6048 17.3528C30.1563 16.7185 28.663 16.2931 27.1556 16.1406C26.8081 14.6347 25.9427 13.0713 24.5144 10.0001V10ZM49.9707 36.8097C51.2602 36.7805 52.5158 37.4711 53.1413 38.688C54.0116 40.3811 53.3324 42.4515 51.627 43.3154C49.9212 44.1793 47.8356 43.5085 46.9652 41.8154C46.095 40.1225 46.7709 38.0485 48.4763 37.1845C48.9561 36.9417 49.4661 36.8211 49.9707 36.8097V36.8097Z" fill="white" fill-opacity="0.65"/>
                </g>
                <path d="M24.5144 10C24.0714 13.1123 23.7448 14.8037 23.7891 16.2712C22.8565 16.4451 21.9275 16.7405 21.0097 17.1686C18.2308 13.0671 11.6807 12.3822 6 15.7221C8.92725 19.3477 10.8064 21.0858 15.549 20.9823C12.9973 25.3153 13.7424 28.1041 15.215 32.3832C20.6348 29.1967 23.3983 23.4437 21.8969 18.9664C22.6269 18.6282 23.3636 18.3907 24.1064 18.2432C24.4674 19.5032 25.1637 20.9882 26.3461 23.3896C26.9283 20.9664 27.2571 19.4072 27.3208 18.1495C28.5031 18.3051 29.6824 18.6617 30.849 19.1842C30.2176 20.9714 29.7737 23.0265 29.4188 25.6867C31.2926 23.8896 32.6221 22.3343 33.6115 20.7378C34.2039 21.1403 34.7889 21.5815 35.3655 22.0571C35.8394 22.448 36.3035 22.8623 36.7586 23.2961C34.8197 25.4384 33.1035 27.7887 31.7192 30.2839C34.3275 29.2001 36.7527 27.5892 38.9678 25.6466C39.8742 26.7163 40.7216 27.8503 41.4875 29.0217C38.6455 30.873 36.0203 33.0382 33.8914 35.4338C36.9968 34.8824 40.1593 33.6026 43.1641 31.8812C43.742 32.988 44.2402 34.1 44.6482 35.1927C41.4009 36.8374 38.4596 39.1682 35.8244 42.1872C40.9751 47.6093 47.0085 52.8418 54.1736 54C54.4197 53.385 54.654 52.7676 54.8752 52.1451C48.3605 50.0421 43.0389 46.5449 39.1636 42.5924L40.6106 41.1963C44.2569 44.915 49.306 48.2396 55.5027 50.2399C57.3087 44.3214 57.7524 38.1702 55.3036 32.3233C52.1594 32.5408 49.22 33.2171 46.483 34.349C46.0409 33.179 45.5077 31.9982 44.8945 30.8298C48.2015 28.7092 51.2583 26.0987 53.7553 23.4032C50.3153 24.3571 46.6481 25.9237 43.2079 27.9537C42.3741 26.6751 41.4499 25.436 40.4523 24.2704C43.3339 21.4326 45.8131 18.0574 47.8121 14.6241C44.3962 16.4408 41.0665 18.9103 38.1449 21.8396C37.6592 21.3789 37.1627 20.9366 36.6541 20.5169C35.9791 19.9601 35.2796 19.4419 34.5628 18.9699C35.6737 16.5658 36.222 13.8694 36.816 10.03C34.3812 12.8576 32.7516 14.9424 31.6048 17.3528C30.1563 16.7185 28.663 16.2931 27.1556 16.1406C26.8081 14.6347 25.9427 13.0713 24.5144 10.0001V10ZM49.9707 36.8097C51.2602 36.7805 52.5158 37.4711 53.1413 38.688C54.0116 40.3811 53.3324 42.4515 51.627 43.3154C49.9212 44.1793 47.8356 43.5085 46.9652 41.8154C46.095 40.1225 46.7709 38.0485 48.4763 37.1845C48.9561 36.9417 49.4661 36.8211 49.9707 36.8097V36.8097Z" fill="white"/>
                <defs>
                  <filter id="filter0_f_376_5926" x="0" y="4" width="63" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_376_5926"/>
                  </filter>
                </defs>
              </svg>

              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_376_5929)">
                  <path d="M30.0925 10.0002C29.3298 9.99466 28.5158 10.1356 27.6831 10.4149C25.6871 11.0847 23.7309 12.5759 22.5668 14.5519C31.676 22.4372 35.2237 29.0638 35.286 39.6381C40.4013 30.7389 39.59 20.4673 33.2595 11.2375C32.444 10.413 31.3402 10.0091 30.0924 10.0002H30.0925ZM41.131 14.0477C40.3685 14.0423 39.5545 14.1833 38.7219 14.4626C38.4284 14.561 38.1355 14.6802 37.8461 14.813C39.5884 18.4696 40.5691 22.2545 40.7594 26.0187C44.6425 31.1743 46.285 36.5251 46.3285 43.6819C51.4407 34.7817 50.6247 24.5078 44.2906 15.2777C43.4761 14.4596 42.3744 14.0568 41.1312 14.0477H41.131ZM49.4625 19.7187C49.4025 19.7182 49.3427 19.721 49.2821 19.7221C51.5611 24.8835 52.3321 30.2717 51.5222 35.4832C53.6745 39.5359 54.6273 43.9235 54.6597 49.3529C59.7724 40.4524 58.9562 30.1788 52.6218 20.9487C51.8073 20.1306 50.7054 19.7276 49.4623 19.7187H49.4625ZM12.8779 32.7588C11.7353 32.7882 10.6235 33.0547 9.68517 33.4987C7.99645 34.2982 6.97971 35.5537 7.00031 36.9993C8.046 42.1179 9.47683 45.8903 11.793 48.5199C13.6934 50.6773 16.2258 52.1395 19.8448 53C15.15 46.3234 14.3167 42.6297 14.9379 32.9731C14.424 32.8491 13.8957 32.7797 13.371 32.7622C13.2069 32.7565 13.0414 32.7544 12.8781 32.7588H12.8779Z" fill="white" fill-opacity="0.65"/>
                </g>
                <path d="M30.0925 10.0002C29.3298 9.99466 28.5158 10.1356 27.6831 10.4149C25.6871 11.0847 23.7309 12.5759 22.5668 14.5519C31.676 22.4372 35.2237 29.0638 35.286 39.6381C40.4013 30.7389 39.59 20.4673 33.2595 11.2375C32.444 10.413 31.3402 10.0091 30.0924 10.0002H30.0925ZM41.131 14.0477C40.3685 14.0423 39.5545 14.1833 38.7219 14.4626C38.4284 14.561 38.1355 14.6802 37.8461 14.813C39.5884 18.4696 40.5691 22.2545 40.7594 26.0187C44.6425 31.1743 46.285 36.5251 46.3285 43.6819C51.4407 34.7817 50.6247 24.5078 44.2906 15.2777C43.4761 14.4596 42.3744 14.0568 41.1312 14.0477H41.131ZM49.4625 19.7187C49.4025 19.7182 49.3427 19.721 49.2821 19.7221C51.5611 24.8835 52.3321 30.2717 51.5222 35.4832C53.6745 39.5359 54.6273 43.9235 54.6597 49.3529C59.7724 40.4524 58.9562 30.1788 52.6218 20.9487C51.8073 20.1306 50.7054 19.7276 49.4623 19.7187H49.4625ZM12.8779 32.7588C11.7353 32.7882 10.6235 33.0547 9.68517 33.4987C7.99645 34.2982 6.97971 35.5537 7.00031 36.9993C8.046 42.1179 9.47683 45.8903 11.793 48.5199C13.6934 50.6773 16.2258 52.1395 19.8448 53C15.15 46.3234 14.3167 42.6297 14.9379 32.9731C14.424 32.8491 13.8957 32.7797 13.371 32.7622C13.2069 32.7565 13.0414 32.7544 12.8781 32.7588H12.8779Z" fill="white"/>
                <defs>
                  <filter id="filter0_f_376_5929" x="1" y="4" width="63" height="55" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_376_5929"/>
                  </filter>
                </defs>
              </svg>

              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_376_5932)">
                  <path d="M42.9403 54.9986C38.9637 54.9443 34.9838 53.168 31.5217 49.5105C38.4171 41.9942 47.2174 41.6707 54.9998 49.5105C51.403 53.1633 47.1734 55.0567 42.9403 54.9987V54.9986ZM43.1817 53.1652C43.3848 53.1652 43.5824 53.1488 43.776 53.1162C42.9286 52.9141 42.2966 52.1338 42.2966 51.2029C42.2966 50.1186 43.1522 49.2406 44.2095 49.2406C45.2668 49.2406 46.1255 50.1186 46.1255 51.2029C46.1255 51.3845 46.0993 51.5605 46.0542 51.7272C46.5386 51.0924 46.8282 50.2935 46.8282 49.4246C46.8282 47.3583 45.1954 45.6839 43.1818 45.6839C41.1683 45.6839 39.5358 47.3583 39.5358 49.4245C39.5358 51.4905 41.1683 53.165 43.1818 53.165L43.1817 53.1652ZM20.4188 48.336C16.4421 48.2817 12.462 46.5052 9 42.8479C15.8954 35.3315 24.6956 35.0081 32.4781 42.8479C28.8813 46.5007 24.6517 48.3941 20.4186 48.3361L20.4188 48.336ZM20.6601 46.5057C20.8641 46.5057 21.0626 46.4865 21.2574 46.4535C20.4085 46.2524 19.7749 45.4751 19.7749 44.5432C19.7749 43.459 20.6304 42.5809 21.6875 42.5809C22.745 42.5809 23.6037 43.459 23.6037 44.5432C23.6037 44.7265 23.5782 44.9023 23.5324 45.0707C24.0177 44.4354 24.3064 43.6348 24.3064 42.765C24.3064 40.6987 22.6735 39.0243 20.6599 39.0243C18.6462 39.0243 17.0136 40.6987 17.0136 42.7649C17.0136 44.831 18.6463 46.5055 20.6599 46.5055L20.6601 46.5057ZM42.9404 40.9284C38.9638 40.8739 34.9839 39.0975 31.5218 35.44C38.4172 27.9237 47.2175 27.6003 54.9999 35.44C51.4031 39.0928 47.1735 40.9864 42.9404 40.9284ZM43.1818 39.0979C43.3871 39.0979 43.5865 39.0791 43.7825 39.0457C42.9319 38.8458 42.2967 38.0685 42.2967 37.1354C42.2967 36.0513 43.1523 35.1702 44.2096 35.1702C45.2669 35.1702 46.1256 36.0513 46.1256 37.1354C46.1256 37.3165 46.0992 37.4902 46.0543 37.6567C46.5387 37.0212 46.8283 36.2231 46.8283 35.3542C46.8283 33.288 45.1955 31.6135 43.1819 31.6135C41.1684 31.6135 39.5359 33.288 39.5359 35.3542C39.5359 37.4205 41.1684 39.0979 43.1819 39.0979H43.1818ZM20.4189 34.2687C16.4422 34.2143 12.4621 32.4379 9.0001 28.7804C15.8955 21.2641 24.6957 20.9407 32.4782 28.7804C28.8814 32.4332 24.6518 34.3268 20.4187 34.2687H20.4189ZM20.6602 32.4351C20.863 32.4351 21.0608 32.4188 21.2545 32.3861C20.4069 32.184 19.775 31.4069 19.775 30.476C19.775 29.3916 20.6305 28.5107 21.6876 28.5107C22.7451 28.5105 23.6038 29.3916 23.6038 30.476C23.6038 30.657 23.5773 30.8307 23.5325 30.9972C24.0168 30.3624 24.3065 29.5634 24.3065 28.6944C24.3065 26.6284 22.6736 24.954 20.66 24.954C18.6463 24.954 17.0137 26.6284 17.0137 28.6946C17.0137 30.7607 18.6464 32.4352 20.66 32.4352L20.6602 32.4351ZM42.9405 26.9101C38.9639 26.8556 34.984 25.0793 31.5219 21.4217C38.4173 13.9055 47.2176 13.5821 55 21.4217C51.4032 25.0746 47.1736 26.9682 42.9405 26.9101ZM43.1819 25.0765C43.385 25.0765 43.5826 25.0601 43.7762 25.0275C42.9287 24.8253 42.2968 24.0451 42.2968 23.1142C42.2968 22.0299 43.1524 21.1519 44.2097 21.1519C45.267 21.1519 46.1257 22.0299 46.1257 23.1142C46.1257 23.2957 46.0995 23.4718 46.0544 23.6385C46.5388 23.0037 46.8284 22.2048 46.8284 21.3358C46.8284 19.2698 45.1956 17.5954 43.182 17.5954C41.1685 17.5954 39.536 19.2698 39.536 21.336C39.536 23.4021 41.1685 25.0766 43.182 25.0766L43.1819 25.0765ZM20.419 20.2475C16.4423 20.1931 12.4622 18.4167 9.0002 14.7592C15.8956 7.24287 24.6958 6.91939 32.4783 14.7592C28.8815 18.412 24.6519 20.3054 20.4188 20.2475H20.419ZM20.6603 18.4171C20.8643 18.4171 21.0628 18.3979 21.2576 18.3649C20.4087 18.1637 19.7751 17.3867 19.7751 16.4546C19.7751 15.3704 20.6306 14.4925 21.6877 14.4925C22.7452 14.4925 23.6039 15.3703 23.6039 16.4548C23.6039 16.638 23.5784 16.8139 23.5326 16.9821C24.0179 16.3469 24.3066 15.5461 24.3066 14.6764C24.3066 12.6101 22.6737 10.9358 20.6601 10.9358C18.6464 10.9358 17.0138 12.6102 17.0138 14.6764C17.0138 16.7425 18.6465 18.4171 20.6601 18.4171H20.6603Z" fill="white" fill-opacity="0.65"/>
                </g>
                <path d="M42.9403 54.9986C38.9637 54.9443 34.9838 53.168 31.5217 49.5105C38.4171 41.9942 47.2174 41.6707 54.9998 49.5105C51.403 53.1633 47.1734 55.0567 42.9403 54.9987V54.9986ZM43.1817 53.1652C43.3848 53.1652 43.5824 53.1488 43.776 53.1162C42.9286 52.9141 42.2966 52.1338 42.2966 51.2029C42.2966 50.1186 43.1522 49.2406 44.2095 49.2406C45.2668 49.2406 46.1255 50.1186 46.1255 51.2029C46.1255 51.3845 46.0993 51.5605 46.0542 51.7272C46.5386 51.0924 46.8282 50.2935 46.8282 49.4246C46.8282 47.3583 45.1954 45.6839 43.1818 45.6839C41.1683 45.6839 39.5358 47.3583 39.5358 49.4245C39.5358 51.4905 41.1683 53.165 43.1818 53.165L43.1817 53.1652ZM20.4188 48.336C16.4421 48.2817 12.462 46.5052 9 42.8479C15.8954 35.3315 24.6956 35.0081 32.4781 42.8479C28.8813 46.5007 24.6517 48.3941 20.4186 48.3361L20.4188 48.336ZM20.6601 46.5057C20.8641 46.5057 21.0626 46.4865 21.2574 46.4535C20.4085 46.2524 19.7749 45.4751 19.7749 44.5432C19.7749 43.459 20.6304 42.5809 21.6875 42.5809C22.745 42.5809 23.6037 43.459 23.6037 44.5432C23.6037 44.7265 23.5782 44.9023 23.5324 45.0707C24.0177 44.4354 24.3064 43.6348 24.3064 42.765C24.3064 40.6987 22.6735 39.0243 20.6599 39.0243C18.6462 39.0243 17.0136 40.6987 17.0136 42.7649C17.0136 44.831 18.6463 46.5055 20.6599 46.5055L20.6601 46.5057ZM42.9404 40.9284C38.9638 40.8739 34.9839 39.0975 31.5218 35.44C38.4172 27.9237 47.2175 27.6003 54.9999 35.44C51.4031 39.0928 47.1735 40.9864 42.9404 40.9284ZM43.1818 39.0979C43.3871 39.0979 43.5865 39.0791 43.7825 39.0457C42.9319 38.8458 42.2967 38.0685 42.2967 37.1354C42.2967 36.0513 43.1523 35.1702 44.2096 35.1702C45.2669 35.1702 46.1256 36.0513 46.1256 37.1354C46.1256 37.3165 46.0992 37.4902 46.0543 37.6567C46.5387 37.0212 46.8283 36.2231 46.8283 35.3542C46.8283 33.288 45.1955 31.6135 43.1819 31.6135C41.1684 31.6135 39.5359 33.288 39.5359 35.3542C39.5359 37.4205 41.1684 39.0979 43.1819 39.0979H43.1818ZM20.4189 34.2687C16.4422 34.2143 12.4621 32.4379 9.0001 28.7804C15.8955 21.2641 24.6957 20.9407 32.4782 28.7804C28.8814 32.4332 24.6518 34.3268 20.4187 34.2687H20.4189ZM20.6602 32.4351C20.863 32.4351 21.0608 32.4188 21.2545 32.3861C20.4069 32.184 19.775 31.4069 19.775 30.476C19.775 29.3916 20.6305 28.5107 21.6876 28.5107C22.7451 28.5105 23.6038 29.3916 23.6038 30.476C23.6038 30.657 23.5773 30.8307 23.5325 30.9972C24.0168 30.3624 24.3065 29.5634 24.3065 28.6944C24.3065 26.6284 22.6736 24.954 20.66 24.954C18.6463 24.954 17.0137 26.6284 17.0137 28.6946C17.0137 30.7607 18.6464 32.4352 20.66 32.4352L20.6602 32.4351ZM42.9405 26.9101C38.9639 26.8556 34.984 25.0793 31.5219 21.4217C38.4173 13.9055 47.2176 13.5821 55 21.4217C51.4032 25.0746 47.1736 26.9682 42.9405 26.9101ZM43.1819 25.0765C43.385 25.0765 43.5826 25.0601 43.7762 25.0275C42.9287 24.8253 42.2968 24.0451 42.2968 23.1142C42.2968 22.0299 43.1524 21.1519 44.2097 21.1519C45.267 21.1519 46.1257 22.0299 46.1257 23.1142C46.1257 23.2957 46.0995 23.4718 46.0544 23.6385C46.5388 23.0037 46.8284 22.2048 46.8284 21.3358C46.8284 19.2698 45.1956 17.5954 43.182 17.5954C41.1685 17.5954 39.536 19.2698 39.536 21.336C39.536 23.4021 41.1685 25.0766 43.182 25.0766L43.1819 25.0765ZM20.419 20.2475C16.4423 20.1931 12.4622 18.4167 9.0002 14.7592C15.8956 7.24287 24.6958 6.91939 32.4783 14.7592C28.8815 18.412 24.6519 20.3054 20.4188 20.2475H20.419ZM20.6603 18.4171C20.8643 18.4171 21.0628 18.3979 21.2576 18.3649C20.4087 18.1637 19.7751 17.3867 19.7751 16.4546C19.7751 15.3704 20.6306 14.4925 21.6877 14.4925C22.7452 14.4925 23.6039 15.3703 23.6039 16.4548C23.6039 16.638 23.5784 16.8139 23.5326 16.9821C24.0179 16.3469 24.3066 15.5461 24.3066 14.6764C24.3066 12.6101 22.6737 10.9358 20.6601 10.9358C18.6464 10.9358 17.0138 12.6102 17.0138 14.6764C17.0138 16.7425 18.6465 18.4171 20.6601 18.4171H20.6603Z" fill="white"/>
                <defs>
                  <filter id="filter0_f_376_5932" x="3" y="3" width="58" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_376_5932"/>
                  </filter>
                </defs>
              </svg>

              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_376_5935)">
                  <path d="M20.8741 8.99792L8.99805 14.693V16.6985L20.6418 11.1118L8.99805 19.9622V30.8704L21.5226 26.3407L15.3862 25.4405L33.5826 21.0076L8.99805 38.7878V42.9982L42.8357 24.6469L34.986 26.4181L46.1362 19.5073L55.0021 16.1604V14.2246C48.8753 17.0005 42.6808 18.3362 36.1959 19.9235L40.4934 17.0005L55.0021 9.95324V8.99792H52.8243C45.1199 13.3641 37.1251 15.8835 28.8109 18.7717L44.181 8.99792H36.2927L17.9317 18.2297L29.7594 8.99792H20.8741ZM55.0021 21.056L29.3819 36.1842L43.9487 32.3997L14.6815 47.7118L24.5908 38.9233L8.99805 46.7729V55.0001H12.1863C12.1863 55.0001 28.6463 45.205 37.7736 41.5173L30.9693 46.5794L41.8678 43.2498L20.9419 54.8162L48.6237 44.9339L40.6869 50.509L55.0021 46.4826V36.068L41.4613 41.1301L48.4979 35.4679L35.5571 40.0364L52.6888 28.8959L50.2788 33.0095L55.0021 31.2189V21.056Z" fill="white" fill-opacity="0.65"/>
                </g>
                <path d="M20.8741 8.9978L8.99805 14.6929V16.6984L20.6418 11.1117L8.99805 19.9621V30.8703L21.5226 26.3406L15.3862 25.4404L33.5826 21.0074L8.99805 38.7877V42.998L42.8357 24.6467L34.986 26.418L46.1362 19.5072L55.0021 16.1602V14.2244C48.8753 17.0004 42.6808 18.3361 36.1959 19.9234L40.4934 17.0004L55.0021 9.95312V8.9978H52.8243C45.1199 13.364 37.1251 15.8834 28.8109 18.7716L44.181 8.9978H36.2927L17.9317 18.2296L29.7594 8.9978H20.8741ZM55.0021 21.0558L29.3819 36.184L43.9487 32.3996L14.6815 47.7117L24.5908 38.9232L8.99805 46.7728V54.9999H12.1863C12.1863 54.9999 28.6463 45.2048 37.7736 41.5172L30.9693 46.5792L41.8678 43.2497L20.9419 54.816L48.6237 44.9338L40.6869 50.5089L55.0021 46.4825V36.0679L41.4613 41.13L48.4979 35.4678L35.5571 40.0363L52.6888 28.8958L50.2788 33.0093L55.0021 31.2187V21.0558Z" fill="white"/>
                <defs>
                  <filter id="filter0_f_376_5935" x="2.99805" y="2.99792" width="58.0042" height="58.0021" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_376_5935"/>
                  </filter>
                </defs>
              </svg>

              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_376_5938)">
                  <path d="M32 9L28.8 21.6897C25.6 20.1034 22.4 16.931 19.2 12.1724C19.2 16.931 19.2 21.6897 22.4 24.8621C19.2 26.5474 16 24.8621 12.8 21.6897C12.8 24.8621 12.8 29.6207 17.6 32.7931C14.4 34.3793 11.2 32.7931 9.6 29.6207C9.6 34.3793 11.2 39.1379 14.4 42.3103C12.8 43.8966 9.6 42.3103 8 40.7241C8 47.069 12.8 51.8276 19.2 55H26.88L28.55 48.1991L26.83 39.6634L17.04 40.159C17.04 40.159 19.07 32.7039 20.53 29.8784C21.03 28.9267 21.25 28.094 22.53 28.0642C23.66 28.0642 24.57 29.0358 24.57 30.2353C24.57 31.425 23.66 32.3966 22.53 32.3966C22.3 32.3966 22.07 32.347 21.87 32.2677L21.36 36.9073C24.32 36.025 27.05 35.0435 29.76 33.844C29.76 33.8341 29.75 33.8241 29.75 33.8142C29.13 32.9418 28.71 31.6828 28.71 30.275C28.71 28.8772 29.12 27.6181 29.75 26.7358C30.36 25.8534 31.16 25.3776 32 25.3776C32.85 25.3776 33.65 25.8534 34.26 26.7358C34.88 27.6181 35.28 28.8772 35.28 30.275C35.28 31.6828 34.88 32.9418 34.26 33.8142C34.25 33.844 34.21 33.8836 34.2 33.9035C36.93 35.103 39.81 35.9457 42.63 36.9073L42.13 32.2677C41.91 32.347 41.7 32.3966 41.46 32.3966C40.34 32.3966 39.43 31.425 39.43 30.2353C39.43 29.0358 40.34 28.0642 41.46 28.0642C42.74 28.094 42.98 28.9267 43.46 29.8784C44.94 32.7039 46.96 40.159 46.96 40.159L37.17 39.6634L35.45 48.1991L37.12 55H44.8C51.2 51.8276 56 47.069 56 40.7241C54.4 42.3103 51.2 43.8966 49.6 42.3103C52.8 39.1379 54.4 34.3793 54.4 29.6207C52.8 32.7931 49.6 34.3793 46.4 32.7931C51.2 29.6207 51.2 24.8621 51.2 21.6897C48 24.8621 44.8 26.4483 41.6 24.8621C44.8 21.6897 44.8 16.931 44.8 12.1724C41.6 16.931 38.4 20.1034 35.2 21.6897L32 9Z" fill="white" fill-opacity="0.65"/>
                </g>
                <path d="M32 9L28.8 21.6897C25.6 20.1034 22.4 16.931 19.2 12.1724C19.2 16.931 19.2 21.6897 22.4 24.8621C19.2 26.5474 16 24.8621 12.8 21.6897C12.8 24.8621 12.8 29.6207 17.6 32.7931C14.4 34.3793 11.2 32.7931 9.6 29.6207C9.6 34.3793 11.2 39.1379 14.4 42.3103C12.8 43.8966 9.6 42.3103 8 40.7241C8 47.069 12.8 51.8276 19.2 55H26.88L28.55 48.1991L26.83 39.6634L17.04 40.159C17.04 40.159 19.07 32.7039 20.53 29.8784C21.03 28.9267 21.25 28.094 22.53 28.0642C23.66 28.0642 24.57 29.0358 24.57 30.2353C24.57 31.425 23.66 32.3966 22.53 32.3966C22.3 32.3966 22.07 32.347 21.87 32.2677L21.36 36.9073C24.32 36.025 27.05 35.0435 29.76 33.844C29.76 33.8341 29.75 33.8241 29.75 33.8142C29.13 32.9418 28.71 31.6828 28.71 30.275C28.71 28.8772 29.12 27.6181 29.75 26.7358C30.36 25.8534 31.16 25.3776 32 25.3776C32.85 25.3776 33.65 25.8534 34.26 26.7358C34.88 27.6181 35.28 28.8772 35.28 30.275C35.28 31.6828 34.88 32.9418 34.26 33.8142C34.25 33.844 34.21 33.8836 34.2 33.9035C36.93 35.103 39.81 35.9457 42.63 36.9073L42.13 32.2677C41.91 32.347 41.7 32.3966 41.46 32.3966C40.34 32.3966 39.43 31.425 39.43 30.2353C39.43 29.0358 40.34 28.0642 41.46 28.0642C42.74 28.094 42.98 28.9267 43.46 29.8784C44.94 32.7039 46.96 40.159 46.96 40.159L37.17 39.6634L35.45 48.1991L37.12 55H44.8C51.2 51.8276 56 47.069 56 40.7241C54.4 42.3103 51.2 43.8966 49.6 42.3103C52.8 39.1379 54.4 34.3793 54.4 29.6207C52.8 32.7931 49.6 34.3793 46.4 32.7931C51.2 29.6207 51.2 24.8621 51.2 21.6897C48 24.8621 44.8 26.4483 41.6 24.8621C44.8 21.6897 44.8 16.931 44.8 12.1724C41.6 16.931 38.4 20.1034 35.2 21.6897L32 9Z" fill="white"/>
                <defs>
                  <filter id="filter0_f_376_5938" x="2" y="3" width="60" height="58" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_376_5938"/>
                  </filter>
                </defs>
              </svg>

              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_376_5941)">
                  <path d="M31.3487 8.00015C31.3038 8.00036 31.2674 8.00015 31.2377 8.00321C28.6693 8.27297 26.496 10.0671 25.6045 12.5287L37.262 10.6944C36.02 9.05207 34.0904 8.00647 31.9353 8.00647C31.6844 8.00647 31.4831 7.99934 31.3488 8.00005L31.3487 8.00015ZM38.2396 12.4714L25.1906 14.5226C25.1798 14.6859 25.1711 14.8498 25.1711 15.0162C25.1711 16.2503 25.4924 17.3996 26.041 18.4016L38.6891 15.3507C38.6943 15.2403 38.6989 15.1281 38.6989 15.0164C38.6989 14.1145 38.5338 13.2584 38.2393 12.4717L38.2396 12.4714ZM38.2819 17.4077L27.2856 20.0604C27.3075 20.0826 27.3284 20.1058 27.3508 20.1274L28.7128 21.4555L26.8131 21.7419C25.6579 21.9176 24.7002 22.3028 23.8809 22.8661L42.5566 25.0095C42.2923 24.5935 42.0024 24.2087 41.6833 23.863C40.5999 22.6887 39.2061 21.904 37.2001 21.6528L35.2744 21.4139L36.6201 20.0477C37.3452 19.3134 37.9213 18.4144 38.282 17.4076L38.2819 17.4077ZM22.1277 24.5828C21.3818 25.5826 20.7942 26.8101 20.3424 28.1879L38.1449 26.4205L22.1278 24.583L22.1277 24.5828ZM43.811 27.7741L19.808 30.1561C19.3201 32.3479 19.0956 34.7485 19 37.0764L44.8634 34.1401C44.7373 32.173 44.4948 30.2372 44.0262 28.5032C43.959 28.2552 43.8872 28.0124 43.811 27.7739V27.7741ZM44.9548 36.0478L20.2282 38.8568L39.6371 41.1911L39.6761 40.7229L39.7477 39.844H45C44.9994 38.6211 44.9951 37.3396 44.9544 36.0479L44.9548 36.0478ZM24.5943 41.2992L25.2525 48.4778L38.8521 50.8312L39.4842 43.0921L24.5943 41.2993V41.2992ZM25.435 50.4459L25.9465 56H38.4286L38.6957 52.7389L25.435 50.4459Z" fill="white" fill-opacity="0.65"/>
                </g>
                <path d="M31.3487 8.00015C31.3038 8.00036 31.2674 8.00015 31.2377 8.00321C28.6693 8.27297 26.496 10.0671 25.6045 12.5287L37.262 10.6944C36.02 9.05207 34.0904 8.00647 31.9353 8.00647C31.6844 8.00647 31.4831 7.99934 31.3488 8.00005L31.3487 8.00015ZM38.2396 12.4714L25.1906 14.5226C25.1798 14.6859 25.1711 14.8498 25.1711 15.0162C25.1711 16.2503 25.4924 17.3996 26.041 18.4016L38.6891 15.3507C38.6943 15.2403 38.6989 15.1281 38.6989 15.0164C38.6989 14.1145 38.5338 13.2584 38.2393 12.4717L38.2396 12.4714ZM38.2819 17.4077L27.2856 20.0604C27.3075 20.0826 27.3284 20.1058 27.3508 20.1274L28.7128 21.4555L26.8131 21.7419C25.6579 21.9176 24.7002 22.3028 23.8809 22.8661L42.5566 25.0095C42.2923 24.5935 42.0024 24.2087 41.6833 23.863C40.5999 22.6887 39.2061 21.904 37.2001 21.6528L35.2744 21.4139L36.6201 20.0477C37.3452 19.3134 37.9213 18.4144 38.282 17.4076L38.2819 17.4077ZM22.1277 24.5828C21.3818 25.5826 20.7942 26.8101 20.3424 28.1879L38.1449 26.4205L22.1278 24.583L22.1277 24.5828ZM43.811 27.7741L19.808 30.1561C19.3201 32.3479 19.0956 34.7485 19 37.0764L44.8634 34.1401C44.7373 32.173 44.4948 30.2372 44.0262 28.5032C43.959 28.2552 43.8872 28.0124 43.811 27.7739V27.7741ZM44.9548 36.0478L20.2282 38.8568L39.6371 41.1911L39.6761 40.7229L39.7477 39.844H45C44.9994 38.6211 44.9951 37.3396 44.9544 36.0479L44.9548 36.0478ZM24.5943 41.2992L25.2525 48.4778L38.8521 50.8312L39.4842 43.0921L24.5943 41.2993V41.2992ZM25.435 50.4459L25.9465 56H38.4286L38.6957 52.7389L25.435 50.4459Z" fill="white"/>
                <defs>
                  <filter id="filter0_f_376_5941" x="13" y="2" width="38" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_376_5941"/>
                  </filter>
                </defs>
              </svg>

            </div>
          </div>

          <div className={c.barWrap}>
            {
              barData.map(item => (
                <div key={item.title} className={c.barItem}>
                  <h6 className={c.barTitle}>{item.title}</h6>
                  <div className={c.barProgress}>
                    <img className={c.barImage} src={item.image} alt=""/>
                    <span className={c.barPercentage}>{item.percentage}</span>
                  </div>
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
              <div className={c.barProgress}>
                <img className={c.barImage} src={item.image} alt=""/>
                <span className={c.barPercentage}>{item.percentage}</span>
              </div>
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
