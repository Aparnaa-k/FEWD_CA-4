import React, { useState } from "react";
import "./App.css";
// import "./components/Result."
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
 
  const [play, setPlay] = useState(true);

  const handlePlay = () => {
    setPlay(false);
  }


  return (
    <ThemeProvider>
      <div>
        { play ? (
        <div className="app">
          <p className="app-title" >Start Game</p>
          <button className="app-btn"
          onClick={handlePlay}>Play</button>
        </div>) : <QuestionBox />}
      </div>
    </ThemeProvider>
  );
}

export default App;
