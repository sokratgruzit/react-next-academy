import { fetchData } from "@/utils/queries";
import Article from "@/components/Articles/Article";

export const getStaticPaths = async () => {
  const articles = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?limit=0`
  );
  const paths = articles?.data?.docs?.map((item) => ({
    params: {
      slug: item?.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug || undefined;
  
  const article = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles/${slug}`
  );

  //this should work but we dont have any featured carts yet :)
  const featured = await fetchData(
    `${process.env.NEXT_PUBLIC_DATA_URL}/api/data/articles?category=${article?.data?.category}f&limit=3`
  );
    
  //i will leave this one for a short period of time :)
  const data = {
    article: article?.data[0],
    featured: featured?.data?.docs
  };

  return {
    props: data
  };
};

const index = ({ article, featured }) => {
  return <Article article={article} featured={featured} />;
};

export default index;
