import React, { Suspense } from "react";
import type { NextPage } from "next";
import { ProgressSpinner } from "primereact/progressspinner";

import Image from "next/image";

const ALecouteDeVosEnvies: NextPage = () => {
  return (
    <section id="a-lecoute-de-vos-envies">
      <h2>À L'ÉCOUTE DE VOS ENVIES</h2>
      <hr />
      <div className="p-grid">
        <Suspense fallback={<ProgressSpinner />}>
          <div className="bloc-image">
            <Image alt="objectifs" src="/images/majordomeformationsap/qui-sommes-nous/objectifs.jpg" layout="fill" objectFit="cover" quality={80} />
          </div>
        </Suspense>
        <div className="bloc-texte">
          <h3>Nos Objectifs</h3>
          {/* <p>
            Notre but est d’enseigner sur les compétences professionnelles en y apportant des savoirs supplémentaires indispensables à un
            accompagnement de qualité afin de faciliter l’insertion professionnelle de nos apprenant(e)s. Nous savons qu’un recrutement local et de
            qualité est un facteur de réussite pour l’apprenant(e) c’est pourquoi Majordome Formation SAP a pour ambition de créer des partenariats
            privilégiés concernant la formation professionnelle et le recrutement, afin de favoriser l’intégration dans nos métiers. Nous souhaitons
            rendre nos formations accessibles à tous.
          </p> */}
          <p>
            Majordome Formation SAP a pour but de favoriser l’accès à la formation et à l’emploi du plus grand nombre. Aussi, nous proposons des
            formations en petits groupes, alternant connaissances techniques et pratiques. En accompagnant nos apprenants vers l’obtention d’une
            certification reconnue et en développant des partenariats privilégiés avec des entreprises locales qui recrutent, nous favorisons leur
            insertion professionnelle.
          </p>
        </div>
      </div>

      <div className="p-grid">
        <div className="bloc-texte">
          <h3>Nos valeurs</h3>
          <p>
            C’est parce que nous croyons en l’épanouissement de chacun et aux valeurs communes que nous nous engageons à les respecter et à les faire
            évoluer. Favoriser les liens sociaux : Une orientation pédagogique volontaire, transversale et pluridisciplinaire, un accompagnement en
            cherchant à comprendre les besoins et attentes des apprenant(e)s et partenaires, enfin, assurer un suivi quotidien sur le lieu de travail
            et en centre de formation. Au-delà des différences culturelles, nous mettons le respect des personnes au centre des relations humaines.
            Nous faisons de notre capacité d’écoute et d’ouverture à l’autre un véritable levier d’innovation et de développement.
          </p>
        </div>
        <Suspense fallback={<ProgressSpinner />}>
          <div className="bloc-image">
            <Image
              alt="majordomeformationsap-valeurs"
              src="/images/majordomeformationsap/qui-sommes-nous/majordomeformationsap-valeurs.jpeg"
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

export default ALecouteDeVosEnvies;
