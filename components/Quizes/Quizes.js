import React from "react";

import Filter from "../UI/Filter/Filter";
import QuizCard from "../UI/Card/QuizCard";

import styles from "@/styles/Quizes/Quizes.module.scss";
import MotionLayout from "../UI/MotionLayout/MotionLayout";
import { motion } from "framer-motion";

const DUMMY_DATA = [
  {
    img: "img/quiz/course1.png",
    title: "Kali Linux For Beginners",
    level: "Pro",
    category: "Security",
    time: "10 Hours",
  },
  {
    img: "img/quiz/course1.png",
    title: "Kali Linux For Beginners",
    level: "Pro",
    category: "Security",
    time: "10 Hours",
  },
  {
    img: "img/quiz/course1.png",
    title: "Kali Linux For Beginners",
    level: "Pro",
    category: "Security",
    time: "10 Hours",
  },
  {
    img: "img/quiz/course1.png",
    title: "Kali Linux For Beginners",
    level: "Pro",
    category: "Security",
    time: "10 Hours",
  },
  {
    img: "img/quiz/course1.png",
    title: "Kali Linux For Beginners",
    level: "Pro",
    category: "Security",
    time: "10 Hours",
  },
  {
    img: "img/quiz/course1.png",
    title: "Kali Linux For Beginners",
    level: "Pro",
    category: "Security",
    time: "10 Hours",
  },
  {
    img: "img/quiz/course1.png",
    title: "Kali Linux For Beginners",
    level: "Pro",
    category: "Security",
    time: "10 Hours",
  },
];

const Quizes = () => {
  const quizData = DUMMY_DATA;
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
    <div className={`container ${styles.wrapper}`}>
      <Filter type={"quizzes-filter"} className={styles.filter} />
      <MotionLayout className={styles.productsWrapper}>
        <motion.div variants={cardVariants}>
          <div className={`${styles.products} ${"textStyles"}`}>
            {quizData.map((item, index) => {
              return <QuizCard type={"default"} item={item} key={index} />;
            })}
          </div>
        </motion.div>
      </MotionLayout>
    </div>
  );
};

export default Quizes;
