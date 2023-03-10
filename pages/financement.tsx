import React from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import Head from "next/head";
import Financement from "@components/financement";

const FinancementPage: NextPage = () => {
  return (
    <main>
      <title>Financement | Majordome Formation SAP</title>
      <meta
        name="description"
        content="Formation 100% financée, avec une équipe de qualité et pédagogue. Formez-vous, en ligne ou en présentiel, aux métiers du service à la personne grâce à votre compte CPF ou pôle emploi si vous êtes en recherche d’emploi."
      />
      <meta
        name="keywords"
        content="formation gratuite, formation zéro à charge, formation certifiante, formation à distance, formation en ligne, formation pôle emploi, cpf, opco pe, datadock, formation financée"
      />

      <Header />
      <Financement />
    </main>
  );
};

export default FinancementPage;
