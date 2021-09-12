import React, { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";
import Display from "./Display";

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({ good: 0, bad: 0, neutral: 0 });

  const handleGood = () => setClicks({ ...clicks, good: clicks.good + 1 });
  const handleNeutral = () =>
    setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  const handleBad = () => setClicks({ ...clicks, bad: clicks.bad + 1 });

  return (
    <div>
      <Display text="give feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Display text="statistics" />
      <Statistics clicks={clicks} />
    </div>
  );
};

export default App;
