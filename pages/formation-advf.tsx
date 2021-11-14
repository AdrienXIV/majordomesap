import React, { Suspense } from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import ADVF from "@components/formations/ADVF";
import dynamic from "next/dynamic";
import { ProgressSpinner } from "primereact/progressspinner";
const Contact = dynamic(() => import("@components/contact/Contact"), { ssr: false });

const FormationAdvfPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Formation ADVF kimamu | Majordome Formation SAP</title>
      </Head>
      <Header />

      <main>
        <ADVF />
        <Suspense fallback={<ProgressSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default FormationAdvfPage;
