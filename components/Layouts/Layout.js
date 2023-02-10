import { useEffect } from "react";
import { connect } from "react-redux";
import useFetch from "../../hooks/useFetch";

function Layout({ children, setSettings, setCommonData }) {
  const { data } = useFetch(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/settings`);
  const categories = useFetch(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/category`);
  const levels = useFetch(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/level`);
  const tags = useFetch(`${process.env.NEXT_PUBLIC_DATA_URL}/api/data/tag`);

  useEffect(() => {
    if (data) setSettings(data);
    setCommonData({ categories, levels, tags });
  }, [data, categories, levels, tags]);

  return <>{children}</>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSettings: (payload) => dispatch({ type: "SET_SETTINGS", payload }),
    setCommonData: (payload) => dispatch({ type: "SET_COMMON_DATA", payload }),
  };
};

export default connect(null, mapDispatchToProps)(Layout);
