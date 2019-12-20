import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            greeting app created by <a href="https://github.com/kaito2">kaito2</a>
        </div>
    )
}

const App = () => {
    const name1 = "hoge"
    return (
        <div>
            <h1>Greeting!!!</h1>
            <Hello name={name1} />
            <Hello name="huga" />
            <Hello name="piyo" />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
