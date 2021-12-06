import React, { Suspense, useEffect } from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { myLoader } from "@utils/loader";
import { ProgressSpinner } from "primereact/progressspinner";
import MetaSite from "@components/other/Meta";

const FormationsPage: NextPage = () => {
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

      <main>
        <section id="formations">
          <h2>Formations</h2>
          <p>Les métiers des services aux personnes sont en pleine expansion et ils sont reconnus comme de véritables professions</p>
          <hr />
          <div className="p-grid">
            <Link href="/formation-majordomat" passHref>
              <a className="bloc-image">
                <Suspense fallback={<ProgressSpinner />}>
                  <Image
                    loader={myLoader}
                    alt="majordomeformationsap-femme-menage"
                    src="/images/majordomeformationsap/formationmajordomat/majordomeformationsap-femme-chambre.jpeg"
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                  />
                </Suspense>
                <div>
                  <h3>Formation MAJORDOMAT</h3>
                </div>
              </a>
            </Link>

            <Link href="/formation-advf" passHref>
              <a className="bloc-image">
                <Suspense fallback={<ProgressSpinner />}>
                  <Image
                    loader={myLoader}
                    alt="majordomeformationsap-femme-enfant"
                    src="/images/majordomeformationsap/formationADVF/majordomeformationsap-femme-enfant-min.jpeg"
                    layout="fill"
                    objectFit="cover"
                    quality={80}
                  />
                </Suspense>
                <div>
                  <h3>Formation ADVF</h3>
                </div>
              </a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FormationsPage;
