import TrendingCard from "../UI/Card/TrendingCard";

import styles from "../../styles/UserHistory/Quizzes.module.scss";
import { title } from "process";
import { useState } from "react";


const FinishedQuizzes = ({ data, onClick ,setItem }) => {
const [ clicked, setClicked ] = useState(false);
const handleClick = () => {
  setClicked(!clicked);
  onClick()
};
  return (  
    <div className="textStyles container">
      <div className={styles.quizzesWrapp}>
        <h3>Quizzes</h3>
        <div
          className={styles.boxCourses}
          onClick={handleClick}
          style={{
            gridTemplateColumns: clicked ? "1fr" : " 1fr 1fr",
          }}
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