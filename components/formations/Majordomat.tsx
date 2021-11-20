import React, { Suspense, useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Timeline } from "primereact/timeline";
import { myLoader } from "@utils/loader";
import { ProgressSpinner } from "primereact/progressspinner";

const Majordomat: NextPage = () => {
  const [layout, setLayout] = useState("horizontal");

  useEffect(() => {
    if (process.browser) {
      window.innerWidth < 959 ? setLayout("vertical") : setLayout("horizontal");
    }
  }, []);

  const events1 = [
    {
      status: "1. Suivi de la formation",
      color: "#f1c40f",
      numero: 1,
    },
    {
      status: "2. Stage pratique",
      color: "#3498db",
      numero: 2,
    },
    {
      status: "3. Préparation au jury",
      color: "#8e44ad",
      numero: 3,
    },
    {
      status: "4. Passage devant le jury",
      color: "#006266",
      numero: 4,
    },
    {
      status: "5. Aide à l'insertion",
      color: "#e74c3c",
      numero: 5,
    },
  ];

  const customizedMarker = item => {
    return (
      <span className="custom-marker p-shadow-2">
        {(() => {
          switch (item.numero) {
            case 1:
              return <i className="pi pi-pencil"></i>;
            case 2:
              return <i className="pi pi-calendar"></i>;
            case 3:
              return <i className="pi pi-compass"></i>;
            case 4:
              return <i className="pi pi-users"></i>;
            case 5:
              return <i className="pi pi-thumbs-up"></i>;

            default:
              return <i className="pi pi-pencil"></i>;
          }
        })()}
      </span>
    );
  };

  const customizedContent = item => {
    return (
      <div className="timeline-step">
        <h3>{item.status}</h3>
        <p style={{ textAlign: item.numero % 2 === 1 ? "start" : "end" }}>{item.content}</p>
      </div>
    );
  };

  return (
    <section id="formation-majordomat">
      <h2>FORMATION MAJORDOMAT</h2>
      <div className="bloc-texte">
        <p>
          Le Titre Professionnel de Majordome de niveau 3 est délivré par le Ministère du Travail et inscrit au RNCP. Il permet d’accéder aux métiers
          des services à la <b>personne en apportant une intervention professionnelle à domicile</b> de qualité auprès des personnes.
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
              loader={myLoader}
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
            Avec les modules de Majordomat, vous aurez les aptitudes et les savoirs d’un majordome / gouvernante de maison qui vous permettront de
            vous situer en tant que véritable professionnel de l’intervention à domicile.
          </p>
        </div>
      </div>

      <div className="p-grid bloc-modules">
        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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

        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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
        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
              alt="majordomeformationsap-femme-chambre-majordomat"
              src="/images/majordomeformationsap/formationmajordomat/majordomeformationsap-femme-chambre-majordomat.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 3 : L'étiquette</h3>
            <p>Connaissance et suivi du protocole, apprentissage du code de bonnes manières et assimilation des bonnes tenues &amp; attitudes</p>
          </div>
        </div>
        <div className="third">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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

        <div className="third">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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

      <div className="bloc-timeline">
        <Timeline value={events1} layout={layout as any} className="customized-timeline" marker={customizedMarker} content={customizedContent} />
      </div>
    </section>
  );
};

export default Majordomat;