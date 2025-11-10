

import React from 'react'
import aboutCss from './../about/about.module.css'
function About() {
  return (
    <div className={`${aboutCss.About_wrapper} section`}>

        <h2 className='Section_Title'><span>About</span> Us</h2>


        <p className={aboutCss.Section_paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima temporibus ea, eum quas magnam reprehenderit sunt ex repellat, id debitis dolor quos repudiandae aliquid eaque. Officiis, possimus. Veniam, placeat obcaecati.</p>

        <div className={aboutCss.Counters}>
            <p className='Counters'>  <span>2024+</span> Total Items </p>
              <p className='Counters'>  <span>200+</span> WhiteList profiles </p>
        </div>
        <div className={aboutCss.AboutCard}>

            <div className={`${aboutCss.About_card} card`} count='1'>
                <span></span>
                 <span></span>

                <h2>High Quality</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste reprehenderit eveniet nisi, tenetur in earum, tempore deserunt aperiam doloribus, quaerat recusandae esse.</p>

            </div>
            <div className={`${aboutCss.About_card} card`} count='2'>
                <span></span>
                 <span></span>

                <h2>Big Collection</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste reprehenderit eveniet nisi, tenetur in earum, tempore deserunt aperiam doloribus, quaerat recusandae esse.</p>

            </div>
            <div className={`${aboutCss.About_card} card`} count='3'>
                <span></span>
                 <span></span>

                <h2>Top  Rescources</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste reprehenderit eveniet nisi, tenetur in earum, tempore deserunt aperiam doloribus, quaerat recusandae esse.</p>

            </div>
            <div className={`${aboutCss.About_card} card`} count='4'>
                <span></span>
                 <span></span>

                <h2>Big Community</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste reprehenderit eveniet nisi, tenetur in earum, tempore deserunt aperiam doloribus, quaerat recusandae esse.</p>

            </div>

        </div>
      


    </div>
  )
}

export default About
