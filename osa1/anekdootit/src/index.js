import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import Title from './Title'
import AnecdoteText from './AnecdoteText'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  // Init array with length of anecdotes and fill with zeroes
  const [points, setPoints] = useState(
    Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0)
  )

  const showAnecdote = () => {
    // Return random anecdote from array
    const max = anecdotes.length - 1
    const min = 0
    let randomNum = 0;
    // Generate random numbers until different than selected
    do {
      randomNum = Math.floor(Math.random() * (max - min + 1) ) + min
    } while(selected === randomNum)
    setSelected(randomNum)
  }

  // Vote currently selected anecdote
  const voteAnecdote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }

  return (
    <div>
      <Title text='Anecdote of the day'/>
      <AnecdoteText 
        anecdote={props.anecdotes[selected]} 
        votes={points[selected]} />
      <div>
        <Button text='vote' handleClick={voteAnecdote}/>
        <Button text='next anecdote' handleClick={showAnecdote}/>
      </div>
        <Title text='Anecdote with most votes'/>
        <AnecdoteText 
          anecdote={props.anecdotes[points.indexOf(Math.max(...points))]}
          votes={Math.max(...points)} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
