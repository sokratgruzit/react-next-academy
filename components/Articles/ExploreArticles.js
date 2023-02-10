import useFetch from "../../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";

import Article from "./Article";

import styles from "../../styles/Articles/ExploreArticles.module.scss";
import "swiper/css";

function ExploreArticles({ id, category }) {
  const { data } = useFetch(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?id_not=${id}&category=${category}&limit=3`
  );

  return (
    <div className={styles.exploreArticles}>
      <div className='container'>
        <h2 className={styles.title}>Explore more</h2>
      </div>

      <div>
        {data?.docs?.length ? (
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1023: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {data.docs.map((itemData) => {
              return (
                <SwiperSlide key={itemData._id}>
                  <div className={styles.item}>
                    <Article data={itemData} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
}

export default ExploreArticles;
