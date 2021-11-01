import React, { Suspense } from "react";
import type { NextPage } from "next";
import { ProgressSpinner } from "primereact/progressspinner";
import { myLoader } from "@utils/loader";
import Image from "next/image";

const EquipePedagogieCertifiee: NextPage = () => {
  return (
    <section id="equipe-pedagogie-certifiee">
      <div className="p-grid">
        <Suspense fallback={<ProgressSpinner />}>
          <div className="bloc-image">
            <Image
              loader={myLoader}
              alt="majordomeformationsap-equipe"
              src="/images/majordomeformationsap/qui-sommes-nous/majordomeformationsap-equipe.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
        </Suspense>
        <div className="bloc-texte">
          <h4>Équipe Complète</h4>
          <p>
            Maître d’Hôtel, Infirmière d’état, Éducateur spécialisé de la petite enfance / Directrice de crèche, Professeur de FLE (français langue
            étrangère), Formateur en science humaine et sociale &amp; Formateur développement personnel
          </p>
        </div>
      </div>

      <div className="p-grid">
        <div className="bloc-texte">
          <h4>Pédagogie en petits groupes</h4>
          <p>
            Nos formations sont réalisées en petit comité afin d'optimiser l'assimilation des apprenants et permettre un meilleur accompagnement pour
            chacun
          </p>
        </div>
        <Suspense fallback={<ProgressSpinner />}>
          <div className="bloc-image">
            <Image
              loader={myLoader}
              alt="majordomeformationsap-groupe"
              src="/images/majordomeformationsap/qui-sommes-nous/majordomeformationsap-groupe.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
        </Suspense>
      </div>

      <div className="p-grid">
        <Suspense fallback={<ProgressSpinner />}>
          <div className="bloc-image">
            <Image
              loader={myLoader}
              alt="majordomeformationsap-formation-reconnue-certifiée"
              src="/images/majordomeformationsap/qui-sommes-nous/majordomeformationsap-formation-reconnue-certifiée.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </div>
        </Suspense>
        <div className="bloc-texte">
          <h4>Reconnue et certifiée</h4>
          <p>
            Chaque membre de l'équipe possède des certifications de compétences reconnues par l'Etat ainsi que des aptitudes à enseigner. Le centre
            est également reconnu grâce à ses titres &amp; partenaires : Titre Dotadock, éligibilité étatiques, délivrance d'un statut national..
          </p>
        </div>
      </div>
    </section>
  );
};

export default EquipePedagogieCertifiee;
