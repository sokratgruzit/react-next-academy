import { data } from "../UI/Card/helper";
import TrendingCard from "../UI/Card/TrendingCard";
import RelatedThemes from "./RelatedThemes";

import styles from "../../styles/Dashboard/MyQuizes.module.scss";

function MyQuizzes() {
  return (
    <div className={`textStyles ${styles.quizzesContainer}`}>
      <RelatedThemes title="Quizzes You Might Like" />
      {data.map((item, index) => {
        return (
          <TrendingCard
            type={"one"}
            key={index}
            img={item.img}
            title={item.title}
            subTxt={item.subTxt}
            level={item.level}
            category={item.category}
            time={item.time}
          />
        );
      })}
    </div>
  );
};

export default MyQuizzes;
