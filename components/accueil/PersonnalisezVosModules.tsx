import React from "react";
import type { NextPage } from "next";
import { Card } from "primereact/card";
import Image from "next/image";
import { Divider } from "primereact/divider";
import Link from "next/link";

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
          Vous avez la possibilité de personnaliser votre formation en y sélectionnant les modules qui correspondent le plus à vos besoins. Vous
          pouvez faire la formation d’ADVF au complet ou à la carte par bloc de compétence et y ajouter des modules transversaux de Majordomat, vous
          permettant ainsi d’élargir et approfondir vos compétences professionnelles.
        </p>
      </div>

      <Link href="https://majordomeformation-sap.catalogueformpro.com" passHref>
        <a ref="noopener follow" target="_blank" className="btn">
          Catalogue de formation
        </a>
      </Link>
    </section>
  );
};

export default PersonnalisezVosModules;
