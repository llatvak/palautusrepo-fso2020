import React from 'react';

const Country = ({ country }) => {
  let id = 0

  return (
    <div className="country">
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <ul>
        {country.languages.map(l => 
          <li key={id++}>
            {l.name}
          </li>)}
      </ul>
      <img className="photo" alt="country flag" src={country.flag}/>
    </div>
  );
};

export default Country;