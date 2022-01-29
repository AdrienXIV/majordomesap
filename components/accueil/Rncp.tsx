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
            <p className="p-emplois">Source : pôle emploi</p>
          </div>
        </div>
      </div>
      <hr />
      <h2 className="text-center title-rncp">Nos Formations RNCP CAP/BAC PRO</h2>
      <div className="grid grid-rncp">
        <div className="col-12 md:col-6 lg:col-4">
          <Card className="card-rncp effet-rncp" footer={footerCard}>
            <div className="col-md-3">
              <h3 className="section-rncp">ADVF</h3>
              <div className="voir">
                <h4 className="p-title1">Adaptée pour tous</h4>
                <p className="p-text1">
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
                <h4 className="p-title1">Adaptée pour tous</h4>
                <p className="p-text1">
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
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Rncp;
