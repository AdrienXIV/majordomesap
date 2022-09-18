import React, { Suspense } from "react";
import type { NextPage } from "next";
import Header from "@components/other/Header";
import { ProgressSpinner } from "primereact/progressspinner";
import Image from "next/image";

const HomePage: NextPage = () => {
  return (
    <main>
      <title>Alternance | Majordome Formation SAP</title>
      <meta
        name="description"
        content="Majordome formation propose des formations en alternance : advf, gouvernante, majordome, aide à domicile  et d’autres. Nos formations se déroulent en petit groupe avec des formateurs de qualité."
      />
      <meta
        name="keywords"
        content="centre de formation paris, formation gratuite, formation advf, formation aide à domicile, formation certifiante, formation pôle emploi, formation financée"
      />

      <Header />
      <section id="alternance">
        <h2>Alternance</h2>
        <p>Vous trouverez ci-après tout ce dont vous avez besoin pour trouver votre alternance avec SAP Majordome Formation</p>
        <hr />
      </section>
      <section id="alternance-comment-ca-marche">
        <div className="p-grid">
          <Suspense fallback={<ProgressSpinner />}>
            <div className="bloc-image">
              <Image alt="objectifs" src="/images/majordomeformationsap/qui-sommes-nous/objectifs.jpg" layout="fill" objectFit="cover" quality={80} />
            </div>
          </Suspense>
          <div className="bloc-texte">
            <h3>Comment ça marche ?</h3>

            <p>
              1. <b>Postulez à un emploi</b> en répondant aux annonces de notre CarreerCenter ou par vos propres moyens.
            </p>
            <p>
              2. <b>Choisissez votre formation SAP Majordome</b>, que vous pouvez identifier parmi nos parcours éligibles à l’alternance.
            </p>
            <p>
              3. <b>Soumettez votre candidature</b> à SAP Majordome en complétant le formulaire en bas de cette page.
            </p>
            <p>
              4. <b>Fêtez votre admission</b> 😃 Vous signez avec SAP Majordome et avec l’entreprise qui vous accueille.
            </p>
            <p>
              5. <b>Formez-vous en alternance sans attendre !</b> Votre carrière commence ici : Vous apprenez un métier tout en étant rémunéré.
            </p>
            <p>
              6. <b>Obtenez vitre diplôme !</b> Boostez votre CV avec un diplôme reconnu par l'État et une première expérience professionnalisante en
              entreprise !
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
