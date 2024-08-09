import React, { useState } from 'react';

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: false },
    ]
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      { text: "Harper Lee", isCorrect: true },
      { text: "Mark Twain", isCorrect: false },
      { text: "Ernest Hemingway", isCorrect: false },
      { text: "F. Scott Fitzgerald", isCorrect: false },
    ]
  },
  {
    question: "What is the smallest prime number?",
    options: [
      { text: "0", isCorrect: false },
      { text: "1", isCorrect: false },
      { text: "2", isCorrect: true },
      { text: "3", isCorrect: false },
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      { text: "Mars", isCorrect: true },
      { text: "Venus", isCorrect: false },
      { text: "Jupiter", isCorrect: false },
      { text: "Saturn", isCorrect: false },
    ]
  },
  {
    question: "What is the boiling point of water?",
    options: [
      { text: "90°C", isCorrect: false },
      { text: "100°C", isCorrect: true },
      { text: "110°C", isCorrect: false },
      { text: "120°C", isCorrect: false },
    ]
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="parent">
      <h1>Quiz App</h1> <br/><br/><br/><br/>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizQuestions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizQuestions.length}
            </div>
            <div className="question-text">{quizQuestions[currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button 
                key={index} 
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;