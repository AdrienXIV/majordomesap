import React, { Suspense, useEffect, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Timeline } from "primereact/timeline";
import { myLoader } from "@utils/loader";
import { ProgressSpinner } from "primereact/progressspinner";

const ADVF: NextPage = () => {
  const [layout, setLayout] = useState("horizontal");

  useEffect(() => {
    if (process.browser) {
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
      <h2>FORMATION ADVF</h2>
      <div className="bloc-texte">
        <p>
          Le Titre Professionnel d’Assistant De Vie Aux Familles de niveau 3 est délivré par le Ministère du Travail et inscrit au RNCP. Il permet
          d’accéder aux métiers des services à la <b>personne en apportant une intervention professionnelle à domicile</b> de qualité auprès des
          personnes assistées.
        </p>
        <br />
        <p>
          Le professionnel ADVF joue un rôle important dans la vie des personnes assistées, en effectuant des tâches diversifiées de façon autonome
          tout en s’adaptant aux différents contextes familiaux tout au long de l’accompagnement. Il facilite les actes de la vie au quotidien en
          prenant compte de la personne dans sa globalité en respectant sa vie privée et établit des relations interpersonnelles en maintenant la
          distance professionnelle nécessaire.
        </p>
        <p>
          La formation se compose de trois pôles d’activités permettant l’acquisition de 13 compétences et de trois compétences dites transversales.
          Ces compétences seront déclinées tout au long de la formation dans les trois pôles car elles sont le socle du métier d’assistant de vie aux
          familles.
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

      {/* <div className="devennez-un-pro">
        <h2>DEVENEZ UN PROFESSIONNEL RAPIDEMENT !</h2>
        <p>
          Notre formation modulable pouvant aller de <b>2 jours</b> (21 heures) à <b>2 mois</b> (441 heures). Cette qualification passe par
          l’acquisition de trois certificats de compétences professionnelles indispensables à la validation de l’examen d’AVDF devant le jury. Modulez
          votre programme en vous aidant de nos 3 programmes prédéfinis.
        </p>
      </div> */}

      {/* CCP1 */}
      <div id="advf-modules" className="module-titre">
        <h2>Programme de la formation</h2>
        <hr />
        CCP1 Entretenir le logement et le linge d’un particulier
      </div>

      <div className="p-grid bloc-modules modules-advf">
        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
              alt="majordomeformationsap-fondamentaux"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-fondamentaux-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 1 : Les fondamentaux du métier d’ADVF</h3>
            <p>
              Prendre connaissance : du rôle de l’assistant(e) de vie aux familles, des limites de son intervention, du cadre légal du métier et de la
              discrétion professionnelle
            </p>
          </div>
        </div>

        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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
        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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
        <div className="third">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
              alt="majordomeformationsap-entretien-logement"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-entretien-logement-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h3>Module 4 : Entretien du logement et du linge</h3>
            <p>L'utilisation adéquate des produits d’entretien, Organiser la prestation, Entretienir le logement et le linge</p>
          </div>
        </div>

        <div className="third">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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
        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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

        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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
        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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
        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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
        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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
        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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
        <div className="third">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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

        <div className="third">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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
        <div className="third">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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
        <div className="third">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
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

      <div className="bloc-timeline-advf">
        <Timeline value={events1} layout={layout as any} className="customized-timeline" marker={customizedMarker} content={customizedContent} />
      </div>

      <div className="p-grid plus-qu-un-simple-assistant">
        {/* <div className="bloc-4-images">
          <div className="second">
            <Suspense fallback={<ProgressSpinner />}>
              <Image
                loader={myLoader}
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
                loader={myLoader}
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
                loader={myLoader}
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
                loader={myLoader}
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
          <h3>Soyez plus qu'un(e) simple assistant(e) de vie</h3>
          <p>
            Bien plus qu’une formation théorique et pratique, notre centre inculque le savoir être en favorisant des relations saines et
            bienveillantes avec la personne accompagnée.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ADVF;
