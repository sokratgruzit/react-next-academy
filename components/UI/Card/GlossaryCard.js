import Link from "next/link";
import { v4 as uuidv4 } from 'uuid';

import CornerDecor from "../CornerDecor/CornerDecor";

import styles from "../../../styles/Glossary/GlossaryCard.module.scss";

const GlossaryCard = ({ data, quantity }) => {
  const items = quantity;
  let chunk = data?.result?.sort(() => 1 - Math.random());
  let resultGlossary = chunk?.slice(0.5, items);

  return (
    <>
      {resultGlossary?.map((item) => {
        return (
          <div className={styles.item} key={uuidv4()}>
            <div className={styles.itemInner}>
              <CornerDecor />
              <div className='textStyles'>
                <h3>{item.title}</h3>
                <p>{item.teaser}</p>
              </div>
              <div className={styles.button}>
                <Link href={`/glossary/${item.slug}`}>
                  <span>Full definition</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GlossaryCard;
