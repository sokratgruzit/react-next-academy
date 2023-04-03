import { fetchData } from "@/utils/queries";
import Link from "next/link";

import Articles from "../components/Articles/Articles";
import IntroBox from "../components/Home/IntroBox";
import FeaturesBanner from "../components/Home/FeaturesBanner";
import TrendingQuiz from "../components/UI/TrendingQuiz/TrendingQuiz";

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
  const { data: category } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/category`
  );
  const values = {glossaries};
  for(let i=0; i<category.length; i++){
    let oneCategory = category[i];
    let slug = oneCategory?.slug;
    let catId = oneCategory?._id;
    let catData= await fetchData(
      `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?category=${catId}&limit=3`
    );
    values[slug] =catData?.data; 
  }
  return {
    props: values,
  };
};

function Home({
  glossaries,
  releases,
  blockchain,
  featured,
  security,
  essentials,
  onClick,
}) {
  console.log(blockchain?.docs[0], 'id?')
  return (
    <div className={styles.home__page}>
      <img
        className="main-bg-img default-bg"
        src="/img/Bg/bg_0.png"
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
                    className={`img-absolute darkImg ${styles.featuredBg}`}
                  />
                  <img
                    src="img/Bg/bg_998.png"
                    alt="background"
                    className="img-absolute lightImg"
                  />
                  <div className="container">
                    <Articles data={featured} />
                  </div>
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
                <div className="container">
                  <Articles data={releases} />
                </div>
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
                <div className={styles.glossariesWrap}>
                  <img
                    className="img-absolute darkImg"
                    src="/img/Glossaries/background1.png"
                    alt="background"
                  />
                  <img
                    className={`darkImg ${styles.dodgeColor}`}
                    src="img/Bg/stars.svg"
                    alt="background"
                  />
                  <img
                    className="img-absolute lightImg"
                    src="/img/Glossaries/bgL.png"
                    alt="background"
                  />
                  <div className={`container ${styles.glossaryFlex}`}>
                    <GlossaryCard quantity={"2"} data={glossaries} />
                  </div>
                </div>
              ) : (
                ""
              )
            }
          />
          <Banner
            container={"simple-wrap"}
            type={"coming-soon"}
            img={"comingSoon"}
            title={"Courses"}
          />
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
                <div className="container">
                  <Articles data={blockchain} title="Blockchain" />
                </div>
              ) : (
                ""
              )
            }
          />
          <div className={styles.challenge}>
            <Banner
              container={"simple-wrap"}
              type={"simple"}
              dependency={"challange"}
              title={"Want A Challange?"}
              teaser={
                "Test Your Knowledge While You Learn With Our Range Of Quizzes."
              }
              img={"quizBg"}
              clasName={"btn"}
              btn={
                <Button
                  clasName="quizBtn"
                  title={"Take a Quizzes"}
                  type={"transparent-btn"}
                  custumLink={{ color: "#fff" }}
                  href={"/quizzes"}
                />
              }
            />
            <img
              src="/img/Banner/lastBigStar.svg"
              alt="background"
              className={`img-absolute darkImg ${styles.bigStars}`}
            />
          </div>
          <ContentWrap
            title={"Trending Quiz"}
            btn={false}
            row={false}
            element={
              <div
                style={{
                  position: "relative",
                  maxWidth: "1900px",
                  margin: "0px auto",
                }}
              >
                <div className={styles.quizzContainer}>
                  <TrendingQuiz type={"default"} />
                </div>
              </div>
            }
          />
          <ContentWrap
            title={"Leaderboard"}
            btn={false}
            row={false}
            element={
              <div className="container">
                <Leaderboard />
              </div>
            }
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
                    className={`img-absolute darkImg ${styles.assentialsBg}`}
                  />
                  <div className="container">
                    <Articles data={essentials} />
                  </div>
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
                <div className="container">
                  <Articles data={security} />
                </div>
              ) : (
                <div className="container">"where is fkin data?"</div>
              )
            }
          />
          <Ticker elements={"academyElements"} />
          <Banner
            container={"simple-wrap"}
            type={"simple"}
            dependency={"email"}
            title={"Keep Up To Date — Get E-Mail Updates"}
            teaser={"Stay Tuned For The Latest Company News."}
            placeholder={"name@example.com"}
            img={"contactBg"}
            btn={<Button onClick={onClick} />}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
