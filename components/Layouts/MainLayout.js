import Header from "../Modules/Header";
import Footer from "../Modules/Footer";
import Head from "next/head";

function MainLayout({ children, title = "Core Academy" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="core academy" />
        <meta name="description" content="core academy" />
        <meta charSet="utf-8" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
