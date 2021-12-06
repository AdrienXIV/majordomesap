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
          <p>Formez vous à l’excellence avec MAJORDOME FORMATION SAP Formation 100% financée.</p>
          <p>
            Votre formation peut être financée selon votre situation. Vous pouvez selon votre cas, faire une demande de prise en charge de la
            formation auprès des structures dédiées (CPF, Opco, Pôle Emploi, Agefiph ou Mission locale).
          </p>
          <p>Jusqu’à 100% de votre formation peut alors vous être alloué. Possibilité de paiement en 4 fois.</p>
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
