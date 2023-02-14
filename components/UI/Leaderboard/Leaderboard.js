import { useEffect } from "react";

import Aos from "aos";

import "aos/dist/aos.css";
import styles from "../../../styles/UI/Leaderboard/Leaderboard.module.scss";

let LeaderboardData = [
  {
    id: 0,
    wing: "img/Leaderboard/frta2.png",
    icone: "img/Leaderboard/avatar2.png",
    nickname: "0xF5...301c",
    cup: "img/Leaderboard/cup.png",
    score: "150",
  },
  {
    id: 1,
    wing: "img/Leaderboard/frta.png",
    icone: "img/Leaderboard/avatar1.png",
    nickname: "Gregory",
    cup: "img/Leaderboard/cup.png",
    score: "136",
  },
  {
    id: 2,
    wing: "img/Leaderboard/frta3.png",
    icone: "img/Leaderboard/avatar2.png",
    nickname: "0xF5...301c0xF5...301c0xF5...301c0xF5...301c",
    cup: "img/Leaderboard/cup.png",
    score: "150",
  },
  {
    id: 3,
    numbering: "4",
    icone: "img/Leaderboard/avatar1.png",
    nickname: "0xF5...301c",
    cup: "img/Leaderboard/cup.png",
    score: "150",
  },
  {
    id: 4,
    numbering: "5",
    icone: "img/Leaderboard/avatar1.png",
    nickname: "0xF5...301c",
    cup: "img/Leaderboard/cup.png",
    score: "150",
  },
  {
    id: 5,
    numbering: "6",
    icone: "img/Leaderboard/avatar1.png",
    nickname: "0xF5...301c0xF5...301c0xF5...301c0xF5...301c",
    cup: "img/Leaderboard/cup.png",
    score: "150",
  },
  {
    id: 6,
    numbering: "7",
    icone: "img/Leaderboard/avatar1.png",
    nickname: "0xF5...301c",
    cup: "img/Leaderboard/cup.png",
    score: "150",
  },
  {
    id: 7,
    numbering: "8",
    icone: "img/Leaderboard/avatar1.png",
    nickname: "0xF5...301c0xF5...301c0xF5...301c0xF5...301c",
    cup: "img/Leaderboard/cup.png",
    score: "150",
  },
  {
    id: 8,
    numbering: "9",
    icone: "img/Leaderboard/avatar1.png",
    nickname: "0xF5...301c",
    cup: "img/Leaderboard/cup.png",
    score: "150",
  },
  {
    id: 9,
    numbering: "10",
    icone: "img/Leaderboard/avatar1.png",
    nickname: "0xF5...301c",
    cup: "img/Leaderboard/cup.png",
    score: "150",
  },
];
let firstFiveData = LeaderboardData.map((item, index) => {
  if (item.id < 5) {
    return (
      <div className={styles.LeaderboardContent} key={index}>
        <div className={styles.userContent}>
          <div>
            <div className={styles.numbering}>
              <p>{item.numbering}</p>
              {item.wing && <img src={item.wing} alt="" />}
            </div>
          </div>
          <div className={styles.nickname}>
            <img src={item.icone} alt="icone" />
            <h4>{item.nickname}</h4>
          </div>
        </div>
        <div className={styles.score}>
          <img src={item.cup} alt="cup" />
          <p>{item.score}</p>
        </div>
      </div>
    );
  }
});
let lastFiveData = LeaderboardData.map((item, index) => {
  if (item.id > 4) {
    return (
      <div className={styles.LeaderboardContent} key={index}>
        <div className={styles.userContent}>
          <div>
            <p className={styles.numbering}>{item.numbering}</p>
          </div>
          <div className={styles.nickname}>
            <img src={item.icone} alt="icone" />
            <h4>{item.nickname}</h4>
          </div>
        </div>
        <div className={styles.score}>
          <img src={item.cup} alt="cup" />
          <p>{item.score}</p>
        </div>
      </div>
    );
  }
});

const Leaderboard = () => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }),
    [];

  return (
    <>
      <div
        className={`container textStyles ${styles.mainStyle}`}
        data-aos="fade-up"
      >
        <svg
          className={styles.bluCloud}
          width="1440"
          height="1079"
          viewBox="0 0 1440 1079"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="1440"
            height="1079"
            fill="url(#paint0_radial_6506_4317)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_6506_4317"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(720 539.5) rotate(90) scale(539.5 720)"
            >
              <stop stopColor="#000F2E" />
              <stop offset="1" stopColor="#00050F" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <div className={`${styles.mainContent} `}>
          <div className={styles.container}>{firstFiveData}</div>
          <div>{lastFiveData}</div>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
