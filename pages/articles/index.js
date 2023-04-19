import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { fetchData } from "@/utils/queries";
import Card from "@/components/UI/Card/Card";
import ArticlesHeader from "@/components/Articles/ArticlesHeader";
import NoResult from "@/components/UI/NoResult/NoResult";
import Pagination from "@/components/UI/Pagination/Pagination";

import styles from "../../styles/Articles/ArticleIndex.module.scss";
import LoadingSpinner from "@/components/UI/LoadingSpinner/LoadingSpinner";

const index = ({ articlesData }) => {
  const [articles, setArticles] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [paginationData, setPaginationData] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  useEffect(() => {
    const fetchAndRenderData = async () => {
      const { data } = await fetchData(
        `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?limit=0`
      );
      setArticles(data);
      setIsLoading(false);
    };
    fetchAndRenderData();
  }, []);

  useEffect(() => {
    if (!isLoading && articles) {
      setPaginationData(
        articles.map((item, index) => {
          return (
            <div className={styles.item} key={index}>
              <Card title={"Articles"} data={item} type={"default"} />
            </div>
          );
        })
      );
    } else {
      setPaginationData(
        <NoResult
          title={"Oops! Nothing yet"}
          teaser={"No articles purchased yet."}
        />
      );
    }
  }, [isLoading, articles]);

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
  };

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
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Pagination
            type={"column"}
            paginationData={paginationData}
            itemsPerPage={itemsPerPage}
          />
        )}
      </div>
    </div>
  );
};

export default index;
