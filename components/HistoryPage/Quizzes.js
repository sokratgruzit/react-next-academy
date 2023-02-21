import Courses from "../UI/Quizes/Courses";

import styles from "../../styles/UserHistory/Quizzes.module.scss";

const Quizzes = () => {
  const HISTORY_DATA = [
    {
      title: "Introduction to Superfluid: Stream money every second",
      p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
      img: "img/History/img1.png",
      vector: "/img/CommonComponents/courseQuizes/vector.svg",
      date: "12.4.2022",
    },
    {
      title: "Introduction to Superfluid: Stream money every second",
      p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
      img: "img/History/img2.png",
      vector: "/img/CommonComponents/courseQuizes/vector.svg",
      date: "12.4.2022",
    },
    {
      title: "Introduction to Superfluid: Stream money every second",
      p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
      img: "img/History/img2.png",
      vector: "/img/CommonComponents/courseQuizes/vector.svg",
      date: "12.4.2022",
    },
    {
      title: "Introduction to Superfluid: Stream money every second",
      p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
      img: "img/History/img2.png",
      vector: "/img/CommonComponents/courseQuizes/vector.svg",
      date: "12.4.2022",
    },
    {
      title: "Introduction to Superfluid: Stream money every second",
      p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
      img: "img/History/img2.png",
      vector: "/img/CommonComponents/courseQuizes/vector.svg",
      date: "12.4.2022",
    },
  ];

  return (
    <div className={`${styles.quizzesWrapp} ${styles.animeWrapp} textStyles`}>
      <h3>Quizzes</h3>
      <div className={styles.boxCourses}>
        {HISTORY_DATA.map((item, index) => {
          return (
            <Courses
              type={"two"}
              img={item.img}
              subTxt={item.p}
              title={item.title}
              vector={item.vector}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Quizzes;
