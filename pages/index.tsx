import React, { Suspense } from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import Head from "next/head";
import ImageAccueil from "@components/accueil/ImageAccueil";
import Soyez100Finance from "@components/accueil/Soyez100Finance";
import Rncp from "@components/rncp/Rncp";
import PersonnalisezVosModules from "@components/accueil/PersonnalisezVosModules";
import UneEquipeQualifiee from "@components/accueil/UneEquipeQualifiee";
import UneDemarcheSimple from "@components/accueil/UneDemarcheSimple";
import IlsNousOntFaitConfiances from "@components/accueil/IlsNousOntFaitConfiances";
import TitreProReconnuRncp from "@components/accueil/TitreProReconnuRncp";
import { ProgressSpinner } from "primereact/progressspinner";
import Script from "next/script";
import DatesSessions from "@components/ProchainesSessions/DatesSessions";

const HomePage: NextPage = () => {
  return (
    <>
      <main>
        <Head>
          <title>Majordome Formation SAP | Métier Advf</title>
          <meta
            name="description"
            content="Centre de formation aux métiers du service à la personne de qualité et certifiant. Zéro à charge, formez vous aux métiers de gouvernante ou de majordome, advf , auxiliaires de vie avec des formateurs qualifiés."
          />
          <meta
            name="keywords"
            content="formation pole emploi, advf, aide a domicile, formation auxiliaire de vie, formation paris, formation gouvernante, centre de formation, formation certifiante, formation majordome, formation  afpa, formation  greta"
          />
        </Head>
        <Header />
        <h2 style={{ opacity: "0%", fontSize: "1px" }}>Envie de devenir Advf</h2>
        <ImageAccueil />
        <h3 style={{ opacity: "0%", fontSize: "1px" }}>Formation Advf 100% financer</h3>
        <DatesSessions />
        <h3 style={{ opacity: "0%", fontSize: "1px" }}>Advf est un titre professionnel reconnue par l'état</h3>
        <TitreProReconnuRncp />
        <Soyez100Finance />
        <div className="block-rncp">
          <Rncp />
        </div>
        <PersonnalisezVosModules />
        <UneDemarcheSimple />
        <UneEquipeQualifiee />
        <Suspense fallback={<ProgressSpinner />}>
          <IlsNousOntFaitConfiances />
        </Suspense>
      </main>
      <Script>{`window.axeptioSettings = {
  clientId: "61f524407d80bb2229133ea8",
  cookiesVersion: "majordomeformationsap-fr",
};
 
(function(d, s) {
  var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
  e.async = true; e.src = "//static.axept.io/sdk.js";
  t.parentNode.insertBefore(e, t);
})(document, "script");`}</Script>
    </>
  );
};

export default HomePage;
