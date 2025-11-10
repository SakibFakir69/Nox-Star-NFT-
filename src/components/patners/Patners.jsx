import React from 'react'
import pathnerCSS from './../patners/pathers.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/dist/css/splide.min.css'

import PathnerImg1 from './../../assets/partner-1.png'
import PathnerImg2 from './../../assets/partner-2.png'
import PathnerImg3 from './../../assets/partner-3.png'
import PathnerImg4 from './../../assets/partner-4.png'
import PathnerImg5 from './../../assets/partner-5.png'
import PathnerImg6 from './../../assets/partner-6.png'
import PathnerImg7 from './../../assets/partner-7.png'
import PathnerImg8 from './../../assets/partner-8.png'

function Patners() {
  const partnerImages = [
    PathnerImg1,
    PathnerImg2,
    PathnerImg3,
    PathnerImg4,
    PathnerImg5,
    PathnerImg6,
    PathnerImg7,
    PathnerImg8,
  ]

  const splideOptions = {
    type: 'loop',
    perPage: 5,
    focus: 'center',
    drag: 'free',
    gap: '1rem',
    autoScroll: { speed: 1 },
    pagination: false,
    arrows: false,
    breakpoints: {
      1400: { perPage: 4 },
      1024: { perPage: 3 },
      768: { perPage: 2 },
      500: { perPage: 1 },
    },
  }

  return (
    <div className={`${pathnerCSS.Partners_Wrapper} section`}>
      {/* First Slider */}
      <Splide options={splideOptions} extensions={{ AutoScroll }}>
        {partnerImages.map((img, index) => (
          <SplideSlide key={index}>
            <img
              src={img}
              alt={`Partner ${index + 1}`}
              className={pathnerCSS.partnerImg}
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* Second Slider (RTL) */}
      <Splide
        options={{ ...splideOptions, direction: 'rtl' }}
        extensions={{ AutoScroll }}
      >
        {partnerImages.map((img, index) => (
          <SplideSlide key={index}>
            <img
              src={img}
              alt={`Partner ${index + 1}`}
              className={pathnerCSS.partnerImg}
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* Third Slider */}
      <Splide options={splideOptions} extensions={{ AutoScroll }}>
        {partnerImages.map((img, index) => (
          <SplideSlide key={index}>
            <img
              src={img}
              alt={`Partner ${index + 1}`}
              className={pathnerCSS.partnerImg}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Patners
