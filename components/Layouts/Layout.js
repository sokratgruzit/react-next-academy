import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCommonData } from "@/store/commonData/commonDataSlice";
import { setSettings } from "@/store/settings/settingsSlice";

import axios from "axios";

function Layout({ children, setSettings, setCommonData }) {
  console.log(setSettings, "func");
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${process.env.DATA_URL}/api/data/settings`)
      .then((res) => {
        console.log(res);
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
            return result.value;
          }
          return null;
        });
      });
      // dispatch(setCommonData(mappedResults));
    });
  }, []);

  return <>{children}</>;
}

export default Layout;
