import { useState } from "react";

import styles from "../../../styles/UI/Tabs/Tabs.module.scss";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabButtons}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={index === activeTab ? styles.active : ""}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
