import React, { useState } from "react";
import "./QuestionBox.css";
import { useTheme } from "../components/ThemeProvider";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";
import questions from "../questions.js";

export default function QuestionBox() {
  const { theme, toggleTheme } = useTheme();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(1);
  const currentQuestion = questions[currentQuestionIndex];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length-1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      window.location = "Result.jsx";
      localStorage.setItem("quizScore", score);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      console.log(score);
    }
    handleNextQuestion();
  };

  return (
    <div className={`question-box ${theme}-theme`} >
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
    </div>
  );
}

