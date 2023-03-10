import { useState, useEffect } from "react";

import Dashboard from "./Dashboard";
import MyQuizzes from "./MyQuizzes";
import MyCourses from "./MyCourses";
import MyProfile from "./MyProfile";
import AccountSettings from "./AccountSettings";
import SideMenu from "./SideMenu";
import DashboardHeader from "../Layouts/DashboardHeader";
import Introduction from "./Introduction";
import PurchaseHistory from "./PurchaseHistory";

import styles from "../../styles/Dashboard/DashboardTabs.module.scss";

const DashboardTabs = () => {
  const [curentTab, setCurentTab] = useState("0");
  const [showMenu, setShowMenu] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
      setShowMenu(window.innerWidth > 768);
      setBurgerMenu(window.innerWidth > 768);
    };
   
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobile ? (burgerMenu ? "hidden" : "unset") : "unset";
  }, [burgerMenu]);

  return (
    <>
      <div className={styles.burgerMenu} style={{opacity: isMobile ? "0" : "1", opacity: burgerMenu ? "1" : "0", zIndex: burgerMenu ? "10" : "-1"}}>
        <div style={{display: isMobile ? "none" : "flex", display: burgerMenu ? "flex" : "none"}} className={styles.burgerMenu}>
          <SideMenu showMenu={showMenu} tab={curentTab} handlerClick={(e) => {
            setCurentTab(e.target.id)
            isMobile ? setBurgerMenu(false) : "";
            }} />
        </div>
      </div>
      <div className={`container ${styles.viewContent} ${styles.headerViewContent}`}>
        <DashboardHeader isOpen={!burgerMenu} tab={curentTab} showSideBar={() => setBurgerMenu(!burgerMenu)} />
        <Introduction />
      </div>
      <div className={`container ${styles.viewContent}`}
          style={{ paddingRight: curentTab === "0" ? "0" : "" }}>
        {curentTab === "0" ? (
          <Dashboard />
        ) : curentTab === "1" ? (
          <MyCourses />
        ) : curentTab === "2" ? (
          <MyQuizzes />
        ) : curentTab === "3" ? (
          <MyProfile />
        ) : curentTab === "4" ? (
          <PurchaseHistory />  
        ) : curentTab === "5" ? (
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
