import React from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import FormationMajordomat from "@components/formations/Majordomat";
import Contact from "@components/contact/Contact";

const FormationMajordomatPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Majordome Formation SAP | Formation Majordomat</title>
      </Head>
      <Header />

      <main>
        <FormationMajordomat />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default FormationMajordomatPage;
