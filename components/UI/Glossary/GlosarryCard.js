import Link from "next/link";

import CornerDecor from "../../UI/CornerDecor/CornerDecor";

import styles from "../../../styles/Glossaries/GlossaryCard.module.scss";

const GlosarryCard = ({ data}) => {
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div className={styles.item} key={index}>
            <div className={styles.itemInner}>
              <CornerDecor />
              <div className="textStyles">
                <h3>{item.title}</h3>
                <p>{item.teaser}</p>
              </div>
              <div className={styles.button}>
                <Link href={`/glossaries/${item.slug}`}>
                  <a>
                    <span>Full definition</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GlosarryCard;
