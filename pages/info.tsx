import React, { Suspense, useEffect } from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { myLoader } from "@utils/loader";
import { ProgressSpinner } from "primereact/progressspinner";
import MetaSite from "@components/other/Meta";

const Info: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/formation-advf");
    router.prefetch("/formation-majordomat");
  }, []);

  return (
    <>
      <Head>
        <title>Formations | Majordome Formation SAP</title>
        <MetaSite>
          <meta
            name="description"
            content="Majordome formation propose des formations certifiantes zéro à charge : advf, gouvernante, majordome, aide à domicile  et d’autres. Nos formations se déroulent en petit groupe avec des formateurs de qualité."
          />
          <meta
            name="keywords"
            content="centre de formation paris, formation gratuite, formation advf, formation aide à domicile, formation certifiante, formation pôle emploi, formation financée"
          />
        </MetaSite>
      </Head>
      <Header />

      <main             className="image-handicap">
        <Suspense fallback={<ProgressSpinner />}>
            <Image
            loader={myLoader}
            alt="majordomeformationsap-femme-enfant"
            src="/accueil.png"
            width="2500"
            height="3000"
            quality={80}
            />
        </Suspense>
      </main>
    </>
  );
};

export default Info;
