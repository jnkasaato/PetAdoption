// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OurDogs from './pages/OurDogs';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import OurCats from './pages/OurCats';
import OurStory from './pages/OurStory';
import HowToAdopt from './pages/HowToAdopt';
import NavBar from './components/NavBar'
import curtainBeige from './images/curtain-beige.png'; 
import curtainGrey from './images/curtain-grey.png'; 
import curtainWhite from './images/curtain-white.png'; 
import logo from './images/logo.png'; 

const App = () => {
  return (
    
    <Router>
      <div className = "nav">
      <div style={{ position: 'relative' }}>
        <ul>
          <li><Link to="/our-dogs" className="nav-link"><h1>Our Dogs</h1></Link></li>
          <li><Link to="/our-story" className="nav-link"><h1>Our Story</h1></Link></li>
          <li><Link to="/how-to-adopt" className="nav-link"><h1>How To Adopt</h1></Link></li>
          <li><Link to="/"className="nav-link"><img src={logo}/></Link></li>
          <li><Link to="/volunteer" className="nav-link"><h1> Volunteer</h1></Link></li>
          <li><Link to="/contact" className="nav-link"><h1>Contact Us</h1></Link></li>
          <li><Link to="/our-cats" className="nav-link"><h1>Our Cats</h1></Link></li>
        </ul>
        <img src={curtainWhite} alt="curtain-white" className="nav-curtain" />
      </div>
      </div>
  
      {/* Content */}
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/our-dogs" element={<OurDogs />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-cats" element={<OurCats />} />
        <Route path="/how-to-adopt" element={<HowToAdopt />} />
        

      </Routes>
      {/* Footer */}
      <div style={{ position: 'relative' }}>
      <footer>
        
          <div className="subscribe-section">
            <h4>Subscribe</h4>
            
            <p>stay up to date with us and get all the latest news first</p>
            <p>Enter your email:</p>
            <input type="email" placeholder="Your email address" />
          <h5>Happy Tail Pet Haven EST. 2009 </h5>
          </div>
          <div className="contact-section">
            <h4>Contact Us</h4>
            <p>Phone: 123-456-7890</p>
            <p>Email: contact@happytail.com</p>
          
          </div>
          <div className="footer-outtro">

          </div>
       
        </footer>
        <img src={curtainGrey} alt="curtain-white" className="top-curtain-up" />
         </div>
      </Router>
  );
};

export default App;
