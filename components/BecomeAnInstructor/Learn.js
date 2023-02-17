import styles from "../../styles/BecomeAnInstructor/Learn.module.scss";

const Learn = ({ data }) => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <div className={styles.learn}>
      <img
        className={styles.learnBackground}
        src="img/BecomeInstructor/background2.png"
      />
      <div className="container textStyles">
        <div className={styles.learnWrap}>
          <div className={styles.learnInner}>
            <h3 className={styles.learnTitle}>Together We Learn</h3>
          </div>
          <div className={styles.learnList}>
            {data?.advantages?.map((item, index) => {
              return (
                <div key={index} className={styles.listItem}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemBlockquote}>{item.teaser}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
