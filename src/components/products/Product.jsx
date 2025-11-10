
import React from 'react'
import productsCSS from './../products/product.module.css'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/dist/css/splide.min.css'

import ProductImg1 from './../../assets/product1.jpg'
import ProductImg2 from './../../assets/product2.jpg'
import ProductImg3 from './../../assets/product3.jpg'
import ProductImg4 from './../../assets/product4.jpg'
import ProductImg5 from './../../assets/product5.jpg'
import ProductImg6 from './../../assets/product6.jpg'
import ProductImg7 from './../../assets/product7.jpg'
import ProductImg8 from './../../assets/product8.jpg'
import ProductImg9 from './../../assets/product9.jpg'
import ProductImg10 from './../../assets/product10.jpg'

function Product() {
  const productImages = [
    ProductImg1,
    ProductImg2,
    ProductImg3,
    ProductImg4,
    ProductImg5,
    ProductImg6,
    ProductImg7,
    ProductImg8,
    ProductImg9,
    ProductImg10,
  ]

  const splideOptions = {
    type: 'loop',
    gap: '2rem',
    pagination: false,
    arrows: false,
    drag: 'free',
    focus: 'center',
    autoScroll: {
      speed: 1,
      pauseOnHover: true,
      pauseOnFocus: true,
    },
    breakpoints: {
      500: { perPage: 1 },
      768: { perPage: 2 },
      1024: { perPage: 3 },
      1300: { perPage: 4 },
      1600: { perPage: 5 },
    },
  }

  return (
    <div className={productsCSS.Product_wrapper}>
      {/* Top Auto-Scroll (Left to Right) */}
      <Splide options={splideOptions} extensions={{ AutoScroll }}>
        {productImages.map((img, index) => (
          <SplideSlide key={index}>
            <div className={`${productsCSS.Product_Card} card`}>
              <span></span>
              <span></span>
              <img src={img} alt={`Product ${index + 1}`} />
              <h2>Skeleton #{index + 1}</h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Bottom Auto-Scroll (Right to Left) */}
      <Splide
        options={{
          ...splideOptions,
          direction: 'rtl',
          autoScroll: { speed: 1, pauseOnHover: true, pauseOnFocus: true },
        }}
        extensions={{ AutoScroll }}
        className="mt-10"
      >
        {productImages.map((img, index) => (
          <SplideSlide key={`bottom-${index}`}>
            <div className={`${productsCSS.Product_Card} card`}>
              <span></span>
              <span></span>
              <img src={img} alt={`Product ${index + 1}`} />
              <h2>Skeleton #{index + 1}</h2>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default Product
