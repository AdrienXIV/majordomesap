import React from "react";
import type { NextPage } from "next";
import { Card } from "primereact/card";
import Image from "next/image";

const NosFormationsPersonnalisables: NextPage = () => {
  return (
    <section id="nos-formations-personnalisables">
      <Image src="/images/formations.jpg" quality={80} layout="fill" objectFit="cover" />
      <h2>Nos formations personnalisables</h2>
      <br />
      <div className="bloc-cards">
        <Card title="Formation assistante de vie aux familles (ADVF)">
          <p className="p-m-0">
            Le professionnel ADVF joue un rôle important dans la vie des personnes assistées, en effectuant des tâches diversifiées de façon autonome
            tout en s’adaptant aux différents contextes familiaux tout au long de l’accompagnement.
          </p>
        </Card>
        <Card title="Formation Majordomat">
          <p className="p-m-0">
            Les modules transversaux de Majordomat, vous attribuent la prestance et les aptitudes d’un majordome/gouvernante de maison qui vous
            permettront de vous situer en tant que véritable professionnel de l’intervention à domicile.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default NosFormationsPersonnalisables;
