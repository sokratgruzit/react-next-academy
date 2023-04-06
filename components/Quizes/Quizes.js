import { useState } from "react"

import Filter from "../UI/Filter/Filter";
import QuizCard from "../UI/Card/QuizCard";

import styles from "@/styles/Quizes/Quizes.module.scss";
import MotionLayout from "../UI/MotionLayout/MotionLayout";
import { motion } from "framer-motion";



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
  {
    title: "Category",
    items: [
      {
        title: "Blockchain",
      },
      {
        title: "Security",
      },
      {
        title: "Phyton",
      },
    ],
  },
];
const DUMMY_DATA = [
  {
    img: "img/quiz/course1.png",
    title: "Kali Linux For Beginners",
    level: "Begginer",
    category: "Blockchain",
    time: "10 Hours",
  },
  {
    img: "img/quiz/course1.png",
    title: "Kali Linux For Beginners",
    level: "Pro",
    category: "Phyton",
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
    level: "Begginer",
    category: "Phyton",
    time: "10 Hours",
  },
  {
    img: "img/quiz/course1.png",
    title: "Kali Linux For Beginners",
    level: "Advance",
    category: "Blockchain",
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
  const [filterlevel ,setFilterlevel] = useState('')
  const [filtercategory ,setFiltercategory] = useState('')
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
  const filteredArray = DUMMY_DATA.filter(item => item.level  === filterlevel);
  const filtercategoryArray = DUMMY_DATA.filter(item =>  item.category === filtercategory );

    return (
    <div className={`container ${styles.wrapper}`}>
      <Filter type={"quizzes-filter"} className={styles.filter} quizzFilter={QUIZZES_FILTER}  filterChng={setFilterlevel}  filtcategory={setFiltercategory} />
      <MotionLayout className={styles.productsWrapper}>
        <motion.div variants={cardVariants}>

        {!filterlevel && !filtercategory &&  <div className={`${styles.products} ${"textStyles"}`}>
            {quizData.map((item, index) => {
              return <QuizCard type={"default"} item={item} key={index} />;
            })}
          </div>}

        {filterlevel && filtercategory &&  <div className={`${styles.products} ${"textStyles"}`}>
            {filtercategoryArray.map((item, index) => {
              return <QuizCard type={"default"} item={item} key={index} />;
            })}
          </div>}

          {filterlevel && filtercategory &&  <div className={`${styles.products} ${"textStyles"}`}>
            {filteredArray.map((item, index) => {
              return <QuizCard type={"default"} item={item} key={index} />;
            })}
          </div>}

        </motion.div>
      </MotionLayout>
    </div>
  );
};

export default Quizes;
