import TrendingCard from "../UI/Card/TrendingCard";

import styles from "../../styles/UserHistory/Quizzes.module.scss";
import { title } from "process";

const FinishedQuizzes = ({ data, onClick ,setItem }) => {
  return (  
    <div className="textStyles container">
      <div className={styles.quizzesWrapp}>
        <h3>Quizzes</h3>
        <div
          className={styles.boxCourses}
          onClick={onClick}
        >
          {data.map((item, index) => {
            return (
              <TrendingCard 
                type={"two"}
                key={index}
                setItem={setItem}
                card={{
                  img: item.img,
                  title: item.title,
                  subTxt: item.p,
                  vector: item.vector,
                  date: item.date,
                }}
              />            
            )})}
        </div>
      </div>
    </div>
  );
};

export default FinishedQuizzes;