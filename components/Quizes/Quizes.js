import React from "react";
import Card from "../UI/Card/Card";
import Filter from "./Filter";

import styles from "@/styles/Quizes/Quizes.module.scss";

const Quizes = () => {
  const quizData = [];
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
    <div>
      <Filter className={styles.filter} />
      <div className={`${styles.products} ${"textStyles"}`}>
        {quizData.map((item, index) => {
          return (
            <MotionLayout className={styles.product} key={index}>
              <Link href={"/allQuiz/quiz-inner"}>
                <motion.div variants={cardVariants}>
                  <Card type="default" data={item} />
                </motion.div>
              </Link>
            </MotionLayout>
          );
        })}
      </div>
    </div>
  );
};

export default Quizes;
