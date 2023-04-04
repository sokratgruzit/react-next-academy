import React from "react";
import styles from "./QuizButton.module.scss";

const QuizButton = ({ onClick, className, label }) => {
  return (
    <Button
      onClick={onClick}
      className={`quizBtn ${className} ${styles.quizButton}`}
      title={label}
      type={"transparent-btn"}
    />
  );
};

export default QuizButton;
