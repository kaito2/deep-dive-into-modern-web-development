import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Straightforward implementation
/*
const App = () => {
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);

    return (
        <div>
            <div>
                {left}
                <button onClick={() => setLeft(left + 1)}>
                    left
                </button>
                <button onClick={() => setRight(right + 1)}>
                    right
                </button>
                {right}
            </div>
        </div>
    )
}
*/

const App = (props) => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat('L'))
        const newClicks = {
            // object spread syntax
            // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            ...clicks,
            left: clicks.left + 1,
        };
        setClicks(newClicks);
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        const newClicks = {
            // object spread syntax
            // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
            ...clicks,
            right: clicks.right + 1
        }
        setClicks(newClicks)
    }

    return (
        <div>
            <div>
                {clicks.left}
                <button onClick={handleLeftClick}>left</button>
                <button onClick={handleRightClick}>right</button>
                {clicks.right}
                <p>{allClicks.join(' ')}</p>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
