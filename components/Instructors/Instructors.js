import { motion } from "framer-motion";

import CornerDecor from "../UI/CornerDecor/CornerDecor";

import styles from "../../styles/Instructors/Instructors.module.scss";
import { useRouter } from "next/router";

const Instructors = () => {
  const router = useRouter();
  const INSTRUCTOR_DATA = [
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

  const CARD_VARIANTS = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <div className={`${styles.box} textStyles`}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h1>Instructors</h1>
        </div>
        <img src='/img/InstructorImgs/bgheder.png' />
      </div>
      <div className={styles.bottom}>
        <div className={styles.img}>
          <img className={styles.bottomImg} src='/img/InstructorImgs/bgbottom.png' />
        </div>
        <div className={styles.container}>
          {INSTRUCTOR_DATA.map((item) => {
            return (
                <motion.div
                    initial='offscreen'
                    whileInView='onscreen'
                    viewport={{ once: true, amount: 0.4 }}
                    key={item.id}
                    variants={CARD_VARIANTS}
                    className={styles.instructorList}
                    onClick={() => router.push(`/instructors/${item.id}`)}
                    style={{ zIndex: '150'}}
                >
                    <CornerDecor />
                    <div className={styles.imgContainer}>
                        <img src={item.img} alt='instructor img' />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.names}>{item.name}</h3>
                        <p className={`${styles.text}`}>{item.text}</p>
                    </div>
                </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Instructors;