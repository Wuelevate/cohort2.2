import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timer1, setTimer1] = useState(0);
  const [timer2, setTimer2] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimer1((prev) => prev + 1);
      setTimer2((prev) => prev + 2);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleRestart = () => {
    setTimer1(0);
    setTimer2(0);
    setIsRunning(true);
  };

  return (
    <div className="app">
      <h1>Timer Application</h1>
      <div className="timer-container">
        <h2>Timer 1: {timer1} sec</h2>
        <h2>Timer 2: {timer2} sec</h2>
      </div>
      <div className="buttons">
        <button onClick={() => setIsRunning(true)}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}

export default App;
