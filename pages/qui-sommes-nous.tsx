import React, { useEffect } from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import MetaSite from "@components/other/Meta";
import UneEquipeQuiSadapte from "@components/qui-sommes-nous/UneEquipeQuiSadapte";
import EquipePedagogieCertifiee from "@components/qui-sommes-nous/EquipePedagogieCertifiee";
import ALecouteDeVosEnvies from "@components/qui-sommes-nous/ALecouteDeVosEnvies";

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
          {/* <p>
            Majordome formation sap est un centre de formation aux métiers d’aide à la personne créée en 2017 sous le régime d’association loi 1901.
            Nous sommes spécialisés dans les formations d’<b>assistante de vie aux famille (advf) et Majordomat</b> pour le secteur d’activité d’aide
            à domicile et du service à la personne. Nos formations sont reconnues et certifiées de niveau 3 par le ministère du travail.
          </p> */}
          <p>
            Majordome formation sap est un centre de formation dédié aux métiers d’aide à la personne. Créé en 2017 en tant qu’association de loi
            1901, nous nous sommes spécialisés dans la formation d’Assistant de Vie aux Familles (ADVF) et le Majordomat pour répondre à l’ensemble
            des besoins d’aide à domicile. Nos formations sont certifiées et reconnues de niveau 3 par le ministère du travail.
          </p>
        </section>
        <UneEquipeQuiSadapte />
        <EquipePedagogieCertifiee />
        <ALecouteDeVosEnvies />
      </main>
    </>
  );
};

export default QuiSommesNousPage;
