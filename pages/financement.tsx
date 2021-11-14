import React, { Suspense } from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import dynamic from "next/dynamic";
import Financement from "@components/financement";
import { ProgressSpinner } from "primereact/progressspinner";
const Contact = dynamic(() => import("@components/contact/Contact"), { ssr: false });

const FinancementPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Financement | Majordome Formation SAP</title>
      </Head>
      <Header />

      <main>
        <Financement />
        <Suspense fallback={<ProgressSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default FinancementPage;
