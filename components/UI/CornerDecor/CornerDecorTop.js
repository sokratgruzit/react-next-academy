import styles from "../../../styles/UI/CornerDecor/CornerDecor.module.scss";

const CornerDecorTop = () => {
  return (
    <div className={`${styles.decorBoxWrapTop}`}>
      <div className={`${styles.decorBox} ${styles.decorBox__bottomRight}`}>
        <div className={`${styles.decorBox__bottomRight__bottom}`}></div>
        <div className={`${styles.decorBox__bottomRight__right}`}></div>
      </div>
      <div className={`${styles.decorBox} ${styles.decorBox__bottomLeft}`}>
        <div className={`${styles.decorBox__bottomLeft__bottom}`}></div>
        <div className={`${styles.decorBox__bottomLeft__left}`}></div>
      </div>
    </div>
  );
};

export default CornerDecorTop;
