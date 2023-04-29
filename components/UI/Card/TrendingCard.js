import React from "react";
import { useDispatch } from "react-redux";
import { toggleNewBooleanState } from "../../../store/mode/modeSlice"

import CornerDecor from "../CornerDecor/CornerDecor";

import styles from "../../../styles/UI/TrendingCards/Card.module.scss";

const TrendingCard = (props) => {
  const dispatch = useDispatch()
  let element = null;

  if (props.type === "one") {
    return (element = (
      <div className={styles.quizWrap}>
        <div className={styles.quiz}>
          <CornerDecor />
          <div className={styles.border}>
            <div className={styles.imgBox}>
              <img className={styles.img} src={props.img} alt="image" />
            </div>
            <div className={styles.content}>
              <h4 className={styles.h4}>{props.title}</h4>
              <p className={styles.p}>{props.subTxt}</p>
              <div className={styles.bottom}>
                <div className={styles.dot}></div>
                <div className={`${styles.itemDot} ${styles.level}`}>
                  {props.level}
                </div>
                <div className={styles.itemDot}>{props.category}</div>
                <div className={styles.itemDot}>{props.time} min</div>

                {/* this comented section is fo the "History page of users" */}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  } else if (props.type === "two") {
    return (element = (
      <div
        className={styles.quizWrap}
        onClick={() => { 
        props.setItem(props.card)
        dispatch(toggleNewBooleanState())
       }}
       >
        <div className={styles.quiz}>
          <CornerDecor />
          <div className={styles.border}>
            <div className={styles.imgBox}>
              <img className={styles.img} src={props.card.img} alt="image" />
            </div>
            <div className={styles.content}>
              <h4 className={styles.h4}>{ props.card.title}</h4>
              <p className={styles.p}>{props.card.subTxt}</p>
              <div className={styles.bottom}>
                <img src={props.card.vector} />
                <p className={styles.itemDot}>{props.card.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  } else if (props.type === "historyUsers") {
    return (element = (
      <div className={styles.container}>
        <div className={styles.box1}>
          <img src={props.img}/>
          <h4>asdwasdwa</h4>
        </div>
        <div className={styles.box2}>
          <>
            img
            title
            title
          </>
          <img src={props.vector} />
          <p>{props.date}</p>
        </div>
        <div className={styles.box3}>
          <h4 className={styles.h4}>{props.title}</h4>
          <img src={props.img}/>
          <p className={styles.p}>{props.subTxt}</p>
        </div>
      </div>
    ))};



  return element;
};

export default TrendingCard;
