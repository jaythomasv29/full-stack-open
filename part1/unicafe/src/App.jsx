import { useState } from "react";
import "./App.css";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      <Button name="good" handleClick={() => setGood(good + 1)} />
      <Button name="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button name="bad" handleClick={() => setBad(bad + 1)} />
    </>
  );
}

const Button = ({ name, handleClick }) => {
  return <button onClick={handleClick}>{name}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad; // derived state
  const avg = (good - bad) / all;
  const pctPositive = (good / all) * 100;
  return (
    <>
      <h1>Statistics</h1>
      {all > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Feedback</th>
              <th>Metric</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <StatisticLine name="good" state={good} />
            </tr>
            <tr>
              <StatisticLine name="neutral" state={neutral} />
            </tr>

            <tr>
              <StatisticLine name="bad" state={bad} />
            </tr>

            <tr>
              <StatisticLine name="all" state={all} />
            </tr>
            <tr>
              <StatisticLine name="average" state={avg} />
            </tr>
            <tr>
              <StatisticLine name="positive" state={pctPositive} />
            </tr>
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

const StatisticLine = ({ name, state }) => {
  return name === "positive" ? (
    <>
      <td>{name}</td>
      <td>{state} %</td>
    </>
  ) : (
    <>
      <td>{name}</td>
      <td>{state}</td>
    </>
  );
};

export default App;
