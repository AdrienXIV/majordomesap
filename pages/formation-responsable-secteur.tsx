import React from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import ResponsableSecteur from "@components/formations/ResponsableSecteur";

const ResponsableSecteurPage: NextPage = () => {
  return (
    <main>
      <title>Formation Responsable Secteur | Majordome Formation SAP</title>
      <meta
        name="description"
        content="Découvrez le métier de Responsable de Secteur et les compétences requises pour réussir dans ce domaine. Trouvez des opportunités de carrière et des formations pour devenir un professionnel compétent et qualifié."
      />
      <meta name="keywords" content="Responsable de Secteur, métier, compétences, carrière, formation" />

      <Header />
      <ResponsableSecteur />
    </main>
  );
};

export default ResponsableSecteurPage;
