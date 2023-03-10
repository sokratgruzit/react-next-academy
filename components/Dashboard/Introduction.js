import CornerDecorGreen from "../UI/CornerDecor/CornerDecorGreen";
import CornerDecorTop from "../UI/CornerDecor/CornerDecorTop";

import styles from "../../styles/Dashboard/Introduction.module.scss";

const Introduction = () =>  {
  return (
    <div className={`${styles.aboutUser} textStyles`}>
      <div className={styles.text}>
        <div className={styles.introduction}>
          <h5>hello,</h5>
          <h1>konstantin</h1>
        </div>
        <p className={styles.day}>26 September 2021, Sunday</p>
      </div>
      <div className={styles.boxes}>
        <div className={styles.coursedPurchased}>
          <CornerDecorGreen />
          <p className={styles.numberGreen}>16</p>
          <p className={styles.cursed}>coursed purchased</p>
        </div>
        <div className={styles.totalSpent}>
          <CornerDecorTop />
          <p className={styles.numberBlue}>$146.35</p>
          <p className={styles.total}>total spent</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
