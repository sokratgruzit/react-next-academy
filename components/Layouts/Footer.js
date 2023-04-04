import React, { useState, useEffect } from "react";
import Link from "next/link";
import { animateScroll } from "react-scroll";

import { fetchData } from "../../utils/queries";

import styles from "../../styles/Layouts/Footer/Footer.module.scss";
import { Arrow, Facebook, GitHub, Linkedin, Twitter } from "@/svg";

function Footer() {
  const scroll = animateScroll;

  const [activeMenu, setActiveMenu] = useState(false);
  const [footerLinks, setFooterLinks] = useState(null);
  const [theme, setTheme] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  let openMenu = (id) => {
    if (activeMenu == id) {
      setActiveMenu(false);
    } else {
      setActiveMenu(id);
    }
  };

  const getFooterLinks = async () => {
    await fetchData(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/footer`).then(
      (res) => {
        const links = res.data?.result;
        setFooterLinks(links);
      }
    );
  };

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

  const getLinks = (row) => {
    if (!footerLinks) return false;
    return footerLinks
      .filter((item) => item.row === row)
      .map((link) => {
        return (
          <Link
            href={link.url}
            key={link._id}
            target={!link.target ? "_blank" : "_self"}
            className="link"
          >
            {link.title}
          </Link>
        );
      });
  };

  useEffect(() => {
    getFooterLinks();
    const mode = localStorage.getItem("mode");
    !mode || mode === "false" ? setTheme(false) : setTheme(true);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogoMob}>
        <Link href="/" className="logo">
          <img className="lightLogo" src="/svg/lightLogo.svg" alt="logo" />
          <img className="darkLogo" src="/svg/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className={styles.footerTop}>
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}>
            <Link href="/" className="logo">
              <img
                className={`${"lightImg"} ${styles.logo}`}
                src="/svg/lightLogo.svg"
                alt="logo"
              />
              <img
                className={`${"darkImg"} ${styles.logo}`}
                src="/svg/logo.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className={styles.lightMode}>
            <label className={styles.switcher}>
              <input
                className={styles.input}
                type="checkbox"
                checked={theme}
                onChange={(event) => setTheme(event.target.checked)}
              />
              <div className={styles.marker}>
                <div className="darkLogo">
                  <p>Light Mode</p>
                  <svg
                    className={styles.svg}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
                  </svg>
                </div>
                <div className="lightLogo">
                  <p style={{ color: "black" }}>Dark Mode</p>
                  <svg
                    className={styles.svg}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2352 1.63082C10.8577 2.21617 10.7142 3.10965 10.4178 3.79041L10.4173 3.79157C9.96799 4.81849 9.72097 5.94434 9.73013 7.13519L9.73015 7.13786C9.74844 11.5573 13.422 15.3276 17.9208 15.5116C18.585 15.5393 19.2205 15.4932 19.837 15.3829C20.2418 15.3091 20.6358 15.2967 20.9885 15.379C21.3479 15.4628 21.7051 15.6578 21.9264 16.0199C22.1467 16.3805 22.1582 16.7855 22.0737 17.1409C21.9905 17.4911 21.8069 17.8367 21.5646 18.165C19.4404 21.0712 15.9042 22.9114 11.9577 22.7403C6.35695 22.494 1.66975 18.0139 1.28204 12.4741C0.927802 7.56338 3.8423 3.28647 8.07872 1.4999C8.75853 1.21196 9.63602 1.06744 10.2352 1.63082ZM9.17031 2.74633C9.07022 2.74909 8.90207 2.78006 8.66292 2.88146L8.66158 2.88202C4.97825 4.43535 2.47284 8.13805 2.7782 12.3669L2.77833 12.3687C3.11104 17.1283 7.16385 21.0278 12.0226 21.2417M9.17031 2.74633C9.16436 2.83426 9.13423 2.98076 9.04281 3.19085C8.51239 4.40342 8.21952 5.73693 8.23016 7.1454C8.25259 12.3854 12.5787 16.7944 17.8595 17.0103C18.6347 17.0426 19.3793 16.9887 20.1024 16.8592L20.1048 16.8588C20.3442 16.8151 20.5064 16.8171 20.604 16.8316C20.574 16.9277 20.5034 17.077 20.3569 17.2753L20.3546 17.2785C18.5187 19.7913 15.4552 21.3903 12.0226 21.2417M20.6954 16.855C20.6954 16.855 20.6949 16.8547 20.6941 16.8543L20.6954 16.855Z"
                      fill="#00050F"
                    />
                  </svg>
                </div>
              </div>
            </label>
          </div>
          <div className={styles.copyright}>
            © CORE Multi-Chain, 2022 All rights reserved
          </div>
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
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerRightCol}>
            <div
              className={`${styles.footerRightColTtl} ${
                show1 === true ? styles.active : ""
              }`}
              onClick={() => setShow1((prev) => !prev)}
            >
              <h4>services</h4>
              <Arrow />
            </div>
            <div
              className={`${styles.footerRightColLink} ${
                show1 ? styles.show : ""
              }`}
            >
              {getLinks(1)}
            </div>
            <div className={styles.footerRightColLinks}>{getLinks(1)}</div>
          </div>
          <div className={styles.footerRightCol}>
            <div
              className={`${styles.footerRightColTtl} ${
                show2 === true ? styles.active : ""
              }`}
              onClick={() => setShow2((prev) => !prev)}
            >
              <h4>company</h4>
              <Arrow />
            </div>
            <div
              className={`${styles.footerRightColLink} ${
                show2 ? styles.show : ""
              }`}
            >
              {getLinks(2)}
            </div>
            <div className={styles.footerRightColLinks}>{getLinks(2)}</div>
          </div>
          <div className={styles.footerRightCol}>
            <div
              className={`${styles.footerRightColTtl} ${
                show3 === true ? styles.active : ""
              }`}
              onClick={() => setShow3((prev) => !prev)}
            >
              <h4>support</h4>
              <Arrow />
            </div>
            <div
              className={`${styles.footerRightColLink} ${
                show3 ? styles.show : ""
              }`}
            >
              {getLinks(3)}
            </div>
            <div className={styles.footerRightColLinks}>{getLinks(3)}</div>
          </div>
        </div>
      </div>
      <div>
        <button className={styles.upBtn} onClick={() => scroll.scrollToTop()}>
          up
        </button>
      </div>
      <div className={styles.bottom}>
        <div>
          <p className={styles.txt}>
            Disclaimer: Nothing in this Website shall be deemed to constitute a
            prospectus of any sort or a solicitation for investment, nor does it
            in any way pertain to an offering or a solicitation of an offer to
            buy any securities in any jurisdiction.All of the information
            provided within this Website is provided “as is” and with no
            warranties. coremultichain.com makes no representations and extends
            no warranties of any type to the accuracy or completeness of any
            information or content on this Website. Like any blockchain
            technology, the acquisition of tokens is associated with a high
            financial risk level. All contributions are made at your discretion,
            and you are solely responsible before the time of contributions for
            determining all possible risks and doing your due diligence. CORE is
            a software platform ONLY. In no event shall www.coremultichain.com
            or its subcontractors be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business
            interruption) arising out of the use of this platform.
          </p>
          <p className={styles.txt}>
            Note: Our team is committed to enhancing this website, and this is
            an on-going process. We will have more exciting content and include
            it as early as possible. Every great piece of technology is
            continuously evolving to unlock its full potential. We will post all
            stages of the progress on this website.
          </p>
        </div>
        <div className={styles.logo}>
          <div className={theme ? "lightLogo" : "darkLogo"}>
            <img
              src={theme ? "/svg/footer-dark-logo.svg" : "/svg/footer-logo.svg"}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className={styles.bottomLogo}>
        <div className={styles.copyrightbottom}>
          © CORE Multi-Chain, 2022 All rights reserved
        </div>
        <div className={theme ? "lightLogo" : "darkLogo"}>
          <img
            src={theme ? "/svg/footer-dark-logo.svg" : "/svg/footer-logo.svg"}
            alt="logo"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
