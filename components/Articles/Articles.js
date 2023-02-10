import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import Article from "../../components/Article/Article";
// import Loading from "../../components/Loading/Loading";
// import Pagination from "../../components/UI/Pagination/Pagination";
// import NotResult from "../../components/UI/NoResult/NotResult";
// import Tags from "../UI/Tags/Tags";
// import BgImage from "../UI/BackgroundImg/BgImage";

import styles from "./Articles.module.scss";

const CATEGORIS_BTN_DATA = [
  {
    name: "security",
  },
  {
    name: "education",
  },
  {
    name: "featured",
  },
  {
    name: "releases",
  },
  {
    name: "trading",
  },
  {
    name: "blockchain",
  },
  {
    name: "essentials",
  },
];
const DIFICULITY_BTN_DATA = [
  {
    name: "beginner",
    customStyle: "dificulitycolorOptionGreen",
  },
  {
    name: "intermediate",
    customStyle: "dificulitycolorOptionPurple",
  },
  {
    name: "advance",
    customStyle: "dificulitycolorOptionBlue",
  },
  {
    name: "pro",
    customStyle: "dificulitycolorOptionRed",
  },
];
const TOPICS_BTN_DATA = [
  {
    name: "Trading",
  },
  {
    name: "security",
  },
  {
    name: "python",
  },
  {
    name: "blockchain",
  },
  {
    name: "crypto",
  },
];

function Articles({ commonData }) {
  const [articles, setArticles] = useState(null);
  // const { categories, levels, tags } = commonData;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState(1);

  const hanldeChange = (definition, value) => {
    if (definition !== "page" && definition !== "limit") {
      if (!router.query[definition]) {
        router.push({
          query: { ...router.query, [definition]: String(value) },
        });
        return true;
      }

      if (
        !Array.isArray(router.query[definition]) &&
        router.query[definition] === String(value)
      ) {
        const params = router.query;
        delete params[definition];
        router.push({
          query: { ...params },
        });
        return true;
      } else if (
        !Array.isArray(router.query[definition]) &&
        router.query[definition] != String(value)
      ) {
        const params = [];
        params.push(router.query[definition]);
        params.push(String(value));

        router.push({
          query: { ...router.query, [definition]: params },
        });
        return true;
      }

      if (Array.isArray(router.query[definition])) {
        let params = router.query[definition];
        const index = params.indexOf(value.toString());
        3;
        if (index === -1) {
          params.push(value.toString());
        } else {
          params.splice(index, 1);
        }

        router.push({
          query: { ...router.query, [definition]: params },
        });
        return true;
      }
    } else {
      router.push({
        query: { ...router.query, [definition]: value },
      });
    }
  };

  const reset = () => {
    router.push({
      query: {},
    });
  };

  const isActive = (definition, id) => {
    if (!router.query[definition]) return false;

    if (
      Array.isArray(router.query[definition]) &&
      router.query[definition].includes(String(id))
    ) {
      return true;
    } else if (router.query[definition] === String(id)) {
      return true;
    }

    return false;
  };

  const getData = async () => {
    if (!router.query.page) router.push({ query: { ...router.query, page: 1 } });
    if (!router.query.limit) router.push({ query: { ...router.query, limit: 15 } });

    const res = await fetch(`${process.env.DATA_URL}/api/data${router.asPath}`);
    setArticles(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (router.isReady) {
      console.log(router);
      getData();
    }
  }, [router]);

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const loadingDuration = 500;

  // useEffect(() => {
  //   let loadingTimeout = setTimeout(() => {
  //     if (loading >= 100) return;
  //     setProgress(progress + 1);
  //   }, loadingDuration / 100);
  //   if (progress === 100) {
  //     setLoading(false);
  //   }
  //   return () => {
  //     clearTimeout(loadingTimeout);
  //   };
  // }, [progress, loading]);
  // console.log("Sgf");

  return (
    <div>
      {/* <div className={styles.lightImg}>
        <BgImage id={51} />
      </div>
      <div className={styles.darkImg}>
        <BgImage id={5} />
      </div> */}
      {/* <div className={styles.articlesPage}>
        <div className="container">
          <div className={styles.top}>
            <h2 className={styles.title}>Articles</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                alignItems: "center",
                margin: "89px auto",
              }}
            >
              <div style={{ display: "flex" }}>
                <Tags data={CATEGORIS_BTN_DATA} type="categories" />
              </div>
              <div style={{ display: "flex" }}>
                <Tags data={TOPICS_BTN_DATA} type="topics" />
              </div>
              <div style={{ display: "flex" }}>
                <Tags data={DIFICULITY_BTN_DATA} type="dificulity" />
              </div>
            </div>
            <div className={styles.articleFilters}>
              <div className={styles.icon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4H18C18.2652 4 18.5196 4.10536 18.7071 4.29289C18.8946 4.48043 19 4.73478 19 5V8C18.9999 8.26519 18.8946 8.51951 18.707 8.707L14 13.414V17C13.9999 17.2652 13.8945 17.5195 13.707 17.707L11.707 19.707C11.5671 19.8468 11.389 19.942 11.195 19.9806C11.0011 20.0192 10.8 19.9993 10.6173 19.9237C10.4346 19.848 10.2785 19.7199 10.1686 19.5555C10.0587 19.391 10 19.1978 10 19V13.414L5.293 8.707C5.10545 8.51951 5.00006 8.26519 5 8V5Z"
                    fill="white"
                  />
                </svg>
                <span>Filter by</span>
              </div>

              <div className={styles.list}>
                <h4
                  className={active === 1 ? styles.active : ""}
                  onClick={() => setActive(1)}
                >
                  Categories /
                </h4>
                <h4
                  className={active === 2 ? styles.active : ""}
                  onClick={() => setActive(2)}
                >
                  Difficulty /
                </h4>
                <h4
                  className={active === 3 ? styles.active : ""}
                  onClick={() => setActive(3)}
                >
                  Tags
                </h4>
              </div>
              <div className={styles.reset} onClick={() => reset()}>
                <svg
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.60083 5.16038C4.93322 4.2701 6.49968 3.79492 8.10213 3.79492C9.11581 3.79492 9.83169 3.82912 10.3354 3.88499C10.7941 3.93587 11.2052 4.01521 11.4967 4.1917C11.6547 4.28737 11.9197 4.49929 11.9881 4.88094C12.0566 5.26376 11.8785 5.54449 11.7824 5.66422C11.6818 5.78944 11.5712 5.86834 11.5159 5.90514C11.4831 5.92697 11.4539 5.94421 11.4315 5.95676C11.4201 5.96315 11.4099 5.96863 11.4012 5.97317L11.3892 5.97936L11.384 5.98198L11.3816 5.98317L11.3805 5.98374C11.3799 5.98401 11.3794 5.98428 11.0137 5.24209L11.3794 5.98429L10.6006 6.3679L10.2327 5.62108C10.2049 5.61757 10.1754 5.61406 10.1439 5.61057C9.73052 5.56471 9.08595 5.53109 8.10213 5.53109C6.84306 5.53109 5.61227 5.90445 4.56539 6.60395C3.51852 7.30345 2.70258 8.29768 2.22075 9.4609C1.73893 10.6241 1.61286 11.9041 1.85849 13.139C2.10413 14.3739 2.71042 15.5082 3.60072 16.3985C4.49101 17.2888 5.62532 17.8951 6.86019 18.1407C8.09507 18.3863 9.37505 18.2602 10.5383 17.7784C11.7015 17.2966 12.6957 16.4807 13.3952 15.4338C14.0947 14.3869 14.4681 13.1561 14.4681 11.897L14.4681 11.029H16.2043L16.2043 11.897C16.2043 13.4995 15.7291 15.066 14.8388 16.3983C13.9485 17.7307 12.6832 18.7692 11.2027 19.3824C9.72221 19.9957 8.09314 20.1561 6.52148 19.8435C4.94983 19.5309 3.50616 18.7592 2.37306 17.6261C1.23996 16.493 0.468306 15.0494 0.155684 13.4777C-0.156939 11.906 0.00351045 10.277 0.616741 8.7965C1.22997 7.31603 2.26844 6.05065 3.60083 5.16038Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.10193 0L12.9466 4.84468L8.10193 9.68936L6.87427 8.4617L10.4913 4.84468L6.87427 1.22766L8.10193 0Z"
                    fill="white"
                  />
                </svg>
                <span>Reset Filters</span>
              </div>
            </div>
            <div className="filterValue">
              <div className={active === 1 ? "active" : ""}>
                {categories?.data?.length &&
                  categories.data.map((cat) => {
                    return (
                      <div
                        className={`${styles.item}, cornered-scat-item ${
                          isActive("category", cat._id) ? "active" : ""
                        }`}
                        key={cat._id}
                        onClick={() => hanldeChange("category", cat._id)}
                      >
                        {cat.title}
                      </div>
                    );
                  })}
              </div>
              <div className={active === 2 ? "active" : ""}>
                {levels?.data?.length &&
                  levels.data.map((lev) => {
                    return (
                      <div
                        className={`${styles.item}, lev-item ${lev.title.toLowerCase()} 
                                       ${isActive("level", lev._id) ? "active" : ""}`}
                        key={lev._id}
                        onClick={() => hanldeChange("level", lev._id)}
                      >
                        {lev.title}
                      </div>
                    );
                  })}
              </div>

              <div className={active === 3 ? "active" : ""}>
                {tags?.data?.length &&
                  tags.data.map((tag) => {
                    return (
                      <div
                        className={`${styles.item}, tag-item ${
                          isActive("tag", tag._id) ? "active" : ""
                        }`}
                        key={tag._id}
                        onClick={() => hanldeChange("tag", tag._id)}
                      >
                        {tag.title}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className={styles.articleList}>
            {isLoading ? (
              <Loading progress={progress} trackWidth={66} indicatorWidth={66} />
            ) : articles && articles.docs.length ? (
              articles.docs.map((itemData) => {
                return (
                  <div className={styles.item} key={itemData.id}>
                    <Article data={itemData} />
                  </div>
                );
              })
            ) : (
              <NotResult
                title={"Oops! Nothing yet"}
                teaser={"No articles purchased yet."}
              />
            )}
          </div>
          <div className={styles.paginarion}>
            {articles && articles.total ? (
              <Pagination
                data={{
                  total: articles.total,
                  limit: Number(router.query.limit),
                  page: Number(router.query.page),
                  hanldeChange,
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Articles;
