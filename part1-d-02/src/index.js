import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/*
const App = () => {
    // these are ok
    const [age, setAge] = useState(0);
    const [name, setName] = useState('Juha Tauriainen');

    if ( age > 10 ) {
        // this does not work !!
        const [foobar, setFoobar] = useState(null);
    }

    for ( let i = 0; i < age; i++ ) {
        // alse this not good
        const [rightWay, setRightWay] = useState(false);
    }

    const notGood = () => {
        // and this is also illegal
        const [x, setX] = useState(-1000);
    }

    return (
        // ...
    )
}
*/

const App = () => {
    const [value, setValue] = useState(10);

    return (
        <div>
            {value}
            <button onClick={() => setValue(0)}>reset to zero</button>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
