import React from "react";
import CornerDecor from "../CornerDecor/CornerDecor";
import styles from "@/styles/UI/Card/QuizCard.module.scss";
import MotionLayout from "../MotionLayout/MotionLayout";
import Link from "next/link";

import { motion } from "framer-motion";

const QuizCard = ({ item }) => {
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
  return (
    <Link href={"/quizes/2"} className={styles.product}>
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
};

export default QuizCard;
