import { useState } from "react";
// import dynamic from "next/dynamic";
// const UseCourse = dynamic(() => import("./UseCourse"));
// const MyQuizzes = dynamic(() => import("./MyQuizzes"));
// const MyCourses = dynamic(() => import("./MyCourses"));
// const MyProfile = dynamic(() => import("./MyProfile"));
// const AccountSettings = dynamic(() => import("./AccountSettings"));

import Dashboard from "./Dashboard";
import MyQuizzes from "./MyQuizzes";
import MyCourses from "./MyCourses";
import MyProfile from "./MyProfile";
import AccountSettings from "./AccountSettings";
import SideMenu from "./SideMenu";
import DashboardHeader from "../Layouts/DashboardHeader";
import Introduction from "./Introduction";

import styles from "../../styles/Dashboard/DashboardTabs.module.scss";
import DashboardSideNavigation from "../Layouts/DashboardSideNavigation";

const DashboardTabs = () => {
  const [curentTab, setCurentTab] = useState("0");

  const handlerClick = (e) => {
    setCurentTab(e.target.id);
    console.log(curentTab)
  };
  return (
    <>
      <SideMenu tab={curentTab} handlerClick={handlerClick} />

      <div
        className={`container ${styles.viewContent} ${styles.headerViewContent}`}
      >
        <DashboardHeader tab={curentTab} handlerClick={handlerClick} />
        <Introduction />
      </div>
      <div
        className={`container ${styles.viewContent}`}
        style={{ paddingRight: curentTab === "0" ? "0" : "" }}
      >
        {curentTab === "0" ? (
          <Dashboard />
        ) : curentTab === "1" ? (
          <MyCourses />
        ) : curentTab === "2" ? (
          <MyQuizzes />
        ) : curentTab === "3" ? (
          <MyProfile />
        ) : curentTab === "4" ? (
          <AccountSettings />
        ) : curentTab === "" ? (
          <MyCourses />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DashboardTabs;
