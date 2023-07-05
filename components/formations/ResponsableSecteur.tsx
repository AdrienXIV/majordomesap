import React, { Suspense, useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Timeline } from "primereact/timeline";
import { ProgressSpinner } from "primereact/progressspinner";

const ResponsableSecteur: NextPage = () => {
  const [layout, setLayout] = useState("horizontal");

  useEffect(() => {
    if (typeof window) {
      window.innerWidth < 959 ? setLayout("vertical") : setLayout("horizontal");
    }
  }, []);

  const events1 = [
    {
      status: "1. Mise en situation professionnelle centrée sur la maîtrise des gestes professionnels",
      color: "#f1c40f",
      numero: 1,
    },
    {
      status: "2. Entretien technique",
      color: "#3498db",
      numero: 2,
    },
    {
      status: "3. Dossier professionnel (DP)",
      color: "#8e44ad",
      numero: 3,
    },
    {
      status: "4. Entretien final avec le jury",
      color: "#006266",
      numero: 4,
    },
    // {
    //   status: "5. Aide à l'insertion",
    //   color: "#e74c3c",
    //   numero: 5,
    // },
  ];

  const customizedMarker = item => {
    return (
      <span className="custom-marker p-shadow-2">
        {(() => {
          switch (item.numero) {
            case 1:
              return <i className="pi pi-pencil icon-advf"></i>;
            case 2:
              return <i className="pi pi-calendar icon-advf"></i>;
            case 3:
              return <i className="pi pi-compass icon-advf"></i>;
            case 4:
              return <i className="pi pi-users icon-advf"></i>;
            case 5:
              return <i className="pi pi-thumbs-up icon-advf"></i>;

            default:
              return <i className="pi pi-pencil icon-advf"></i>;
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
      <h2 style={{ textAlign: "center" }}>Formation Responsable de Secteur : Devenez un leader dans votre domaine</h2>
      <div className="bloc-texte">
        <p>
          Bienvenue sur notre page dédiée à la formation Responsable de Secteur, une étape clé pour tous ceux qui aspirent à devenir des leaders dans
          leur domaine professionnel. Si vous êtes motivé par les défis de gestion et le développement stratégique, cette formation est faite pour
          vous.
        </p>
        <p>
          La formation Responsable de Secteur vous permettra d'acquérir les compétences essentielles pour gérer et développer un secteur d'activité
          spécifique au sein d'une entreprise. Que vous envisagiez une promotion interne ou que vous souhaitiez vous reconvertir, cette formation vous
          donnera les outils nécessaires pour réussir.
        </p>
        <p>
          Notre programme de formation est conçu pour vous offrir une solide base théorique ainsi que des compétences pratiques indispensables pour
          exceller en tant que Responsable de Secteur. Vous apprendrez les principes de la gestion d'équipe, la planification stratégique, la prise de
          décision éclairée et la gestion efficace des opérations quotidiennes.
        </p>
        <p>
          Pendant votre formation, vous explorerez des sujets clés tels que la gestion des ressources humaines, la gestion financière, la
          communication interne et externe, ainsi que la résolution de problèmes. Vous serez encadré par des formateurs expérimentés qui partageront
          leur expertise et vous aideront à développer les compétences nécessaires pour devenir un leader reconnu.
        </p>
        <p>
          Le rôle de Responsable de Secteur offre de nombreuses opportunités de carrière dans divers secteurs d'activité. Vous pourrez évoluer vers
          des postes de direction, prendre en charge des responsabilités élargies et contribuer activement à la croissance et au développement de
          votre entreprise.
        </p>
        <p>
          Nous nous engageons à vous fournir une formation de haute qualité, adaptée aux exigences du monde professionnel. Nous mettons à votre
          disposition des ressources pédagogiques modernes, des ateliers pratiques et un encadrement personnalisé pour vous permettre de développer
          tout votre potentiel.
        </p>
        <p>
          N'attendez plus pour saisir cette opportunité de devenir un leader dans votre domaine. Inscrivez-vous dès maintenant à notre formation
          Responsable de Secteur et prenez les commandes de votre carrière.
        </p>
        <p>
          Contactez-nous dès aujourd'hui pour obtenir plus d'informations sur nos programmes de formation et discuter de la meilleure option pour
          vous. Nous serons ravis de vous accompagner dans votre parcours vers le succès professionnel.
        </p>
      </div>
      {/* <div className="bloc-texte">
        <p>
          Grace au CAP petite enfance, vous allez apprendre a faire évoluer l'enfant jusqu'a son arrivé a l'école. Le CAP petite enfance est ouvert a
          tous, sans qualification et sans le BAC
        </p>
        <br />
        <p>
          Le professionnel Petite enfnat joue un rôle important dans la vie des enfants, en effectuant des tâches diversifiées de façon autonome tout
          en s’adaptant aux différents contextes familiaux tout au long de l’accompagnement. Il facilite les actes de la vie au quotidien en prenant
          compte les besoins de l'enfant dans sa globalité en respectant sa vie privée et établit des relations interpersonnelles en maintenant la
          distance professionnelle nécessaire.
        </p>
        <p>
          La formation se compose de trois pôles d’activités permettant l’acquisition de 13 compétences et de 3 compétences dites transversales. Ces
          compétences seront déclinées tout au long de la formation dans les trois pôles car elles sont le socle du métier d’assistant de vie aux
          familles.
        </p>
      </div> */}

      <div className="p-grid bloc">
        <div>
          <h3>Public visé</h3>
          <p>Notre formation s’adresse à toute personne souhaitant se former au métier obtenir le CAP petite enfance</p>
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
              alt="majordomeformationsap-garde-enfant"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-garde-enfant-min.jpeg"
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
            Chaque classe est composé d’un <b>groupe réduit</b> afin d’initier au mieux chaque participant. Suivez nos formations en présentiel ou à
            distance selon les disponibilités et profitez d’un accès exclusif de vos cours sur la plateforme à tout moment.
          </p>
          <p>
            À l’issue de la formation, vous avez la possibilité d’accompagner des personnes via des services tels que l’
            <b>assistance pour l’entretien du cadre de vie</b>, l’<b>hygiène corporelle</b>, l’<b>alimentation</b>, les <b>déplacements</b> et la{" "}
            <b>prise en charge des enfants</b> de 0 à 3 ans au domicile de leurs parents.
          </p>
        </div>
      </div>

      {/* CCP1 */}
      <div id="advf-modules" className="module-titre">
        <h2>Devenez un professionnel rapidement !</h2>
        <small>Notre formation modulable pouvant aller de 3 jours à 2 mois. Cette certification passe par l'acquisition</small>
        <hr />
      </div>

      <div className="p-grid bloc-modules modules-advf">
        <div
          className="second"
          title="Voir le module"
          onClick={() =>
            window.open(
              "https://majordomeformation-sap.catalogueformpro.com/0/ccp1-entretenir/364990/les-fondamentaux-du-metier-dadvf-ccp1-advf",
              "_blank"
            )
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-fondamentaux"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-fondamentaux-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 1 : Les fondamentaux du métier du CAP petite enfance</h3>
            <p>
              Prendre connaissance : du rôle de l’assistant(e) de vie aux familles, des limites de son intervention, du cadre légal du métier et de la
              discrétion professionnelle
            </p>
          </div>
        </div>

        <div
          className="second"
          title="Voir le module"
          onClick={() =>
            window.open("https://majordomeformation-sap.catalogueformpro.com/0/ccp1-entretenir/472295/travailler-en-securite-ccp1-advf", "_blank")
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-sécurité-travail"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-sécurité-travail-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 2 : Le travail en sécurité</h3>
            <p>
              Prévention des risques courants à domicile : veiller à sa sécurité et à celle de la personne, l'hygiène domestique et la protection de
              l’environnement de travail
            </p>
          </div>
        </div>
        <div
          className="second"
          title="Voir le module"
          onClick={() =>
            window.open("https://majordomeformation-sap.catalogueformpro.com/0/ccp1-entretenir/364956/communication-ccp1-advf", "_blank")
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-communication"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-communication-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 3 : La communication</h3>
            <p>
              Apprendre les bases de la communication verbale et non-verbale, échanger avec la personne accompagnée et recueillir et transmettre les
              informations nécessaires
            </p>
          </div>
        </div>
        <div
          className="third"
          title="Voir le module"
          onClick={() =>
            window.open(
              "https://majordomeformation-sap.catalogueformpro.com/0/ccp1-entretenir/472804/techniques-dentretien-du-logement-et-du-linge-ccp1-advf",
              "_blank"
            )
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-entretien-logement"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-entretien-logement-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 4 : Entretien du logement et du linge</h3>
            <p>L'utilisation adéquate des produits d’entretien, Organiser la prestation, Entretenir le logement et le linge</p>
          </div>
        </div>

        <div className="third" title="Voir le module" onClick={() => window.open(`${process.env.NEXT_PUBLIC_HOST}/formation-majordomat`, "_blank")}>
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-couture"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-couture-min.png"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Modules supplémentaires proposés</h3>
            <p>L’art de la table &amp; L’art fleural</p>
            <p>La couture</p>
            <p>L’étiquette</p>
          </div>
        </div>
      </div>
      {/* /CCP1 */}

      {/* CCP2 */}
      <div className="module-titre">
        <hr />
        CCP2 Accompagner la personne dans les actes essentiels du quotidien
      </div>

      <div className="p-grid bloc-modules modules-advf">
        <div
          className="second"
          title="Voir le module"
          onClick={() =>
            window.open(
              "https://majordomeformation-sap.catalogueformpro.com/1/ccp2-accompagner/472376/developper-une-relation-professionnelle-ccp2-advf",
              "_blank"
            )
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-relation-professionnelle"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-relation-professionnelle-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 1 : Développer une relation professionnelle</h3>
            <p>
              Établir le lien avec la personne, organiser les actes à accomplir avec la personne, s’adapter aux différentes situations et se concerter
              sur la prendre connaissance des droits et libertés de la personne
            </p>
          </div>
        </div>

        <div
          className="second"
          title="Voir le module"
          onClick={() =>
            window.open("https://majordomeformation-sap.catalogueformpro.com/1/ccp2-accompagner/443017/prevention-des-risques-ccp2-advf", "_blank")
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-prevention"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-prevention-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 2 : Prévention des risques</h3>
            <p>
              Connaissance des numéros d’urgence, apprendre à éviter et gérer les accidents des actes du quotidien, assimiler la bientraitance et la
              maltraitance, les règles d’hygiène face à la Covid-19 et sécuriser l’environnement lors des actes du quotidien
            </p>
          </div>
        </div>
        <div
          className="second"
          title="Voir le module"
          onClick={() =>
            window.open(
              "https://majordomeformation-sap.catalogueformpro.com/1/ccp2-accompagner/364981/comprendre-et-accompagner-la-perte-dautonomie-ccp2-advf",
              "_blank"
            )
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-accompagnement"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-accompagnement-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 3 : Comprendre et accompagner la perte d'autonomie</h3>
            <p>
              Le vieillissement et les pathologies, les mécanismes de la perte d’autonomie, les gestes et techniques d’accompagnement à la perte
              d’autonomie
            </p>
          </div>
        </div>
        <div
          className="second"
          title="Voir le module"
          onClick={() =>
            window.open("https://majordomeformation-sap.catalogueformpro.com/1/ccp2-accompagner/472357/aide-aux-soins-dhygiene-ccp2-advf", "_blank")
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-aide-soin"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-aide-soin-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 4 : Aide aux soins d'hygiène</h3>
            <p>L’aide à la toilette, l'aide à l’habillage et déshabillage et la manutention des personnes</p>
          </div>
        </div>
        <div
          className="second"
          title="Voir le module"
          onClick={() =>
            window.open("https://majordomeformation-sap.catalogueformpro.com/1/ccp2-accompagner/364984/alimentation-ccp2-advf", "_blank")
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-alimentation"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-alimentation-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 5 : Alimentation</h3>
            <p>
              La préparation des repas, le respect des règles d’hygiène, prendre en considération les besoins nutritionnels &amp; régimes spécifiques,
              plus l’accompagnement aux courses
            </p>
          </div>
        </div>
        <div className="second" title="Voir le module" onClick={() => window.open(`${process.env.NEXT_PUBLIC_HOST}/formation-majordomat`, "_blank")}>
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-vin"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-vin-min.png"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Modules supplémentaires proposés</h3>
            <p>L’oenologie</p>
            <p>La gastronomie</p>
          </div>
        </div>
      </div>
      {/* /CCP2 */}

      {/* CCP3 */}
      <div className="module-titre">
        <hr />
        CCP3 Relayer les parents dans la prise en charge des enfants à leur domicile
      </div>

      <div className="p-grid bloc-modules modules-advf">
        <div
          className="third"
          title="Voir le module"
          onClick={() =>
            window.open(
              "https://majordomeformation-sap.catalogueformpro.com/2/ccp3-petite-enfance/472416/definir-le-cadre-de-lintervention-ccp3-advf",
              "_blank"
            )
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-cadre"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-cadre-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 1 : Définir le cadre de l'intervention</h3>
            <p>
              Le premier contact avec les parents: l’interaction avec les parents lors la prise de relais, les techniques professionnelles de
              l’intervention et l’organisation de l’intervention avec un ou plusieurs enfants
            </p>
          </div>
        </div>

        <div
          className="third"
          title="Voir le module"
          onClick={() =>
            window.open(
              "https://majordomeformation-sap.catalogueformpro.com/2/ccp3-petite-enfance/472479/prevention-des-risques-et-securite-des-enfants-ccp3-advf",
              "_blank"
            )
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-prévention-risque-enfant"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-prévention-risque-enfant.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 2 : Prévenir les risques et assurer la sécurité des enfants</h3>
            <p>
              Prévenir des accidents domestiques et des risques à l’intérieur &amp; à l’extérieur du domicile. Être avertis des problèmes de santé et
              de la conduite à tenir et connaître Les protections et les droits des enfants
            </p>
          </div>
        </div>
        <div
          className="third"
          title="Voir le module"
          onClick={() =>
            window.open(
              "https://majordomeformation-sap.catalogueformpro.com/2/ccp3-petite-enfance/472524/accompagnement-dans-lapprentissage-de-base-la-socialisation-et-les-activites-des-enfants-ccp3-advf",
              "_blank"
            )
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-apprentissage-enfant"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-apprentissage-enfant.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 3 : Accompagnement dans l’apprentissage de base, la socialisation et les activités des enfants</h3>
            <p>
              Favoriser l'acquisition de la propreté de l’enfant, la socialisation de l’enfant, l’accompagnement dans le travail scolaire, les jeux
              dans le développement de l’enfant et les rapports de l’enfant à la nourriture
            </p>
          </div>
        </div>
        <div
          className="third"
          title="Voir le module"
          onClick={() =>
            window.open(
              "https://majordomeformation-sap.catalogueformpro.com/2/ccp3-petite-enfance/472578/les-gestes-et-techniques-professionnels-ccp3-advf",
              "_blank"
            )
          }
        >
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              alt="majordomeformationsap-gestion-enfants"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-gestion-enfants-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 4 : Les techniques et gestes professionnels</h3>
            <p>
              Assimiler la bonne pratique des soins d’hygiène selon l’âge de l’enfant, l’alimentation de l’enfant, le sommeil de l’enfant et les
              façons de porter le bébé et l’enfant
            </p>
          </div>
        </div>
      </div>
      {/* /CCP3 */}
      <div className="evolutions-possibles">
        <h3>Évolutions possibles</h3>
        <hr />
        <h4>Poursuite d’études</h4>
        <p>
          Après votre certification, vous aurez des facilités à évoluer vers les fonctions d’accompagnant(e) éducatif et social (AES),
          aide-soignant(e) ou vers les métiers de la petite enfance.
        </p>
        <br />
        <h4>Des passerelles</h4>
        <p>
          Des passerelles ont été établies entre le TP ADVF et des certifications des ministères chargés de l’éducation nationale, de l’agriculture,
          de la cohésion sociale et de la santé, ainsi que celles de la branche des salariés du particulier employeur.
        </p>
        <br />
        <h4>Débouchés</h4>
        <p>Assitant (e) de vie, assistant(e) de vie, assistant(e) ménager(e), agent à domicile, garde d’enfant à domicile, garde à domicile.</p>
      </div>

      <div className="bloc-timeline-advf">
        <Timeline value={events1} layout={layout as any} className="customized-timeline" marker={customizedMarker} content={customizedContent} />
      </div>

      <div className="p-grid plus-qu-un-simple-assistant">
        {/* <div className="bloc-4-images">
          <div className="second">
            <Suspense fallback={<ProgressSpinner />}>
              <Image
                
                alt="majordomeformationsap-soutien-scolaire"
                src="/images/majordomeformationsap/formationADVF/majordomeformationsap-soutien-scolaire-min.jpeg"
                layout="fill"
                objectFit="cover"
                quality={80}
              />
            </Suspense>
            <div>
              <h4>Soutien scolaire</h4>
            </div>
          </div>
          <div className="second">
            <Suspense fallback={<ProgressSpinner />}>
              <Image
                
                alt="majordomeformationsap-soutien-social"
                src="/images/majordomeformationsap/formationADVF/majordomeformationsap-soutien-social-min.jpeg"
                layout="fill"
                objectFit="cover"
                quality={80}
              />
            </Suspense>
            <div>
              <h4>Soutien social</h4>
            </div>
          </div>
          <div className="second">
            <Suspense fallback={<ProgressSpinner />}>
              <Image
                
                alt="majordomeformationsap-decouverte-environnement"
                src="/images/majordomeformationsap/formationADVF/majordomeformationsap-decouverte-environnement-advf.jpeg"
                layout="fill"
                objectFit="cover"
                quality={80}
              />
            </Suspense>
            <div>
              <h4>Découverte environnementale</h4>
            </div>
          </div>
          <div className="second">
            <Suspense fallback={<ProgressSpinner />}>
              <Image
                
                alt="majordomeformationsap-aide-administration"
                src="/images/majordomeformationsap/formationADVF/majordomeformationsap-aide-administration-advf.jpeg"
                layout="fill"
                objectFit="cover"
                quality={80}
              />
            </Suspense>
            <div>
              <h4>Aide administrative</h4>
            </div>
          </div>
        </div> */}
        <div className="bloc-texte">
          <h3>Soyez plus qu’une simple assistante de vie</h3>
          <p>
            Grâce à nos formations, gagnez en technicité dans votre travail et développez votre culture générale pour gagner en aisance relationnelle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResponsableSecteur;
