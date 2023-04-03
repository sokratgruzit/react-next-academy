import Tags from "../UI/Tags/Tags";
import ArticlesTabs from "./ArticlesTabs";

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
  const tabs = [
    {
      id: 0,
      label: "Categories /",
      content: <Tags data={CATEGORIS_BTN_DATA} type="categories" />,
    },
    {
      id: 2,
      label: "Difficulty /",
      content: <Tags data={TOPICS_BTN_DATA} type="topics" />,
    },
    {
      id: 3,
      label: "Tags",
      content: <Tags data={DIFICULITY_BTN_DATA} type="dificulity" />,
    },
  ];

  return (
    <div className={styles.articlesHeader}>
      <h2 className={styles.title}>Articles</h2>
      <ArticlesTabs tabs={tabs} />
    </div>
  );
}
