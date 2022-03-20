import React from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import Head from "next/head";
import ADVF from "@components/formations/ADVF";

const FormationAdvfPage: NextPage = () => {
  return (
    <main>
      <title>Formation ADVF | Majordome Formation SAP</title>
      <meta
        name="description"
        content="Formez vous au métier d’auxiliaire de vie de famille ADVF, avec notre équipe qualifiée et pédagogue. Formation certifiante et 100% financée, avec des modules de spécialisation à la hauteur des compétences recommandées sur le marché de l’emploi."
      />
      <meta
        name="keywords"
        content="formation gratuite, formation zéro à charge, formation certifiante, formation à distance, formation en ligne, formation pôle emploi, formation financée"
      />

      <Header />
      <ADVF />
    </main>
  );
};

export default FormationAdvfPage;
