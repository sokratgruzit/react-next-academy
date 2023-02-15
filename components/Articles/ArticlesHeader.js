import { useState } from "react";

import Tags from "../UI/Tags/Tags";
import FilterTab from "./FilterTab";

import styles from "../../styles/Articles/ArticlesHeader.module.scss";

const CATEGORIS_BTN_DATA = [
  {
    name: "security",
  },
  {
    name: "education",
  },
  {
    name: "featured",
  },
  {
    name: "releases",
  },
  {
    name: "trading",
  },
  {
    name: "blockchain",
  },
  {
    name: "essentials",
  },
];
const DIFICULITY_BTN_DATA = [
  {
    name: "beginner",
    customStyle: "dificulitycolorOptionGreen",
  },
  {
    name: "intermediate",
    customStyle: "dificulitycolorOptionPurple",
  },
  {
    name: "advance",
    customStyle: "dificulitycolorOptionBlue",
  },
  {
    name: "pro",
    customStyle: "dificulitycolorOptionRed",
  },
];
const TOPICS_BTN_DATA = [
  {
    name: "Trading",
  },
  {
    name: "security",
  },
  {
    name: "python",
  },
  {
    name: "blockchain",
  },
  {
    name: "crypto",
  },
];

export default function ArticlesHeader() {
  const [activeTab, setActiveTab] = useState(0);
  const [items, setItems] = useState([
    {
      name: <Tags data={CATEGORIS_BTN_DATA} type="categories" />,
      completed: false,
    },
    { name: <Tags data={TOPICS_BTN_DATA} type="topics" />, completed: true },
    {
      name: <Tags data={DIFICULITY_BTN_DATA} type="dificulity" />,
      completed: false,
    },
  ]);

  const handleTabChange = (index) => {
    setActiveTab(index);
    if (index === 0) {
      setItems(items);
    } else if (index === 1) {
      setItems(items.filter((item) => !item.completed));
    } else if (index === 2) {
      setItems(items.filter((item) => item.completed));
    }
  };

  const tabs = [
    { label: "Categories /" },
    { label: "Difficulty /" },
    { label: "Tags" },
  ];

  return (
    <div className={styles.articlesHeader}>
      <div className={`lightImg ${styles.imgBox}`}>
        <img src="/img/Article/articlesBgL.png" alt="" />
      </div>
      <div className={`darkImg ${styles.imgBox}`}>
        <img src="/img/Article/articlesBg.png" alt="" />
      </div>
      <h2 className={styles.title}>Articles</h2>
      <div>
        <FilterTab tabs={tabs} onTabChange={handleTabChange} />
        <ul>
          {items.map((item, index) => (
            <li
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                alignItems: "center",
                margin: "89px auto",
              }}
              key={index}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
