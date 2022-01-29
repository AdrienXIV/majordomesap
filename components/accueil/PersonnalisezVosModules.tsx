import React from "react";
import type { NextPage } from "next";

const PersonnalisezVosModules: NextPage = () => {
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

      <a href="https://majordomeformation-sap.catalogueformpro.com" ref="noopener follow" target="_blank" className="btn">
        Catalogue de formation
      </a>
    </section>
  );
};

export default PersonnalisezVosModules;
