import { myLoader } from "@utils/loader";
import { ProgressSpinner } from "primereact/progressspinner";
import React, { Suspense } from "react";
import Image from "next/image";

const InformationsCollectives = () => {
  return (
    <section id="prochaines-sessions">
      <h2>Information collective du vendredi</h2>
      <hr />
      <p>Chaque vendredi à 11H, nous vous accueillons dans nos locaux ou en visio pour répondre à vos questions et nous présenter.</p>

      <Suspense fallback={<ProgressSpinner />}>
        <br />
        <br />
        <Image
          loader={myLoader}
          alt="calendrier avril 2022"
          src="/images/calendrier/sap_calendrier_avril_2022.png"
          quality={80}
          height={629}
          width={919}
        />
      </Suspense>
    </section>
  );
};

export default InformationsCollectives;
