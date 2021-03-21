import React from 'react';

const Countries = ({ filteredCountries }) => {

  let id = 0

  return (
    <div className="countries-list">
      {filteredCountries.map(c =>
        <div className="country-list-element">
          {c.name}
        </div>
      )}
    </div>
  );
};

export default Countries;