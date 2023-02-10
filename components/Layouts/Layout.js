import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCommonData } from "@/store/commonData/commonDataSlice";
import { setSettings } from "@/store/settings/settingsSlice";

import axios from "axios";

function Layout({ children }) {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/settings`)
      .then((res) => {
        dispatch(setSettings(res.data));
      })
      .catch((e) => {});

    Promise.allSettled([
      axios.get(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/category`),
      axios.get(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/level`),
      axios.get(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/tag`),
    ]).then((results) => {
      let mappedResults;
      results.forEach((result) => {
        mappedResults = results.map((result) => {
          if (result.status === "fulfilled") {
            return result.value.data;
          }
          return null;
        });
      });
      dispatch(
        setCommonData({
          categories: mappedResults[0],
          levels: mappedResults[1],
          tags: mappedResults[2],
        }),
      );
    });
  }, []);

  return <>{children}</>;
}

export default Layout;
