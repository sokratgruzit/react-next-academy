import { fetchData } from "@/utils/queries";
import Glossaries from "@/components/Glossary/Glossaries";

export const getStaticProps = async () => {
  const { data: glossaries } = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/glossaries`
  );

  return {
    props: { glossaries },
  };
};

function index({ glossaries }) {
  return <Glossaries res={glossaries} />;
}

export default index;
