import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { myLoader } from "@utils/loader";

const NhesitezPLus: NextPage = () => {
  return (
    <section id="nhesitez-plus">
      <h2>Financement</h2>
      <hr />

      <div className="p-grid">
        <div className="bloc-image">
          <Image
            loader={myLoader}
            alt="majordomeformationsap-financement"
            src="/images/majordomeformationsap/financement/majordomeformationsap-financement.jpeg"
            layout="fill"
            objectFit="cover"
            quality={80}
          />
        </div>
        <div className="bloc-texte">
          <h3>N'hésitez plus et ayez recours à nos plans d'aide</h3>
          <p>
            Majordome Formation SAP vous offre la possibilité de faire financer partiellement ou totalement votre formation grâce à des plans d'aide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NhesitezPLus;
