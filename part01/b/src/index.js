import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.cource}</h1>
    )
}

const Contents = (props) => {
    return(
        <p>
            {props.pairs.map(pair => (<Content part={pair.part} exercises={pair.exercises} />))}
        </p>
    )
}

const Content = (props) => {
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Footer = (props) => {
    console.log(props.pairs)
    return (
        props.pairs.reduce((sum, a) => sum + a.exercises, 0)
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const list = [
        {"part": 'Fundamentals of React', "exercises": 10},
        {"part": 'Using props to pass data', "exercises": 7},
        {"part": 'State of a component', "exercises": 14},
    ]

    return (
        <div>
            <Header cource={course} />
            <Contents  pairs={list} />
            <Footer pairs={list} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
