import React from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import Head from "next/head";
import DatesSessions from "@components/ProchainesSessions/DatesSessions";

const ProchainesSessionsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Prochaines Sessions | Majordome Formation SAP</title>
      </Head>
      <Header />

      <main>
        <DatesSessions />
        <section id="prochaines-sessions">
          <h3>Information collective du vendredi</h3>
          <hr />
          <p>Chaque vendredi à 11H, nous vous accueillons dans nos locaux ou en visio pour répondre à vos questions et nous présenter.</p>
        </section>
      </main>
    </>
  );
};

export default ProchainesSessionsPage;
