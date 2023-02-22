import { motion } from "framer-motion";

import InstructorCard from "../UI/Card/InstructorCard";

import styles from "../../styles/Instructors/Instructors.module.scss";

const Instructors = () => {
  const DUMMY__DATA = [
    {
      id: 0,
      text: "Making sure that our products exceed customer expectations for quality and performance.",
      name: "Jack Jones",
      img: "/img/InstructorImgs/JackJones.png",
    },
    {
      id: 1,
      text: "We are here to meet your demand and tech the most beneficial way for you in Personal.",
      name: "Abdurashid Aydar",
      img: "/img/InstructorImgs/AbdurashidAydar.png",
    },
    {
      id: 2,
      text: "Making sure that our products exceed customer expectations for quality and performance, and we are here to meet your demand and tech the most beneficial way for you in Personal.",
      name: "Christian Norman",
      img: "/img/InstructorImgs/ChristianNorman.png",
    },
  ];
  const instructorData = DUMMY__DATA;

  return (
    <div className={styles.instructors}>
      <img
        className={`darkImg ${styles.background}`}
        src="/img/InstructorImgs/bgbottom.png"
      />
      <div className="container">
        <InstructorCard data={instructorData} />
      </div>
    </div>
  );
};

{
  /* <div className={styles.title}>
          <h1>Instructors</h1>
        </div> */
}
{
  /* <wimg className="darkImg" src="/img/InstructorImgs/bgheder.png" /> */
}
{
  /* <img className="lightImg" src="/img/InstructorImgs/bgLight.png" /> */
}
{
  /* </div> */
}
{
  /* <div className={styles.bottom}>
        <div className={styles.img}>
          <img
            className={`darkImg ${styles.bottomImg}`}
            src="/img/InstructorImgs/bgbottom.png"
          />
        </div>
        <div className={`${styles.container} container`}>
          {INSTRUCTOR_DATA.map((item) => {
            return (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.4 }}
                key={item.id}
                variants={CARD_VARIANTS}
                className={styles.instructorList}
                onClick={() => router.push(`/instructors/${item.id}`)}
                style={{ zIndex: "150" }}
              >
                <CornerDecor />
                <div className={styles.imgContainer}>
                  <img src={item.img} alt="instructor img" />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.names}>{item.name}</h3>
                  <p className={`${styles.text}`}>{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div> */
}

export default Instructors;
