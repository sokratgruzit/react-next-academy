import { fetchData } from "@/utils/queries";

import Articles from "../components/Articles/Articles";
import IntroBox from "../components/Home/IntroBox";
import FeaturesBanner from "../components/Home/FeaturesBanner";
import TrendingQuiz from "../components/TrendingQuiz/TrendingQuiz";

import Ticker from "../components/UI/Ticker/Ticker";
import Leaderboard from "../components/UI/Leaderboard/Leaderboard";
import ContentWrap from "../components/UI/ContentWrap/ContentWrap";
import GlossaryCard from "../components/UI/Card/GlossaryCard";
import Banner from "../components/UI/Banner/Banner";
import Button from "../components/UI/Button/Button";

import styles from "../styles/Home/Home.module.scss";

export const getStaticProps = async () => {
  const { data: glossaries } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/glossaries?limit=3`
  );

  const { data: releases } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?category=62fb6be2ab723fa8b038fce7&limit=3`
  );

  const { data: blockchain } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?category=62fb6bf2ab723fa8b038fcef&limit=3`
  );

  const { data: featured } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?category=62fb6bd0ab723fa8b038fcdf&limit=3`
  );

  const { data: security } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?category=62fb6bb4ab723fa8b038fcdb&limit=3`
  );

  const { data: essentials } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?category=62fb6bf9ab723fa8b038fcf3&limit=3`
  );

  const { data: category } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/category`
  );

  return {
    props: {
      glossaries,
      releases,
      blockchain,
      featured,
      security,
      essentials,
    },
  };
};

function Home({
  glossaries,
  releases,
  blockchain,
  featured,
  security,
  essentials,
}) {
  return (
    <div className={styles.home__page}>
      <img
        className="main-bg-img default-bg"
        src="img/Bg/bg_0.png"
        alt="background"
      />
      <div className={`${styles.content__top__inner} ${"container"}`}>
        <IntroBox />
        <FeaturesBanner />
      </div>
      <div className={styles.home__content}>
        <div>
          <ContentWrap
            title={"Featured"}
            btn={true}
            btnText={"Explore All"}
            href={`articles?category=${
              featured?.docs ? featured?.docs[0]?.category?.slug : ""
            }`}
            row={false}
            element={
              featured && featured.docs?.length ? (
                <div className={styles.featured}>
                  <img
                    src="img/Bg/bg_999.png"
                    alt="background"
                    className="img-absolute darkImg"
                  />
                  <img
                    src="img/Bg/bg_998.png"
                    alt="background"
                    className="img-absolute lightImg"
                  />
                  <Articles data={featured} />
                </div>
              ) : (
                ""
              )
            }
          />
          <ContentWrap
            title={"Latest Releases"}
            btn={true}
            btnText={"Explore All"}
            href={`articles?category=${
              releases?.docs ? releases?.docs[0]?.category?.slug : ""
            }`}
            row={false}
            element={
              releases && releases.docs?.length ? (
                <Articles data={releases} />
              ) : (
                ""
              )
            }
          />
          <ContentWrap
            title={"270+ Terms in our Glossary"}
            btn={true}
            btnText={"Go to the Glossary"}
            href={"/glossary"}
            row={true}
            element={
              glossaries && glossaries.result?.length ? (
                <GlossaryCard data={glossaries} />
              ) : (
                ""
              )
            }
          />
          <Banner type={"coming-soon"} title={"Courses"} img={"comingSoon"} />
          <ContentWrap
            title={"Blockchain"}
            btn={true}
            btnText={"See All"}
            href={`articles?category=${
              blockchain?.docs ? blockchain?.docs[0]?.category?.slug : ""
            }`}
            row={false}
            element={
              blockchain && blockchain.docs.length ? (
                <Articles data={blockchain} title="Blockchain" />
              ) : (
                ""
              )
            }
          />
          <Banner
            type={"simple"}
            dependency={"challange"}
            title={"Want A Challange?"}
            teaser={
              "Test Your Knowledge While You Learn With Our Range Of Quizzes."
            }
            img={"quizBg"}
            clasName={"btn"}
            btn={
              <div className={styles.quizBtn}>
                <img src="/img/banner/stars.svg" />
                <Button title={"Take a Quizzes"} />
              </div>
            }
          />
          <ContentWrap
            title={"Trending Quiz"}
            btn={false}
            row={false}
            element={
              <div style={{ position: "relative" }}>
                <TrendingQuiz type={"default"} />
              </div>
            }
          />
          <ContentWrap
            title={"Leaderboard"}
            btn={false}
            row={false}
            element={<Leaderboard />}
          />
          <ContentWrap
            title={"Essentials"}
            btn={true}
            btnText={"See All"}
            href={`articles?category=${
              essentials?.docs ? essentials?.docs[0]?.category?.slug : ""
            }`}
            row={false}
            element={
              essentials && essentials.docs.length ? (
                <div className={styles.assentials}>
                  <img
                    src="img/Bg/bg_13.png"
                    alt="background"
                    className="img-absolute darkImg"
                  />
                  <Articles data={essentials} />
                </div>
              ) : (
                ""
              )
            }
          />
          <ContentWrap
            title={"Security"}
            btn={true}
            btnText={"See All"}
            href={`articles?category=${
              security?.docs ? security?.docs[0]?.category?.slug : ""
            }`}
            row={false}
            element={
              security && security.docs.length ? (
                <Articles data={security} />
              ) : (
                "where is fkin data?"
              )
            }
          />
          <Ticker elements={"academyElements"} />
          <Banner
            type={"simple"}
            dependency={"email"}
            title={"Keep Up To Date — Get E-Mail Updates"}
            teaser={"Stay Tuned For The Latest Company News."}
            placeholder={"name@example.com"}
            img={"contactBg"}
            btn={<Button customStyles={{ color: "#fff" }} title={"Join Now"} />}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
