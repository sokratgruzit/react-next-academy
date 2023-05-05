import { useState } from "react";

import Filter from "../UI/Filter/Filter";
import QuizCard from "../UI/Card/QuizCard";
import Pagination from "../UI/Pagination/Pagination";

import styles from "@/styles/Quizes/Quizes.module.scss";
import MotionLayout from "../UI/MotionLayout/MotionLayout";
import { motion } from "framer-motion";
import { COURSE_HELPER } from "../UI/Card/CourseHelper";

const QUIZZES_FILTER = [
  {
    title: "Level",
    items: [
      {
        title: "Begginer",
        amount: "(794)",
      },
      {
        title: "Advance",
        amount: "(203)",
      },
      {
        title: "Pro",
        amount: "(80)",
      },
    ],
  },
  // {
  //   title: "Category",
  //   items: [
  //     {
  //       title: "Blockchain",
  //     },
  //     {
  //       title: "Security",
  //     },
  //     {
  //       title: "Phyton",
  //     },
  //   ],
  // },
  {
    title: "Course Type",
    items: [
      {
        title: "Paid",
        amount: "(80)",
      },
      {
        title: "Free",
        amount: "(22)",
      },
    ],
  },
  {
    title: "Course Language",
    items: [
      {
        title: "English",
        amount: "(232)",
      },
      {
        title: "Deutsch",
        amount: "(212)",
      },
      {
        title: "Russian",
        amount: "(12)",
      },
      {
        title: "Pakistanian",
        amount: "(2)",
      },
    ],
  },
];

const Quizes = () => {
  const [filterlevel, setFilterlevel] = useState("");
  const [filtercategory, setFiltercategory] = useState("");

  const quizData = COURSE_HELPER;
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
  const filteredArray = COURSE_HELPER.filter(
    (item) => item.level === filterlevel
  );
  const filtercategoryArray = COURSE_HELPER.filter(
    (item) => item.category === filtercategory
  );

  return (
    <div className={`container textStyles ${styles.quizesWrapper}`}>
      <img
        className={`${styles.bg} img-absolute darkImg`}
        src="/img/Marketplace/background1.png"
      />
      <img
        className={`${styles.bg} img-absolute lightImg`}
        src="/img/Marketplace/background2.png"
      />
      <h1>Join the Millions for better learning</h1>
      <div className={styles.wrapper}>
        <Filter
          type={"quizzes-filter"}
          className={styles.filter}
          quizzFilter={QUIZZES_FILTER}
          filterChng={setFilterlevel}
          filtcategory={setFiltercategory}
        />
        <MotionLayout className={styles.productsWrapper}>
          <motion.div variants={cardVariants}>
            {!filterlevel && !filtercategory && (
              <div className={`${styles.products} ${"textStyles"}`}>
                {quizData.map((item, index) => {
                  return <QuizCard type={"default"} item={item} key={index} />;
                })}
              </div>
            )}

            {filterlevel && filtercategory && (
              <div className={`${styles.products} ${"textStyles"}`}>
                {filtercategoryArray.map((item, index) => {
                  return <QuizCard type={"default"} item={item} key={index} />;
                })}
              </div>
            )}

            {filterlevel && filtercategory && (
              <div className={`${styles.products} ${"textStyles"}`}>
                {filteredArray.map((item, index) => {
                  return <QuizCard type={"default"} item={item} key={index} />;
                })}
              </div>
            )}
          </motion.div>
        </MotionLayout>
      </div>
    </div>
  );
};

export default Quizes;
