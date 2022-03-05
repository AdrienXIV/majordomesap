import { ProgressSpinner } from "primereact/progressspinner";
import React, { Suspense } from "react";
import Image from "next/image";

const InformationsCollectives = () => {
  return (
    <section id="prochaines-sessions">
      <h2>Information collective du vendredi</h2>
      <hr />
      <div className="p-grid">
        <div className="bloc-texte">
          <p>Chaque vendredi à 11H, nous vous accueillons dans nos locaux ou en visio pour répondre à vos questions et nous présenter.</p>
          <p>
            Vous n'avez pas les moyens de vous former ? Nous avons une solution pour vous ! Si vous êtes demandeur d'emploi, étudiant en alternance,
            salarié, chef d'entreprise... Vous pouvez bénéficier d'une formation finançable.
          </p>
          <p>
            Faire une formation, c'est investir dans l'avenir. C'est pour cela que la plupart des formations sont éligibles au CPF et en partie à la
            rémunération.
          </p>
        </div>
        <Suspense fallback={<ProgressSpinner />}>
          <div className="bloc-image">
            <Image
              alt="informations collectives"
              src="/images/majordomeformationsap/formationADVF/majordomeformationsap-fondamentaux-advf.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default InformationsCollectives;
