import React from "react";
import { useRouter } from "next/router";

import { fetchData } from "@/utils/queries";

import Articles from "@/components/Articles/Articles";

export const getStaticProps = async () => {
  const { data: articles } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles`
  );

  return {
    props: {
      title: 'Articles',
      articles
    },
  };
};

const index = ({ title, articles }) => {
  return <Articles title={title} data={articles} />;
};

export default index;
