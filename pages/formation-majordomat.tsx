import React from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import Head from "next/head";
import Majordomat from "@components/formations/Majordomat";

const FormationMajordomatPage: NextPage = () => {
  return (
    <main>
      <title>Formation Majordomat | Majordome Formation SAP</title>
      <meta
        name="description"
        content="Formez-vous aux métiers du majordomat, en rejoignant notre équipe qualifiée et pédagogue avec des modules de qualité. Formation certifiante et financée, vous prépare à vous démarquer sur le marché de l’emploi."
      />
      <meta
        name="keywords"
        content="formation gratuite, formation zéro à charge, formation certifiante, formation à distance, formation en ligne, formation pôle emploi, formation financée"
      />

      <Header />
      <Majordomat />
    </main>
  );
};

export default FormationMajordomatPage;
