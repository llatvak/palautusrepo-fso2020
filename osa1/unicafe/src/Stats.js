import React from 'react'

const Stats = (props) => {
  return (
    <div>
      <h2>{props.text}</h2>
      <p>
        good {props.goodReviews}<br />
        neutral {props.neutralReviews}<br />
        bad {props.badReviews}
      </p>
    </div>
  )
}

export default Stats