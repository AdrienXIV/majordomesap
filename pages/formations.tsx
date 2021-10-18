import React from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import Formations from "@components/formations";

const FormationsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Majordome Formation SAP | Formations</title>
      </Head>
      <Header />

      <main>
        <Formations />
      </main>
      <Footer />
    </>
  );
};

export default FormationsPage;
