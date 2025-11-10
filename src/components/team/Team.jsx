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
    <div className={`${teamCSS.Team_Wrapper}  section`}>


      <h2 className="md:text-4xl text-xl text-white font-bold text-center">
        Our <span className="text-emerald-500">Team</span>
      </h2>

      <div className={teamCSS.TeamCards}>
        <Splide
          options={{
            type: 'loop',
            perPage: 4,
            gap: '2rem',
            pagination: false,
            arrows: true,
            drag: 'free',
            focus: 'center',
            autoScroll: { speed: 1 },
            breakpoints: {
              1400: { perPage: 4 },
              1024: { perPage: 3 },
              900: { perPage: 2 },
              768: { perPage: 1 },
            },
          }}
       
        >
          {teamMembers.map((member, index) => (
            <SplideSlide key={index}>
              <div className={`${teamCSS.TeamCard} card`}>
                <span></span>
                <span></span>
                <img src={member.img} alt={member.name} />
                <h3>
                  {member.name} <small>{member.role}</small>
                </h3>
                <div className={teamCSS.social}>
                  <i className="ri-facebook-line"></i>
                  <i className="ri-instagram-line"></i>
                  <i className="ri-youtube-line"></i>
                  <i className="ri-twitter-x-line"></i>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default Team
