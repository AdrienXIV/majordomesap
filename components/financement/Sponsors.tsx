import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "primereact/button";

const Sponsors: NextPage = () => {
  return (
    <section id="sponsors">
      <div className="bloc-card">
        <div>
          <h3>Le compte personnel de formation : CPF</h3>
          <p>
            Le compte personnel de formation (CPF) est proposé pour les demandeurs d’emploi ou pour ceux qui sont en reconversion professionnelle.
            Depuis 2019, pour chaque année travaillée, vous recevez 500€ sur cette plateforme pour vous former sur votre compte en ligne. Vous pouvez
            ainsi financer la totalité ou une partie des frais de la formation. Cependant toutes les formations ne sont pas prises en charge par le
            CPF. Seules les formations permettant d’acquérir des compétences “attestées” (<b>qualification, certification, diplôme</b>) en lien avec
            les besoins de l’économie et la sécurisation des parcours des salariés y sont éligibles.
          </p>
          <Button label="Mon solde CPF" onClick={() => window.open("https://www.moncompteformation.gouv.fr/espace-prive/html", "_blank")} />
        </div>

        <div>
          <h3>Les opérateurs de compétences (OPCO)</h3>
          <p>
            Le 1er avril 2019, onze opérateurs de compétences (OPCO), chargés d’accompagner la formation professionnelle, ont été agréés. Ils ont
            remplacé les anciens organismes paritaires collecteurs agréées (OPCA).
          </p>
          <p>
            Ces opérateurs de compétences ont pour missions de financer l’apprentissage, d’aider les branches à construire les certifications
            professionnelles et d’accompagner les PME pour définir leurs besoins en formation.
          </p>
          <Button label="En savoir plus" onClick={() => window.open(`${process.env.NEXT_PUBLIC_HOST}/financement/#contact`, "_blank")} />
        </div>

        <div>
          <h3>Pôle emploi</h3>
          <p>
            Avec l’aide du conseiller Pôle Emploi, vous pourrez analyser votre situation. Ainsi, connaître toutes les possibilités de prise en charge
            et les différentes modalités administratives qui s’offrent à vous.
          </p>
          <Button
            label="Me rapprocher d'un conseiller"
            onClick={() => window.open(`${process.env.NEXT_PUBLIC_HOST}/financement/#contact`, "_blank")}
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
