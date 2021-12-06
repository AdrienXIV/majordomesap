import React, { Suspense } from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import ADVF from "@components/formations/ADVF";
import dynamic from "next/dynamic";
import { ProgressSpinner } from "primereact/progressspinner";
import MetaSite from "@components/other/Meta";
const Contact = dynamic(() => import("@components/contact/Contact"), { ssr: false });

const FormationAdvfPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Formation ADVF kimamu | Majordome Formation SAP</title>
        <MetaSite>
          <meta
            name="description"
            content="Formez vous au métier d’auxiliaire de vie de famille ADVF, avec notre équipe qualifiée et pédagogue. Formation certifiante et 100% financée, avec des modules de spécialisation à la hauteur des compétences recommandées sur le marché de l’emploi."
          />
          <meta
            name="keywords"
            content="formation gratuite, formation zéro à charge, formation certifiante, formation à distance, formation en ligne, formation pôle emploi, formation financée"
          />
        </MetaSite>
      </Head>
      <Header />

      <main>
        <ADVF />
      </main>
      <Footer />
    </>
  );
};

export default FormationAdvfPage;
