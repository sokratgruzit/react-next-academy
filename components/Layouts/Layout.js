import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";

import { setCommonData } from '@/store/commonData/commonDataSlice';

function Layout({ children }) {
  const dispatch = useDispatch();
  const { data } = useFetch(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/settings`);
  const categories = useFetch(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/category`);
  const levels = useFetch(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/level`);
  const tags = useFetch(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/tag`);
  // console.log(setCommonData)

  useEffect(() => {
    if (data) setSettings(data);
    // dispatch(setCommonData({ categories, levels, tags }));
  }, [data, categories, levels, tags]);

  return <>{children}</>;
}

export default Layout;
