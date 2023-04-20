import React from "react";
import Link from "next/link";

import CornerDecor from "../CornerDecor/CornerDecor";

import styles from "@/styles/UI/Card/QuizCard.module.scss";

const QuizCard = ({ type, item }) => {
  const cardVariants = {
    offscreen: {
      y: 80,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  let card = null;
  const slug = item.title.toLowerCase().replace(/\s+/g, "-");

  if (type === "default") {
    card = (
      <Link href={`/quizzes/${slug}`} className={styles.product}>
        <div className={styles.test}>
          <CornerDecor />
          <div className={styles.img}>
            <img src={item.img} />
          </div>

          <div className={styles.text}>
            <p>{item.title}</p>
          </div>
          <div className={styles.info}>
            <div className={styles.info__item}>
              <div className={styles.div1}></div>
              <h6>{item.level}</h6>
            </div>
            <div className={styles.info__item}>
              <div className={styles.div2}></div>
              <h6>{item.category}</h6>
            </div>
            <div className={styles.info__item}>
              <div className={styles.div2}></div>
              <h6>{item.time}</h6>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  return card;
};

export default QuizCard;
