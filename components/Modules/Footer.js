import Link from "next/link";

import styles from "../../styles/Footer/Footer.module.scss";

// some elements are custom. i'll replace them later, with components.

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <div className={styles.footerNav}>
            <div className={`${styles.footerItem}`}>
              <div>
                <img src="/svg/dark-logo.svg" alt="logo" />
              </div>
              <div className={styles.flex}>
                <div>Light Mode</div>
                <div>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 6.25391C8.82436 6.25391 6.25 8.82827 6.25 12.0039C6.25 15.1795 8.82436 17.7539 12 17.7539C15.1756 17.7539 17.75 15.1795 17.75 12.0039C17.75 8.82827 15.1756 6.25391 12 6.25391ZM4.75 12.0039C4.75 7.99984 7.99594 4.75391 12 4.75391C16.0041 4.75391 19.25 7.99984 19.25 12.0039C19.25 16.008 16.0041 19.2539 12 19.2539C7.99594 19.2539 4.75 16.008 4.75 12.0039Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 1.00391C12.5523 1.00391 13 1.45162 13 2.00391V2.08391C13 2.63619 12.5523 3.08391 12 3.08391C11.4477 3.08391 11 2.63619 11 2.08391V2.00391C11 1.45162 11.4477 1.00391 12 1.00391ZM4.15289 4.1568C4.54342 3.76628 5.17658 3.76628 5.56711 4.1568L5.69711 4.2868C6.08763 4.67732 6.08763 5.31049 5.69711 5.70101C5.30658 6.09154 4.67342 6.09154 4.28289 5.70101L4.15289 5.57101C3.76237 5.18049 3.76237 4.54732 4.15289 4.1568ZM19.8471 4.1568C20.2376 4.54732 20.2376 5.18049 19.8471 5.57101L19.7171 5.70101C19.3266 6.09154 18.6934 6.09154 18.3029 5.70101C17.9124 5.31049 17.9124 4.67733 18.3029 4.2868L18.4329 4.1568C18.8234 3.76628 19.4566 3.76627 19.8471 4.1568ZM1 12.0039C1 11.4516 1.44772 11.0039 2 11.0039H2.08C2.63228 11.0039 3.08 11.4516 3.08 12.0039C3.08 12.5562 2.63228 13.0039 2.08 13.0039H2C1.44772 13.0039 1 12.5562 1 12.0039ZM20.92 12.0039C20.92 11.4516 21.3677 11.0039 21.92 11.0039H22C22.5523 11.0039 23 11.4516 23 12.0039C23 12.5562 22.5523 13.0039 22 13.0039H21.92C21.3677 13.0039 20.92 12.5562 20.92 12.0039ZM5.69711 18.3068C6.08763 18.6973 6.08763 19.3305 5.69711 19.721L5.56711 19.851C5.17658 20.2415 4.54342 20.2415 4.15289 19.851C3.76237 19.4605 3.76237 18.8273 4.15289 18.4368L4.28289 18.3068C4.67342 17.9163 5.30658 17.9163 5.69711 18.3068ZM18.3029 18.3068C18.6934 17.9163 19.3266 17.9163 19.7171 18.3068L19.8471 18.4368C20.2376 18.8273 20.2376 19.4605 19.8471 19.851C19.4566 20.2415 18.8234 20.2415 18.4329 19.851L18.3029 19.721C17.9124 19.3305 17.9124 18.6973 18.3029 18.3068ZM12 20.9239C12.5523 20.9239 13 21.3716 13 21.9239V22.0039C13 22.5562 12.5523 23.0039 12 23.0039C11.4477 23.0039 11 22.5562 11 22.0039V21.9239C11 21.3716 11.4477 20.9239 12 20.9239Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.core}>
                © CORE Academy, 2021 All rights reserved
              </div>
            </div>
            <div className={styles.footerItem}>
              <div>services</div>
              <div>articles</div>
              <div>glossary</div>
              <div>become an instructor</div>
              <div>introduction</div>
            </div>
            <div className={styles.footerItem}>
              <div>services</div>
              <div>articles</div>
              <div>glossary</div>
              <div>become an instructor</div>
              <div>introduction</div>
            </div>
            <div className={styles.footerItem}>
              <div>services</div>
              <div>articles</div>
              <div>glossary</div>
              <div>become an instructor</div>
              <div>introduction</div>
            </div>
            <div className={styles.footerItem}>
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="32" cy="32" r="31" stroke="white" strokeWidth="2" />
                <path
                  d="M27.1246 38.24C29.7006 38.24 31.5726 36.96 31.5726 33.856V27.136H29.8286V33.824C29.8286 35.76 28.8686 36.56 27.1246 36.56C25.6526 36.56 24.4206 35.76 24.4206 33.824V27.136H22.6766V33.856C22.6766 36.96 24.5486 38.24 27.1246 38.24ZM34.0534 41.392H35.7814V37.12C36.3254 37.712 37.2054 38.24 38.5654 38.24C41.0934 38.24 42.8854 36.288 42.8854 33.872C42.8854 31.456 41.0934 29.488 38.5654 29.488C37.3654 29.488 36.3574 29.952 35.7814 30.528V29.728H34.0534V41.392ZM38.5974 36.704C37.0454 36.704 35.6854 35.664 35.6854 33.872C35.6854 32.064 37.0454 31.024 38.5974 31.024C40.1494 31.024 41.2054 32.304 41.2054 33.872C41.2054 35.44 40.1494 36.704 38.5974 36.704Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className={styles.footerDescription}>
            <div>
              Disclaimer: Nothing in this Website shall be deemed to constitute
              a prospectus of any sort or a solicitation for investment, nor
              does it in any way pertain to an offering or a solicitation of an
              offer to buy any securities in any jurisdiction.All of the
              information provided within this Website is provided “as is” and
              with no warranties. coremultichain.com makes no representations
              and extends no warranties of any type to the accuracy or
              completeness of any information or content on this Website. Like
              any blockchain technology, the acquisition of tokens is associated
              with a high financial risk level. All contributions are made at
              your discretion, and you are solely responsible before the time of
              contributions for determining all possible risks and doing your
              due diligence. CORE is a software platform ONLY. In no event shall
              www.coremultichain.com or its subcontractors be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              of this platform. Note: Our team is committed to enhancing this
              website, and this is an on-going process. We will have more
              exciting content and include it as early as possible. Every great
              piece of technology is continuously evolving to unlock its full
              potential. We will post all stages of the progress on this
              website.
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
