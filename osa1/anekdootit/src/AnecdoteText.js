import React from 'react'

const AnecdoteText = ({anecdote, votes}) => {
  return (
    <div>
        {anecdote}
        <br></br>
        has {votes} votes
    </div>
  )
}

export default AnecdoteText