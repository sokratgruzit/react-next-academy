import { motion } from "framer-motion";

import styles from "../../styles/BecomeAnInstructor/BeginnerSteps.module.scss";

const BeginnerSteps = ({ data }) => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      innerHeight: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
      },
    },
  };
  const childLine = {
    offscreen: {
      top: "-100%",
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 30,
      },
    },
  };

  return (
    <div className={styles.beginnerSteps}>
      <img
        className={`${styles.background} ${styles.bgL}`}
        src="img/BecomeInstructor/background3Light.png"
      />
      <img
        className={`${styles.background} ${styles.bg}`}
        src="img/BecomeInstructor/background3.png"
      />
      <div className="container textStyles">
        <h2 className={styles.title}>How To Begin</h2>
        <div className={styles.steps}>
          {data?.advantages?.map((item, index) => {
            return (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                className={styles.itemWrap}
                key={index}
              >
                <motion.div
                  variants={cardVariants}
                  key={index}
                  className={`${styles.item} ${
                    index % 2 ?? 0 ? styles.right : ""
                  }`}
                >
                  <div className={styles.text}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <h4 className={styles.itemQuote}>{item.teaser}</h4>
                  </div>
                  <div className={styles.num}>{index + 1}</div>
                  <div
                    className={styles.conectionLineWrapp}
                    style={{
                      display:
                        index + 1 === data.advantages.length ? "none" : "block",
                    }}
                  >
                    <motion.div
                      variants={childLine}
                      className={styles.conectionLine}
                    ></motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BeginnerSteps;
