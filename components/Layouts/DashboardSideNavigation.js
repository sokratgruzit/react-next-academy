import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { Facebook, GitHub, Linkedin, Twitter } from "@/svg";

import styles from "../../styles/Layouts/DashboardSideNavigation/DashboardSideNavigation.module.scss";
const SIDE_DATA = [
  {
    id: 0,
    list: "Dashboard",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.02 2.83821L3.63 7.03821C2.73 7.73821 2 9.22821 2 10.3582V17.7682C2 20.0882 3.89 21.9882 6.21 21.9882H17.79C20.11 21.9882 22 20.0882 22 17.7782V10.4982C22 9.28821 21.19 7.73821 20.2 7.04821L14.02 2.71821C12.62 1.73821 10.37 1.78821 9.02 2.83821Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 18H13.5C15.15 18 16.5 16.65 16.5 15V12C16.5 10.35 15.15 9 13.5 9H10.5C8.85 9 7.5 10.35 7.5 12V15C7.5 16.65 8.85 18 10.5 18Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 9V18"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 13.5H16.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 1,
    list: "My Courses",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.09961 11.9995V10.5195C9.09961 8.6095 10.4496 7.8395 12.0996 8.7895L13.3796 9.5295L14.6596 10.2695C16.3096 11.2195 16.3096 12.7795 14.6596 13.7295L13.3796 14.4695L12.0996 15.2095C10.4496 16.1595 9.09961 15.3795 9.09961 13.4795V11.9995Z"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    list: "My Quizzes",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M16 17.4297H12L7.55 20.3897C7.39982 20.4898 7.22528 20.5473 7.045 20.556C6.86472 20.5646 6.68546 20.5242 6.52635 20.439C6.36724 20.3538 6.23424 20.227 6.14154 20.0722C6.04884 19.9173 5.99992 19.7402 6 19.5597V17.4297C3 17.4297 1 15.4297 1 12.4297V6.42969C1 3.42969 3 1.42969 6 1.42969H16C19 1.42969 21 3.42969 21 6.42969V12.4297C21 15.4297 19 17.4297 16 17.4297Z"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.9998 10.3594V10.1494C10.9998 9.46937 11.4198 9.10937 11.8398 8.81937C12.2498 8.53937 12.6598 8.17938 12.6598 7.51938C12.6598 6.59938 11.9198 5.85938 10.9998 5.85938C10.0798 5.85938 9.33984 6.59938 9.33984 7.51938"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.9951 12.75H11.0051"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    list: "My Profile",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12.04 2C9.42004 2 7.29004 4.13 7.29004 6.75C7.29004 9.32 9.30004 11.4 11.92 11.49C12 11.48 12.08 11.48 12.14 11.49H12.21C13.4394 11.449 14.6046 10.9315 15.4593 10.0469C16.314 9.16234 16.7912 7.98004 16.79 6.75C16.79 4.13 14.66 2 12.04 2Z"
          stroke="#fff"
        />
        <path
          d="M17.12 14.1489C14.33 12.2889 9.78 12.2889 6.97 14.1489C5.7 14.9989 5 16.1489 5 17.3789C5 18.6089 5.7 19.7489 6.96 20.5889C8.36 21.5289 10.2 21.9989 12.04 21.9989C13.88 21.9989 15.72 21.5289 17.12 20.5889C18.38 19.7389 19.08 18.5989 19.08 17.3589C19.07 16.1289 18.38 14.9889 17.12 14.1489Z"
          stroke="#fff"
        />
      </svg>
    ),
  },
  {
    id: 4,
    list: "Account Settings",
    icone: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 16.5C13.1935 16.5 14.3381 16.0259 15.182 15.182C16.0259 14.3381 16.5 13.1935 16.5 12C16.5 10.8065 16.0259 9.66193 15.182 8.81802C14.3381 7.97411 13.1935 7.5 12 7.5C10.8065 7.5 9.66193 7.97411 8.81802 8.81802C7.97411 9.66193 7.5 10.8065 7.5 12C7.5 13.1935 7.97411 14.3381 8.81802 15.182C9.66193 16.0259 10.8065 16.5 12 16.5V16.5Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12H7"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 12H22"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function DashboardSideNavigation({ setBurger, data, links, handlerClick }) {
  const ref = useRef();
  const topicsWrap = useRef();
  const [infoBox, setInfoBox] = useState(false);
  const [topicsBox, setTopicsBox] = useState(false);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (infoBox && ref.current && !ref.current.contains(e.target)) {
        setInfoBox(false);
      }

      if (
        topicsBox &&
        topicsWrap.current &&
        !topicsWrap.current.contains(e.target)
      ) {
        setTopicsBox(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [infoBox, topicsBox]);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (theme) {
      body.classList.add("light");
      localStorage.setItem("mode", "true");
    } else {
      body.classList.remove("light");
      localStorage.setItem("mode", "false");
    }
  }, [theme]);

  useEffect(() => {
    const mode = localStorage.getItem("mode");
    !mode || mode === "false" ? setTheme(false) : setTheme(true);
  }, []);

  return (
    <motion.div
      className={`container ${styles.mobNavigation} textStyles `}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
    >
      <div className={styles.top}>
        <Link href="/" className={styles.logo}>
          <div>
            <img
              className={styles.lightImg}
              src={"/svg/lightLogo.svg"}
              alt="logo"
            />
            <img className={styles.darkImg} src={"/svg/logo.svg"} alt="logo" />
          </div>
        </Link>
        <div className={`${styles.headerContentWrapp}`}>
          <h5>Dashboard</h5>
          <div className={styles.headerContent}>
            <div className={styles.quantityWrap}>
              <div className={styles.quantity}>
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.62 18.8116C11.28 18.9316 10.72 18.9316 10.38 18.8116C7.48 17.8216 1 13.6916 1 6.69156C1 3.60156 3.49 1.10156 6.56 1.10156C8.38 1.10156 9.99 1.98156 11 3.34156C11.5138 2.64744 12.183 2.08329 12.954 1.69431C13.725 1.30532 14.5764 1.10232 15.44 1.10156C18.51 1.10156 21 3.60156 21 6.69156C21 13.6916 14.52 17.8216 11.62 18.8116Z"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>0</span>
              </div>
              <div className={styles.quantity}>
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.40002 5.5H13.6C17 5.5 17.34 7.09 17.57 9.03L18.47 16.53C18.76 18.99 18 21 14.5 21H5.51002C2.00002 21 1.24002 18.99 1.54002 16.53L2.44002 9.03C2.66002 7.09 3.00002 5.5 6.40002 5.5Z"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 7V3.5C6 2 7 1 8.5 1H11.5C13 1 14 2 14 3.5V7"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>1</span>
              </div>
            </div>
            <span className={styles.line}></span>
            <div className={styles.switch}>
              <label className={styles.switcher}>
                <input
                  className={styles.input}
                  type="checkbox"
                  checked={theme}
                  onChange={(event) => setTheme(event.target.checked)}
                />
                <div className={styles.marker}>
                  <div className={theme ? "lightLogo" : "darkLogo"}>
                    <svg
                      className={styles.switchIcon}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {theme ? (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.2352 1.63082C10.8577 2.21617 10.7142 3.10965 10.4178 3.79041L10.4173 3.79157C9.96799 4.81849 9.72097 5.94434 9.73013 7.13519L9.73015 7.13786C9.74844 11.5573 13.422 15.3276 17.9208 15.5116C18.585 15.5393 19.2205 15.4932 19.837 15.3829C20.2418 15.3091 20.6358 15.2967 20.9885 15.379C21.3479 15.4628 21.7051 15.6578 21.9264 16.0199C22.1467 16.3805 22.1582 16.7855 22.0737 17.1409C21.9905 17.4911 21.8069 17.8367 21.5646 18.165C19.4404 21.0712 15.9042 22.9114 11.9577 22.7403C6.35695 22.494 1.66975 18.0139 1.28204 12.4741C0.927802 7.56338 3.8423 3.28647 8.07872 1.4999C8.75853 1.21196 9.63602 1.06744 10.2352 1.63082ZM9.17031 2.74633C9.07022 2.74909 8.90207 2.78006 8.66292 2.88146L8.66158 2.88202C4.97825 4.43535 2.47284 8.13805 2.7782 12.3669L2.77833 12.3687C3.11104 17.1283 7.16385 21.0278 12.0226 21.2417M9.17031 2.74633C9.16436 2.83426 9.13423 2.98076 9.04281 3.19085C8.51239 4.40342 8.21952 5.73693 8.23016 7.1454C8.25259 12.3854 12.5787 16.7944 17.8595 17.0103C18.6347 17.0426 19.3793 16.9887 20.1024 16.8592L20.1048 16.8588C20.3442 16.8151 20.5064 16.8171 20.604 16.8316C20.574 16.9277 20.5034 17.077 20.3569 17.2753L20.3546 17.2785C18.5187 19.7913 15.4552 21.3903 12.0226 21.2417M20.6954 16.855C20.6954 16.855 20.6949 16.8547 20.6941 16.8543L20.6954 16.855Z"
                          fill="#00050F"
                        />
                      ) : (
                        <g>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0002 6.25293C8.82461 6.25293 6.25024 8.82729 6.25024 12.0029C6.25024 15.1786 8.82461 17.7529 12.0002 17.7529C15.1759 17.7529 17.7502 15.1786 17.7502 12.0029C17.7502 8.82729 15.1759 6.25293 12.0002 6.25293ZM4.75024 12.0029C4.75024 7.99886 7.99618 4.75293 12.0002 4.75293C16.0043 4.75293 19.2502 7.99886 19.2502 12.0029C19.2502 16.007 16.0043 19.2529 12.0002 19.2529C7.99618 19.2529 4.75024 16.007 4.75024 12.0029Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.0002 1.00293C12.5525 1.00293 13.0002 1.45064 13.0002 2.00293V2.08293C13.0002 2.63521 12.5525 3.08293 12.0002 3.08293C11.448 3.08293 11.0002 2.63521 11.0002 2.08293V2.00293C11.0002 1.45064 11.448 1.00293 12.0002 1.00293ZM4.15314 4.15582C4.54366 3.7653 5.17683 3.7653 5.56735 4.15582L5.69735 4.28582C6.08787 4.67635 6.08787 5.30951 5.69735 5.70004C5.30683 6.09056 4.67366 6.09056 4.28314 5.70004L4.15314 5.57004C3.76261 5.17951 3.76261 4.54635 4.15314 4.15582ZM19.8473 4.15582C20.2379 4.54635 20.2379 5.17951 19.8474 5.57003L19.7174 5.70004C19.3268 6.09056 18.6937 6.09056 18.3031 5.70004C17.9126 5.30951 17.9126 4.67635 18.3031 4.28582L18.4331 4.15582C18.8237 3.7653 19.4568 3.7653 19.8473 4.15582ZM1.00024 12.0029C1.00024 11.4506 1.44796 11.0029 2.00024 11.0029H2.08024C2.63253 11.0029 3.08024 11.4506 3.08024 12.0029C3.08024 12.5552 2.63253 13.0029 2.08024 13.0029H2.00024C1.44796 13.0029 1.00024 12.5552 1.00024 12.0029ZM20.9202 12.0029C20.9202 11.4506 21.368 11.0029 21.9202 11.0029H22.0002C22.5525 11.0029 23.0002 11.4506 23.0002 12.0029C23.0002 12.5552 22.5525 13.0029 22.0002 13.0029H21.9202C21.368 13.0029 20.9202 12.5552 20.9202 12.0029ZM5.69735 18.3058C6.08788 18.6964 6.08787 19.3295 5.69735 19.72L5.56735 19.85C5.17682 20.2406 4.54366 20.2406 4.15314 19.85C3.76261 19.4595 3.76261 18.8263 4.15314 18.4358L4.28314 18.3058C4.67366 17.9153 5.30683 17.9153 5.69735 18.3058ZM18.3031 18.3058C18.6937 17.9153 19.3268 17.9153 19.7174 18.3058L19.8474 18.4358C20.2379 18.8263 20.2379 19.4595 19.8474 19.85C19.4568 20.2406 18.8237 20.2406 18.4331 19.85L18.3031 19.72C17.9126 19.3295 17.9126 18.6963 18.3031 18.3058ZM12.0002 20.9229C12.5525 20.9229 13.0002 21.3706 13.0002 21.9229V22.0029C13.0002 22.5552 12.5525 23.0029 12.0002 23.0029C11.448 23.0029 11.0002 22.5552 11.0002 22.0029V21.9229C11.0002 21.3706 11.448 20.9229 12.0002 20.9229Z"
                            fill="white"
                          />
                        </g>
                      )}
                    </svg>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        {/* <DashboardHeader /> */}
        <button className={styles.close} onClick={() => setBurger(false)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23 1L1 23" stroke="white"></path>
            <path d="M1 1L23 23" stroke="white"></path>
          </svg>
        </button>
      </div>
      <div className={`container ${styles.sideBar}`}>
        <div className={styles.sidebarWrap}>
          {SIDE_DATA.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.sideBarContent}
                onClick={handlerClick}
              >
                {item.icone}
                <p id={item.id}>{item.list}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.mainPage}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.9998 21.7495C9.82979 21.7495 8.73979 21.2995 7.91979 20.4795L1.52979 14.0895C1.1254 13.6853 0.804985 13.205 0.587019 12.6764C0.369054 12.1478 0.257842 11.5813 0.259791 11.0095C0.259791 9.84953 0.709791 8.74953 1.52979 7.92953L7.91979 1.53953C8.73979 0.719531 9.83979 0.269531 10.9998 0.269531C12.1598 0.269531 13.2598 0.719531 14.0798 1.53953L20.4698 7.92953C21.2898 8.74953 21.7398 9.84953 21.7398 11.0095C21.7398 12.1695 21.2898 13.2695 20.4698 14.0895L14.0798 20.4795C13.2598 21.2995 12.1698 21.7495 10.9998 21.7495ZM10.9998 1.74953C10.2298 1.74953 9.50979 2.04953 8.97979 2.57953L2.58979 8.96953C2.04979 9.50953 1.75979 10.2295 1.75979 10.9895C1.75979 11.7495 2.05979 12.4795 2.58979 13.0095L8.97979 19.3995C10.0498 20.4695 11.9498 20.4695 13.0198 19.3995L19.4098 13.0095C19.9498 12.4695 20.2398 11.7595 20.2398 10.9895C20.2398 10.2195 19.9398 9.49953 19.4098 8.96953L13.0198 2.57953C12.4898 2.04953 11.7698 1.74953 10.9998 1.74953Z"
              fill="white"
            />
            <path
              d="M16.7497 17.5014C16.5597 17.5014 16.3697 17.4314 16.2197 17.2814L4.71974 5.78141C4.5805 5.64014 4.50244 5.44976 4.50244 5.25141C4.50244 5.05305 4.5805 4.86267 4.71974 4.72141C5.00974 4.43141 5.48974 4.43141 5.77974 4.72141L17.2797 16.2214C17.5697 16.5114 17.5697 16.9914 17.2797 17.2814C17.1297 17.4314 16.9397 17.5014 16.7497 17.5014Z"
              fill="white"
            />
            <path
              d="M5.24974 17.5014C5.05974 17.5014 4.86974 17.4314 4.71974 17.2814C4.5805 17.1401 4.50244 16.9498 4.50244 16.7514C4.50244 16.5531 4.5805 16.3627 4.71974 16.2214L16.2197 4.72141C16.5097 4.43141 16.9897 4.43141 17.2797 4.72141C17.5697 5.01141 17.5697 5.49141 17.2797 5.78141L5.77974 17.2814C5.62974 17.4314 5.43974 17.5014 5.24974 17.5014Z"
              fill="white"
            />
          </svg>
          Main Page
        </div>
      </div>
      <div className={styles.bottomLogo}>
        <h4 className={styles.bottomTitle}>Following</h4>
        <div className={styles.icons}>
          <div className={styles.lightIcons}>
            <a
              className={styles.socialIconLink}
              href={"facebook.com"}
              target="_blank"
            >
              <Facebook className={theme ? styles.socialIcon : ""} />
            </a>
            <a
              className={styles.socialIconLink}
              href={"facebook.com"}
              target="_blank"
            >
              <Twitter className={theme ? styles.socialIcon : ""} />
            </a>
            <a
              className={styles.socialIconLink}
              href={"facebook.com"}
              target="_blank"
            >
              <Linkedin className={theme ? styles.socialIcon : ""} />
            </a>
            <a
              className={styles.socialIconLink}
              href={"facebook.com"}
              target="_blank"
            >
              <GitHub className={theme ? styles.socialIcon : ""} />
            </a>
          </div>
        </div>
        <div className={styles.copyrightbottom}>
          © CORE Multi-Chain, 2022 All rights reserved
        </div>
      </div>
    </motion.div>
  );
}

export default DashboardSideNavigation;
