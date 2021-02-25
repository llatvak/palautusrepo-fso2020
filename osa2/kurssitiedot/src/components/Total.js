import React from 'react';

const Total = ( {parts} ) => {

  const countTotalExercises = () => {
    const totalExercises = parts.reduce((sum, part) => 
      sum + part.exercises, 0
    )
    return totalExercises
  }

  return (
    <div>
      <p>
        <b>
          total of {countTotalExercises()} exercises 
        </b>
      </p>
    </div>
  );
};

export default Total;