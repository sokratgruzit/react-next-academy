import { fetchData } from "../../queries";
import { useEffect, useState } from "react";

import styles from "../../styles/Layouts/Header/DashboardHeader.module.scss";

const DashboardHeader = () => {
  let userData = [
    {
      name: "Konstantin",
      balance: "110.00$",
    },
  ];

  const [headerLinks, setHeaderLinks] = useState();
  const [theme, setTheme] = useState(false);

  const getHeaderLinks = async () => {
    const res = await fetchData(
      `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/header`
    );
    res.data?.result?.length ? setHeaderLinks(res?.data?.result) : "";
    return res;
  };

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (theme) {
      console.log(theme);
      body.classList.add("light");
      localStorage.setItem("mode", "true");
    } else {
      body.classList.remove("light");
      localStorage.setItem("mode", "false");
    }
  }, [theme]);

  useEffect(() => {
    getHeaderLinks();
    const mode = localStorage.getItem("mode");
    !mode || mode === "false" ? setTheme(false) : setTheme(true);
  }, []);

  return (
    <div className={`textStyles ${styles.headerWrapper} container`}>
      <img
        className={styles.academyLogo}
        src="img/Dashboard/academy_logo.png"
        alt="academy-logo"
      />
      <div className={`${styles.headerContentWrapp}`}>
        <h5>My Courses</h5>
        <div className={styles.headerContent}>
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
          <span className={styles.line}></span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0002 6.25293C8.82461 6.25293 6.25024 8.82729 6.25024 12.0029C6.25024 15.1786 8.82461 17.7529 12.0002 17.7529C15.1759 17.7529 17.7502 15.1786 17.7502 12.0029C17.7502 8.82729 15.1759 6.25293 12.0002 6.25293ZM4.75024 12.0029C4.75024 7.99886 7.99618 4.75293 12.0002 4.75293C16.0043 4.75293 19.2502 7.99886 19.2502 12.0029C19.2502 16.007 16.0043 19.2529 12.0002 19.2529C7.99618 19.2529 4.75024 16.007 4.75024 12.0029Z"
              fill="white"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0002 1.00293C12.5525 1.00293 13.0002 1.45064 13.0002 2.00293V2.08293C13.0002 2.63521 12.5525 3.08293 12.0002 3.08293C11.448 3.08293 11.0002 2.63521 11.0002 2.08293V2.00293C11.0002 1.45064 11.448 1.00293 12.0002 1.00293ZM4.15314 4.15582C4.54366 3.7653 5.17683 3.7653 5.56735 4.15582L5.69735 4.28582C6.08787 4.67635 6.08787 5.30951 5.69735 5.70004C5.30683 6.09056 4.67366 6.09056 4.28314 5.70004L4.15314 5.57004C3.76261 5.17951 3.76261 4.54635 4.15314 4.15582ZM19.8473 4.15582C20.2379 4.54635 20.2379 5.17951 19.8474 5.57003L19.7174 5.70004C19.3268 6.09056 18.6937 6.09056 18.3031 5.70004C17.9126 5.30951 17.9126 4.67635 18.3031 4.28582L18.4331 4.15582C18.8237 3.7653 19.4568 3.7653 19.8473 4.15582ZM1.00024 12.0029C1.00024 11.4506 1.44796 11.0029 2.00024 11.0029H2.08024C2.63253 11.0029 3.08024 11.4506 3.08024 12.0029C3.08024 12.5552 2.63253 13.0029 2.08024 13.0029H2.00024C1.44796 13.0029 1.00024 12.5552 1.00024 12.0029ZM20.9202 12.0029C20.9202 11.4506 21.368 11.0029 21.9202 11.0029H22.0002C22.5525 11.0029 23.0002 11.4506 23.0002 12.0029C23.0002 12.5552 22.5525 13.0029 22.0002 13.0029H21.9202C21.368 13.0029 20.9202 12.5552 20.9202 12.0029ZM5.69735 18.3058C6.08788 18.6964 6.08787 19.3295 5.69735 19.72L5.56735 19.85C5.17682 20.2406 4.54366 20.2406 4.15314 19.85C3.76261 19.4595 3.76261 18.8263 4.15314 18.4358L4.28314 18.3058C4.67366 17.9153 5.30683 17.9153 5.69735 18.3058ZM18.3031 18.3058C18.6937 17.9153 19.3268 17.9153 19.7174 18.3058L19.8474 18.4358C20.2379 18.8263 20.2379 19.4595 19.8474 19.85C19.4568 20.2406 18.8237 20.2406 18.4331 19.85L18.3031 19.72C17.9126 19.3295 17.9126 18.6963 18.3031 18.3058ZM12.0002 20.9229C12.5525 20.9229 13.0002 21.3706 13.0002 21.9229V22.0029C13.0002 22.5552 12.5525 23.0029 12.0002 23.0029C11.448 23.0029 11.0002 22.5552 11.0002 22.0029V21.9229C11.0002 21.3706 11.448 20.9229 12.0002 20.9229Z"
              fill="white"
            ></path>
          </svg>
          <div className={styles.user}>
            <h5>Konstantin</h5>
            <p>balance: $110.00</p>
          </div>
          <div className={styles.burgerMenu}>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
          </div>
          <div className={styles.circleImage}></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
