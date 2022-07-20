import React from 'react'
import { useLocation } from 'react-router-dom'

import Hero from '../sections/Hero'
import Footer from '../sections/Footer'
import assets from '../assets'

import './Team.css'

import TeamMemberCard from '../elements/TeamMemberCard'

// these photos should be fetched as part of the team member's data
// the naming should match the person's slug
import teamMember1 from '../../assets/images/team/team-member1.jpg'
import teamMember2 from '../../assets/images/team/team-member2.jpg'
import teamMember3 from '../../assets/images/team/team-member3.jpg'
import teamMember4 from '../../assets/images/team/team-member4.jpg'
import teamMember5 from '../../assets/images/team/team-member5.jpg'
import teamMember6 from '../../assets/images/team/team-member6.jpg'


function Team(props) {

  const location = useLocation();

  return (
    <>
      <Hero
        heroImgSrc={assets.heroAbout}
        title="The Team"
      />
      {/* this data should be fetched from an api or js file */}
      <div className='team-container'>
        <div className='team-inner-container container'>
          <TeamMemberCard 
            img={teamMember1}
            name="Erika Kurga"
            tel="+447346587379"
            telDisplay="+44 73 465 873 79"
            email="erika.kurga@rcw.pro"
            country="Norway"
          />
          <TeamMemberCard 
            img={teamMember2}
            name="Alexa Murray"
            tel="+367312387379"
            telDisplay="+36 73 123 873 79"
            email="alexa.murray@rcw.pro"
            country="Icland"
          />
          <TeamMemberCard 
            img={teamMember3}
            name="Monika Nanan"
            tel="+447346587379"
            telDisplay="+12 23 465 873 79"
            email="monika.nana@rcw.pro"
            country="France"
          />
          <TeamMemberCard 
            img={teamMember4}
            name="Cloe Zoe"
            tel="+447346587379"
            telDisplay="+11 33 465 873 79"
            email="clo.zoe@rcw.pro"
            country="Norway"
          />
          <TeamMemberCard 
            img={teamMember5}
            name="Emilio Milio"
            tel="+447346587379"
            telDisplay="+74 73 465 873 79"
            email="emilio.milio@rcw.pro"
            country="Chilio"
          />
          <TeamMemberCard 
            img={teamMember6}
            name="Zinga Linga"
            tel="+447346587379"
            telDisplay="+14 45 465 823 79"
            email="zinga.linga@rcw.pro"
            country="Norway"
          />
        </div>
      </div>
      <Footer location={location} />
    </>
  )
}

export default Team