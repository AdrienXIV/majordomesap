import React from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import PetiteEnfance from "@components/formations/PetiteEnfance";

const FormationAdvfPage: NextPage = () => {
  return (
    <main>
      <title>Formation Petite enfance | Majordome Formation SAP</title>
      <meta
        name="description"
        content="Formez vous au métier petite enfance, avec notre équipe qualifiée et pédagogue. Formation certifiante et 100% financée, avec des modules de spécialisation à la hauteur des compétences recommandées sur le marché de l’emploi."
      />
      <meta
        name="keywords"
        content="formation gratuite, formation zéro à charge, formation certifiante, formation à distance, formation en ligne, formation pôle emploi, formation financée"
      />

      <Header />
      <PetiteEnfance />
    </main>
  );
};

export default FormationAdvfPage;
