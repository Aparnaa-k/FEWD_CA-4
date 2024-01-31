import React, { useState, useRef } from "react";
import "./QuestionBox.css";
import { useTheme } from "../components/ThemeProvider";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import questions from "../questions.js";
import Result from "./Result.jsx";

export default function QuestionBox() {
  const { theme, toggleTheme } = useTheme();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];
  const [playAgain, setPlayAgain] = useState(true);
  const handlePlayAgain = () => {
    setPlayAgain(false);
    setCurrentQuestionIndex(0);
    scoreRef.current = 0
  };
  const handleAgain = () => {
    setPlayAgain(true);
  };

  const scoreRef = useRef(0);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      localStorage.setItem("quizScore", scoreRef.current);
      handlePlayAgain()
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      scoreRef.current += 1;
      console.log(scoreRef.current);
    }
    handleNextQuestion();
  };

  const highlight = () => {
    const questionElement = document.getElementById("question-text");
    if (questionElement) {
      questionElement.style.color = "#ff0000";

    }
  };

  const removeHighlight = () => {
    const questionElement = document.getElementById("question-text");
    if (questionElement) {
      questionElement.style.color = "#0000ff" ;

    }
  };

  return (
    <>
      {playAgain ? (
        <div className={`question-box ${theme}-theme`}>
          <nav className="navbar">
            <h1 className="logo">QUIZ WORLD</h1>
            <div className="theme-change" onClick={toggleTheme}>
              {theme === "light" ? <BsFillMoonStarsFill /> : <BsMoonStars />}
            </div>
          </nav>
          <div className="heading">
            <h1>Questions for the day!!</h1>
          </div>
          <div className="question-div">
            <FaArrowAltCircleLeft onClick={handlePrevQuestion} />
            <p id="question-text">{currentQuestion.text}</p>
            <FaArrowAltCircleRight onClick={handleNextQuestion} />
          </div>

          <div className="options">
            {questions[currentQuestionIndex].options.map((option) => (
              <button
                key={option.id}
                className="option-button"
                onClick={() => handleAnswerClick(option.isCorrect)}
              >
                {option.text}
              </button>
            ))}
          </div>
          <div className="highlight-bar">
            <div className="option highlights">
              <button onClick={highlight}>Hightlight</button>
              <button onClick={removeHighlight}>Remove Highlight</button>
            </div>
          </div>
        </div>
      ) : (
        <Result handleAgain={handleAgain} />
      )}
    </>
  );
}
