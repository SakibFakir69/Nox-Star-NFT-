import React from 'react'
import footerCSS from './../footer/footer.module.css'

function Footer() {
  return (
    <footer className={footerCSS.Footer_Wrapper}>
      <div className={footerCSS.FooterLinks}>
        <h2 className='md:font-bold md:text-4xl text-2xl font-semibold'>NOX <span>STAR</span></h2>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nam assumenda dolores reprehenderit vitae dolore?</p>
      </div>

      <div className={footerCSS.FooterLinks}>
        <h3>Explore</h3>
        <p><a href="#">Home</a></p>
        <p><a href="#">About</a></p>
        <p><a href="#">Our Team</a></p>
        <p><a href="#">FAQ</a></p>
      </div>

      <div className={footerCSS.FooterLinks}>
        <h3>Company</h3>
        <p><a href="#">Subscribe</a></p>
        <p><a href="#">Contact</a></p>
        <p><a href="#">Pricing</a></p>
      </div>

      <div className={footerCSS.FooterLinks}>
        <h3>Follow Us</h3>
        <div className={footerCSS.inputWrapper}>
          <input type='email' placeholder='Enter Your Email' />
          <button>Subscribe</button>
        </div>
        <div className={footerCSS.social}>
          <i className='ri-facebook-line'></i>
          <i className='ri-instagram-line'></i>
          <i className='ri-github-line'></i>
          <i className='ri-youtube-line'></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer
