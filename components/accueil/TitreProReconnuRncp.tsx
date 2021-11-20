import React, { Suspense } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { ProgressSpinner } from "primereact/progressspinner";
import { myLoader } from "@utils/loader";

const TitreProReconnuRncp: NextPage = () => {
  return (
    <section id="titre-pro-reconnu-rncp">
      <h2>Formez-vous grâce à SAP Formation</h2>

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
          <p>
            Notre centre vous propose des formations de Majordomat et d’Assistance De Vie aux Familles (ADVF), des métiers du service à la personne
            consistant à intervenir auprès des personnes ayant besoin d’assistance dans leurs activités quotidiennes.
          </p>
          <p>
            Nous proposons des modules de formation certifiants permettant de valoriser vos compétences métier et ainsi d’
            <b>obtenir un titre professionnel reconnu de niveau 3 inscrit au RNCP.</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TitreProReconnuRncp;
