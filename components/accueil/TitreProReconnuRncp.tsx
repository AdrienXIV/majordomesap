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
      <h2>Formez-vous grâce à SAP Formation</h2>

      <div className="bandeau-images">
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
      {/* <h3>Obtenez votre certification professionnelle</h3>
      <hr />
      <div className="p-grid bloc-icons">
        <div className="col-2">
          <i className="fas fa-wheelchair"></i>
          <div>Accessible pour tous</div>
        </div>
        <div className="col-2">
          <i className="fas fa-euro-sign"></i>
          <div>Facilité de financement</div>
        </div>
        <div className="col-2">
          <i className="fas fa-graduation-cap"></i>
          <div>Reconnaissance nationale</div>
        </div>
        <div className="col-2">
          <i className="fas fa-handshake"></i>
          <div>Ouverture professionnelle</div>
        </div>
        <div className="col-2">
          <i className="far fa-comments"></i>
          <div>Equipe professionnelle et à l'écoute</div>
        </div>
        <div className="col-2">
          <i className="fas fa-magic"></i>
          <div>Formations enrichissantes et personnalisables</div>
        </div>
      </div> */}

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
          {/* <p>
            Notre centre vous propose des formations de Majordomat et d’Assistance De Vie aux Familles (ADVF), des métiers du service à la personne
            consistant à intervenir auprès des personnes ayant besoin d’assistance dans leurs activités quotidiennes.
          </p>
          <p>
            Nous proposons des modules de formation certifiants permettant de valoriser vos compétences métier et ainsi d’
            <b>obtenir un titre professionnel reconnu de niveau 3 inscrit au RNCP.</b>
          </p> */}
          {/* <p>
            Notre centre de formation vous propose des modules de formation certifiants d’ADVF permettant de valoriser vos compétences métier et ainsi
            obtenir un <b>Titre Professionnel de niveau 3</b> inscrit au RNCP et délivré par le Ministère du Travail.
          </p>*/}
          {/* <p>
            Majordome Formation SAP est un centre de formation aux métiers du service à la personne (<b>ADVF</b>) par excellence. Nos{" "}
            <b>formations sont certifiantes</b> avec un titre professionnel reconnu de niveau 3 inscrit au RNC.
          </p>
          <p>
            Nous apportons notre expertise métier à nos apprenants en proposons des formations en petit groupe et des modules spécifiques permettant
            d’acquérir des connaissances solides, en toute sécurité en adoptant la juste distance professionnelle.
          </p>
          <p>
            <b>Nos formations peuvent être assurées dans nos locaux ou à distance.</b>
          </p>
          <p>
            L’activité de Majordome Formation SAP étant, par définition, centrée sur l’humain, la structure accorde une importance particulière à
            l’accueil des personnes en situation de handicap. Quelle que soit la modalité de formation choisie, Majordomimport Accueil from './index';
e Formation SAP recommande au
            stagiaire de signaler, dès son inscription, la nature de son handicap ainsi que ses besoins spécifiques, afin de l’accueillir dans des
            conditions optimales.
          </p> */}
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
          <Link href="/info" passHref>
            <a className="contact-btn-telecharge">
              <span className="btn-telecharge"
              >Livret d'accueil</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TitreProReconnuRncp;
