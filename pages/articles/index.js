import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { fetchData } from "@/utils/queries";
import Card from "@/components/UI/Card/Card";
import ArticlesHeader from "@/components/Articles/ArticlesHeader";
import NoResult from "@/components/UI/NoResult/NoResult";

import styles from "../../styles/Articles/ArticleIndex.module.scss";

// export async function getServerSideProps(context) {
//   const { data: articles } = await fetchData(
//     `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles${
//       context.query.tag ? "/" + context.query.tag : ""
//     }`
//   );

//   return {
//     props: {
//       title: "Articles",
//       articles,
//     },
//   };
// }
export const getStaticProps = async () => {
  const { data: articlesData } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles`
  );

  return {
    props: { articlesData },
  };
};

const index = ({ articlesData, data }) => {
  const [articles, setArticles] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    // if (!router.query.page)
    //   router.push({ query: { ...router.query, page: 1 } });
    // if (!router.query.limit)
    //   router.push({ query: { ...router.query, limit: 15 } });
    const res = await fetchData(
      `${process.env.NEXT_PUBLIC_DATA_URL}/api/data${router.asPath}`
    );
    setArticles(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (router.isReady) {
      getData();
    }
  }, [router]);

  return (
    <div>
      <div className={`lightImg ${styles.imgBox}`}>
        <img src="/img/Article/articlesBgL.png" alt="" />
      </div>
      <div className={`darkImg ${styles.imgBox}`}>
        <img src="/img/Article/articlesBG.png" alt="" />
      </div>
      <ArticlesHeader />
      <div className="container">
        <div className={styles.articleList}>
          {isLoading ? (
            ""
          ) : articlesData && articlesData.docs.length ? (
            articlesData?.docs.map((item, index) => {
              return (
                <div className={styles.item} key={index}>
                  <Card title={"Articles"} data={item} type={"default"} />
                </div>
              );
            })
          ) : (
            <NoResult
              title={"Oops! Nothing yet"}
              teaser={"No articles purchased yet."}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
