import React, { useState } from "react";
import "./App.css";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  const [playAgain, setPlayAgain] = useState(false);

  const handlePlayAgain = () => {
    setPlayAgain(true);
  };

  return (
    <ThemeProvider>
      <div className="app">
        {playAgain ? <QuestionBox /> : <Result onPlayAgain={handlePlayAgain} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
