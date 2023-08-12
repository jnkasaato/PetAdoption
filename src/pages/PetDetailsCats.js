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
            Meet our adorable little bundle of joy, {selectedcat.name}! This
            charming puppy is a heart-stealer with her soft, fluffy coat and
            irresistible puppy eyes. She's a lively and curious companion,
            always eager to explore the world around her with unbridled 
            enthusiasm. Her sweet and playful nature <br/> is infectious, instantly
            bringing a smile to anyone fortunate enough to meet her. {selectedcat.name} is a mixed breed with a hint of {selectedcat.breed} and a touch of Border Collie, giving her an ideal balance of intelligence and affection. She's a quick learner, picking up new commands and tricks in no time, and her boundless energy makes her the perfect partner for outdoor adventures and long walks. Whether it's chasing after a ball or simply enjoying a sunny day, {selectedcat.name} is up for any activity that involves spending time with her human friends.
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
