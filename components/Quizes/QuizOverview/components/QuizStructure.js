import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import SwiperButtons from "./SwiperButtons/SwiperButtons";
import styles from "@/styles/Quizes/QuizOverview/QuizStructure.module.scss";
import QuizButton from "./QuizButton/QuizButton";

const QuizStructure = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <div className={styles.quizStructure}>
      <div className={styles.inner}>
        <Swiper
          className={`${styles.swiper} quiz-swiper`}
          slidesPerView={5}
          // loop={true}
          onSlideChange={(swiper) => {
            setSwiperIndex(swiper.activeIndex);

            /*...*/
          }}
          onReachEnd={() => {
            /*...*/
          }}
          breakpoints={{
            // 0: {
            //   slidesPerView: 1.3,
            //   spaceBetween: 16,
            // },
            // 768: {
            //   slidesPerView: 2.5,
            //   spaceBetween: 30,
            // },
            // 1023: {
            //   slidesPerView: 5,
            // },
            1450: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide className={styles.lineSlide}>
            <span className={styles.line}>
              <svg
                width="1893"
                height="8"
                viewBox="0 0 1893 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 4.81822C1 4.81822 74.3333 0.999995 85.3333 1.00001C96.3333 1.00002 102.2 3.25994 105.867 3.25988C109.533 3.25982 121.267 2.09094 126.4 2.09093C131.533 2.09091 158.043 2.64877 189.467 3.25988C227.524 4 233.467 4.81825 241.533 4.81825C249.6 4.81825 267.2 2.09093 274.533 2.09093C281.867 2.09093 322.933 4.81831 336.133 4.81825C349.333 4.8182 428.533 6.45449 434.4 6.45449C440.267 6.45449 452.733 4.81846 463 4.81846C473.267 4.81846 506.267 3.18165 513.6 3.18165C520.933 3.18165 591.333 6.45449 603.067 6.45449C614.8 6.45449 631.483 4.81827 639.642 4.81827C647.8 4.81827 661 6.4545 669.067 6.4545C677.133 6.4545 747.533 4.81827 747.533 4.81827C747.533 4.81827 802.533 5.9089 807.667 5.9089C812.8 5.9089 850.2 3.72711 863.4 3.72711C876.6 3.72711 890.533 4.81828 890.533 4.81828C890.533 4.81828 901.533 5.9089 908.133 5.9089C914.733 5.9089 919.128 3.72711 925 3.72711C930.872 3.72711 1007.13 5.9089 1029.13 5.9089C1051.13 5.9089 1081.93 3.18181 1095.87 3.18181C1109.8 3.18181 1162.05 4.81828 1178.09 4.81828C1194.13 4.81828 1218.38 4.81828 1218.38 4.81828C1218.38 4.81828 1243.27 3.18182 1258.67 3.18182C1274.07 3.18182 1277.73 5.90906 1285.8 5.90906C1293.87 5.90906 1321 4.81829 1329.07 4.81829C1337.13 4.81829 1341.53 6.99995 1348.13 6.99995C1354.73 6.99995 1370.13 4.81829 1380.4 4.81829C1383.23 4.81829 1420.47 3.18181 1477.2 3.18182C1486.11 3.18182 1504.22 6.45451 1513.87 6.45451C1523.58 6.45451 1543.9 4.81832 1554.2 4.81832C1583.83 4.81832 1597.92 3.72727 1629.73 3.72727C1647.91 3.72728 1667.59 5.90906 1685.47 5.90906C1700.18 5.90907 1701.47 2.63638 1715.53 2.63638C1752.13 2.63639 1790.97 4.81838 1818.2 4.81839C1858.74 4.8184 1893 4.81839 1893 4.81839"
                  stroke="white"
                />
              </svg>
            </span>
          </SwiperSlide>
          <SwiperSlide>
            <svg
              className={styles.structure}
              width="120"
              height="86"
              viewBox="0 0 120 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8943 65.4776C-6.98114 49.3334 10.4031 23.7997 27.9004 19.6022C48.5557 9.80564 83.7263 15.5418 94.1183 19.4693C106.481 24.1417 120.807 33.8334 112.641 51.6698C104.474 69.5062 42.7697 81.6218 17.8943 65.4776Z"
                fill="#00050F"
                stroke="white"
              />
              <path
                d="M28.08 48.24C30.39 48.24 31.905 46.995 31.905 45.315C31.905 43.53 30.885 42.84 28.845 42C27.465 41.43 26.79 41.145 26.79 40.245C26.79 39.495 27.525 39.09 28.635 39.075C29.73 39.075 30.72 39.495 31.32 40.05V38.295C30.585 37.8 29.73 37.5 28.785 37.515C26.64 37.515 25.11 38.64 25.11 40.245C25.11 42.03 26.1 42.735 28.11 43.575C29.49 44.145 30.225 44.52 30.225 45.3C30.225 46.125 29.64 46.695 28.08 46.695C26.865 46.695 25.59 46.23 24.675 45.51V47.19C25.26 47.7 26.4 48.24 28.08 48.24ZM34.8969 48H36.5169V41.355H39.1719V40.035H36.5169V37.56L31.9119 41.355H34.8969V48ZM40.5369 48H42.1569V44.115C42.1869 42.465 43.3719 41.34 45.3369 41.34V40.005C43.6869 40.005 42.5169 40.785 42.1569 41.73V40.23H40.5369V48ZM50.0643 48.24C51.0393 48.24 53.5893 48.165 53.5893 44.865V40.245H51.9693V44.91C51.9693 44.91 52.0593 46.815 50.0643 46.815C48.0693 46.815 48.1593 44.91 48.1593 44.91V40.245H46.5393V44.865C46.5393 48.165 49.0893 48.24 50.0643 48.24ZM59.6395 48.225C60.4345 48.225 61.7095 48.045 62.4145 47.49V45.99C62.4145 45.99 61.4545 46.8 59.6395 46.8C57.9145 46.8 56.8195 45.72 56.8195 44.115C56.8195 42.645 57.9595 41.445 59.4895 41.445C61.3495 41.445 62.2645 42.615 62.2645 42.615V40.95C61.5745 40.305 60.4495 40.02 59.4895 40.02C56.9695 40.02 55.2445 41.85 55.2445 44.115C55.2445 46.38 56.7445 48.225 59.6395 48.225ZM65.9955 48H67.6155V41.355H70.2705V40.035H67.6155V37.56L63.0105 41.355H65.9955V48ZM74.8934 48.24C75.8684 48.24 78.4184 48.165 78.4184 44.865V40.245H76.7984V44.91C76.7984 44.91 76.8884 46.815 74.8934 46.815C72.8984 46.815 72.9884 44.91 72.9884 44.91V40.245H71.3684V44.865C71.3684 48.165 73.9184 48.24 74.8934 48.24ZM80.6736 48H82.2936V44.115C82.3236 42.465 83.5086 41.34 85.4736 41.34V40.005C83.8236 40.005 82.6536 40.785 82.2936 41.73V40.23H80.6736V48ZM90.516 48.225C92.781 48.225 93.621 47.43 93.621 47.43V45.975C93.606 45.975 92.451 46.785 90.546 46.785C88.791 46.785 87.951 45.705 87.771 44.505H93.966V43.755C93.966 41.88 92.661 40.02 90.411 40.02C88.011 40.02 86.226 41.79 86.226 44.115C86.226 46.35 87.786 48.225 90.516 48.225ZM87.846 43.245C87.936 42.645 88.506 41.34 90.201 41.34C91.896 41.34 92.286 42.645 92.346 43.245H87.846Z"
                fill="white"
              />
            </svg>
          </SwiperSlide>
          <SwiperSlide>
            <svg
              className={styles.light}
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6.67383" r="5.5" stroke="white" />
              <circle cx="6" cy="6.67383" r="3" fill="white" />
            </svg>
            <p>What is the protocol?</p>
          </SwiperSlide>
          <SwiperSlide>
            <svg
              className={styles.light}
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6.67383" r="5.5" stroke="white" />
              <circle cx="6" cy="6.67383" r="3" fill="white" />
            </svg>
            <p>Core functionality</p>
          </SwiperSlide>
          <SwiperSlide>
            <svg
              className={styles.light}
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6.67383" r="5.5" stroke="white" />
              <circle cx="6" cy="6.67383" r="3" fill="white" />
            </svg>
            <p>What can you build with lit?</p>
          </SwiperSlide>
          <SwiperSlide>
            <svg
              className={`${styles.light} ${styles.marginTop20}`}
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6.67383" r="5.5" stroke="white" />
              <circle cx="6" cy="6.67383" r="3" fill="white" />
            </svg>
            <p>Working with access control conditions (ACCS)</p>
          </SwiperSlide>
          <SwiperSlide>
            <svg
              className={styles.light}
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6.67383" r="5.5" stroke="white" />
              <circle cx="6" cy="6.67383" r="3" fill="white" />
            </svg>
            <p>How does it work: access control</p>
          </SwiperSlide>
          <SwiperSlide>
            <svg
              className={styles.light}
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6.67383" r="5.5" stroke="white" />
              <circle cx="6" cy="6.67383" r="3" fill="white" />
            </svg>
            <p>Quiz</p>
          </SwiperSlide>
          <SwiperSlide>
            <QuizButton label="Start" className={styles.startBtn} />
          </SwiperSlide>
          <SwiperButtons swiperIndex={swiperIndex} />
        </Swiper>
      </div>
    </div>
  );
};

export default QuizStructure;
