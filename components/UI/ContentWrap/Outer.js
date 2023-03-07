import styles from "../../../styles/UI/ContentWrap/Outer.module.scss";

const Outer = ({ title, element }) => {
  return (
    <div className={styles.outer}>
      <img
        className={`${"darkImg"} ${styles.background}`}
        src="/img/InstructorImgs/bgheder.png"
      />
      <img
        className={`${"lightImg"} ${styles.background}`}
        src="/img/InstructorImgs/bgLight.png"
      />
      <div className={`${"container textStyles"} ${styles.inner}`}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.element}>{element}</div>
    </div>
  );
};

export default Outer;
