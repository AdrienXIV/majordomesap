import React from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import InformationsCollectives from "@components/ProchainesSessions/InformationsCollectives";

const ProchainesSessionsPage: NextPage = () => {
  return (
    <main>
      <title>Prochaines Sessions | Majordome Formation SAP</title>
      <meta
        name="description"
        content="Formation aux métiers du service à la personne de qualité et certifiant. Zéro à charge, formez vous aux métiers de gouvernante, advf, auxiliaires de vie avec des formateurs qualifiés.> <meta name=”keywords” content=”formation pole emploi, advf, aide a domicile,  formation auxiliaire de vie, formation paris, formation gouvernante, centre de formation, formation certifiante, formation majordome, formation  afpa, formation  greta"
      />
      <meta
        name="keywords"
        content="formation pole emploi, advf, aide a domicile, formation auxiliaire de vie, formation paris, formation gouvernante, centre de formation, formation certifiante, formation majordome, formation  afpa, formation  greta"
      />

      <Header />
      <InformationsCollectives />
      {/* <DatesSessions /> */}
    </main>
  );
};

export default ProchainesSessionsPage;
