import React from 'react'
import Hero from '../sections/Hero'
import assets from '../assets'
import './AboutUs.css'
import teamPhotoA from '../../assets/images/team/pexels-fauxels-3183197.jpg'
import teamPhotoB from '../../assets/images/team/pexels-fox-1595385.jpg'


function AboutUs(props) {

  // console.log(assets.heroAbout)
  return (
    <>
      <Hero 
        heroImgSrc={assets.heroAbout}
        
        />
      <main>
        <div className='container about-main-inner-container'>
          <section className='about-section-top'>
            <div className='about-section-top-left flex-col'>
              <h2 className='about-us-h2'>About Us</h2>
              <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem vitae alias in, ad est quas odio modi animi pariatur libero nulla recusandae? Quo voluptas esse quos obcaecati cupiditate provident assumenda odit ipsam. Quis mollitia dolorem dolore eveniet ea rerum laborum voluptatibus quasi pariatur animi vitae modi nihil odit molestias id iusto sit voluptas quia, harum aperiam omnis esse distinctio! Hic? </p>
            </div>
            <div className='about-section-top-right flex-col'>
              <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis nostrum non recusandae, expedita molestiae vel? </p>
              <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet reiciendis voluptatibus aliquam nam illo saepe modi tempora? </p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aut ipsa eaque. </p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing. </p>
            </div>
          </section>
          <section className='about-section-bottom flex'>
            <img src={teamPhotoA} alt="" /> 
            <img src={teamPhotoB} alt="" />
          </section>
        </div>
      </main>
    </>
  )
}

export default AboutUs