import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";  // Global styles
import "./App.css";    // App-specific styles
import App from "./App.jsx";  // Main App Component

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
