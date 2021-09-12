import React, { useState } from "react";
import Display from "./Display";
import MaxVotes from "./MaxVotes";
import Buttons from "./Buttons";

const App = () => {
  const anecdotes = [
    `If it hurts, do it more often`,
    `Adding manpower to a late software project makes it later`,
    `The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.`,
    `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`,
    `Premature optimization is the root of all evil.`,
    `Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.`,
    `Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients`,
  ];

  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(Array(7).fill(0));

  const handleAnecdoteClick = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(arrayIndex);
  };

  const handleVoteClick = () => {
    const newAllVotes = [...voted];
    newAllVotes[selected] += 1;
    setVoted(newAllVotes);
  };

  return (
    <div>
      <Display text="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has {voted[selected]} votes</p>
      <Buttons onClick={handleVoteClick} text="vote" />
      {/* <button onClick={handleVoteClick}>vote</button> */}
      <button onClick={handleAnecdoteClick}>next anecdote</button>
      <Display text="Anecdote with most votes" />
      <MaxVotes anecdotes={anecdotes} voted={voted} />
    </div>
  );
};

export default App;
