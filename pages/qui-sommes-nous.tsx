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
import { ProgressSpinner } from "primereact/progressspinner";
import UneEquipeQuiSadapte from "@components/qui-sommes-nous/UneEquipeQuiSadapte";
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
        <title>Majordome Formation SAP | Qui sommes-nous ?</title>
      </Head>
      <Header />

      <main>
        <section id="qui-sommes-nous">
          <h2>Qui sommes nous ?</h2>
          <hr />
          <p>
            Depuis 2017, Majordome Formation SAP est un centre spécialisé dans les formations d’Assistant(e) De Vie aux Familles et Majordomat pour le
            secteur d’activité d’aide à domicile et du service à la personne.
          </p>
        </section>
        <UneEquipeQuiSadapte />
        <Suspense fallback={<ProgressSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default QuiSommesNousPage;
