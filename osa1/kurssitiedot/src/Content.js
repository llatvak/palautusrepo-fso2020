import React from 'react'
import Part from './Part';

const Content = (props) => {
    return (
      <>
        <Part partName={props.part1.name} exerciseAmount={props.part1.exercises}/>
        <Part partName={props.part2.name} exerciseAmount={props.part2.exercises}/>
        <Part partName={props.part3.name} exerciseAmount={props.part3.exercises}/>
      </>
    )
}

export default Content;