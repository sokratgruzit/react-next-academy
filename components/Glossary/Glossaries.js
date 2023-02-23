import { Link as ScrollLink, Element } from "react-scroll";
import Link from "next/link";

import CornerDecor from "../UI/CornerDecor/CornerDecor";

import styles from "../../styles/Glossary/GlossariesIndex.module.scss";

const Glossaries = ({ res }) => {
  const glossaries = res?.result || null;
  const isPending = false;
  const ALPHABET = [
    "#",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let group = null;

  if (!isPending && glossaries && glossaries?.length) {
    group = ALPHABET.map((character) => {
      const GROUPED_BY_LETTER = glossaries.filter(
        (item) => item.character === character
      );

      if (GROUPED_BY_LETTER?.length) {
        return (
          <Element className={styles.item} key={character} name={character}>
            <div className={styles.characterScroll}>
              <div className={styles.value}>{character}</div>
            </div>

            <div className={`${styles.contentList} ${"textStyles"}`}>
              {GROUPED_BY_LETTER.map((groupedItem, index) => {
                return (
                  <Link
                    href={"glossary/" + groupedItem.slug}
                    key={groupedItem._id}
                  >
                    <div className={styles.listItem}>
                      <span className={styles.content}>
                        <h3>{groupedItem.title}</h3>
                        <p>{groupedItem.teaser}</p>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Element>
        );
      }
    });
  }

  return (
    <div className={styles.glossariesPage}>
      {!isPending && glossaries?.length ? (
        <div className={styles.inner}>
          <div style={{ position: "relative" }}>
            <img
              className={`darkImg ${styles.background}`}
              src="img/Glossaries/innerbg1.png"
              alt="background"
            />
            <img
              className={`lightImg ${styles.backgroundL}`}
              src="img/Glossaries/background1Light.png"
              alt="background"
            />
            <div className="container textStyles">
              <div className={styles.top}>
                <h1 className={styles.title}>The Words of Crypto</h1>
                <h4 className={styles.teaser}>
                  Time to understand the language
                </h4>
              </div>
            </div>
            <div className={`${styles.search} ${"container"}`}>
              <div className={styles.cornerDecor}>
                <CornerDecor />
              </div>
              <div className={styles.letters}>
                {ALPHABET.map((character) => {
                  return (
                    <ScrollLink
                      to={character}
                      spy={true}
                      smooth={true}
                      duration={300}
                      className={styles.item}
                      key={character}
                    >
                      {character}
                    </ScrollLink>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={`${styles.glossaryList} ${"container"}`}>{group}</div>
        </div>
      ) : isPending ? (
        <div className={styles.loading}>Loading ...</div>
      ) : (
        ""
        // <NotResult
        //   title={"Oops! Nothing yet"}
        //   teaser={"No glossaries purchased yet."}
        // />
      )}
    </div>
  );
};

export default Glossaries;
