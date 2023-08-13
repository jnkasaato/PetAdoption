import React, { useState } from 'react';
import curtainLightBeige from '../images/curtain-light-beige.png';
import curtainWhite from '../images/curtain-white.png';
import catData from '../catData';
import PetDetails from './PetDetailsCats';

const OurCats = () => {
  const cats = catData.cats;
  const [showPetDetails, setShowPetDetails] = useState(false);
  const [selectedcatId, setSelectedcatId] = useState(null);
  const [filters, setFilters] = useState({
    breed: '',
    ageType: '',
    size: '',
    gender: '',
  });

  const handleViewDetails = (id) => {
    setSelectedcatId(id);
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

  const uniqueBreeds = Array.from(new Set(cats.map((cat) => cat.breed)));
  const uniqueAgeTypes = Array.from(new Set(cats.map((cat) => cat.ageType)));
  const uniqueGenders = Array.from(new Set(cats.map((cat) => cat.gender)));

  return (
    <div className="our-cats" style={{position:"relative"}}>
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
        {cats
          .filter((cat) => {
            return (
              (!filters.type || cat.type === filters.type) &&
              (!filters.ageType || cat.ageType === filters.ageType) &&
              (!filters.breed || cat.breed === filters.breed) &&
              (!filters.gender || cat.gender === filters.gender)
            );
          })
          .map((cat) => (
            <div
              key={cat.id}
              className="pet-card"
              onClick={(event) => {
                handleViewDetails(cat.id);
              }}
            >
              <div className="image-container">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="pet-image"
                />
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
                    handleViewDetails(cat.id);
                  }}
                >
                  <h1>View Details</h1>
                </button>
              </div>
            </div>
          ))}
        {showPetDetails && (
          <PetDetails catId={selectedcatId} onClose={handleCloseDetails} />
        )}
      </div>
    </div>
  );
};

export default OurCats;
