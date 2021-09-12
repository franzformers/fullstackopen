import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({ clicks }) => {
  const all = clicks.good + clicks.neutral + clicks.bad;
  const average =
    (clicks.good * 1 + clicks.neutral * 0 + clicks.bad * -1) / all;
  const positive = Math.round((clicks.good / all) * 100) + "%";

  if (clicks.good === 0 && clicks.neutral === 0 && clicks.bad === 0) {
    return <div>No feedbacks given</div>;
  }
  return (
    <table>
      <StatisticLine text="good" stat={clicks.good} />
      <StatisticLine text="neutral" stat={clicks.neutral} />
      <StatisticLine text="bad" stat={clicks.bad} />
      <StatisticLine text="all" stat={all} />
      <StatisticLine text="average" stat={average} />
      <StatisticLine text="positive" stat={positive} />
    </table>
  );
};

export default Statistics;
