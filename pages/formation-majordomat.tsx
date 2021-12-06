import React from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import Majordomat from "@components/formations/Majordomat";
import MetaSite from "@components/other/Meta";

const FormationMajordomatPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Formation Majordomat | Majordome Formation SAP</title>
        <MetaSite>
          <meta
            name="description"
            content="Formez-vous aux métiers du majordomat, en rejoignant notre équipe qualifiée et pédagogue avec des modules de qualité. Formation certifiante et financée, vous prépare à vous démarquer sur le marché de l’emploi."
          />
          <meta
            name="keywords"
            content="formation gratuite, formation zéro à charge, formation certifiante, formation à distance, formation en ligne, formation pôle emploi, formation financée"
          />
        </MetaSite>
      </Head>
      <Header />

      <main>
        <Majordomat />
      </main>
      <Footer />
    </>
  );
};

export default FormationMajordomatPage;
