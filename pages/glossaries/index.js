import useFetch from "@/hooks/useFetch";

import Glossaries from "@/components/Glossaries/Glossaries";

export const getStaticProps = async () => {
  const res = await useFetch(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/glossaries`);

  return {
    props: { res },
  };
};

function index({ res }) {
  return <Glossaries res={res} />;
}

export default index;
