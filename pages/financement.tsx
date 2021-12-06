import React, { Suspense } from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import dynamic from "next/dynamic";
import Financement from "@components/financement";
import { ProgressSpinner } from "primereact/progressspinner";
import MetaSite from "@components/other/Meta";
const Contact = dynamic(() => import("@components/contact/Contact"), { ssr: false });

const FinancementPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Financement | Majordome Formation SAP</title>
        <MetaSite>
          <meta name="description" content="Formation 100% financée, avec une équipe de qualité et pédagogue. Formez-vous, en ligne ou en présentiel, aux métiers du service à la personne grâce à votre compte CPF ou pôle emploi si vous êtes en recherche d’emploi."/>
          <meta name="keywords" content="formation gratuite, formation zéro à charge, formation certifiante, formation à distance, formation en ligne, formation pôle emploi, cpf, opco pe, datadock, formation financée"/>
        </MetaSite>
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
