import React, { Suspense } from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import dynamic from "next/dynamic";
import { ProgressSpinner } from "primereact/progressspinner";
import DatesSessions from "@components/ProchainesSessions/DatesSessions";
const Contact = dynamic(() => import("@components/contact/Contact"), { ssr: false });

const ProchainesSessionsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prochaines Sessions | Majordome Formation SAP</title>
      </Head>
      <Header />

      <main>
        <DatesSessions />
        <Suspense fallback={<ProgressSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default ProchainesSessionsPage;
