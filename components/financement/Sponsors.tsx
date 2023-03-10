import React, { Suspense } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";

const Sponsors: NextPage = () => {
  return (
    <section id="sponsors">
      <div className="bloc-card">
        <div>
          <div>
            <h3>Le compte personnel de formation : CPF</h3>

            <p>
              <Suspense fallback={<ProgressSpinner />}>
                <Image alt="cpf" src="/images/majordomeformationsap/Accueil/cpf.png" width={150} height={150} quality={50} />
              </Suspense>
              Le compte personnel de formation (CPF) est proposé pour les demandeurs d’emploi ou pour ceux qui sont en reconversion professionnelle.
              Depuis 2019, pour chaque année travaillée, vous recevez 500€ sur cette plateforme pour vous former sur votre compte en ligne. Vous
              pouvez ainsi financer la totalité ou une partie des frais de la formation. Cependant toutes les formations ne sont pas prises en charge
              par le CPF. Seules les formations permettant d’acquérir des compétences “attestées” (<b>qualification, certification, diplôme</b>) en
              lien avec les besoins de l’économie et la sécurisation des parcours des salariés y sont éligibles.
            </p>
          </div>
          <div>
            <Button label="Mon solde CPF" onClick={() => window.open("https://www.moncompteformation.gouv.fr/espace-prive/html", "_blank")} />
          </div>
        </div>

        <div>
          <div>
            <h3>Les opérateurs de compétences (OPCO)</h3>
            <p>
              <Suspense fallback={<ProgressSpinner />}>
                <Image alt="opco" src="/images/majordomeformationsap/Accueil/opco.png" width={250} height={100} quality={50} />
              </Suspense>
              Le 1er avril 2019, onze opérateurs de compétences (OPCO), chargés d’accompagner la formation professionnelle, ont été agréés. Ils ont
              remplacé les anciens organismes paritaires collecteurs agréées (OPCA).
            </p>
            <p>
              Ces opérateurs de compétences ont pour missions de financer l’apprentissage, d’aider les branches à construire les certifications
              professionnelles et d’accompagner les PME pour définir leurs besoins en formation.
            </p>
          </div>
          <div>
            <Button label="En savoir plus" onClick={() => window.open("https://www.opcoep.fr", "_blank")} />
          </div>
        </div>

        <div>
          <div>
            <h3>Pôle emploi</h3>
            <p>
              <Suspense fallback={<ProgressSpinner />}>
                <Image alt="pole-emploi" src="/images/majordomeformationsap/Accueil/poleemploi.png" width={175} height={100} quality={50} />
              </Suspense>
              Avec l’aide du conseiller Pôle Emploi, vous pourrez analyser votre situation. Ainsi, connaître toutes les possibilités de prise en
              charge et les différentes modalités administratives qui s’offrent à vous.
            </p>
          </div>
          <div>
            <Button label="Me rapprocher d'un conseiller" onClick={() => window.open("https://www.pole-emploi.fr/accueil", "_blank")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
