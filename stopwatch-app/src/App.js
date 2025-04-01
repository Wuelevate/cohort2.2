import React, { useState, useEffect } from 'react';
import './App.css';

function Stopwatch({ increment }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = React.useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + increment);
      }, 1000);
    }
  };

  const stop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch-container">
      <h2>{increment === 1 ? 'Normal Timer' : '2-Second Timer'}</h2>
      <div className="time-display">{formatTime(time)}</div>
      <div className="button-group">
        <button onClick={start} disabled={isRunning}>
          Start
        </button>
        <button onClick={stop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Stopwatch increment={1} />
      <Stopwatch increment={2} />
    </div>
  );
}

export default App;
