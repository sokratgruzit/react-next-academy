import React, { useState } from "react";

import styles from "../../styles/Articles/ArticlesHeader.module.scss";

const FilterTab = ({ tabs, onTabChange }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
    onTabChange(index);
  };

  return (
    <div className={styles.filterTab}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`${styles.tab} ${
            index === activeTabIndex ? styles.active : ""
          }`}
          onClick={() => handleTabClick(index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTab;
