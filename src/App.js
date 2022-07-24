import './App.css'

import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

// import Hero from './components/sections/Hero'
import Welcome from './components/pages/Welcome'
import AboutUs from './components/pages/AboutUs'
import WhatWeDo from './components/pages/WhatWeDo'
import Team from './components/pages/Team'
import Contact from './components/pages/Contact'
// import Footer from './components/sections/Footer'

function App() {
  return (
   <div className='app-container'>
     <HashRouter>

      <Routes>
        <Route exact path="/" index element={<Welcome />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      {/* I was gonna render the Footer here but I cannot conditionally */}
      {/* format it based on useLocation because it's not part of */}
      {/* the router. => Footer rendered within each element */}
      {/* <Footer  /> */}
  
     </HashRouter>
   </div>
  );
}

export default App;
