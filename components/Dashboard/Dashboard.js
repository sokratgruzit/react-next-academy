import { data } from "../UI/Card/helper";
import { COURSE_HELPER } from "../UI/Card/CourseHelper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import RelatedThemes from "./RelatedThemes";
import TrendingCard from "../UI/Card/TrendingCard";
import CourseCard from "../UI/Card/CourseCard";

import styles from "../../styles/Dashboard/Dashboard.module.scss";

const Dashboard = () => {
  // const filterData = useSelector((state) => state.utilsState?.filterData);

  return (
    <>
      <div className={`${styles.courseContainer} textStyles`}>
        <RelatedThemes title="Course You Might Like" />
        <div className={styles.swiperOne}>
          <Swiper
            spaceBetween={40}
            slidesPerView={3.4}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 1.4,
                spaceBetween: 16,
              },
              1023: {
                slidesPerView: 2.4,
                spaceBetween: 32,
              },
              1365: {
                slidesPerView: 3.4,
                spaceBetween: 40,
              },
            }}
          >
            {COURSE_HELPER?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <CourseCard
                    type={"row"}
                    img={item.img}
                    title={item.title}
                    price={item.price}
                    level={item.level}
                    lang={item.lang}
                    time={item.time}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <RelatedThemes title="Quiz You Might Like" />
        <div className={styles.swiperTwo}>
          <Swiper
            spaceBetween={40}
            slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              1023: {
                slidesPerView: 1.3,
                spaceBetween: 32,
              },
              1365: {
                slidesPerView: 1.5,
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

export default Dashboard;
