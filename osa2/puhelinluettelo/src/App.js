import React, { useEffect, useState } from 'react'
import FilterForm from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newSearch, setNewSearch ] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        const persons = response.data
        setPersons(persons)
      })
  }, []);

  const personsToShow = 
    showAll
      ? persons
      : persons.filter((person) => 
          person.name.toLowerCase().trim()
            .includes(newSearch.toLowerCase().trim())
      )

  useEffect(() => {
    if(newSearch.length > 0) {
      setShowAll(false)
    } else {
      setShowAll(true)
    }
  }, [newSearch])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const checkDuplicates = () =>
    persons.some(person => person.name === newName)
      ? true
      : false

  const addPerson = (event) => {
    event.preventDefault();
    if(newName.length > 0 && newNumber.length > 0) {
      const containsDuplicates = checkDuplicates();
      if(containsDuplicates) {
        alert(`${newName} is already added to phonebook`)
      } else {
        setPersons(persons.concat(
          {
            name: newName,
            number: newNumber
          }
        ))
      }
      setNewName('')
      setNewNumber('')
    } else {
      alert('Fields cannot be empty')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm 
        handleSearchChange={handleSearchChange}
        newSearch={newSearch} 
      />
      <h2>Add a new</h2>
      <PersonForm 
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )
}

export default App
