import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "../../../styles/UI/Tabs/Tabs.module.scss";

function Tabs({ tabs, activeTabIndex = 0, onTabClick }) {
  const [activeIndex, setActiveIndex] = useState(activeTabIndex);

  return (
    <div>
      <div className={styles.content}>
        <ul className={styles.tabsNav}>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              400: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3.8,
                spaceBetween: 30,
              },
              1023: {
                slidesPerView: 4.1,
                spaceBetween: 30,
              },
              1665: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1900: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
          >
            {tabs.map((tab, index) => (
              <SwiperSlide key={index}>
                <li
                  className={
                    index === activeIndex ? styles.activeList : styles.list
                  }
                  onClick={() => {
                    setActiveIndex(index);
                    if (onTabClick) {
                      onTabClick(index);
                    }
                  }}
                >
                  {tab.label}
                </li>
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
        <div className={styles.tabsContent}>
          <div className={styles.tabsPara}>{tabs[activeIndex].content}</div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
