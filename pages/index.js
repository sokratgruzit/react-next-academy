import { motion } from "framer-motion";

import { fetchData } from "@/utils/queries";

import Articles from "../components/Articles/Articles";
import IntroBox from "../components/Home/IntroBox";
import FeaturesBanner from "../components/Home/FeaturesBanner";
import ChallangeBanner from "../components/Home/ChallangeBanner";
import Ticker from "../components/UI/Ticker/Ticker";
import EmailBanner from "../components/Home/EmailBanner";
import MotionLayout from "../components/UI/MotionLayout/MotionLayout";
import Glossary from "../components/Glossary/Glossary";

import Leaderboard from "../components/UI/Leaderboard/Leaderboard";
import ContentWrap from "../components/UI/ContentWrap/ContentWrap";
import GlosarryCard from "../components/UI/Glossary/GlosarryCard";
import Banner from "../components/UI/Banner/Banner";

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
      category,
      security,
      essentials,
    },
  };
};

function Home({
  glossaries,
  releases,
  blockchain,
  category,
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
        <div className={styles.content__top__inner}>
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
                <Articles data={featured} />
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
                <GlosarryCard data={glossaries} />
              ) : (
                ""
              )
            }
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
                <Articles data={blockchain} title="Blockchain" />
              ) : (
                ""
              )
            }
          />
          <ContentWrap
            title={"Leaderboard"}
            btn={false}
            row={false}
            element={<Leaderboard />}
          />

          {/* {featured && featured.docs?.length ? (
            <Articles data={featured} title="Featured" />
          ) : (
            ""
          )}
          {releases && releases.docs?.length ? (
            <Articles data={releases} title="Latest Releases" />
          ) : (
            ""
          )} */}
        </div>
        <div>
          <h1 style={{ height: "500px", background: "red", textAlign: "auto" }}>
            ### HERE GOES COURSES CARDs ###
          </h1>
        </div>
        <div className="container">
          {blockchain && blockchain.docs.length ? (
            <Articles data={blockchain} title="Blockchain" />
          ) : (
            ""
          )}
        </div>
        <div>
          <ChallangeBanner />
        </div>
        <h1 style={{ height: "500px", background: "red", textAlign: "auto" }}>
          ### HERE GOES QUIZ SLIDER ###
        </h1>
        {/* <div className="container">
          <Leaderboard />
        </div> */}
      </div>
      {/* <div>
        <h1 style={{ height: "500px", background: "red", textAlign: "auto" }}>
          ### HERE GOES GLOSSARY CARDs ###
        </h1>
      </div>
      <div>
        <h1 style={{ height: "500px", background: "red", textAlign: "auto" }}>
          ### HERE GOES COURSES CARDs ###
        </h1>
      </div>

      <div>
        {bloackchain && blockchain.docs.length ? (
          <Articles data={blockchain} title="Blockchain" />
        ) : (
          ""
        )}
      </div>
      <div>
        <ChallangeBanner />
      </div>
      <div className="container">
        <h1 style={{ height: "500px", background: "red", textAlign: "auto" }}>
          ### HERE GOES QUIZ SLIDER ###
        </h1>
        <h1 style={{ height: "500px", background: "red", textAlign: "auto" }}>
          ### HERE GOES LEADERBOARD ###
        </h1>
        {essentials && essentials.docs.length ? (
          <Articles data={essentials} title="Essentials" />
        ) : (
          ""
        )}
        {security && security.docs.length ? (
          <Articles data={security} title="Security" />
        ) : (
          ""
        )}
      </div>
      <Ticker elements={"academyElements"} />
      <EmailBanner /> */}
    </div>
  );
}

export default Home;
