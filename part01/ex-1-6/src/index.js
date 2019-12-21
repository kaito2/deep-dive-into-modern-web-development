import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const FeedbackStatistics = ({ feedback }) => {
    return (
        <div>
            <p>good: {feedback.good}</p>
            <p>neutral: {feedback.neutral}</p>
            <p>bad: {feedback.bad}</p>
        </div>
    )
}

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const FeedbackInput = ({ feedback, setFeedback }) => {
    return (
        <div>
            <h1>Give feedback</h1>
            <Button text='good' onClick={() => setFeedback({...feedback, good: feedback.good + 1})} />
            <Button text='neutral' onClick={() => setFeedback({...feedback, neutral: feedback.neutral + 1})} />
            <Button text='bad' onClick={() => setFeedback({...feedback, bad: feedback.bad + 1})} />
        </div>
    )
}

const Feedback = () => {
    const [feedback, setFeedback] = useState({
        good: 0, neutral: 0, bad: 0
    });
    return (
        <div>
            <FeedbackInput feedback={feedback} setFeedback={setFeedback} />
            <FeedbackStatistics feedback={feedback} />
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Feedback />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
