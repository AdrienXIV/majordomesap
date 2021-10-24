import React from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import dynamic from "next/dynamic";
import Financement from "@components/financement";
const Contact = dynamic(() => import("@components/contact/Contact"), { ssr: false });

const FinancementPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Majordome Formation SAP | Financement</title>
      </Head>
      <Header />

      <main>
        <Financement />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default FinancementPage;
