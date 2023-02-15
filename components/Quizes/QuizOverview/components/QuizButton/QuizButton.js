import React from "react";
import styles from "./QuizButton.module.scss";

const QuizButton = ({ onClick, className, label }) => {
  return (
    <button onClick={onClick} className={`${className} ${styles.quizButton}`}>
      {label}
    </button>
  );
};

export default QuizButton;
