import React, { useState } from 'react';
import ourstory11 from '../images/ourstory11.png';
import curtainLightBeige from '../images/curtain-light-beige.png';
import dogData from '../dogData';
import PetDetails from './PetDetailsDogs';

const OurDogs = () => {
  const dogs = dogData.dogs;
  const [showPetDetails, setShowPetDetails] = useState(false);
  const [selectedDogId, setSelectedDogId] = useState(null);

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
    <div className="our-dogs">
      <div id="top"></div>
      <div className="pets-container">

        {dogs.map((dog) => (
          <div
            key={dog.id}
            className="pet-card"
            onClick={(event) => {
              handleViewDetails(dog.id);
            }}>
            <div className="image-container">
              <img src={dog.image} alt={dog.name} className="pet-image" />
              <img
                src={curtainLightBeige}
                alt="curtain1"
                className="curtain-light-beige"
              />
            </div>
            <h2>{dog.name}</h2>
          <div className="breed-line">
            <div className="golden-line" />
            <h1>{dog.breed}</h1>
            <div className="golden-line" />
          </div>
          <div className="pet-info">
            <p>
              <span className="text-black">Size</span>
              <span className="text-golden">{dog.size}</span>
            </p>
            <p>
              <span className="text-black">Age</span>
              <span className="text-golden">{dog.age}</span>
            </p>
            <p>
              <span className="text-black">Sex</span>
              <span className="text-golden">{dog.gender}</span>
            </p>
            <p>
              <span className="text-black">Cost</span>
              <span className="text-golden">${dog.cost}</span>
            </p>
          </div>
         <div className="pet__view-details">
              <button  
                className="view-details-button"
                onClick={(event) => {     
                  event.stopPropagation();
                  handleViewDetails(dog.id);
                }}
              >
                <h1>View Details</h1>
              </button>
            </div>
          </div>
        ))}
        {showPetDetails && (
          <PetDetails
            dogId={selectedDogId}
            onClose={handleCloseDetails}

          />
        )}
      </div>
    </div>
  );
};

export default OurDogs;