import React from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import ImageAccueil from "@components/accueil/ImageAccueil";
import Soyez100Finance from "@components/accueil/Soyez100Finance";
import Rncp from "@components/rncp/Rncp";
import NosFormationsPersonnalisables from "@components/accueil/NosFormationsPersonnalisables";
import PersonnalisezVosModules from "@components/accueil/PersonnalisezVosModules";
import UneEquipeQualifiee from "@components/accueil/UneEquipeQualifiee";
import UneDemarcheSimple from "@components/accueil/UneDemarcheSimple";
import IlsNousOntFaitConfiances from "@components/accueil/IlsNousOntFaitConfiances";
import dynamic from 'next/dynamic'
import TitreProReconnuRncp from "@components/accueil/TitreProReconnuRncp";
const Contact = dynamic(() => import("@components/contact/Contact"), { ssr: false });
import { Accueil } from '@components/accueil';



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Majordome Formation SAP</title>
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
        <UneEquipeQualifiee />
        <UneDemarcheSimple />
        <IlsNousOntFaitConfiances />
        <Contact/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
