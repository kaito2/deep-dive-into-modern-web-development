import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const FeedbackStatistics = () => {
    return (
        <div>
            statistics
        </div>
    )
}

const FeedbackInput = () => {
    return (
        <div>input</div>
    )
}

const Feedback = () => {
    return (
        <div>
            <FeedbackInput />
            <FeedbackStatistics />
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <Feedback />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
