import React from "react";

const MaxVotes = ({ anecdotes, voted }) => {
  const highestVoteCount = Math.max(...voted);
  const winnerIndex = voted.indexOf(highestVoteCount);
  const winner = anecdotes[winnerIndex];
  if (highestVoteCount === 0) {
    return <p>No votes yet</p>;
  }

  return (
    <div>
      <p>{winner}</p>
      <p>has {highestVoteCount} votes</p>
    </div>
  );
};

export default MaxVotes;
