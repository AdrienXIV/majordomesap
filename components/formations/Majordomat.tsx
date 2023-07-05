import React, { Suspense, useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";

import { ProgressSpinner } from "primereact/progressspinner";

const Majordomat: NextPage = () => {
  const [layout, setLayout] = useState("horizontal");

  useEffect(() => {
    if (typeof window) {
      window.innerWidth < 959 ? setLayout("vertical") : setLayout("horizontal");
    }
  }, []);

  return (
    <section id="formation-majordomat">
      <h2>FORMATION MAJORDOMAT</h2>
      <div className="bloc-texte">
        <p>
          Les modules de Majordomat vous attribuent la prestance et les aptitudes d’un majordome/gouvernante de maison qui vous permettront de vous
          situer en tant que véritable professionnel de l’intervention à domicile. Vous contribuerez au bien-être des habitants et invités d’une
          maison dans le respect des consignes par un service de qualité, vous pourrez être en charge de la préparation des repas, du décor floral et
          du service à table.
        </p>
        <p>
          Il permet d’accéder aux métiers des services à la <b>personne en apportant une intervention professionnelle à domicile</b> de qualité auprès
          des personnes.
        </p>
      </div>

      <div className="p-grid bloc">
        <div>
          <h3>Public visé</h3>
          <p>Notre formation s’adresse à toute personne souhaitant se former au métier d’Assistant De Vie aux Familles</p>
        </div>
        <div>
          <h3>Prérequis</h3>
          <p>Avoir 18 ans, comprendre les consignes écrites et orales en français et posséder une base en calcul</p>
        </div>
        <div>
          <h3>Qualités requises</h3>
          <p>
            Maitrise des savoirs de base, Autonomie, Responsabilité, Organisation, Patience, Bienveillance, Résistance physique et psychologique,
            Gestion du stress
          </p>
        </div>
      </div>

      <div className="p-grid adaptee-pour-tous">
        <div className="bloc-image">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-serveurs"
              src="/images/majordomeformationsap/formationmajordomat/majordomeformationsap-serveurs.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
        </div>
        <div className="bloc-texte">
          <h3>Adaptée pour tous</h3>
          <p>
            <b>Exercez dans le domaine et pour la cible qui vous convient le mieux.</b>
          </p>
          <p>
            Chaque classe est composée d’un groupe réduit afin d’initier au mieux chaque participant. Suivez nos formations en présentiel et profitez
            d’un accès exclusif de vos cours sur la plateforme à tout moment.
          </p>
          <p>
            À l’issue de la formation, vous serez aptes à accompagner des personnes via des services tels que l’assistance pour l’entretien du cadre
            de vie, l’hygiène corporelle, l’alimentation, les déplacements et la prise en charge des enfants de 0 à 3 ans au domicile de leurs
            parents.
          </p>
          <p>
            Avec les modules de Majordomat, vous aurez les aptitudes et les savoirs d’un majordome / gouvernante de maison qui vous permettront de
            vous situer en tant que véritable professionnel de l’intervention à domicile.
          </p>
        </div>
      </div>
      <div id="advf-modules" className="module-titre">
        <h2>Programme de la formation</h2>
        <hr />
      </div>
      <div className="p-grid bloc-modules">
        <div
          title="Voir le module"
          className="second"
          onClick={() =>
            window.open("https://majordomeformation-sap.catalogueformpro.com/6/majordomat/364945/lart-de-la-table-lart-floral", "_blank")
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-art-floral"
              src="/images/majordomeformationsap/formationmajordomat/majordomeformationsap-art-floral-majordomat.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 1 : L'art de la table &amp; l'art fleural</h3>
            <p>
              Développement de la vision esthétique, créer et entretenir un bouquet, élaborer un plan de table, dresser une table et maîtriser les
              techniques du service à la table
            </p>
          </div>
        </div>

        <div
          className="second"
          title="Voir le module"
          onClick={() =>
            window.open("https://majordomeformation-sap.catalogueformpro.com/6/majordomat/364945/lart-de-la-table-lart-floral", "_blank")
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-couture-majordomat"
              src="/images/majordomeformationsap/formationmajordomat/majordomeformationsap-couture-majordomat.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 2 : La couture</h3>
            <p>Assimilation des éléments de base de la couture : Petits travaux de couture : Ourlet, bouton, ceinture...</p>
          </div>
        </div>
        <div
          className="second"
          title="Voir le module"
          onClick={() => window.open("https://majordomeformation-sap.catalogueformpro.com/6/majordomat/364941/letiquette", "_blank")}
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-femme-chambre-majordomat"
              src="/images/majordomeformationsap/formationmajordomat/majordomeformationsap-femme-chambre-majordomat.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 3 : L'étiquette</h3>
            <p>Connaissance et suivi du protocole, apprentissage des « bonnes manières ». Adopter la bonne attitude et la tenue appropriée</p>
          </div>
        </div>
        <div
          className="third"
          title="Voir le module"
          onClick={() => window.open("https://majordomeformation-sap.catalogueformpro.com/6/majordomat/364937/nologie", "_blank")}
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-enologie-majordomat"
              src="/images/majordomeformationsap/formationmajordomat/majordomeformationsap-enologie-majordomat.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 4 : Oenologie</h3>
            <p>Connaissance des vins et des cépages, savoir accompagner les plats et établir une cave</p>
          </div>
        </div>

        <div
          className="third"
          title="Voir le module"
          onClick={() => window.open("https://majordomeformation-sap.catalogueformpro.com/6/majordomat/440497/gastronomie", "_blank")}
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-gastronomie-majordomat"
              src="/images/majordomeformationsap/formationmajordomat/majordomeformationsap-gastronomie-majordomat.png"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 5 : Gastronomie</h3>
            <p>Connaissance des bases de la gastronomie française et savoir élaborer un menu pour une réception</p>
          </div>
        </div>
      </div>

      <div className="evolutions-possibles">
        <h3>Évolutions possibles</h3>
        <hr />
        <h4>Débouchés</h4>
        <p>Intervenant(e) à domicile.</p>
      </div>
    </section>
  );
};

export default Majordomat;
