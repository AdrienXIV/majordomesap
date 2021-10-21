import React from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import ADVF from "@components/formations/ADVF";
import Contact from "@components/contact/Contact";

const FormationAdvfPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Majordome Formation SAP | Formation ADVF kimamu</title>
      </Head>
      <Header />

      <main>
        <ADVF />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default FormationAdvfPage;
