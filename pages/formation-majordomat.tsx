import React, { Suspense } from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import Majordomat from "@components/formations/Majordomat";
import dynamic from "next/dynamic";
import { ProgressSpinner } from "primereact/progressspinner";
const Contact = dynamic(() => import("@components/contact/Contact"), { ssr: false });

const FormationMajordomatPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Majordome Formation SAP | Formation Majordomat</title>
      </Head>
      <Header />

      <main>
        <Majordomat />
        <Suspense fallback={<ProgressSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default FormationMajordomatPage;
