import HistoryHeader from "../../components/HistoryPage/HistoryHeader";
import EarnedBedges from "../../components/HistoryPage/EarnedBedges";

import styles from "../../styles/UserHistory/UserHistory.module.scss";

const UserHistory = () => {
  return (
    <div>
      <HistoryHeader />
      <div className={`${styles.mainContentWrapp} container`}>
        <EarnedBedges />
        {/* <Quizzes /> */}
      </div>
    </div>
  );
};

export default UserHistory;
