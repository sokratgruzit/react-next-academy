import React from "react";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import AuthContextProvider from "../contexts/AuthContext";
import Layout from "../components/Layouts/Layout";
import MainLayout from "../components/Layouts/MainLayout";

import "@/styles/index.scss";

import store from "../store/store";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <Provider store={store}>
      <Layout>
        <AuthContextProvider>
          <motion.div
            key={router.asPath}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 1 }}
          >
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </motion.div>
        </AuthContextProvider>
      </Layout>
    </Provider>
  );
}

export default MyApp;
