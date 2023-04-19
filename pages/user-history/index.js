import {  useState } from 'react'

import UserMainBoard from "../../components/UserHistory/UserMainBoard";
import EarnedBadges from "../../components/UserHistory/EarnedBadges";
import FinishedQuizzes from "../../components/UserHistory/FinishedQuizzes";
import CardPopup from '@/components/UserHistory/CardPopup';
 

const DUMMY_DATA = [
  {
    title: "Im here",
    img: "/img/UserHistory/badge1.png",
    level: "beginner",
    category: "security",
    time: "8 min",
  },
  {
    title: "I know My Bussiness",
    img: "/img/UserHistory/badge2.png",
    level: "Pro",
    category: "Crypto",
    time: "8 min",
  },
  {
    title: "My Second Home",
    img: "/img/UserHistory/badge3.png",
    level: "Pro",
    category: "Crypto",
    time: "8 min",
  },
  {
    title: "I know My Bussiness",
    img: "/img/UserHistory/badge4.png",
    level: "Pro",
    category: "Crypto",
    time: "8 min",
  },
  {
    title: "I know My Bussiness",
    img: "/img/UserHistory/badge5.png",
    level: "beginner",
    category: "security",
    time: "8 min",
  },
  {
    title: "I know My Bussiness",
    img: "/img/UserHistory/badge6.png",
    level: "Pro",
    category: "Crypto",
    time: "8 min",
  },
  {
    title: "I know My Bussiness",
    img: "/img/UserHistory/badge7.png",
    level: "beginner",
    category: "security",
    time: "8 min",
  },
];
const QuizData = [
  {
    title: "Introduction to Superfluid: Stream money every second",
    p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
    img: "img/UserHistory/img1.png",
    vector: "/img/CommonComponents/courseQuizes/vector.svg",
    date: "12.4.2019 ",
  },
  {
    title: "Introduction to Superfluid: Stream money every second",
    p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
    img: "img/UserHistory/img2.png",
    vector: "/img/CommonComponents/courseQuizes/vector.svg",
    date: "12.4.2020",
  },
  {
    title: "Introduction to Superfluid: Stream money every second",
    p: "Tokenomics describes how a token's use affects its price. You will learn: - What are tokenomics? - What makes a token valuable? - The principles of tokenomics",
    img: "img/UserHistory/img1.png",
    vector: "/img/CommonComponents/courseQuizes/vector.svg",
    date: "12.4.2021",
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
    date: "12.4.2023",
  },
];

const data = DUMMY_DATA;
const index = () => {  
  const [openBar, setOpenBar] = useState(false);  
  const [ item ,setItem ] = useState({})

  const clickHandler = () => {
    setOpenBar(true)
  }
  
  return (
    <div>
      <UserMainBoard />
      <EarnedBadges data={data} />
      <FinishedQuizzes 
        onClick={clickHandler} 
        data={QuizData}
        setItem={setItem}
       />
      {
      openBar && 
        <CardPopup 
          data={item}
          setOpenBar={setOpenBar}
        />
      }
      
    </div>
  );
};

export default index;
