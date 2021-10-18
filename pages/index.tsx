import React from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import Accueil from "@components/accueil";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Majordome Formation SAP</title>
      </Head>
      <Header />

      <main>
        <Accueil />
      </main>
      <Footer />
    </>
  );
};

export default Home;
