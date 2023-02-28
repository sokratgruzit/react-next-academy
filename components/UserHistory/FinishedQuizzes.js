import QuizCard from "../UI/Card/QuizCard";
import styles from "../../styles/UserHistory/Quizzes.module.scss";

const FinishedQuizzes = ({ data }) => {
  return (
    <div className="textStyles container">
      <div className={styles.quizzesWrapp}>
        <h3>Quizzes</h3>
        <div className={styles.boxCourses}>
          {data.map((item, index) => {
            return <QuizCard type={"row"} item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FinishedQuizzes;