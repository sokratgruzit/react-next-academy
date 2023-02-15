import Link from "next/link";

import styles from "../../styles/BecomeAnInstructor/Ending.module.scss";

const Ending = () => {
  return (
    <div className={`${"container textStyles"} ${styles.Ending}`}>
      <div className={styles.Ending}>
        <div className={styles.EndingItem}>
          <h3 className={styles.itemTitle}>Become an instructor today</h3>
          <h5 className={styles.itemTeaser}>
            Join an expanding community of elite instructors delivering
            world-class educational content.
          </h5>
          <Link href="/instructorRegistration" className={styles.itemHotLink}>
            Need more details before you start? Click here to learn more.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ending;
