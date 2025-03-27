import './App.css';  // If styles are inside App.css
import './index.css';  // If global styles are inside index.css
import Stopwatch from './Stopwatch.jsx'; 

function App() {
  return (
    <div className="app-container">
      <Stopwatch />
    </div>
  );
}

export default App;
