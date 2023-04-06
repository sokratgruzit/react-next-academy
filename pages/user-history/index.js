import UserMainBoard from "../../components/UserHistory/UserMainBoard";
import EarnedBadges from "../../components/UserHistory/EarnedBadges";
import FinishedQuizzes from "../../components/UserHistory/FinishedQuizzes";
import img from "../../public/img/UserHistory/badge2.png"
const DUMMY_DATA = [
  {
    title: "Im here",
    img: "/img/UserHistory/badge1.png",
  },
  {
    title: "I know My Bussiness",
    img: "/img/UserHistory/badge2.png",
  },
  {
    title: "My Second Home",
    img: "/img/UserHistory/badge3.png",
  },
  {
    title: "I know My Bussiness",
    img: "/img/UserHistory/badge4.png",
  },
  {
    title: "I know My Bussiness",
    img: "/img/UserHistory/badge5.png",
  },
  {
    title: "I know My Bussiness",
    img: "/img/UserHistory/badge6.png",
  },
  {
    title: "I know My Bussiness",
    img: "/img/UserHistory/badge7.png",
  },
];
const QuizData = [
  {
    title: "Introduction to Superfluid: Stream money every second",
    p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
    img: "img/UserHistory/img1.png",
    vector: "/img/CommonComponents/courseQuizes/vector.svg",
    date: "12.4.2022",
  },
  {
    title: "Introduction to Superfluid: Stream money every second",
    p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
    img: "img/UserHistory/img2.png",
    vector: "/img/CommonComponents/courseQuizes/vector.svg",
    date: "12.4.2022",
  },
  {
    title: "Introduction to Superfluid: Stream money every second",
    p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
    img: "img/UserHistory/img1.png",
    vector: "/img/CommonComponents/courseQuizes/vector.svg",
    date: "12.4.2022",
  },
  {
    title: "Introduction to Superfluid: Stream money every second",
    p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
    img: "img/UserHistory/img2.png",
    vector: "/img/CommonComponents/courseQuizes/vector.svg",
    date: "12.4.2022",
  },
  {
    title: "Introduction to Superfluid: Stream money every second",
    p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
    img: "img/UserHistory/img1.png",
    vector: "/img/CommonComponents/courseQuizes/vector.svg",
    date: "12.4.2022",
  },
];
const index = () => {
  let data = DUMMY_DATA;

  return (
    <div>
      <UserMainBoard />
      <EarnedBadges data={data} />
      <FinishedQuizzes data={QuizData} />
    </div>
  );
};

export default index;
