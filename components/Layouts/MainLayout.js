import { useSelector } from "react-redux";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

function MainLayout({ children, title = "Core Academy" }) {
  const newBooleanState = useSelector((state) => state.mode.newBooleanState);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="core academy" />
        <meta name="description" content="core academy" />
        <meta charSet="utf-8" />
      </Head>
      <div style={{paddingRight: newBooleanState ? "500px" : ""}}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;

