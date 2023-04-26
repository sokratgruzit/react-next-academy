import Card from "../UI/Card/Card";
import SwiperWrapper from "../UI/SwiperWrapper/SwiperWrapper";
import uniqueId from "lodash.uniqueid";

import styles from "../../styles/Articles/Articles.module.scss";

function Articles({ data }) {
  return (
    <div className={styles.list}>
      {data?.length > 0 ? (
        <SwiperWrapper>
          {data?.map((item) => {
            return (
              <div key={uniqueId('article_') + item._id} className={styles.item}>
                <Card data={item} type={"default"} />
              </div>
            )
          })}
        </SwiperWrapper>
      ) : null}
    </div>
  );
}

export default Articles;
