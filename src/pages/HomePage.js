import React from 'react';
import home1 from '../images/home1.png'; 
import home4 from '../images/home4.png'; 
import home5 from '../images/home5.png'; 
import home6 from '../images/home6.png'; 
import home7 from '../images/home7.png'; 
import home8 from '../images/home8.png'; 
import home9 from '../images/home9.png'; 
import curtainBeige from '../images/curtain-beige.png'; 
import curtainWhite from '../images/curtain-white.png';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import OurDogs from './OurDogs';
import OurCats from './OurCats';
import Volunteer from './Volunteer';
import OurStory from './OurStory';

const Homepage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="homepage">
    <div id="top"></div>
    <div style={{ position: 'relative' }}>
      <img src={home1} alt="Adorable Puppy" className="intro-photo"/>
      <img src={curtainBeige} alt="curtain1" className="bottom-curtain-up"/>
      <img src={curtainWhite} alt="curtain-white" className="top-curtain-down" />
    </div>
    <div style={{ position: 'relative' }}>
      <div className = 'homepage__intro'>
        <h1> 
          Who we are
        </h1>
        <h2>
          Our mission is to connect loving homes with pets in need, fostering joyful and lasting relationships while promoting responsible pet ownership and animal welfare.
        </h2>
        <img src={curtainBeige} alt="curtain1" className="bottom-curtain-down"/>
      </div>
    </div>

      <div className= 'home__main'>
        <div className= 'double-blue'>       
          <div className= 'double-image'>
            <img src= {home8} alt = 'home 2' style={{ width: '500px', height:'750px', display: 'block', objectFit: 'cover', overflow: 'hidden' }}/>
          </div> 
          <div className= 'home__text2'>
            <h2>Our Dogs</h2>
            <p>
              We warmly welcome you to the heartwarming world of furry companions that bring boundless joy to families. Discover a delightful array of affectionate and well-mannered canines, each one thoughtfully chosen to match your unique lifestyle and preferences. Our four-legged friends have been carefully evaluated for their temperament, ensuring a perfect harmony with your family dynamics. <br/><br/>Experience the thrill of finding your new, loyal companion among these loving beings, shedding worries aside with our low-to-non-shedding pups. At HappyTail Pet Haven, we believe in fulfilling dreams through the loving connection of our furry friends, creating countless memorable moments for you and your newfound, lifelong friend.
            </p>
            <Link to="/our-dogs#top" onClick={scrollToTop} className="nav-link"><h4>Explore</h4></Link>
          </div>
        </div>

        <div className= 'double-beige'>
          <div className= 'home__text3'>
            <h2> Our Cats</h2>
            <p>
              Welcome to our enchanting feline corner, where the magic of whiskers and gentle purrs awaits you. Dive into the world of graceful and charming cats, each one embodying the elegance and mystique that only a cat can bring. These regal companions have been selected with the utmost care, embracing diverse personalities and unique traits to match your lifestyle seamlessly. Whether you seek a playful, inquisitive friend or a serene and sophisticated companion, our carefully curated feline family is ready to steal your heart.<br/><br/> Bid farewell to shedding worries as our cats delight in their low-maintenance coats, leaving you with more time for cuddles and cherished moments. At HappyTail Pet Haven, we believe in creating lasting memories, and our feline friends are here to add an extra layer of warmth and companionship to your life. Join us in discovering the joy of finding your perfect feline match, and experience the incredible bond that only a cat can bring.
            </p>
            <Link to="/our-cats#top" onClick={scrollToTop} className="nav-link"><h4>Explore</h4></Link>
          </div>
          <div className= 'home__img3'>
            <img src= {home7} alt = 'home 3' style={{ width: '500px', height:'850px', display: 'block', objectFit: 'cover', overflow: 'hidden' }}/>
          </div> 
        </div>
      </div>
      <div className= 'make-a-friend' style={{ position: 'relative' }}>
        <h2 style={{position:'absolute', textAlign:'center', color: '#ffffff',padding:'220px 550px'}}>Make a friend</h2>
        <img src={home4} alt="home 4" style={{ width: '100%', height:'550px', display: 'block', objectFit: 'cover', overflow: 'hidden' }} />
        <img src={curtainWhite} alt="curtain-white" className="top-curtain-down" />
        <img src={curtainWhite} alt="curtain-white" className="bottom-curtain-up" />
      </div>
            <div className = 'ourstory__intro' style={{ position: 'relative' }}>
        <h1>Adventure Begins</h1>
        <h2>Through the love and companionship of your new furry friend, you're about to discover a world of unconditional affection, unexpected joy, and the profound bond that comes with being a cherished pet parent.</h2>
        
        <img src={curtainWhite} alt="curtain-white" className="bottom-curtain-down" />
      </div>
      <div className='home__image-container'>
        <div className='home__link'>
          <img src={home6} alt="home 4" />
          <div className="overlay">
            <p> Volunteer with us</p>
            <Link to="/volunteer#top" onClick={scrollToTop} className="nav-link"><h1>Learn More</h1></Link>
            
          </div>
        </div>
        <div className='home__link'>
          <img src={home5} alt="home 4" />
          <div className="overlay">
          <p>Get to know us</p>
            <Link to="/our-story#top" onClick={scrollToTop} className="nav-link"><h1>Our Story</h1></Link>
          </div>
        </div>
      </div>
      
      <div className='home__image-container'>
        <div className='home__link-contact'>
          <img src={home9} alt="home 4" />
          <div className="overlay">
          <p>Have a little chat with us</p>
            <Link to="/contact#top" onClick={scrollToTop} className="nav-link"><h1>Contact Us</h1></Link>
          </div>
        </div>
      </div>

     <Routes>
        <Route path="/our-dogs" element={<OurDogs />} />
        <Route path="/our-cats" element={<OurCats />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </div>

  );
};

export default Homepage;