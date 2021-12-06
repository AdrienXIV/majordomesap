import React, { Suspense, useEffect } from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";
import { myLoader } from "@utils/loader";
import MetaSite from "@components/other/Meta";
import { ProgressSpinner } from "primereact/progressspinner";
import UneEquipeQuiSadapte from "@components/qui-sommes-nous/UneEquipeQuiSadapte";
import EquipePedagogieCertifiee from "@components/qui-sommes-nous/EquipePedagogieCertifiee";
import ALecouteDeVosEnvies from "@components/qui-sommes-nous/ALecouteDeVosEnvies";
const Contact = dynamic(() => import("@components/contact/Contact"), { ssr: false });

const QuiSommesNousPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/formation-advf");
    router.prefetch("/formation-majordomat");
  }, []);

  return (
    <>
      <Head>
        <title>Qui sommes-nous ? | Majordome Formation SAP</title>
        <MetaSite>
          <meta
            name="description"
            content="Centre de formation qui s’engage à fournir des formations de advf, majordome et de gouvernante de qualité. On propose des modules certifiants avec une équipe qualifiée et engagée, en présentiel ou distanciel"
          />
          <meta
            name="keywords"
            content="centre de formation paris, formation gratuite, formation zéro à charge, centre de formation de qualité, formation certifiante, formation à distance, formation en ligne, formation pôle emploi"
          />
        </MetaSite>
      </Head>
      <Header />

      <main>
        <section id="qui-sommes-nous">
          <h2>Qui sommes nous ?</h2>
          <hr />
          <p>
            Majordome formation sap est un centre de formation aux métiers d’aide à la personne créée en 2017 sous le régime d’association loi 1901.
            Nous sommes spécialisés dans les formations d’<b>assistante de vie aux famille (advf) et Majordomat</b> pour le secteur d’activité d’aide
            à domicile et du service à la personne. Nos formations sont reconnues et certifiées de niveau 3 par le ministère du travail.
          </p>
          {/* <p>
            Créé en 2017, <b>Majordome Formation SAP</b> est un centre spécialisé dans les formations du secteur d'activité d'aide à domicile et du
            service à la personne.
          </p>
          <p>
            Majordome Formation SAP s’engage dans une démarche de qualité, avec des enseignements définis par l’Éducation Nationale et le Ministère du
            Travail, afin de prodiguer les meilleures formations par des instructeurs professionnels et expérimentés.
          </p> */}
          {/* <p>
            Une équipe qui s’adapte : 20 ans d’expertise au cœur de nos méthodes pédagogiques
            <br />
            L'objectif de ce pôle est de promouvoir et valoriser des métiers de passions, en formant les apprenant(e)s à la dextérité professionnelle
            et au savoir-être, tout en leur permettant d'exprimer leur potentiel.
          </p> */}
          {/* <p>
            Depuis 2017, Majordome Formation SAP est un centre spécialisé dans les formations d’Assistant(e) De Vie aux Familles et Majordomat pour le
            secteur d’activité d’aide à domicile et du service à la personne.
          </p> */}
        </section>
        <UneEquipeQuiSadapte />
        <EquipePedagogieCertifiee />
        <ALecouteDeVosEnvies />
      </main>
      <Footer />
    </>
  );
};

export default QuiSommesNousPage;
