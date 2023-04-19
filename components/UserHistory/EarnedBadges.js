import CornerDecor from "../UI/CornerDecor/CornerDecor";

import styles from "../../styles/UserHistory/EarnedBadges.module.scss";

const EarnedBadges = ({ data }) => {
  return (
    <div className="textStyles container">
      <div className={styles.outer}>
      <CornerDecor />
      <h4>Earned Badges</h4>
      <div className={styles.itemWrap}>
        {data.length
          ? data.map((item, index) => {
              return (
                <div
                   className={styles.badge}
                   key={index}>
                  <img
                    className={styles.icon}
                    src={item.img}
                    alt="badge" 
                  />
                  <p>{item.title}</p>
                </div>
              );
            })
          : "No Badges Found"}
      </div>
    </div>
    </div>
    
  );
};

export default EarnedBadges;
