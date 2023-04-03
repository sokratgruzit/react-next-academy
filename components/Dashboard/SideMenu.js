import React, { cloneElement } from "react";
import Link from "next/link";
import { Facebook, GitHub, Linkedin, Twitter } from "@/svg";
import styles from "../../styles/Dashboard/SideMenu.module.scss";

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
    list: "Purchase History",
    icone: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_9486_2561"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_9486_2561)">
          <path
            d="M11.9707 20.32C9.8539 20.32 8.00962 19.6241 6.43787 18.2321C4.86612 16.8401 3.95844 15.09 3.71484 12.9816H5.14462C5.39399 14.69 6.16159 16.1069 7.44744 17.2326C8.73331 18.3582 10.2405 18.921 11.969 18.921C13.8951 18.921 15.5305 18.2486 16.8754 16.9036C18.2203 15.5587 18.8927 13.9236 18.8927 11.9983C18.8927 10.073 18.2194 8.43911 16.8728 7.09649C15.5263 5.75389 13.8864 5.08259 11.9533 5.08259C10.8844 5.08259 9.88253 5.31977 8.94777 5.79412C8.01298 6.26847 7.20906 6.91509 6.53599 7.73399H9.09079V9.13157H4.23604V4.27682H5.63504V6.62587C6.43311 5.6951 7.37913 4.97203 8.47309 4.45664C9.56706 3.94128 10.7276 3.68359 11.9548 3.68359C13.1063 3.68359 14.1883 3.90287 15.2007 4.34142C16.2132 4.77999 17.0956 5.37422 17.8479 6.12412C18.6002 6.874 19.1956 7.75275 19.634 8.76037C20.0725 9.76797 20.2917 10.8483 20.2917 12.0012C20.2917 13.1542 20.0725 14.2347 19.634 15.2427C19.1956 16.2507 18.6005 17.1305 17.8489 17.8821C17.0973 18.6337 16.2172 19.2279 15.2086 19.6648C14.2 20.1016 13.1207 20.32 11.9707 20.32ZM14.9552 15.9278L11.3331 12.2881V7.10277H12.7321V11.7182L15.9485 14.9345L14.9552 15.9278Z"
            stroke="#fff"
          />
        </g>
      </svg>
    ),
  },
  {
    id: 5,
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

const SideMenu = ({ showMenu, tab, handlerClick }) => {
  return (
    <>
      <div
        className={`textStyles ${
          showMenu ? styles.sideBar : styles.onMobileScreen
        }`}
      >
        <div className={styles.sidebarWrap}>
          {SIDE_DATA.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  tab == item.id ? styles.activeTabs : styles.sideBarContent
                }
                onClick={handlerClick}
              >
                {cloneElement(item.icone, {
                  className: tab == item.id ? styles.iconSelected : "",
                })}
                <p
                  className={styles.sidebarList}
                  style={{ color: tab == item.id ? "blue" : "" }}
                  id={item.id}
                >
                  {item.list}
                </p>
              </div>
            );
          })}
        </div>
        <Link href="/">
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
        </Link>
        {/* 
        <div className={styles.bottomLogo}>
        <h4 className={styles.bottomTitle}>Following</h4>
        <div className={styles.icons}>
          <div className={styles.lightIcons}>
            <a
              className={styles.socialIconLink}
              href={"facebook.com"}
              target="_blank"
            >
              <Facebook className={styles.socialIcon} />
            </a>
            <a
              className={styles.socialIconLink}
              href={"facebook.com"}
              target="_blank"
            >
              <Twitter className={styles.socialIcon} />
            </a>
            <a
              className={styles.socialIconLink}
              href={"facebook.com"}
              target="_blank"
            >
              <Linkedin className={styles.socialIcon} />
            </a>
            <a
              className={styles.socialIconLink}
              href={"facebook.com"}
              target="_blank"
            >
              <GitHub className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <div className={styles.copyrightbottom}>
          © CORE Multi-Chain, 2022 All rights reserved
        </div>
      </div> */}
      </div>
    </>
  );
};

export default SideMenu;
