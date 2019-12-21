import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MostVotedAnecdotes = ({ anecdotes, votes }) => {
    const totalVotes = votes.reduce((sum, vote) => sum + vote)

    if ( totalVotes === 0 ) {
        return (<div></div>)
    }

    let indexOfMaxVote = votes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
    return (
        <div>
            <h2>Anecdote with most votes</h2>
            <Anecdote text={anecdotes[indexOfMaxVote]} voteNum={votes[indexOfMaxVote]} />
        </div>
    )
}

const Anecdote = ({ text, voteNum}) => {
    return (
        <div>
            <p>{text}</p>
            <p>has {voteNum} votes</p>
        </div>
    )
}

const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const [mostVotedNum, setMostVotedNum] = useState(0)

    const handleClickNext = () => {
        let next = selected + 1
        if ( next === anecdotes.length ) {
            next = 0
        }
        setSelected(next)
    }

    const handleVote = () => {
        // Change not reflected with below implementation.
        // let copy = votes
        let copy = [...votes]
        copy[selected] = votes[selected] + 1
        setVotes(copy)
    }

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <Anecdote text={anecdotes[selected]} voteNum={votes[selected]} />
            <button onClick={handleVote}>vote</button>
            <button onClick={handleClickNext}>next anecdote</button>
            <MostVotedAnecdotes anecdotes={anecdotes} votes={votes} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
);
