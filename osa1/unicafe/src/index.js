import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Stats from './Statistics'
import Button from './Button'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
      <Header text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <Stats
        text='statistics'
        goodReviews={good} neutralReviews={neutral} badReviews={bad}
      />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
