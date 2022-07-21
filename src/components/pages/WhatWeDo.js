import React from 'react'
import { useLocation } from 'react-router-dom'
import heroImages from '../hero-images'
import './WhatWeDo.css'


// import components
import Hero from '../sections/Hero'
import Footer from '../sections/Footer'
import WwdTopCard from '../elements/WwdTopCard'
import WwdBottomCard from '../elements/WwdBottomCard'


// background images
import bg1 from '../../assets/images/buildings/pexels-pixabay-258160.jpg'
import bg2 from '../../assets/images/buildings/pexels-pixabay-273209.jpg'
import bg3 from '../../assets/images/buildings/pexels-scott-webb-532569.jpg'
import bg4 from '../../assets/images/buildings/pexels-essow-936722.jpg'
import bottomBg from '../../assets/images/pexels-oleksandr-pidvalnyi-1227513_crop.jpg'

function WhatWeDo(props) {
  const location = useLocation();
  return (
    <>
      <Hero 
        heroImgSrc={heroImages.heroWWD} 
        title="What We Do"  
      />
      <div className='wwd-container'>
        <div className='container wwd-top'>
          <WwdTopCard 
            bgColor="rgba(3, 110, 3, 1)"
            bgUrl={bg1}
            title="Design"
            text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia temporibus autem ad minus soluta ratione repudiandae ab voluptatibus? Architecto ex eligendi quisquam ratione, fugit culpa, porro voluptate neque maxime rem aperiam exercitationem. Exercitationem excepturi cumque harum, sit suscipit soluta! Saepe? "
          />
          <WwdTopCard 
            bgColor="rgba(110, 30, 3, 1)"
            bgUrl={bg2}
            title="Consulting"
            text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia temporibus autem ad minus soluta ratione repudiandae ab voluptatibus? Architecto ex eligendi quisquam ratione, fugit culpa, porro voluptate neque maxime rem aperiam exercitationem. Exercitationem excepturi cumque harum, sit suscipit soluta! Saepe? "
          />
          <WwdTopCard 
            bgColor="rgba(110, 3, 101, 1)"
            bgUrl={bg3}
            title="Management"
            text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia temporibus autem ad minus soluta ratione repudiandae ab voluptatibus? Architecto ex eligendi quisquam ratione, fugit culpa, porro voluptate neque maxime rem aperiam exercitationem. Exercitationem excepturi cumque harum, sit suscipit soluta! Saepe? "
          />
          <WwdTopCard 
            bgColor="rgba(16, 3, 110, 1)"
            bgUrl={bg4}
            title="Human Resource"
            text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia temporibus autem ad minus soluta ratione repudiandae ab voluptatibus? Architecto ex eligendi quisquam ratione, fugit culpa, porro voluptate neque maxime rem aperiam exercitationem. Exercitationem excepturi cumque harum, sit suscipit soluta! Saepe? "
          />
          
        </div> 
        <div 
          className='wwd-bottom' 
          style={{ background: `url(${bottomBg})`,  width: "100vw", display:"flex", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        >
            <div className="wwd-bottom-card-container container">
              <WwdBottomCard
                title="Level Orange"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, inventore expedita molestiae, porro officia quia quasi aperiam velit laudantium nihil tempora deleniti assumenda aut quibusdam!"
              />
              <WwdBottomCard
                title="Level Blue"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, inventore expedita molestiae, porro officia quia quasi aperiam velit laudantium nihil tempora deleniti assumenda aut quibusdam!"
              />
              <WwdBottomCard
                title="Level Green"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, inventore expedita molestiae, porro officia quia quasi aperiam velit laudantium nihil tempora deleniti assumenda aut quibusdam!"
              />
            </div>
            
        </div>
      </div>
      <Footer location={location} />
    </>
  )
}

export default WhatWeDo