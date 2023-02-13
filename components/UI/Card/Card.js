import Link from "next/link";

import CornerDecor from "../CornerDecor/CornerDecor";

import styles from "../../../styles/Articles/Article.module.scss";

const Card = ({ data, type }) => {
    
    let element = null;

    if (type === 'default') {
        element = (
            <Link href={`/articles/${data.slug}`} className={styles.article}>
                <div className={styles.cornerBorderDiv}>
                    <CornerDecor />
                    <div className={styles.cornerBorder}>
                        <div className={styles.imgBox}>
                            <img
                                src={process.env.NEXT_PUBLIC_IMG_PATH + data.image?.path}
                                alt={data.image?.alt}
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
            </Link>
        );
    };

    return element;
}

export default Card;
