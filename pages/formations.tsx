import React from "react";
import type { NextPage } from "next";
import Footer from "@components/other/Footer";
import Header from "@components/other/Header";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const FormationsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Majordome Formation SAP | Formations</title>
      </Head>
      <Header />

      <main>
        <section id="formations">
          <h2>Formations</h2>
          <hr />
          <div className="p-grid">
            <Link href="/formation-majordomat" passHref>
              <a className="bloc-image">
                <Image src="/images/AdobeStock_215615394-scaled.jpeg" layout="fill" objectFit="cover" quality={80} />
                <div>
                  <h3>Formation MAJORDOMAT</h3>
                </div>
              </a>
            </Link>

            <Link href="/formation-majordomat" passHref>
              <a className="bloc-image">
                <Image src="/images/AdobeStock_236366402-1.jpeg" layout="fill" objectFit="cover" quality={80} />
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
