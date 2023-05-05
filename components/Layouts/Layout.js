import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCommonData } from "@/store/commonData/commonDataSlice";
import { setSettings } from "@/store/settings/settingsSlice";
import { fetchData } from "@/utils/queries";

function Layout({ children }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const getCommonData = async () => {
      const { data } = await fetchData(
        `${process.env.NEXT_PUBLIC_DATA_URL}/api/content/common-data`
      );
  
      dispatch(
        setCommonData({
          categories: data?.categories,
          levels: data?.levels,
          tags: data?.tags,
          header: data?.header,
          footer: data?.footer,
          glossaries: data?.glossaries,
          featured: data?.featured,
          blockchain: data?.blockchain,
          latest: data?.latest,
          essentials: data?.essentials,
          security: data?.security
        })
      );
    };

    getCommonData();
  }, []);

  return <>{children}</>;
}

export default Layout;
