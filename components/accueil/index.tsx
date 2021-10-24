import React from "react";
import IlsNousOntFaitConfiances from "./IlsNousOntFaitConfiances";
import ImageAccueil from "./ImageAccueil";
import PersonnalisezVosModules from "./PersonnalisezVosModules";
import Rncp from "./Rncp";
import Soyez100Finance from "./Soyez100Finance";
import TitreProReconnuRncp from "./TitreProReconnuRncp";
import UneDemarcheSimple from "./UneDemarcheSimple";
import UneEquipeQualifiee from "./UneEquipeQualifiee";

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
