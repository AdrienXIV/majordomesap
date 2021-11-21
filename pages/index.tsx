import React, { Suspense, useEffect } from "react";
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
import dynamic from "next/dynamic";
import TitreProReconnuRncp from "@components/accueil/TitreProReconnuRncp";
import { useRouter } from "next/dist/client/router";
import { ProgressSpinner } from "primereact/progressspinner";
const Contact = dynamic(() => import("@components/contact/Contact"), { ssr: false });

const HomePage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/formations");
  }, []);

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
        <UneDemarcheSimple />
        <UneEquipeQualifiee />
        <IlsNousOntFaitConfiances />
        <Suspense fallback={<ProgressSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
