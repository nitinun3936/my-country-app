import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="countryCard">
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      <p>{country.name.common}</p>
    </div>
  );
}

export default CountryCard;
