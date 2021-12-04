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
const Contact = dynamic(() => import("@components/contact/Contact"), { ssr: false });

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
                    alt="majordomeformationsap-sécurité-travail"
                    src="/images/majordomeformationsap/formationmajordomat/majordomeformationsap-sécurité-travail.jpeg"
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
                    alt="majordomeformationsap-prevention-advf"
                    src="/images/majordomeformationsap/formationADVF/majordomeformationsap-prevention-advf.jpeg"
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
        <Suspense fallback={<ProgressSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default FormationsPage;
