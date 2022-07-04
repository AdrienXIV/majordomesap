import { Button } from "primereact/button";
import React from "react";
import { useRouter } from "next/router";

const dates = [
  {
    title: "Etablir une relation pro lors d'une prestation d'entretien",
    subtitle: "28 septembre 2022 au 30 septembre 2022",
    isExam: false,
  },
  {
    title: "Prévenir les risques à domicile",
    subtitle: "3 octobre 2022",
    isExam: false,
  },
  {
    title: "Les bons gestes au quotidien",
    subtitle: "4 octobre 2022",
    isExam: false,
  },
  {
    title: "Entretien du logement : fondamentaux et organisation",
    subtitle: "5 octobre 2022 au 7 octobre 2022",
    isExam: false,
  },
  {
    title: "Sols et surfaces",
    subtitle: "10 octobre 2022",
    isExam: false,
  },
  {
    title: "Entretien des appareils et gestions des denrées alimentaires",
    subtitle: "11 octobre 2022",
    isExam: false,
  },
  {
    title: "Focus technique : la godille, le ménage écologique",
    subtitle: "12 octobre 2022 au 14 octobre 2022",
    isExam: false,
  },
  {
    title: "Les matières textiles, trier, détacher, laver",
    subtitle: "17 octobre 2022",
    isExam: false,
  },
  {
    title: "Séchage, repassage, pliage",
    subtitle: "18 octobre 2022",
    isExam: false,
  },
  {
    title: "Rangement, couture et technique avancées",
    subtitle: "19 octobre 2022 au 21 octobre 2022",
    isExam: false,
  },
  {
    title: "E1 : examen final",
    subtitle: "26 octobre 2022",
    isExam: true,
  },
  {
    title: "Créer la relation avec la PA et son entourage",
    subtitle: "7 novembre 2022",
    isExam: false,
  },
  {
    title: "Vieillissement, dépendance, connaissance des publics",
    subtitle: "8 novembre 2022",
    isExam: false,
  },

  {
    title: "Hand, notion générale et accompagnement",
    subtitle: "9 novembre 2022 au 10 novembre 2022",
    isExam: false,
  },
  {
    title: "Favoriser et maintenir l'autonomie des personnes",
    subtitle: "14 novembre 2022",
    isExam: false,
  },
  {
    title: "Aménager et organiser le logement pour favoriser l'autonomie",
    subtitle: "15 novembre 2022",
    isExam: false,
  },
  {
    title: "Focus technique : toilette, habillage et déplacement",
    subtitle: "16 novembre 2022 au 18 novembre 2022",
    isExam: false,
  },
  {
    title: "Assister la personne à faire ses courses",
    subtitle: "21 novembre 2022",
    isExam: false,
  },
  {
    title: "Prévenir les risques dans le logement, cuisine, salle de bain",
    subtitle: "22 novembre 2022",
    isExam: false,
  },
  {
    title: "Focus technique : Toilette, habillage et déplacement",
    subtitle: "23 novembre 2022 au 25 novembre 2022",
    isExam: false,
  },
  {
    title: "Assister la pers dans la préparation des repas",
    subtitle: "28 novembre 2022",
    isExam: false,
  },
  {
    title: "Accompagner dans la prise des repas",
    subtitle: "29 novembre 2022",
    isExam: false,
  },
  {
    title: "Bonne posture et distance dans la relation",
    subtitle: "30 novembre 2022 au 2 décembre 2022",
    isExam: false,
  },
  {
    title: "Repérer, alerter, signes d'inquiétude et création de relais",
    subtitle: "5 décembre 2022",
    isExam: false,
  },
  {
    title: "SST1",
    subtitle: "6 décembre 2022",
    isExam: false,
  },
  {
    title: "SST2",
    subtitle: "7 décembre 2022 au 9 décembre 2022",
    isExam: false,
  },
  {
    title: "DP 2 et Préparation jury",
    subtitle: "12 décembre 2022 au 13 décembre 2022",
    isExam: false,
  },
  {
    title: "E2 : examen final",
    subtitle: "14 décembre 2022",
    isExam: true,
  },
];

const DatesSessions = () => {
  const router = useRouter();
  return (
    <section id="dates-sessions">
      <h2>Dates de nos prochaines sessions (ADVF et Majordomat)</h2>
      <p>
        La formation majordomat, vous permet d'obtenir les bases et la polyvalence d'un majordome. Lors de cette formation, vous acquerrez une vision
        globale du métier de majordome et des compétences indispensables pour y exercer dans les métiers du luxe. Vous apprendrez les savoir-être, le
        rôle du majordome et ses relations avec le personnel.
      </p>
      <p>
        La formation d'Assistant(e) de Vie aux Familles (advf) s'adresse à toute personne souhaitant se former pour exercer ce métier. En effet, étant
        donné que le secteur de l'aide à domicile est en perpétuel essor, les emplois dans ce domaine ne manquent pas.
      </p>
      <div className="bloc-dates">
        {dates.map((val, i) => (
          <div className={val.isExam ? "card-prochaine exam" : "card-prochaine"} key={i.toString()}>
            <div>
              <h3>{val.title}</h3>
              <p>{val.subtitle}</p>
            </div>
            {/* <div className="preinscription">
              <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
            </div> */}
          </div>
        ))}
        {/* <div className="card-prochaine">
          <div>
            <h3>Module Etiquette</h3>
            <p>1 avril 2022 au 5 avril 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
        <div className="card-prochaine">
          <div>
            <h3>Module Art de la table</h3>
            <p>6 avril 2022 au 8 avril 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
        <div className="card-prochaine">
          <div>
            <h3>Module Oenologie (Science et connaissance des vins)</h3>
            <p>11 avril 2022 au 12 avril 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
        <div className="card-prochaine">
          <div>
            <h3>Module Gastronomie</h3>
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
        </div> */}
      </div>
    </section>
  );
};

export default DatesSessions;
