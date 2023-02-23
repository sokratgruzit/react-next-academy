import React from "react";

import CornerDecor from "../CornerDecor/CornerDecor";

import styles from "../../../styles/UI/Card/CourseCard.module.scss";

export default function CourseCard(props) {
  return (
    <div className={styles.products}>
      <CornerDecor />
      <div className={styles.product}>
        <div className={styles.imgBox}>
          <img className={`img-absolute ${styles.img}`} src={props.img} />
        </div>
        <div className={styles.wrap}>
          <div className={styles.text}>
            <p>{props.title}</p>
            <h4>{props.price}</h4>
          </div>
          <div className={styles.info}>
            <div className={styles.info__item}>
              <div className={styles.div1}></div>
              <p>{props.level}</p>
            </div>
            <div className={styles.info__item}>
              <div className={styles.div2}></div>
              <p>{props.lang}</p>
            </div>
            <div className={styles.info__item}>
              <div className={styles.div2}></div>
              <p>{props.time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
