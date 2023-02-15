import Link from "next/link";

import styles from "../styles/404.module.scss";

function NotFound() {
  return (
    <div className="not-found textStyles">
      <div className={styles.outer}>
        <img className={styles.background} src="img/NotFound/background1.png" />
        <div className={styles.inner}>
          <h1 className={styles.title}>Error 404</h1>
          <h4 className={styles.teaser}>
            Your browser sent a request that this server could not understand
          </h4>
          <Link className={styles.mainBtn} href="/">
            <div className={styles.btn}>Go Back To Main Page</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
