import TrendingCard from "../UI/Card/TrendingCard";

import styles from "../../styles/UserHistory/Quizzes.module.scss";

const FinishedQuizzes = ({ data }) => {
  return (
    <div className="textStyles container">
      <div className={styles.quizzesWrapp}>
        <h3>Quizzes</h3>
        <div className={styles.boxCourses}>
          {data.map((item, index) => {
            return (
              <TrendingCard
              type={"two"}
              key={index}
              img={item.img}
              title={item.title}
              subTxt={item.p}
              vector={item.vector}
              date={item.date}
            />
            )})}
        </div>
      </div>
      
    </div>
  );
};

export default FinishedQuizzes;