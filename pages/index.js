import { motion } from "framer-motion";

import { fetchData } from "@/utils/queries";

import Articles from "../components/Articles/Articles";
import IntroBox from "../components/Home/IntroBox";
import FeaturesBanner from "../components/Home/FeaturesBanner";
import ChallangeBanner from "../components/Home/ChallangeBanner";
import Marquee from "../components/Home/MarqueeComponent";
import EmailBanner from "../components/Home/EmailBanner";
import MotionLayout from "../components/UI/MotionLayout/MotionLayout";
import GlossaryInner from "../components/Glossaries/GlossaryInner";
/*import LeaderboardTab from "../components/Leaderboard/LeaderboardTab";
import QuizSlider from "../components/MainPage/QuizSlider";
import Banner from "../components/UI/Banners/Banner";*/

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
  essentials
}) {
  const cardVariants = {
    offscreen: {
      y: 40,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const type = "two";
  const nameTwo = "2";
  const titleTwo = "Want a Challenge?";
  const subTitle = "Test your knowledge while you learn with our range of quizzes.";
  const buttonTwo = "Take a Quizzes";

  return (
    <div className="home-page">
      <img
        className="main-bg-img default-bg"
        src="img/MainPage/background.png"
        alt="background"
      />
      <div className="container">
        <IntroBox />
        <MotionLayout>
          <motion.div variants={cardVariants}>
            <FeaturesBanner />
          </motion.div>
        </MotionLayout>
        <MotionLayout>
          <motion.div variants={cardVariants}>
            {featured && featured.docs.length ? (
              <Articles data={featured} title="Featured" />
            ) : (
              ""
            )}
          </motion.div>
        </MotionLayout>
      </div>
      <MotionLayout className="carouselContainer">
        <motion.div variants={cardVariants}>
          {releases && releases.docs.length ? (
            <Articles data={releases} title="Latest Releases" />
          ) : (
            ""
          )}
        </motion.div>
      </MotionLayout>
      <MotionLayout>
        <motion.div variants={cardVariants}>
          {/* {glossaries && glossaries.result?.length ? (
            <GlossaryInner data={glossaryShort} />
          ) : (
            ""
          )} */}
        </motion.div>
      </MotionLayout>
      <MotionLayout className="carouselContainer">
        <motion.div variants={cardVariants}>
          {blockchain && blockchain.docs.length ? (
            <Articles data={blockchain} title="Blockchain" />
          ) : (
            ""
          )}
        </motion.div>
      </MotionLayout>
      {/*<MotionLayout>
        <motion.div variants={cardVariants}>
          <Banner
            type={type}
            nameTwo={nameTwo}
            titleTwo={titleTwo}
            subTitle={subTitle}
            buttonTwo={buttonTwo}
          />
        </motion.div>
      </MotionLayout>
      <MotionLayout>
        <motion.div variants={cardVariants}>
          <QuizSlider />
        </motion.div>
      </MotionLayout>*/}
      {/*<LeaderboardTab />*/}
      <MotionLayout className="container">
        <motion.div variants={cardVariants}>
          {essentials && essentials.docs.length ? (
            <Articles data={essentials} title="Essentials" />
          ) : (
            ""
          )}
        </motion.div>
      </MotionLayout>
      <MotionLayout className="carouselContainer">
        <motion.div variants={cardVariants}>
          {security && security.docs.length ? (
            <Articles data={security} title="Security" />
          ) : (
            ""
          )}
        </motion.div>
      </MotionLayout>
      <MotionLayout>
        <motion.div variants={cardVariants}>
          <Marquee />
        </motion.div>
      </MotionLayout>
      <MotionLayout>
        <motion.div variants={cardVariants}>
          <EmailBanner />
        </motion.div>
      </MotionLayout>
    </div>
  );
}

export default Home;
