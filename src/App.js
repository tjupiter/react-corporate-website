import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import components
import Hero from './components/sections/Hero'

import Welcome from './components/pages/Welcome'
import AboutUs from './components/pages/AboutUs'
import WhatWeDo from './components/pages/WhatWeDo'
import Team from './components/pages/Team'
import Form from './components/pages/Form'
import Contact from './components/pages/Contact'

import Footer from './components/sections/Footer'

function App() {
  return (
   <div className='app-container'>
     <BrowserRouter>
      <Hero />
  
  
      <Routes>
        <Route path="/" index element={<Welcome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/team" element={<Team />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
  
     </BrowserRouter>
   </div>
  );
}

export default App;
