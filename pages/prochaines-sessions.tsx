import React from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import Head from "next/head";
import DatesSessions from "@components/ProchainesSessions/DatesSessions";
import InformationsCollectives from "@components/ProchainesSessions/InformationsCollectives";

const ProchainesSessionsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prochaines Sessions | Majordome Formation SAP</title>
      </Head>
      <Header />

      <main>
        <InformationsCollectives />
        <DatesSessions />
      </main>
    </>
  );
};

export default ProchainesSessionsPage;
