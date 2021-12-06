import React, { useEffect } from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
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
import { useRouter } from "next/dist/client/router";
import MetaSite from "@components/other/Meta";

const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/formations");
  }, []);

  return (
    <>
      <Head>
        <title>Majordome Formation SAP</title>
        <MetaSite>
          <meta
            name="description"
            content="Centre de formation aux métiers du service à la personne de qualité et certifiant. Zéro à charge, formez vous aux métiers de gouvernante, advf, auxiliaires de vie avec des formateurs qualifiés.> <meta name=”keywords” content=”formation pole emploi, advf, aide a domicile,  formation auxiliaire de vie, formation paris, formation gouvernante, centre de formation, formation certifiante, formation majordome, formation  afpa, formation  greta"
          />
          <meta
            name="keywords"
            content="formation pole emploi, advf, aide a domicile,  formation auxiliaire de vie, formation paris, formation gouvernante, centre de formation, formation certifiante, formation majordome, formation  afpa, formation  greta"
          />
        </MetaSite>
      </Head>
      <Header />

      <main>
        <ImageAccueil />
        <TitreProReconnuRncp />
        <Soyez100Finance />
        <div className="block-rncp">
          <Rncp />
        </div>
        <PersonnalisezVosModules />
        <UneDemarcheSimple />
        <UneEquipeQualifiee />
        <IlsNousOntFaitConfiances />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
