import React from "react";
import { useRouter } from "next/router";

import Articles from "@/components/Articles/Articles";
import { fetchData } from "@/utils/queries";

export async function getServerSideProps(context) {
  const { data: articles } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles${
      context.query.tag ? "/" + context.query.tag : ""
    }`,
  );

  return {
    props: {
      title: "Articles",
      articles,
    },
  };
}

const index = ({ title, articles }) => {
  return <Articles title={title} data={articles} />;
};

export default index;
