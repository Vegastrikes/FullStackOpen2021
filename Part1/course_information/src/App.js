import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    )
  }
  const Content = (props) => {
    return (
      <div>
        <Part part={props.part1Name} exercise={props.part1Exercises}/>
        <Part part={props.part2Name} exercise={props.part2Exercises}/>
        <Part part={props.part3Name} exercise={props.part3Exercises}/>
      </div>
    )
  }
  const Part = (props) => {
    return (
      <p>{props.part} {props.exercise}</p>
    )
  }
  const Total = (props) => {
    return (
      <p>Number of exercises {props.exercise1+props.exercise2+props.exercise3}</p>
    )
  }

  return (
    <div>
      <Header course={course}/>
      <Content 
      part1Name={part1.name} part1Exercises={part1.exercises}
      part2Name={part2.name} part2Exercises={part2.exercises}
      part3Name={part3.name} part3Exercises={part3.exercises}
      />
      <Total exercise1={part1.exercises} exercise2={part2.exercises} exercise3={part3.exercises}/>
    </div>
  )
}

export default App