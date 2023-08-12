import React, { useState } from 'react';
import ourstory11 from '../images/ourstory11.png';
import curtainLightBeige from '../images/curtain-light-beige.png';
import catData from '../catData';
import PetDetails from './PetDetailsCats';

const OurCats = () => {
  const cats = catData.cats;
  const [showPetDetails, setShowPetDetails] = useState(false);
  const [selectedDogId, setSelectedDogId] = useState(null);
  const [dogCardPosition, setDogCardPosition] = useState({ top: 0, left: 0 });

  const handleViewDetails = (id) => {
    // Set the selected dog id and dog card position
    setSelectedDogId(id);
    // Toggle the popup state
    setShowPetDetails(!showPetDetails);
  };

  const handleCloseDetails = () => {
    setShowPetDetails(false);
  };
  return (
    <div className="our-cats">
      <div id="top"></div>
      <div className="pets-container">
        {cats.map((cat) => (
          <div
            key={cat.id}
            className="pet-card"
            onClick={(event) => {
              handleViewDetails(cat.id);
            }}>
            <div className="image-container">
              <img src={cat.image} alt={cat.name} className="pet-image" />
              <img
                src={curtainLightBeige}
                alt="curtain1"
                className="curtain-light-beige"
              />
            </div>
            <h2>{cat.name}</h2>
          <div className="breed-line">
            <div className="golden-line" />
            <h1>{cat.breed}</h1>
            <div className="golden-line" />
          </div>
          <div className="pet-info">
            <p>
              <span className="text-black">Size</span>
              <span className="text-golden">{cat.size}</span>
            </p>
            <p>
              <span className="text-black">Age</span>
              <span className="text-golden">{cat.age}</span>
            </p>
            <p>
              <span className="text-black">Sex</span>
              <span className="text-golden">{cat.gender}</span>
            </p>
            <p>
              <span className="text-black">Cost</span>
              <span className="text-golden">${cat.cost}</span>
            </p>
          </div>
         <div className="pet__view-details">
              <button  
                className="view-details-button"
                onClick={(event) => {     
                  event.stopPropagation();
                  handleViewDetails(cat.id, dogCardPosition);
                }}
              >
                <h1>View Details</h1>
              </button>
            </div>
          </div>
        ))}
        {showPetDetails && (
          <PetDetails
            catId={selectedDogId}
            onClose={handleCloseDetails}
            
          />
        )}
      </div>
    </div>
  );
};

export default OurCats;