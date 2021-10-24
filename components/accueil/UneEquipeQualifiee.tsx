import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

const UneEquipeQualifiee: NextPage = () => {
  return (
    <section id="une-equipe-qualifiee">
      <div className="p-grid">
        <div className="bloc-image">
          <Image alt="équipe" src="/images/equipe.jpg" layout="fill" objectFit="cover" quality={80} />
        </div>
        <div className="bloc-texte">
          <h2>Une équipe Qualifiée et Pédagogue</h2>
          <p>
            Depuis 2017, nous nous engageons à fournir un savoir-faire et un savoir-être nécessaires pour le déploiement et l’épanouissement
            professionnel de chacun de nos apprenants. Afin de vous offrir une qualité optimale, Majordome Formation SAP a composé son équipe de
            professionnels hautement qualifiés possédant plus de 20 ans d’expertise sur le terrain.
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

export default UneEquipeQualifiee;
