import react, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import SearchResult from './components/SearchResult'

const App = () => {

  const [countries, setCountries] = useState([])
  const [newCountry, setNewCountry] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        const countries = response.data
        setCountries(countries)
      })
  }, []);

  useEffect(() => {
    const filterResult = countries.filter(c => 
      c.name.toLowerCase().trim()
        .includes(newCountry.toLowerCase().trim())
    )
    setFilteredCountries(filterResult)
  }, [newCountry]);

  const handleCountrySearch = (e) => {
    setNewCountry(e.target.value)
  }

  return (
    <div className="App">
      <Search handleCountrySearch={handleCountrySearch} newCountry={newCountry} />
      <SearchResult filteredCountries={filteredCountries} />
    </div>
  )
}

export default App;
