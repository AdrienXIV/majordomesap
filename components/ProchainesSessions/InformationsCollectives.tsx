import { ProgressSpinner } from "primereact/progressspinner";
import React, { Suspense } from "react";
import Image from "next/image";

const InformationsCollectives = () => {
  return (
    <section id="prochaines-sessions">
      <h2>Information collective du vendredi</h2>
      <hr />
      <p>Chaque vendredi à 11H, nous vous accueillons dans nos locaux ou en visio pour répondre à vos questions et nous présenter.</p>
      <p>
        Vous n'avez pas les moyens de vous former ? Nous avons une solution pour vous ! Si vous êtes demandeur d'emploi, étudiant en alternance,
        salarié, chef d'entreprise... Vous pouvez bénéficier d'une formation finançable.
      </p>
      <p>
        Faire une formation, c'est investir dans l'avenir. C'est pour cela que la plupart des formations sont éligibles au CPF et en partie à la
        rémunération.
      </p>
    </section>
  );
};

export default InformationsCollectives;
