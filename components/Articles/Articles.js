import Card from "../UI/Card/Card";
import SwiperWrapper from "../UI/SwiperWrapper/SwiperWrapper";

import styles from "../../styles/Articles/Articles.module.scss";
import { v4 as uuidv4 } from 'uuid';

function Articles({ data }) {
  return (
    <div className={styles.list}>
      {data?.length > 0 ? (
        <SwiperWrapper>
          {data?.map((item) => {
            let uid = uuidv4();
            
            return (
              <div key={uid} className={styles.item}>
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
