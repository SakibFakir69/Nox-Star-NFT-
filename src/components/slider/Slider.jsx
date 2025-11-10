

import React from 'react'
import sliderCSS from './../slider/slider.module.css'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import {  AutoScroll }  from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';



// import {AutoScroll} from '@splidejs/react-splide-extension-auto-scroll'

function Slider() {
  return (
    <div className={sliderCSS.Slider_Wrapper}>

        <Splide

        options={

            {
                type:"loop",
                perPage:10,
                focus:'center',
                pagination:false,
                arrows:false,
                drag:"free",
                autoScroll:{
                    speed:1
                },
                breakpoints:{
                    1600:{
                        perPage:8,
                    },
                    1300:{
                        perPage:7,
                    },
                    1100:{
                        perPage:6,
                    },
                    900:{
                        perPage:5,
                    },
                    600:{
                        perPage:3,
                    },
                    500:{
                        perPage:2,
                    },
                }
            }
        }

        extensions={{AutoScroll}}

        
        >
            <SplideSlide>
                <h1>NOXSTAR</h1>
            </SplideSlide>
             <SplideSlide>
                <h1>BOXNFT</h1>
            </SplideSlide>
             <SplideSlide>
                <h1>NFTBOX</h1>
            </SplideSlide>
             <SplideSlide>
                <h1>NOXSTAR</h1>
            </SplideSlide>
             <SplideSlide>
                <h1>BOXNFT</h1>
            </SplideSlide>
             <SplideSlide>
                <h1>NFTBOX</h1>
            </SplideSlide>
        </Splide>
      
    </div>
  )
}

export default Slider
