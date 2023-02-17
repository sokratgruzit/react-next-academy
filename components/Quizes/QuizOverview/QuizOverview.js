import React from "react";
import styles from "@/styles/Quizes/QuizOverview.module.scss";
import { Linkedin, ShareLink, StartPlay, Twitter } from "@/svg";
import CornerDecor from "@/components/UI/CornerDecor/CornerDecor";
import Link from "next/link";
import Circle from "@/svg/Circle";
import QuizStructure from "./components/QuizStructure";

const QuizOverview = () => {
  return (
    <div className="container">
      <img className={styles.bg} src="/img/Quiz/bg1.png" alt="background" />
      <div className={styles.infoWrapper}>
        <div className={styles.quizzHead}>
          <h3>Introduction to Superfluid: Stream money every second</h3>
          <div className={styles.levels}>
            <div className={styles.levelItem}>
              <Circle />
              <h6>beginner</h6>
            </div>
            <div className={styles.levelItem}>
              <Circle className={styles.graySml} />
              <h6>Security</h6>
            </div>
            <div className={styles.levelItem}>
              <Circle className={styles.graySml} />
              <h6>8 min</h6>
            </div>
          </div>
          <div className={styles.headItem}>
            <p className={styles.shareBtn}>Share This Quiz</p>
            <div className={styles.itemSocial}>
              <div>
                <Twitter className={styles.icon} />
              </div>
              <div>
                <Linkedin className={styles.icon} />
              </div>
              <div>
                <ShareLink className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quizzCard}>
          <div className={styles.item}>
            <div className={styles.card}>
              <CornerDecor />
              <img src="img/Quiz/product1.png" alt="card" />
            </div>
            <p className={styles.text}>
              Tokenomics describes how a token's use affects its price. You will learn: -
              What are tokenomics? - What makes a token valuable? - The principles of
              tokenomics
            </p>
          </div>
          <div className={styles.itemBadge}>
            <p className={styles.title}>Earn a Badge:</p>
            <img src="img/Quiz/badge1.png" alt="badge" />
            <h6>I’m here!</h6>
            <div className={styles.btn}>
              <StartPlay />
              <Link href={"/protocol"}>
                <p>Start The Quiz</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <QuizStructure />
    </div>
  );
};

export default QuizOverview;
