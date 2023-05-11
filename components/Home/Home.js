import { connect } from "react-redux";
import Articles from "@/components/Articles/Articles";
import IntroBox from "@/components/Home/IntroBox";
import FeaturesBanner from "@/components/Home/FeaturesBanner";
import TrendingQuiz from "@/components/UI/TrendingQuiz/TrendingQuiz";

import Ticker from "@/components/UI/Ticker/Ticker";
import Leaderboard from "@/components/UI/Leaderboard/Leaderboard";
import ContentWrap from "@/components/UI/ContentWrap/ContentWrap";
import GlossaryCard from "@/components/UI/Card/GlossaryCard";
import Banner from "@/components/UI/Banner/Banner";
import Button from "@/components/UI/Button/Button";

import styles from "@/styles/Home/Home.module.scss";

const Home = ({ commonData }) => {
    const { featured, latest, blockchain, essentials, security, glossaries } = commonData;
    
    const handleClick = () => {
        console.log('hello');
    };

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
                featured ? featured?.category?.slug : ""
              }`}
              row={false}
              element={
                featured && featured?.length > 0 ? (
                  <div className={styles.featured}>
                    <img
                      src="img/Bg/bg_999.png"
                      alt="background"
                      className={`img-absolute darkImg ${styles.featuredBg}`}
                    />
                    <img
                      src="img/Bg/bg_998.png"
                      alt="background"
                      className={`img-absolute lightImg ${styles.featuredBg}`}
                    />
                    <div className="container">
                      <Articles data={featured} />
                    </div>
                  </div>
                ) : (
                    <div className="container">"No arcticles found"</div>
                )
              }
            />
            <ContentWrap
              title={"Latest Releases"}
              btn={true}
              btnText={"Explore All"}
              href={`articles?category=${
                latest ? latest?.category?.slug : ""
              }`}
              row={false}
              element={
                latest && latest?.length > 0 ? (
                  <div className="container">
                    <Articles data={latest} />
                  </div>
                ) : (
                    <div className="container">"No arcticles found"</div>
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
                glossaries && glossaries?.length > 0 ? (
                  <div className={styles.glossariesWrap}>
                    <img
                      className="img-absolute darkImg"
                      src="/img/Glossaries/background1.png"
                      alt="background"
                    />
                    <img
                      className={`img-absolute darkImg ${styles.dodgeColor}`}
                      src="img/Banner/stars.svg"
                      alt="background"
                    />
                    <img
                      className="img-absolute lightImg"
                      src="/img/Glossaries/glossLight.png"
                      alt="background"
                    />
                    <img
                      className={`img-absolute lightImg ${styles.dodgeColor}`}
                      src="img/Banner/stars.svg"
                      alt="background"
                    />
                    <div className={`container ${styles.glossaryFlex}`}>
                      <GlossaryCard quantity={"2"} data={glossaries} />
                    </div>
                  </div>
                ) : (
                    <div className="container">"No glossaries found"</div>
                )
              }
            />
            <ContentWrap
              btn={false}
              element={
                <div className={styles.challenge}>
                  <Banner
                    container={"simple-wrap"}
                    type={"coming-soon"}
                    img={"comingSoon"}
                    title={"Courses"}
                    img2={"lBg1"}
                  />
                </div>
              }
            />
            <ContentWrap
              title={"Blockchain"}
              btn={true}
              btnText={"See All"}
              href={`articles?category=${
                blockchain ? blockchain?.category?.slug : ""
              }`}
              row={false}
              element={
                blockchain && blockchain?.length > 0 ? (
                  <div className="container">
                    <Articles data={blockchain} title="Blockchain" />
                  </div>
                ) : (
                    <div className="container">"No arcticles found"</div>
                )
              }
            />
            <ContentWrap
              element={
                <div className={styles.challenge} style={{textAlign: "center"}}>
                  <Banner
                    container={"simple-wrap"}
                    type={"simple"}
                    dependency={"challange"}
                    title={"Want A Challange?"}
                    teaser={
                      "Test Your Knowledge While You Learn With Our Range Of Quizzes."
                    }
                    img={"quizBg"}
                    img2={"lBg1"}
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
              }
            />
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
                essentials ? essentials?.category?.slug : ""
              }`}
              row={false}
              element={
                essentials && essentials?.length > 0 ? (
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
                    <div className="container">"No arcticles found"</div>
                )
              }
            />
            <ContentWrap
              title={"Security"}
              btn={true}
              btnText={"See All"}
              href={`articles?category=${
                security ? security?.category?.slug : ""
              }`}
              row={false}
              element={
                security && security?.length > 0 ? (
                  <div className="container">
                    <Articles data={security} />
                  </div>
                ) : (
                  <div className="container">"No arcticles found"</div>
                )
              }
            />
            <Ticker elements={"academyElements"} />
            <ContentWrap
              btn={false}
              element={
                <div className={styles.email} style={{textAlign: "center"}}>
                  <Banner
                    container={"simple-wrap"}
                    type={"simple"}
                    dependency={"email"}
                    title={"Keep Up To Date — Get E-Mail Updates"}
                    teaser={"Stay Tuned For The Latest Company News."}
                    placeholder={"name@example.com"}
                    img={"contactBg"}
                    img2={"quizLight"}
                    btn={<Button onClick={handleClick} />}
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>
    );
};

const mapStateToProps = (state) => {
    return {
        commonData: state.commonData,
    };
};
  
export default connect(mapStateToProps, null)(Home);