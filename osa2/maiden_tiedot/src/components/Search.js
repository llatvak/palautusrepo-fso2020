import React from 'react';

const Search = ({ handleCountrySearch, newCountry }) => {
  return (
    <div>
      <label>find countries</label>
      <input type="text" onChange={handleCountrySearch} value={newCountry}/>
    </div>
  );
};

export default Search;