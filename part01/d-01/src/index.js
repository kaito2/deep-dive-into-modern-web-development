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

const History = ({ allClicks }) => {
    if (allClicks.length === 0) {
        return (
            <div>
                This app is use by pressing the buttons.
            </div>
        )
    }
    return (
        <div>
            button press history: {allClicks.join(' ')}
        </div>
    )
}

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

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
                <Button text='left' onClick={handleLeftClick} />
                <Button text='right' onClick={handleRightClick} />
                {clicks.right}
                <History allClicks={allClicks} />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
