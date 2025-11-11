import React from 'react'
import headerCss  from './../header/header.module.css'
import HeroImg from './../../assets/hero-img.png'
import element1 from './../../assets/element-star.png'
import BgImg from './../../assets/bs-section.jpg'
import { ReactTyped  }from 'react-typed';

function Header() {
  return (
    <div className={`${headerCss.Header_wrapper} section`} style={{ backgroundImage: `url(${BgImg})` }}>
      <span className={headerCss.element2}></span>

      <div className={headerCss.Header_Content}>
        <h2 className='font-bold'>
          with <span>
            <ReactTyped  
              strings={['NOXSTART','BOXNFT','NFTBOX']}
              typeSpeed={30}
              backSpeed={60}
              loop={true}
            ></ReactTyped>
          </span>
          <br/>
          Explore NFT <br/>
          Collection
        </h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officiis cum obcaecati!</p>

       <div className={`${headerCss.clients} `} >
  <p className="Counters">2021+ <span className="whitespace-nowrap md:mt-2 mt-1 sm:leading-8 leading-10">Clients</span></p>
  <p className="Counters">20000+ <span className="whitespace-nowrap  md:mt-2 mt-1 sm:leading-8 leading-10">Whitelist Profiles</span></p>
</div>


        <div className={headerCss.header_btns}>
          <button className='btn'><i className='ri-wallet-line'></i>Connect Wallet</button>
          <button><i className='ri-links-line'></i>Whitelist Now</button>
        </div>
      </div>

      <div className={headerCss.Header_image}>
        <img src={HeroImg} alt='hero-img'/>
        <img src={element1} alt='element1' id={headerCss.element1}/>
      </div>
    </div>
  )
}

export default Header;
