import React, { Suspense } from "react";
import type { NextPage } from "next";
import { Button } from "primereact/button";
import Image from "next/image";
import { myLoader } from "@utils/loader";
import { ProgressSpinner } from "primereact/progressspinner";

const Soyez100Finance: NextPage = () => {
  return (
    <section id="soyez-100-finance">
      <div className="p-grid">
        <div className="bloc-texte">
          <h2>Soyez 100% Financé !</h2>
          <br />
          <p>Formez-vous à l’excellence avec MAJORDOME FORMATION SAP Formation 100% financée.</p>
          <p>
            En fonction de votre situation, votre formation peut être financée en totalité ou partiellement en sollicitant des dispositifs
            particuliers tels que CPF, l’OPCO, le Pôle Emploi, AGEFIPH ou la mission locale, etc. Pour les prises en charge partielles, nous vous
            offrons la possibilité d’un paiement en 4 fois sans frais.
          </p>
          <br />
          <Button
            label="Je découvre mon éligibilité CPF"
            onClick={() => window.open("https://www.moncompteformation.gouv.fr/espace-prive/html", "_blank")}
          />
        </div>
        <Suspense fallback={<ProgressSpinner />}>
          <div className="bloc-image">
            <Image loader={myLoader} alt="sponsors" src="/images/sponsors.png" layout="fill" objectFit="contain" quality={80} />
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default Soyez100Finance;
