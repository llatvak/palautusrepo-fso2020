import React from 'react'

const Stats = ({text, goodReviews, neutralReviews, badReviews}) => {

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
      ? goodReviews / countAllReviews() * 100
      : 0
  )

  return (
    <div>
      <h2>{text}</h2>
      <p>
        good {goodReviews}<br />
        neutral {neutralReviews}<br />
        bad {badReviews}<br />
        all {countAllReviews()}<br />
        average {countAverageReviews()}<br />
        positive {countPositivePercentage()}%<br />
      </p>
    </div>
  )
}

export default Stats