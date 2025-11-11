import React from 'react'
import teamCSS from './../team/team.module.css'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/dist/css/splide.min.css'

import TeamImg1 from './../../assets/team-1.jpg'
import TeamImg2 from './../../assets/team-2.jpg'
import TeamImg3 from './../../assets/team-3.jpg'
import TeamImg4 from './../../assets/team-4.jpg'

function Team() {
  const teamMembers = [
    { img: TeamImg1, name: 'Jonathan Jos', role: 'Founder' },
    { img: TeamImg2, name: 'Sarah Lee', role: 'Designer' },
    { img: TeamImg3, name: 'David Kim', role: 'Developer' },
    { img: TeamImg4, name: 'Ava Smith', role: 'Marketing' },
  ]

  return (
    <div className={`${teamCSS.Team_Wrapper} section`}>
      <h2  className="md:text-4xl text-xl text-white font-bold text-center mb-10">
        Our <span className="text-emerald-500">Team</span>
      </h2>

      <div className={teamCSS.TeamsCards}>
       <Splide

       options={{
        type:"loop",
        perPage:4,
        gap:"3rem",
        breakpoints:{
         

          600:{
            perPage:1
          },

          768:{
            perPage:1,
          },
          1024:{
            perPage:2
          },
          1400:{
            perPage:3
          },

          1600:{
            perPage:4
          }


        }
       }}
       
       >
        <SplideSlide>
           <div className={`${teamCSS.TeamCard} card`}>
          <span></span>
          <span></span>

          <img src={TeamImg1} alt='img'/>
          <h3>Jonathan jos <br/> <small>Founder</small></h3>

             <div className={teamCSS.social}>
                  <i className="ri-facebook-line size-6"></i>
                  <i className="ri-instagram-line size-6"></i>
                  <i className="ri-youtube-line size-6"></i>
                  <i className="ri-twitter-x-line size-6"></i>
                </div>
        </div>
        </SplideSlide>
         <SplideSlide>
           <div className={`${teamCSS.TeamCard} card`}>
          <span></span>
          <span></span>

          <img src={TeamImg1} alt='img'/>
          <h3>Jonathan jos <br/> <small>Founder</small></h3>

             <div className={teamCSS.social}>
                  <i className="ri-facebook-line size-6"></i>
                  <i className="ri-instagram-line size-6"></i>
                  <i className="ri-youtube-line size-6"></i>
                  <i className="ri-twitter-x-line size-6"></i>
                </div>
        </div>
        </SplideSlide>
         <SplideSlide>
           <div className={`${teamCSS.TeamCard} card`}>
          <span></span>
          <span></span>

          <img src={TeamImg1} alt='img'/>
          <h3>Jonathan jos <br/> <small>Founder</small></h3>

             <div className={teamCSS.social}>
                  <i className="ri-facebook-line size-6"></i>
                  <i className="ri-instagram-line size-6"></i>
                  <i className="ri-youtube-line size-6"></i>
                  <i className="ri-twitter-x-line size-6"></i>
                </div>
        </div>
        </SplideSlide>
         <SplideSlide>
           <div className={`${teamCSS.TeamCard} card`}>
          <span></span>
          <span></span>

          <img src={TeamImg1} alt='img'/>
          <h3>Jonathan jos <br/> <small>Founder</small></h3>

             <div className={teamCSS.social}>
                  <i className="ri-facebook-line size-6"></i>
                  <i className="ri-instagram-line size-6"></i>
                  <i className="ri-youtube-line size-6"></i>
                  <i className="ri-twitter-x-line size-6"></i>
                </div>
        </div>
        </SplideSlide>
       </Splide>

      </div>

      
     
    </div>
  )
}

export default Team
