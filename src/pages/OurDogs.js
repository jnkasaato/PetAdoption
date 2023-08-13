import React, { useState } from 'react';
import curtainLightBeige from '../images/curtain-light-beige.png';
import curtainWhite from '../images/curtain-white.png';
import dogData from '../dogData';
import PetDetails from './PetDetailsDogs';

const OurDogs = () => {
  const dogs = dogData.dogs;
  const [showPetDetails, setShowPetDetails] = useState(false);
  const [selectedDogId, setSelectedDogId] = useState(null);
  const [filters, setFilters] = useState({
    breed: '',
    ageType: '',
    size: '',
    gender: '',
  });

  const handleViewDetails = (id) => {
    setSelectedDogId(id);
    setShowPetDetails(!showPetDetails);
  };

  const handleCloseDetails = () => {
    setShowPetDetails(false);
  };

  const handleResetFilters = () => {
    setFilters({
      breed: '',
      ageType: '',
      size: '',
      gender: '',
    });
  };

  const uniqueBreeds = Array.from(new Set(dogs.map((dog) => dog.breed)));
  const uniqueAgeTypes = Array.from(new Set(dogs.map((dog) => dog.ageType)));
  const uniqueGenders = Array.from(new Set(dogs.map((dog) => dog.gender)));

  return (
    <div className="our-dogs" style={{position:"relative"}}>
        <div className="our-pets__filters">
          <img src={curtainWhite} alt="curtain-white" className="top-curtain-down" />
          
      
        <select
          value={filters.breed}
          onChange={(e) => setFilters({ ...filters, breed: e.target.value })}
        >
          <option value=""> Breed</option>
          {uniqueBreeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        <select
          value={filters.ageType}
          onChange={(e) => setFilters({ ...filters, ageType: e.target.value })}
        >
          <option value=""> Age </option>
          {uniqueAgeTypes.map((ageType) => (
            <option key={ageType} value={ageType}>
              {ageType}
            </option>
          ))}
        </select>

        <select
          value={filters.gender}
          onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
        >
          <option value=""> Gender</option>
          {uniqueGenders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
        <button onClick={handleResetFilters} className="our-pets__reset-filters-button">
          Reset Filters
        </button>
      </div>
      <div className="pets-container">
        {dogs
          .filter((dog) => {
            return (
              (!filters.type || dog.type === filters.type) &&
              (!filters.ageType || dog.ageType === filters.ageType) &&
              (!filters.breed || dog.breed === filters.breed) &&
              (!filters.gender || dog.gender === filters.gender)
            );
          })
          .map((dog) => (
            <div
              key={dog.id}
              className="pet-card"
              onClick={(event) => {
                handleViewDetails(dog.id);
              }}
            >
              <div className="image-container">
                <img
                  src={dog.image}
                  alt={dog.name}
                  className="pet-image"
                />
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
          <PetDetails dogId={selectedDogId} onClose={handleCloseDetails} />
        )}
      </div>
    </div>
  );
};

export default OurDogs;
