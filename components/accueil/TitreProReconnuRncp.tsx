import React, { Suspense } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { ProgressSpinner } from "primereact/progressspinner";
import { myLoader } from "@utils/loader";
import { Button } from "react-bootstrap";
import Link from "next/link";
const TitreProReconnuRncp: NextPage = () => {
  return (
    <section id="titre-pro-reconnu-rncp">
      <h2>Formez-vous grâce à Formation SAP</h2>

      <div className="bandeau-images">
        <div>
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
              alt="qualiopi"
              src="/images/majordomeformationsap/Accueil/qualiopi.png"
              layout="fill"
              objectFit="contain"
              quality={80}
            />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
              alt="pole-emploi"
              src="/images/majordomeformationsap/Accueil/poleemploi.png"
              layout="fill"
              objectFit="contain"
              quality={80}
            />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<ProgressSpinner />}>
            <Image loader={myLoader} alt="OPCO" src="/images/majordomeformationsap/Accueil/opco.png" layout="fill" objectFit="contain" quality={80} />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<ProgressSpinner />}>
            <Image loader={myLoader} alt="cpf" src="/images/majordomeformationsap/Accueil/cpf.png" layout="fill" objectFit="contain" quality={80} />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
              alt="datadock"
              src="/images/majordomeformationsap/Accueil/datadock.png"
              layout="fill"
              objectFit="contain"
              quality={80}
            />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
              alt="agefiph"
              src="/images/majordomeformationsap/Accueil/agefiph.png"
              layout="fill"
              objectFit="contain"
              quality={80}
            />
          </Suspense>
        </div>
      </div>

      <div className="bloc-texte">
        <div className="bloc-image">
          <Suspense fallback={<ProgressSpinner />}>
            <div className="bloc-image">
              <Image loader={myLoader} alt="sponsors" src="/images/logo.png" layout="fill" objectFit="contain" quality={80} />
            </div>
          </Suspense>
        </div>
        <div>
          <h3>Notre centre de formation</h3>

          <p>
            Majordome Formation SAP est un centre de formation d’excellence dédié spécifiquement aux métiers des services aux personnes. Nos
            <b>formations sont certifiantes</b>, inscrites au Répertoire National des Certifications Professionnelles (<b>RNCP</b>) reconnues de
            niveau 3.
          </p>
          <p>
            Nous apportons notre expertise métier à nos apprenants en proposant des formations en petit groupe et des modules spécifiques permettant
            de faciliter les apprentissages, pour nous permettre de répondre aux besoins spécifiques de tous nos apprenants.
          </p>
          <p>
            Nos formations se déroulent en <b>présentiel et distanciel</b>. Nous disposons d'un <b>appartement témoin</b> pour les mises en situation
            pratique. Nos locaux sont <b>accessibles aux personnes en situation de handicap</b>. Aussi, n’hésitez pas à nous faire part des
            adaptations nécessaires à votre confort pour que nous puissions vous accueillir dans les meilleures conditions.
          </p>
          <p className="livret-accueil-handicap">
            <a href="/accueil-handicap.pdf" download="accueil_handicap">
              Récupérer notre livret d'accueil handicap
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TitreProReconnuRncp;
