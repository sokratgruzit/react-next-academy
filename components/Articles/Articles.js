import { useEffect, useState } from "react";
import { useRouter } from "next/router";
// import Article from "../../components/Article/Article";
// import Loading from "../../components/Loading/Loading";
// import Pagination from "../../components/UI/Pagination/Pagination";
// import NotResult from "../../components/UI/NoResult/NotResult";
import Tags from "../UI/Tags/Tags";
import BgImage from "../UI/BackgroundImg/BgImage";

import styles from "./Articles.module.scss";
import { useSelector } from "react-redux";
import { Reset } from "@/svg";
import FilterBy from "@/svg/FilterBy";

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

function Articles() {
  const commonData = useSelector((state) => state.commonData);
  const [articles, setArticles] = useState(null);
  const { categories, levels, tags } = {};
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
  console.log("Sgf");

  return (
    <div>
      <div className={styles.lightImg}>
        <BgImage id={51} />
      </div>
      <div className={styles.darkImg}>
        <BgImage id={5} />
      </div>
      <div className={styles.articlesPage}>
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
                <FilterBy />
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
                <Reset />
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
          {/* <div className={styles.articleList}>
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
          </div> */}
          {/* <div className={styles.paginarion}>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Articles;
