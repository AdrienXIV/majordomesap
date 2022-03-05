import { Button } from "primereact/button";
import React from "react";
import { useRouter } from "next/router";

const DatesSessions = () => {
  const router = useRouter();
  return (
    <section id="dates-sessions">
      <h3>Dates de nos prochaines sessions</h3>
      <p>
        La formation majordomat, vous permet d'obtenir les bases et la polyvalence d'un majordome. Lors de cette formation, vous acquerrez une vision
        globale du métier de majordome et des compétences indispensables pour y exercer dans les métiers du luxe. Vous apprendrez les savoir-être, le
        rôle du majordome et ses relations avec le personnel.
      </p>
      <p>
        La formation d'Assistant(e) de Vie aux Familles s'adresse à toute personne souhaitant se former pour exercer ce métier. En effet, étant donné
        que le secteur de l'aide à domicile est en perpétuel essor, les emplois dans ce domaine ne manquent pas.
      </p>
      <div className="bloc-dates">
        <div className="card-prochaine">
          <div>
            <h3>Session Majordomat complète</h3>
            <p>1 avril 2022 au 21 avril 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
        <div className="card-prochaine">
          <div>
            <h3>Module Etiquette complète</h3>
            <p>1 avril 2022 au 5 avril 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
        <div className="card-prochaine">
          <div>
            <h3>Module Art de la table complète</h3>
            <p>6 avril 2022 au 8 avril 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
        <div className="card-prochaine">
          <div>
            <h3>Module Oenologie (Science et connaissance des vins) complète</h3>
            <p>11 avril 2022 au 12 avril 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
        <div className="card-prochaine">
          <div>
            <h3>Module Gastronomie complète</h3>
            <p>14 avril 2022 au 21 avril 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
        <div className="card-prochaine">
          <div>
            <h3>Session CCP petite enfance ADVF</h3>
            <p>11 avril 2022 au 20 mai 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatesSessions;
