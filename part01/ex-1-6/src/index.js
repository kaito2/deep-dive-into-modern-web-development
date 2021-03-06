import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const FeedbackStatistics = ({ feedback }) => {
    if (getTotalFeedbackNum(feedback) === 0) {
        return (
            <div>No feedback given</div>
        )
    }

    return (
        <table>
            <tr>
                <td>good</td>
                <td>{feedback.good}</td>
            </tr>
            <tr>
                <td>neutral</td>
                <td>{feedback.neutral}</td>
            </tr>
            <tr>
                <td>bad</td>
                <td>{feedback.bad}</td>
            </tr>
            <tr>
                <td>average</td>
                <td>{calcFeedbackAve(feedback)}</td>
            </tr>
            <tr>
                <td>positive</td>
                <td>{calcPositiveFeedbackPercentage(feedback)} %</td>
            </tr>
        </table>
    )
}

function getTotalFeedbackNum(feedback) {
    return feedback.good + feedback.neutral + feedback.bad
}

function calcFeedbackAve(feedback) {
    return (feedback.good + feedback.bad * -1) / getTotalFeedbackNum(feedback)
}

function calcPositiveFeedbackPercentage(feedback) {
    return feedback.good / getTotalFeedbackNum(feedback)
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
