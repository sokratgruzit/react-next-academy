import { data } from "../UI/Card/helper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import TrendingCard from "../UI/Card/TrendingCard";

import styles from "../../styles/Quizes/RelatedQuizes.module.scss";
const RelatedQuizes = () => {
  // const filterData = useSelector((state) => state.utilsState?.filterData);

  return (
    <>
      <div className={`textStyles container ${styles.quizes}`}>
        <h3 className={styles.teaser}>Quiz You Might Like</h3>
        <div className={styles.swiper}>
          <Swiper
            spaceBetween={40}
            slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 0.8,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              1023: {
                slidesPerView: 1.5,
                spaceBetween: 32,
              },
              1365: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
          >
            {data.map((item, index) => {
              return (
                <SwiperSlide key={index}>
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
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default RelatedQuizes;
