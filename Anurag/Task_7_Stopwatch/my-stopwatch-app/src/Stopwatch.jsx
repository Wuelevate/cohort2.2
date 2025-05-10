import Timer from "./Timer";
import "./Stopwatch.css"; 

export default function Stopwatch() {
  return (
    <div className="container">
      <h1 className="title">Dual Stopwatch</h1>
      <div className="stopwatch-container">
        <Timer title="Timer 1" step={1} />
        <Timer title="Timer 2" step={2} />
      </div>
    </div>
  );
}
