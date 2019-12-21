import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({ counter }) => (
    <div>{counter}</div>
)


const Button = ({ text, onClick }) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const App = (props) => {
    const [counter, setCounter] = useState(0)

    // setToValue return 'function'
    const setToValue = (value) => () => {setCounter(value)}

    return (
        <div>
            <Display counter={counter} />
            <Button text='plus' onClick={setToValue(counter + 1)} />
            <Button text='reset' onClick={setToValue(0)} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

// let counter = 1

/*
// > Making repeated calls to the ReactDOM.render-method is not the recommended way to re-render components.
const refresh = () => {
    ReactDOM.render(<App counter={counter} />,
        document.getElementById('root'))
}

setInterval(() => {
    refresh()
    counter += 1
}, 1000)
*/

