import styles from "../../styles/Home/Marquee.module.scss";

const TEXT_ARR = [
  <p className={styles.textItem} key={1}>
    Core Academy
  </p>,
  <p className={styles.textItem} key={2}>
    Core Academy
  </p>,
  <p className={styles.textItem} key={3}>
    Core Academy
  </p>,
];

const Marquee = () => {
  return (
    <div className={styles.runningText}>
      <div className={styles.runningTextRow}>
        <div className={styles.runningTextFirst}>
          {TEXT_ARR.map((item) => {
            return item;
          })}
        </div>
        <div className={styles.runningTextSecond}>
          {TEXT_ARR.map((item) => {
            return item;
          })}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
