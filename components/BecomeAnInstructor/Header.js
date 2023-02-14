import styles from "../../styles/BecomeAnInstructor/Header.module.scss";

const Header = ({ data }) => {
  return (
    <div className={styles.headBackgroundWrap}>
      <img
        className={`${styles.bgL} ${styles.headBackground}`}
        src="img/BecomeInstructor/background1Light.png"
        alt="logo"
      />
      <img
        className={`${styles.bg} ${styles.headBackground}`}
        src="img/BecomeInstructor/background1.png"
        alt="logo"
      />
      <div className="container">
        <div className={styles.head}>
          <p className={styles.paragraphSml}>Your journey awaits</p>
          <h1 className={styles.paragraphBig}>
            {data?.additional_info?.title}
          </h1>
          <h1 className={styles.paragraphBig}>
            <span>{data?.additional_info?.teaser}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
