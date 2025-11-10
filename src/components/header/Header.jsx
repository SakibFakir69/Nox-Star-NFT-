

import React from 'react'
import headerCss  from './../header/header.module.css'
import HeroImg from './../../assets/hero-img.png'


function Header() {
  return (
    <div className={`${headerCss.Header_wrap} section`}>


      <div className={headerCss.header_content}>

        <h2>with <span></span> <br/>
        
        
        Explore NFT <br/>

        Collection 
        
          </h2>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officiis cum obcaecati!</p>

          <div className={headerCss.clients}>
            <p>2021+ <span>Clients</span></p>
            <p>20000+ <span>whitelist Profiles</span></p>
          </div>

          <div className={headerCss.header_btns}>
            
            <button className='btn'> <i className='ri-wallet-line'></i>Connect Wallet</button>
             <button> <i className='ri-links-line'></i>   WhiteList Now</button>
          </div>

      </div>

       <div className={headerCss.header_image}>

        <img src={HeroImg}/>
        
      </div>


      
    </div>
  )
}

export default Header
