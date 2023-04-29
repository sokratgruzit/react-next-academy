import Tags from "../UI/Tags/Tags";
import ArticlesTabs from "./ArticlesTabs";
import { connect } from "react-redux";

import styles from "../../styles/Articles/ArticlesHeader.module.scss";

const ArticlesHeader = ({ commonData }) => {
  const { categories, levels, tags } = commonData;

  const tabs = [
    {
      id: 0,
      label: "Categories /",
      content: <Tags data={categories} type="categories" />,
    },
    {
      id: 2,
      label: "Difficulty /",
      content: <Tags data={levels} type="difficulty" />,
    },
    {
      id: 3,
      label: "Tags",
      content: <Tags data={tags} type="topics" />,
    },
  ];

  return (
    <div className={styles.articlesHeader}>
      <h2 className={styles.title}>Articles</h2>
      {categories && <ArticlesTabs tabs={tabs} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    commonData: state.commonData,
  };
};

export default connect(mapStateToProps, null)(ArticlesHeader);
