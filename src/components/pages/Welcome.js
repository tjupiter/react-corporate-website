import React from 'react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

// import {gsap} from 'gsap'

import Footer from '../sections/Footer'
import NavHome from '../elements/NavHome'


import './Welcome.css'


function Welcome() {

  // to set prop for Footer
  const location = useLocation();

  // to set refs for gsap
  const fillContainer = useRef(null)
  // const welcomeContainer = useRef(null)
  const navHome = useRef(null)
  const textBox = useRef(null)

  // useEffect(() => {
  //   gsap.from(textBox.current, { opacity: "0" });
  // });

  // maybe use useEffect, so it would render on first load only
  

  // useLayoutEffect(() => {
  //   let toFillContainer = gsap.to(fillContainer.current, {
  //     opacity: 0,
  //     duration: 2,
  //     delay: .5,
  //     immediateRender: false
  //   })


  //   let fromWelcomeContainer = gsap.from(welcomeContainer.current, {
  //     opacity: 0,
  //     duration: 1,
  //     zIndex: -4,
  //     immediateRender: false
  //   });
    
  //   let toTextBox = gsap.to(textBox.current, {
  //     opacity: 1,
  //     duration: 2,
  //     delay: 1.5,
  //     immediateRender: false
  //   });

  //   // let fromToNavHome = gsap.fromTo(navHome.current, 
  //   //   {
  //   //     opacity: 0,
  //   //     autoAlpha: 0,
  //   //   },
  //   //   {
  //   //     opacity: 1,
  //   //     autoAlpha: 1,
  //   //     duration: 2,
  //   //     delay: 4,
  //   //     immediateRender: false
  //   //   }
  //   // );

  //   return () => {
  //     toTextBox.kill();
  //     // fromToNavHome.kill();
  //     fromWelcomeContainer.kill();
  //     toFillContainer.kill();
  //   };
  // })


  return (
    <>
      <div className='first-load-fill-container' ref={fillContainer}></div>
      <div className='welcome-container'>
        <div ref={navHome}><NavHome /></div>
        
        <div className='welcome-textbox' ref={textBox}>
          <p><span>React Company Dummy Website</span> Leading Cloud Creator Company In The Western Hemisphere</p>
        </div>
        <Footer location={location} />
      </div>
    </>

  )
  }
export default Welcome