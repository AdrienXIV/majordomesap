import dynamic from "next/dynamic";
import React from "react";
import ImageAccueil from "./ImageAccueil";
import PersonnalisezVosModules from "./PersonnalisezVosModules";
import Rncp from "./Rncp";
import Soyez100Finance from "./Soyez100Finance";
import TitreProReconnuRncp from "./TitreProReconnuRncp";
import UneEquipeQualifiee from "./UneEquipeQualifiee";

const IlsNousOntFaitConfiances = dynamic(() => import("./IlsNousOntFaitConfiances"), { ssr: false });
const UneDemarcheSimple = dynamic(() => import("./UneDemarcheSimple"), { ssr: false });

const Accueil = () => {
  return (
    <>
      <ImageAccueil />
      <TitreProReconnuRncp />
      <Soyez100Finance />
      <Rncp />
      <PersonnalisezVosModules />
      <UneEquipeQualifiee />
      <UneDemarcheSimple />
      <IlsNousOntFaitConfiances />
    </>
  );
};

export default Accueil;
