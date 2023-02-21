import CornerDecor from "../UI/CornerDecor/CornerDecor";

import styles from "../../styles/UserHistory/EarnedBedges.module.scss";

const EarnedBedges = () => {
  return (
    <div className={styles.bedgesWrapp}>
      <div className={styles.title}>
        <h3>Earned Badges</h3>
      </div>
      <CornerDecor />
      <div className={styles.box}>
        <div className={styles.iconsMainWrapp}>
          <img
            src="img/History/Group1.png"
            style={{ height: "60px", width: "60px" }}
          />
          <h3>I’m here!</h3>
        </div>
        <div className={styles.iconsMainWrapp}>
          <img src="img/History/Group2.png" />
          <h3>I know my business</h3>
        </div>
        <div className={styles.iconsMainWrapp}>
          <img src="img/History/Group3.png" />
          <h3>My second home</h3>
        </div>
        <div className={styles.iconsMainWrapp}>
          <img src="img/History/Group4.png" />
          <h3>Experienced</h3>
        </div>
        <div className={styles.iconsMainWrapp}>
          <img src="img/History/Group5.png" />
          <h3>Prospection</h3>
        </div>
        <div className={styles.iconsMainWrapp}>
          <img src="img/History/Group6.png" />
          <h3>Platform Hero</h3>
        </div>
        <div className={styles.iconsMainWrapp}>
          <img src="img/History/Group7.png" />
          <h3>Shield</h3>
        </div>
      </div>
    </div>
  );
};

export default EarnedBedges;
