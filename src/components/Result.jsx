import React from "react";
import "./Result.css";
import { useTheme } from "../components/ThemeProvider";

const Result = ({ handleAgain }) => {
  const { theme } = useTheme();
  const quizScore = localStorage.getItem("quizScore");

  const calculatePercentage = () => {
    const percentage = (quizScore / 5) * 100;
    return `${percentage.toFixed(0)}%`;
  };

  return (
    <div className={`result-page ${theme}-theme`}>
      <div className="display-board">
        <div className="Result">
          <h1>Congratulations!</h1>
        </div>
        <div className="report">
          <h2>{quizScore} out of 5 is Correct</h2>
          <h2>Your Score : {calculatePercentage()}</h2>
          <button className="play-again" onClick={handleAgain}>
            Restart the quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
