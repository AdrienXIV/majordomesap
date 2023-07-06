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
    <>
      <section id="formation-majordomat">
        <h2 style={{ textAlign: "center", padding: "0 25px" }}>Formation Responsable de Secteur : Devenez un leader dans votre domaine</h2>
        <div className="bloc-texte">
          <p>
            Bienvenue sur notre page dédiée à la formation Responsable de Secteur, une étape clé pour tous ceux qui aspirent à devenir des leaders
            dans leur domaine professionnel. Si vous êtes motivé par les défis de gestion et le développement stratégique, cette formation est faite
            pour vous.
          </p>
          <p>
            La formation Responsable de Secteur vous permettra d'acquérir les compétences essentielles pour gérer et développer un secteur d'activité
            spécifique au sein d'une entreprise. Que vous envisagiez une promotion interne ou que vous souhaitiez vous reconvertir, cette formation
            vous donnera les outils nécessaires pour réussir.
          </p>
          <p>
            Notre programme de formation est conçu pour vous offrir une solide base théorique ainsi que des compétences pratiques indispensables pour
            exceller en tant que Responsable de Secteur. Vous apprendrez les principes de la gestion d'équipe, la planification stratégique, la prise
            de décision éclairée et la gestion efficace des opérations quotidiennes.
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
      </section>
      <section>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingOne">
            <h4 className="panel-title" style={{ textAlign: "center" }}>
              Résumé de la certification
            </h4>
            <hr />
          </div>
          <div id="collapseTwo" className="panel-collapse collapse show" role="tabpanel" aria-labelledby="headingTwo">
            <div className="panel-body">
              <br />
              <h5 className="title">Activités visées :</h5>
              <div className="txt">
                <p>
                  Positionné au premier niveau d’encadrement, le Responsable de secteur - services à la personne exerce une responsabilité
                  opérationnelle et managériale dans différentes structures (entreprises, associations, services communaux ou intercommunaux) pour la
                  mise en place à domicile d’activités sociales, médicosociales et de services à la personne.
                </p>
                <p>Ses activités peuvent être regroupées en trois domaines :</p>
                <ol>
                  <li>L'analyse de la demande et la proposition des prestations :</li>
                  <ul>
                    <li>Evaluation des besoins au domicile au regard de la situation du client / demandeur,</li>
                    <li>Elaboration et présentation d’une proposition d’intervention personnalisée,</li>
                    <li>Contractualisation de la prestation.</li>
                  </ul>
                  <li>L'organisation, la mise en place, la gestion et le suivi des prestations sur un secteur géographique qui lui est confié :</li>
                  <ul>
                    <li>
                      Mise en œuvre, évaluation et adaptation des prestations avec les clients / demandeurs, les intervenants et les autres acteurs du
                      parcours,
                    </li>
                    <li>Management des collaborateurs (intervenants, administratifs, …),</li>
                    <li>Contribution au recrutement et à la formation des collaborateurs (intervenants, administratifs, …),</li>
                    <li>Gestion du dossier du client / demandeur tout au long de la prestation.</li>
                  </ul>
                  <li>La contribution au maintien et au développement de l’activité de la structure qui l'emploie :</li>
                  <ul>
                    <li>Réalisation de comptes rendus à la Direction et de bilan régulier de l’activité du secteur confié,</li>
                    <li>Proposition et contribution à la mise en place de nouvelles activités,</li>
                    <li>Proposition et contribution à l’amélioration continue de la qualité.</li>
                  </ul>
                </ol>
              </div>
              <br />
              <h5 className="title">Compétences attestées :</h5>
              <div className="txt">
                <p>Le (la) titulaire est capable de :</p>
                <ul>
                  <li>Evaluer les besoins au domicile au regard de la situation du demandeur</li>
                  <li>Elaborer et présenter une proposition d’intervention personnalisée</li>
                  <li>Contractualiser une prestation</li>
                  <li>
                    Mettre en œuvre, évaluer et adapter la prestation avec le client / demandeur, les intervenants et les autres acteurs du parcours
                  </li>
                  <li>Manager les collaborateurs (intervenants, administratifs, …)</li>
                  <li>Contribuer au recrutement et à la formation des collaborateurs (intervenants, administratifs, …)</li>
                  <li>Gérer le dossier administratif des clients / demandeurs tout au long de la prestation</li>
                  <li>Rendre compte à la Direction, réaliser un bilan régulier de l’activité du secteur confié</li>
                  <li>Contribuer au développement, proposer la mise en place de nouvelles activités</li>
                  <li>Contribuer à l’amélioration continue de la qualité</li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="panel-heading" role="tab" id="headingFour">
            <h4 className="panel-title" style={{ textAlign: "center" }}>
              Secteur d'activité et type d'emploi
            </h4>
            <hr />
          </div>
          <div id="collapseFour" className="panel-collapse collapse show" role="tabpanel" aria-labelledby="headingFour">
            <div className="panel-body">
              <h5 className="title">Secteurs d’activités :</h5>
              <div className="txt">
                <p>Le Responsable de Secteur – services à la personne intervient dans les secteurs :</p>
                <ul>
                  <li>public,</li>
                  <li>privé lucratif,</li>
                  <li>privé non lucratif.</li>
                </ul>
                <p>Il peut exercer notamment :</p>
                <ul>
                  <li>en association d’aide à domicile (service prestataire et/ou mandataire),</li>
                  <li>en entreprise de services à la personne,</li>
                  <li>
                    dans une collectivité territoriale : service d’aide à domicile d’un centre communal d’action sociale (CCAS,), d’une
                    intercommunalité, etc,
                  </li>
                  <li>en association d’emploi familial</li>
                </ul>
              </div>
              <h5 className="title">Type d'emplois accessibles :</h5>
              <div className="txt">
                <ul>
                  <li>Responsable de secteur des services à la personne</li>
                  <li>Responsable d'agence</li>
                  <li>Responsable d'unité de services à la personne</li>
                  <li>Coordonnateur</li>
                </ul>
              </div>
              <h5 className="title">Code(s) ROME :</h5>
              <div className="txt">
                <ul>
                  <li>K1403 - Management de structure de santé, sociale ou pénitentiaire</li>
                  <li>K1201 - Action sociale</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResponsableSecteur;
