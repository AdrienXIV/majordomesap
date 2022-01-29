import React from "react";
import { Card } from "primereact/card";
import Lottie from "lottie-react";
import menage from "@animations/menage.json";
import Link from "next/link";

const Rncp = () => {
  const footerCard = (
    <Link href="/formation-advf" passHref>
      <a>Voir plus</a>
    </Link>
  );

  const footerCard2 = (
    <Link href="/formation-majordomat" passHref>
      <a>Voir plus</a>
    </Link>
  );

  return (
    <div className="block-rncp">
      <div className="grid grid-rncp">
        <div className="grid grid-rncp card-rncp-menage">
          <div className="col-12 md:col-6 lg:col-5">
            <Lottie animationData={menage} />
          </div>
          <div className="col-12 md:col-6 lg:col-5">
            <h3 className="title-emplois">
              <span className="number-rncp">949</span> offres d'emploi pour majordome en 2021
            </h3>
            <p className="p-emplois">Taux de réussite : 95%</p>
            <p className="p-emplois">Source : pôle emploi</p>
          </div>
        </div>
      </div>
      <hr />
      <h2 className="text-center title-rncp">Formez-vous à un métier d’avenir</h2>
      <div className="sous-texte-formations">
        <p>
          Nos formations en petits groupes vous permettront d’apprendre à soutenir quotidiennement les personnes à leur domicile. Devenez ainsi, un
          véritable professionnel de la relation d’aide et d’accompagnement. Gagnez en technicité, en poursuivant votre formation avec nos modules
          spécifiques de Majordomat.
        </p>
      </div>
      <div className="grid grid-rncp">
        <div className="col-12 md:col-6 lg:col-4">
          <Card className="card-rncp effet-rncp" footer={footerCard}>
            <div className="col-md-3">
              <h3 className="section-rncp">ADVF</h3>
              <div className="voir">
                <h4 className="p-title1">Adaptée pour tous</h4>
                {/* <p className="p-text1">
                  Le Titre Professionnel d’Assistant De Vie Aux Familles de niveau 3 est délivré par le Ministère du Travail et inscrit au RNCP. Il
                  permet d’accéder aux métiers des services à la personne en apportant une intervention professionnelle à domicile de qualité auprès
                  des personnes assistées.
                </p>
                <p className="p-text1">
                  Exercez dans le domaine et pour la cible qui vous convient le mieux. Chaque classe est composé d’un groupe réduit afin d’initier au
                  mieux chaque participant. Suivez nos formations en présentiel ou à distance selon les disponibilités et profitez d’un accès exclusif
                  de vos cours sur la plateforme à tout moment. À l’issue de la formation, vous avez la possibilité d’accompagner des personnes via
                  des services tels que l’assistance pour l’entretien du cadre de vie, l’hygiène corporelle, l’alimentation, les déplacements et la
                  prise en charge des enfants de 0 à 3 ans au domicile de leurs parents.
                </p> */}
                <p className="p-text1">
                  Avec l’obtention du titre d’assistant de vie aux familles, vous pouvez exercer dans le domaine et avec le public qui vous convient
                  le mieux. Chaque classe est composée d’un nombre réduit de participants pour favoriser les apprentissages et vous permet un
                  accompagnement adapté à vos besoins.
                </p>
                <p className="p-text1">
                  Suivez nos formations en présentiel ou distanciel et profitez d’un accès exclusif à vos cours sur notre plateforme à tout moment. A
                  l’issue de la formation, vous avez la capacité d’accompagner les personnes dans l’entretien de leur domicile, accompagner des
                  personnes en perte d’autonomie dans l’ensemble des gestes de la vie quotidienne ou de relayer les parents d’enfants en bas âge (0 à
                  3 ans) durant leur absence.
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-12 md:col-6 lg:col-4">
          <Card className="card-rncp effet-rncp" footer={footerCard2}>
            <div className="col-md-3">
              <h3 className="section-rncp">MAJORDOMAT</h3>
              <div className="voir">
                <h4 className="p-title1">Pour aller plus loin</h4>
                {/* <p className="p-text1">
                  Le Titre Professionnel de Majordome de niveau 3 est délivré par le Ministère du Travail et inscrit au RNCP. Il permet d’accéder aux
                  métiers des services à la personne en apportant une intervention professionnelle à domicile de qualité auprès des personnes.{" "}
                </p>
                <p className="p-text1">
                  Exercez dans le domaine et pour la cible qui vous convient le mieux. Avec les modules de Majordomat, vous aurez les aptitudes et les
                  savoirs d’un majordome / gouvernante de maison qui vous permettront de vous situer en tant que véritable professionnel de
                  l’intervention à domicile.
                  <br />
                  <br />
                  Les modules transversaux de Majordomat, vous attribuent la prestance et les aptitudes d’un majordome/gouvernante de maison qui vous
                  permettront de vous situer en tant que véritable professionnel de l’intervention à domicile.
                </p> */}
                {/* <p className="p-text1">
                  Les modules transversaux de Majordomat, vous attribuent la prestance et les aptitudes d’un majordome/gouvernante de maison qui vous
                  permettront de vous situer en tant que véritable professionnel de l’intervention à domicile.
                </p> */}
                <p className="p-text1">
                  Les modules de Majordomat vous permettent d’acquérir les connaissances et le standing nécessaire à des prestations de hautes
                  technicités. Vous élargissez ainsi votre culture professionnelle et votre technicité pour incarner le rôle du Majordome /
                  Gouvernante de maison.
                  <br />
                  Vous serez capable de prendre en charge la préparation des repas, le décor floral et le service à table par exemple.
                </p>
                <p className="p-text1">
                  Nos formations en Majordomat vous permettent de répondre aux demandes les plus exigeantes et de proposer des interventions
                  professionnelles à domicile de grande qualité.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Rncp;
