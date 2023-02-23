import styles from "../../../styles/UI/CornerDecor/CornerDecor.module.scss";

const CornerDecorGreen = () => {
  return (
    <div className={`${styles.decorBoxWrapGreen}`}>
      <div
        className={`${styles.decorBoxGreen} ${styles.decorBoxGreen__bottomRight}`}
      >
        <div className={`${styles.decorBoxGreen__bottomRight__bottom}`}></div>
        <div className={`${styles.decorBoxGreen__bottomRight__right}`}></div>
      </div>
      <div
        className={`${styles.decorBoxGreen} ${styles.decorBoxGreen__bottomLeft}`}
      >
        <div className={`${styles.decorBoxGreen__bottomLeft__bottom}`}></div>
        <div className={`${styles.decorBoxGreen__bottomLeft__left}`}></div>
      </div>
    </div>
  );
};

export default CornerDecorGreen;
