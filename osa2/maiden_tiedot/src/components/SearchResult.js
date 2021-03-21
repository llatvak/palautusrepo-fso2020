import React from 'react'
import Countries from './Countries'
import Country from './Country'

const SearchResult = ({ filteredCountries }) => {

  const tooManyMatchesInfo = 'Too many matches, specify another filter'

  const checkRenderedContent = () => {
    if(filteredCountries.length <= 10 && filteredCountries.length > 1 ) {
      return <Countries filteredCountries={filteredCountries} />
    } else if(filteredCountries.length === 1) {
      return <Country country={filteredCountries[0]}/>
    } else {
      return <p>{tooManyMatchesInfo}</p>
    }
  }

  return (
    <div>
      {checkRenderedContent()}
    </div>
  );
};

export default SearchResult;