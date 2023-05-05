import TrendingCard from "../UI/Card/TrendingCard";

import { title } from "process";
import { useState } from "react";

import styles from "../../styles/UserHistory/Quizzes.module.scss";

const FinishedQuizzes = ({ data, onClick ,setItem, changeWidthHandler, changeWidth }) => {

const changeColumnHandler = () => {
  changeWidthHandler(true)
  onClick()
};
  return (  
    <div className="textStyles container">
      <div className={styles.quizzesWrapp}>
        <h3>Quizzes</h3>
        <div
          className={styles.boxCourses}
          onClick={changeColumnHandler}
          style={{
            gridTemplateColumns: changeWidth ? "1fr" : '1fr 1fr',
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