import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Aos from "aos";
import "aos/dist/aos.css";
import { v4 as uuidv4 } from 'uuid';

import { fetchData } from "@/utils/queries";
import Card from "@/components/UI/Card/Card";
import ArticlesHeader from "@/components/Articles/ArticlesHeader";
import NoResult from "@/components/UI/NoResult/NoResult";
import Pagination from "@/components/UI/Pagination/Pagination";

import styles from "../../styles/Articles/ArticleIndex.module.scss";
import LoadingSpinner from "@/components/UI/LoadingSpinner/LoadingSpinner";

const index = () => {
  const [articles, setArticles] = useState(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [paginationData, setPaginationData] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  useEffect(() => {
    const fetchAndRenderData = async () => {
      let rQuery = router.query;
      let query = "";

      for (let key of Object.keys(rQuery)) {
        query += key + "=" + rQuery[key] + "&";
      }

      const { data } = await fetchData(
        `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?${query}limit=0`
      );
      setArticles(data.docs);
      setIsLoading(false);
    };
    fetchAndRenderData();
  }, []);

  useEffect(() => {
    if (!isLoading && articles) {
      setPaginationData(
        articles.map((item) => {
          return (
            <div className={styles.item} key={uuidv4()} data-aos="fade-up">
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
  useEffect(() => {
    Aos.init({ duration: 700 });
  }),
    [];

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
