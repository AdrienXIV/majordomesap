import React, { Suspense } from "react";
import type { NextPage } from "next";
import { ProgressSpinner } from "primereact/progressspinner";
import { myLoader } from "@utils/loader";
import Image from "next/image";

const EquipePedagogieCertifiee: NextPage = () => {
  return (
    <section id="equipe-pedagogie-certifiee">
      <div className="p-grid bloc-modules">
        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
              alt="majordomeformationsap-equipe"
              src="/images/majordomeformationsap/qui-sommes-nous/majordomeformationsap-equipe.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h4>Équipe Complète</h4>
            <p>
              Formateur ADVF, Formateur en science humaine et social, Éducateur de jeunes enfants, Maître d’hôtel, Formateur en développement
              personnel
            </p>
          </div>
        </div>

        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
              alt="majordomeformationsap-petite-salle"
              src="/images/majordomeformationsap/qui-sommes-nous/salle.jpg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h4>Pédagogie en petits groupes</h4>
            <p>
              Nos formations sont réalisées en petit comité afin d'optimiser l'assimilation des apprenants et permettre un meilleur accompagnement
              pour chacun
            </p>
          </div>
        </div>

        <div className="second">
          <Suspense fallback={<ProgressSpinner />}>
            <Image
              loader={myLoader}
              alt="majordomeformationsap-formation-reconnue-certifiée"
              src="/images/majordomeformationsap/qui-sommes-nous/majordomeformationsap-formation-reconnue-certifiée.jpeg"
              layout="fill"
              objectFit="cover"
              quality={80}
            />
          </Suspense>
          <div>
            <h4>Reconnue et certifiée</h4>
            <p>
              Reconnue et certifiée : Chaque membre de l’équipe possède des aptitudes et qualifications à enseigner reconnues par l’État. Le centre
              est également reconnu par ses certifications et accréditations : Datadock, FFP..
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipePedagogieCertifiee;
