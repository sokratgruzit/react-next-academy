import Articles from "@/components/Articles/Articles";
import React from "react";

import { fetchData } from "@/utils/queries";

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
