import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OurDogs from './pages/OurDogs';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import OurCats from './pages/OurCats';
import OurStory from './pages/OurStory';
import HowToAdopt from './pages/HowToAdopt';
import curtainGrey from './images/curtain-grey.png'; 
import curtainWhite from './images/curtain-white.png'; 
import logo from './images/logo.png'; 
import logohover from './images/logo-hover.png'; 

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isSent, setIsSent] = useState(false);

  const handleSubscribe = () => {
    // Perform any necessary subscription action
    // Here, we'll just set the "isSent" state to true
    setIsSent(true);
  };

  return (  
    <Router>
      <div className = "nav">
      <div style={{ position: 'relative' }}>
        <ul>
          <li><Link to="/our-dogs" className="nav-link-pet"><h1>Our Dogs</h1></Link></li>
          <li><Link to="/our-story" className="nav-link"><h1>Our Story</h1></Link></li>
          <li><Link to="/how-to-adopt" className="nav-link"><h1>How To Adopt</h1></Link></li>
          <li><Link to="/"className="nav-link">
            <img
              src={isHovered ? logohover : logo}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              alt="Logo"
            />
          </Link></li>
          <li><Link to="/volunteer" className="nav-link"><h1> Volunteer</h1></Link></li>
          <li><Link to="/contact" className="nav-link"><h1>Contact Us</h1></Link></li>
          <li><Link to="/our-cats" className="nav-link-pet"><h1>Our Cats</h1></Link></li>
        </ul>
        <img src={curtainWhite} alt="curtain-white" className="nav-curtain" />
      </div>
      </div>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/our-dogs" element={<OurDogs />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/our-cats" element={<OurCats />} />
        <Route path="/how-to-adopt" element={<HowToAdopt />} />
      </Routes>
      <div style={{ position: 'relative' }}>
        <div className="footer">
          <div className="subscribe-section">
            <h4>Subscribe</h4>
            <p>
              Stay up to date with us and get all the latest news first<br/><br/><br/>Enter your email:
            </p>
            <p>
              <input type="email" className="contact__input" placeholder="Your email address" />
              <button className="subscribe-button" onClick={handleSubscribe}>
                {isSent ? 'Sent' : 'Subscribe'}
              </button>
            </p>
            <h5>Happy Tail Pet Haven EST 2011</h5>
          </div>
          <div className="contact-section">
            <h4>Contact Us</h4>
            <p>Phone: 123-456-7890</p>
            <p>Email: contact@happytail.com</p>
          </div>
        </div>
        <img src={curtainGrey} alt="curtain-white" className="top-curtain-up" />
      </div>
    </Router>
);
};

export default App;
