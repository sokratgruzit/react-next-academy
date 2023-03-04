import Filter from "../UI/Filter/Filter";

import styles from "../../styles/Market/Market.module.scss";

function Market() {
  return (
    <div className="container">
      <div className={styles.wraper}>
        <div className={styles.font51}>
          Join the Millions for better learning
        </div>
        <img className={styles.bg} src="/img/Marketplace/background1.png" />
        <div className={styles.content}>
          <Filter type={"market-filter"} className={styles.filter} />
        </div>
      </div>
    </div>
  );
}

export default Market;
