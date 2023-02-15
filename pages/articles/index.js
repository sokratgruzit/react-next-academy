import React from "react";
import { useRouter } from "next/router";

import Articles from "@/components/Articles/Articles";
import { fetchData } from "@/utils/queries";
import ArticlesHeader from "@/components/Articles/ArticlesHeader";

export async function getServerSideProps(context) {
  const { data: articles } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles${
      context.query.tag ? "/" + context.query.tag : ""
    }`
  );

  return {
    props: {
      title: "Articles",
      articles,
    },
  };
}

const index = ({ title, articles }) => {
  return (
    <div>
      <ArticlesHeader />
      <Articles title={"Articles"} data={articles} />
    </div>
  );
};

export default index;
