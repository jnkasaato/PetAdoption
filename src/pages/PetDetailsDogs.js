import React from 'react';
import {Link} from 'react-router-dom';
import dogData from '../dogData';


const PetDetailsDogs = ({ dogId, onClose}) => {
  // Fetch the dog details based on the dogId
  
  const selectedDog = dogData.dogs.find((dog) => dog.id === dogId);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div className="pet-details">
      <div className="pet-details__left">
        <img src={selectedDog.image} alt="pet-image" className="pet-details__left" />
      </div>
      <div className="pet-details__right" >
      <button className="close-button" onClick={onClose}>
        <p>Close</p>
      </button>
        <div className="pet-details__intro">
          <h1>MEET OUR FURY FRIEND</h1>
          <h2>{selectedDog.name}</h2>
          <h3>{selectedDog.breed}</h3>
          <p>
            Meet our adorable little bundle of joy, {selectedDog.name}! This
            charming puppy is a heart-stealer with her soft, fluffy coat and
            irresistible puppy eyes. {selectedDog.name} is a lively and curious companion,
            always eager to explore the world around her with unbridled 
            enthusiasm. Her sweet and playful nature  is infectious, instantly
            bringing a smile to anyone fortunate enough to meet her. <br/><br/> {selectedDog.name} is a quick learner, 
             picking up new commands and tricks in no time, and her boundless energy makes her the perfect partner for outdoor adventures and long walks. Whether it's chasing after a ball or simply enjoying a sunny day, {selectedDog.name} is up for any activity that involves spending time with her human friends.
          </p>
        </div>
        <div className="pet-details__info">
          <p>
            <span className="text-black">Age</span>
            <span className="text-golden">{selectedDog.age}</span>
          </p>
          <p>
            <span className="text-black">Gender/Sex</span>
            <span className="text-golden">{selectedDog.gender}</span>
          </p>
          <p>
            <span className="text-black">Good with</span>
            <span className="text-golden">{selectedDog.goodWith}</span>
          </p>
          <p>
            <span className="text-black">Coat Length</span>
            <span className="text-golden">{selectedDog.coatLength}</span>
          </p>
          <p>
            <span className="text-black">Vaccinations</span>
            <span className="text-golden">{selectedDog.vaccinations}</span>
          </p>
          
          <Link to="/contact#top" onClick={scrollToTop} className="nav-link"><h1>ADOPT ME</h1></Link>
            
        </div>
      </div>

    </div>
  );
};

export default PetDetailsDogs;
