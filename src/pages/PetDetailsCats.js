import React from 'react';
import catData from '../catData';
import {Link} from 'react-router-dom';

const PetDetails = ({ catId, onClose}) => {
  // Fetch the cat details based on the catId
  
  const selectedcat = catData.cats.find((cat) => cat.id === catId);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="pet-details"
      
    >
      
      <div className="pet-details__left">
        <img src={selectedcat.image} alt="pet-image" className="pet-details__left" />
      </div>
      <div className="pet-details__right" >
      <button className="close-button" onClick={onClose}>
        <p>Close</p>
      </button>
        <div className="pet-details__intro">
          <h1>MEET OUR FURY FRIEND</h1>
          <h2>{selectedcat.name}</h2>
          <h3>{selectedcat.breed}</h3>
          <p>
             Meet our charming feline friend, {selectedcat.name}, a loving and curious companion who's ready to steal your heart! This adorable cat is bursting with personality and has a gentle demeanor that will instantly put a smile on your face. With a luxurious coat that's perfect for cuddles, this cat promises hours of purring contentment as you share warm moments together. <br/><br/>Our lovely cat is incredibly sociable, always eager to explore new nooks and crannies or simply relax by your side. Their striking eyes hold a world of curiosity, and their playful nature ensures that you'll never have a dull moment in their delightful company. This feline friend is the ideal addition to any loving home, adapting effortlessly to your space and forming a special bond that will last a lifetime.
          </p>
        </div>
        <div className="pet-details__info">
          <p>
            <span className="text-black">Age</span>
            <span className="text-golden">{selectedcat.age}</span>
          </p>
          <p>
            <span className="text-black">Gender/Sex</span>
            <span className="text-golden">{selectedcat.gender}</span>
          </p>
          <p>
            <span className="text-black">Good with</span>
            <span className="text-golden">{selectedcat.goodWith}</span>
          </p>
          <p>
            <span className="text-black">Coat Length</span>
            <span className="text-golden">{selectedcat.coatLength}</span>
          </p>
          <p>
            <span className="text-black">Vaccinations</span>
            <span className="text-golden">{selectedcat.vaccinations}</span>
          </p>
          <Link to="/contact#top" onClick={scrollToTop} className="nav-link"><h1>ADOPT ME</h1></Link>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
