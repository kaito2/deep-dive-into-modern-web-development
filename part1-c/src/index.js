import React from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const {counter} = props
    return (
        <div>{counter}</div>
    )
}

let counter = 1

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

