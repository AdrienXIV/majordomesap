import React from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import ADVF from "@components/formations/ADVF";

const FormationAdvfPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Majordome Formation SAP | Formation ADVF</title>
      </Head>
      <Header />

      <main>
        <ADVF />
      </main>
      <Footer />
    </>
  );
};

export default FormationAdvfPage;
