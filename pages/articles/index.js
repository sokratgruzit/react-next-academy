import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { fetchData } from "@/utils/queries";
import Card from "@/components/UI/Card/Card";
import ArticlesHeader from "@/components/Articles/ArticlesHeader";
import NoResult from "@/components/UI/NoResult/NoResult";
import Pagination from "@/components/UI/Pagination/Pagination";

import styles from "../../styles/Articles/ArticleIndex.module.scss";

export const getStaticProps = async () => {
  const { data: articlesData } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?limit=1000`
  );

  return {
    props: { articlesData },
  };
};

const index = ({ articlesData }) => {
  const [articles, setArticles] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const [paginationData, setPaginationData] = useState(
    !isLoading ? (
      ""
    ) : articlesData && articlesData?.docs ? (
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
    )
  );
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
  };

  // const getData = async () => {
  //   if (!router.query.page)
  //     router.push({ query: { ...router.query, page: 1 } });
  //   if (!router.query.limit)
  //     router.push({ query: { ...router.query, limit: 15 } });
  //   const res = await fetchData(
  //     `${process.env.NEXT_PUBLIC_DATA_URL}/api/data${router.asPath}`
  //   );
  //   setArticles(res.data);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   if (router.isReady) {
  //     getData();
  //   }
  // }, [router]);

  // console.log(articles, isLoading);

  return (
    <div className={styles.ArticlesIndex}>
      <div className={`lightImg ${styles.imgBox}`}>
        <img src="/img/Article/articlesBgL.png" alt="background" />
      </div>
      <div className={`darkImg ${styles.imgBox}`}>
        <img src="/img/Article/articlesBG.png" alt="background" />
      </div>
      <ArticlesHeader />
      <div className={styles.articlesList}>
        <Pagination
          type={"column"}
          paginationData={paginationData}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
};

export default index;