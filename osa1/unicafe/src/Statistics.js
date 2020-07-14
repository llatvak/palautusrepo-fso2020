import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({text, goodReviews, neutralReviews, badReviews}) => {

  const countAllReviews = () => (
    goodReviews + neutralReviews + badReviews
  )

  const countAverageReviews = () => (
    countAllReviews() !== 0
      ? (goodReviews * 1 + neutralReviews * 0 + badReviews * -1) / countAllReviews()
      : 0
  )

  const countPositivePercentage = () => (
    countAllReviews() !== 0
      ? goodReviews / countAllReviews() * 100 + '%'
      : 0 + '%'
  )
  
  if(countAllReviews() !== 0) {
    return (
      <div>
        <h2>{text}</h2>
        <table>
          <tbody>
            <tr>
              <td><StatisticLine text='good' value={goodReviews} /></td>
            </tr>
            <tr>
              <td><StatisticLine text='neutral' value={neutralReviews} /></td>
            </tr>
            <tr>
              <td><StatisticLine text='bad' value={badReviews} /></td>
            </tr>
            <tr>
              <td><StatisticLine text='all' value={countAllReviews()} /></td>
            </tr>
            <tr>
              <td><StatisticLine text='average' value={countAverageReviews()} /></td>
            </tr>
            <tr>
              <td><StatisticLine text='positive' value={countPositivePercentage()} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div>
      <h2>{text}</h2>
      <p>No feedback given</p>
    </div>
  )
  
}

export default Statistics