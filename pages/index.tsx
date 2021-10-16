import React from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Meta from "@components/other/Meta";
import TitreProReconnuRncp from "@components/accueil/TitreProReconnuRncp";
import Head from "next/head";
import ImageAccueil from "@components/image-accueil/ImageAccueil";
import Soyez100Finance from "@components/accueil/Soyez100Finance";
import Rncp from "@components/rncp/Rncp";
import NosFormationsPersonnalisables from "@components/accueil/NosFormationsPersonnalisables";
import PersonnalisezVosModules from "@components/accueil/PersonnalisezVosModules";
import UneEquipeQualifiee from "@components/accueil/UneEquipeQualifiee";
import UneDemarcheSimple from "@components/accueil/UneDemarcheSimple";
import IlsNousOntFaitConfiances from "@components/accueil/IlsNousOntFaitConfiances";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Majordome Formation SAP</title>
        <Meta />
      </Head>
      <Header />

      <main>
        <ImageAccueil />
        {/* <div className="block-rncp">
          <Rncp />
        </div> */}
        <TitreProReconnuRncp />
        <Soyez100Finance />
        <NosFormationsPersonnalisables />
        <PersonnalisezVosModules />
        <UneEquipeQualifiee />
        <UneDemarcheSimple />
        <IlsNousOntFaitConfiances />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
