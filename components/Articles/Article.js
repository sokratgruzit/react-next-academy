import Link from "next/link";
import { connect } from "react-redux";

import CornerDecor from "../UI/CornerDecor/CornerDecor";

import styles from "../../styles/Articles/Article.module.scss";

function Article({ data }) {
  return (
    <Link href={`/articles/${data.slug}`} legacyBehavior>
      <a className={styles.article}>
        <div className={styles.cornerBorderDiv}>
          <CornerDecor />
          <div className={styles.cornerBorder}>
            <div className={styles.imgBox}>
              <img
                src="/img/Article/article1.png"
                alt="articleImage"
                className={styles.imgAbsolute}
              />
              <div className={styles.pins}>
                {data.tag?.length
                  ? data.tag.map((tag) => {
                      return (
                        <div className="white-cat-item" key={tag._id + "hash"}>
                          {tag.title}
                        </div>
                      );
                    })
                  : ""}
                {data.category?._id && (
                  <div className="white-cat-item-border">
                    {data.category?._id ? data.category.title : ""}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomTitle}>
                <h3 className={styles.ttl}>{data.title}</h3>
              </div>
              <div className="bottomLevel">
                {data.level._id ? (
                  <div
                    className={`itemDot level ${data.level.title.toLowerCase()}`}
                  >
                    {data.level.title}
                  </div>
                ) : (
                  ""
                )}
                <div className="itemDot">{data.language?.title}</div>
                <div className="itemDot">{data.duration} min</div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

const mapStateToProps = (state) => {
  return {
    levels: state.commonData.levels,
    tags: state.commonData.tags,
    categories: state.commonData.categories,
  };
};

export default connect(mapStateToProps, null)(Article);
