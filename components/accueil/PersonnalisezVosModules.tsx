import React from "react";
import type { NextPage } from "next";
import { Card } from "primereact/card";
import Image from "next/image";
import { Divider } from "primereact/divider";

const PersonnalisezVosModules: NextPage = () => {
  const footerCCP1 = () => (
    <>
      <Divider />
      <div className="card-footer-title">MODULES TRANSVERSAUX</div>
      <div className="module-transversaux">
        <i className="pi pi-angle-right"></i> L’art de la table &amp; L’art fleural
      </div>
      <div className="module-transversaux">
        <i className="pi pi-angle-right"></i> La couture
      </div>
      <div className="module-transversaux">
        <i className="pi pi-angle-right"></i> L’étiquette
      </div>
    </>
  );

  const footerCCP2 = () => (
    <>
      <Divider />
      <div className="card-footer-title">MODULES TRANSVERSAUX</div>
      <div className="module-transversaux">
        <i className="pi pi-angle-right"></i> La gastronomie
      </div>
      <div className="module-transversaux">
        <i className="pi pi-angle-right"></i> L’oenologie
      </div>
    </>
  );

  return (
    <section id="personnalisez-vos-modules">
      <h2>Personnalisez vos modules</h2>

      <div className="bloc-texte">
        <p>
          La qualification professionnelle reconnue par le Titre Professionnel d’ADVF passe par l’acquisition de trois certificats de compétences
          professionnelles indispensables à la validation de l’examen d’AVDF devant un jury.
        </p>
        <p>
          Cependant, vous pouvez faire la formation d’ADVF au complet ou à la carte par bloc de compétence et y ajouter des modules transversaux de
          Majordomat, vous permettant ainsi d’élargir et approfondir vos compétences professionnelles.
        </p>
      </div>
      <br />
      <div className="p-grid bloc-cards">
        <Card className="col-3" title="CCP 1" subTitle="Entretenir le logement et le linge d’un particulier" footer={footerCCP1}>
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 1 :</u> Les fondamentaux du métier d’ADVF
          </div>
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 2 :</u> Le travail en sécurité
          </div>
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 3 :</u> La communication
          </div>
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 4 :</u> Techniques d’entretien du logement et du linge
          </div>
        </Card>
        <Card className="col-3" title="CCP 2" subTitle="Accompagner la personne dans les actes essentiels du quotidien" footer={footerCCP2}>
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 1 :</u> Développer une relation professionnelle
          </div>
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 2 :</u> Prévention des risques
          </div>
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 3 :</u> Comprendre et accompagner la perte d’autonomie
          </div>
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 4 :</u> Aide aux soins d’hygiène
          </div>
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 5 :</u> Alimentation
          </div>
        </Card>
        <Card className="col-3" title="CCP 3" subTitle="Relayer les parents dans la prise en charge des enfants à leur domicile">
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 1 :</u> Définir le cadre de l’intervention
          </div>
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 2 :</u> Prévenir les risques et assurer la sécurité des enfants
          </div>
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 3 :</u> Accompagnement dans l’apprentissage de base, la socialisation et les activités
            des enfants
          </div>
          <div className="module">
            <i className="pi pi-check-circle"></i> <u>Module 4 :</u> Les techniques et gestes professionnels
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PersonnalisezVosModules;
