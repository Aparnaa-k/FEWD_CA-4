import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "../src/components/ThemeProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
