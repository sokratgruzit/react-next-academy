import parse from "html-react-parser";
import Moment from "react-moment";
import { useRouter } from "next/router";

import { fetchData } from "@/utils/queries";

export async function getServerSideProps(context) {
  const { data: content } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/content/pages/${context.query['dynamic-pages']}`,
  );

  console.log(content)

  return {
    props: {
      content
    }
  };
}

import Introduction from "@/components/Introduction/Introduction";

const index = () => {
  return <Introduction />;
};

export default index;
