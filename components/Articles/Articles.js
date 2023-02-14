import Link from "next/link";

import Card from "../UI/Card/Card";
import SwiperWrapper from "../UI/SwiperWrapper/SwiperWrapper";

import styles from "../../styles/Articles/Articles.module.scss";

function Articles({ title, data }) {
  return (
      <div className={styles.list}>
        {data?.docs?.length ? (
          <SwiperWrapper>
            {data?.docs.map((item, index) => (
              <div key={index} className={styles.item}>
                <Card data={item} type={"default"} />
              </div>
            ))}
          </SwiperWrapper>
        ) : null}
      </div>
  );
}

export default Articles;
