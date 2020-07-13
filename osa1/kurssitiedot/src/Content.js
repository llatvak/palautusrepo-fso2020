import React from 'react'
import Part from './Part';

const Content = (props) => {
    return (
      <>
        <Part partName={props.part1} exerciseAmount={props.exercises1}/>
        <Part partName={props.part2} exerciseAmount={props.exercises2}/>
        <Part partName={props.part3} exerciseAmount={props.exercises3}/>
      </>
    )
}

export default Content;