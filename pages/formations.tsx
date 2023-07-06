import React, { Suspense } from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import Image from "next/image";
import Link from "next/link";

import { ProgressSpinner } from "primereact/progressspinner";

const FormationsPage: NextPage = () => {
  return (
    <main>
      <title>Formations | Majordome Formation SAP</title>
      <meta
        name="description"
        content="Majordome formation propose des formations certifiantes zéro à charge : advf, gouvernante, majordome, aide à domicile  et d’autres. Nos formations se déroulent en petit groupe avec des formateurs de qualité."
      />
      <meta
        name="keywords"
        content="centre de formation paris, formation gratuite, formation advf, formation aide à domicile, formation certifiante, formation pôle emploi, formation financée"
      />

      <Header />
      <section id="formations">
        <h2>Formations</h2>
        {/* <p>Les métiers des services aux personnes sont en pleine expansion et ils sont reconnus comme de véritables professions</p> */}
        <p>
          Venez-vous former chez <b>Majordome Formation SAP</b> ! Formation + diplôme + emploi = rémunération
        </p>
        <hr />
        <div className="p-grid">
          <Link href="/formation-majordomat" passHref>
            <a className="bloc-image">
              <Suspense fallback={<ProgressSpinner />}>
                <Image
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
      <section>
        <h3>Nos autres formations</h3>
        <hr />
        <a style={{ color: "black" }} href="/formation-petite-enfance" target="_blank">
          Formation petite enfance
        </a>
        <br />
        <br />
        <a style={{ color: "black" }} href="/formation-responsable-secteur" target="_blank">
          Formation responsable secteur
        </a>
      </section>
      <section id="professionnels-et-employeurs">
        <h3>Professionnels et employeurs</h3>
        <hr />
        <p>
          Vous souhaitez développer les compétences de vos collaborateurs, mettre en place une formation collective ou mettre en place un plan de
          formation spécifique. Nous sommes là pour vous accompagner dans votre projet et répondre à votre besoin.
        </p>
      </section>
    </main>
  );
};

export default FormationsPage;
