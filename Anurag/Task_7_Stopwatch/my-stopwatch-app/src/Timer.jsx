import { useState, useEffect } from "react";

const formatTime = (seconds) => {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
};

export default function Timer({ title, step }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = setInterval(() => setTime((prev) => prev + step), 1000);
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div className="stopwatch">
      <h2>{title}</h2>
      <p className="time">{formatTime(time)}</p>
      <div className="buttons">
        <button className="button start" onClick={() => setRunning(!running)}>
          {running ? "Pause" : "Start"}
        </button>
        <button className="button reset" onClick={() => { setTime(0); setRunning(false); }}>
          Reset
        </button>
      </div>
    </div>
  );
}
