import React from 'react'

// Calculate total exercise amount from parts array
const calculateTotalExercises = (parts) => {
    let totalExercises = 0
    parts.map( (part, index) => totalExercises += parts[index].exercises)
    return totalExercises
}

const Total = (props) => {
    return (
        <p>Number of exercises {calculateTotalExercises(props.parts)}</p>
    )
}

export default Total;