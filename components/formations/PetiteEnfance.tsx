import React, { useEffect, useState } from "react";
import type { NextPage } from "next";

const PetiteEnfance: NextPage = () => {
  const [layout, setLayout] = useState("horizontal");

  useEffect(() => {
    if (typeof window) {
      window.innerWidth < 959 ? setLayout("vertical") : setLayout("horizontal");
    }
  }, []);

  return (
    <>
      <section id="formation-majordomat">
        <h2 style={{ textAlign: "center", padding: "0 25px" }}>CAP Petite Enfance : Développez votre passion pour le bien-être des enfants</h2>
        <div className="bloc-texte">
          <p>
            Bienvenue sur notre page dédiée à la formation CAP Petite Enfance, une étape essentielle pour tous ceux qui souhaitent travailler dans le
            domaine de la petite enfance. Si vous êtes passionné par le développement et le bien-être des enfants, cette formation est faite pour
            vous.
          </p>
          <p>
            Le CAP Petite Enfance est un diplôme reconnu qui vous ouvrira les portes d'une carrière enrichissante et valorisante. Il vous permettra
            d'acquérir les connaissances et les compétences nécessaires pour prendre soin des enfants de 0 à 6 ans, que ce soit en milieu familial ou
            en structure d'accueil collectif.
          </p>
          <p>
            Notre programme de formation est conçu pour vous offrir une solide base théorique ainsi que des compétences pratiques indispensables pour
            travailler efficacement avec les jeunes enfants. Vous apprendrez à comprendre et à répondre à leurs besoins fondamentaux, à favoriser leur
            épanouissement et à assurer leur sécurité.
          </p>
          <p>
            Pendant votre formation, vous explorerez des domaines clés tels que le développement de l'enfant, la nutrition, l'hygiène, la prévention
            des accidents, la communication avec les parents et l'animation d'activités ludiques et éducatives. Vous serez encadré par des
            professionnels expérimentés qui vous guideront et vous soutiendront tout au long de votre parcours.
          </p>
          <p>
            Le CAP Petite Enfance offre également de nombreuses perspectives professionnelles. Une fois diplômé, vous pourrez travailler dans des
            crèches, des garderies, des écoles maternelles, des centres de loisirs ou même devenir assistant maternel à votre compte. Vous pourrez
            accompagner les enfants dans leur développement, les aider à acquérir de nouvelles compétences et contribuer à leur éveil.
          </p>
          <p>
            Nous mettons tout en œuvre pour vous offrir une formation de qualité, adaptée aux exigences du secteur de la petite enfance. Nos
            formateurs passionnés et nos infrastructures modernes vous permettront d'apprendre dans les meilleures conditions.
          </p>
          <p>
            N'attendez plus pour concrétiser votre passion pour les enfants et faire de votre vocation une réalité. Inscrivez-vous dès maintenant à
            notre formation CAP Petite Enfance et ouvrez les portes d'une carrière épanouissante dans le domaine de la petite enfance.
          </p>
          <p>
            Contactez-nous aujourd'hui pour plus d'informations ou pour vous inscrire. Nous serons ravis de répondre à toutes vos questions et de vous
            accompagner dans votre parcours vers la réussite.
          </p>
          <p>
            La formation se compose de trois pôles d’activités permettant l’acquisition de 13 compétences et de 3 compétences dites transversales. Ces
            compétences seront déclinées tout au long de la formation dans les trois pôles car elles sont le socle du métier d’assistant de vie aux
            familles.
          </p>
        </div>
      </section>
      <section>
        <table
          className="formation-petite-enfance-table"
          style={{ width: "75%", borderRadius: 5, color: "black", margin: "15px 0 75px" }}
          cellPadding="10"
        >
          <tbody>
            <tr>
              <td style={{ width: 300, textAlign: "center" }}>
                <span style={{ fontSize: 20 }}>
                  <b>CAP Petite Enfance</b>
                </span>
              </td>
              <td style={{ width: 300, textAlign: "center" }}>
                <span style={{ fontSize: 20 }}>
                  <b>CAP Accompagnement Éducatif Petite Enfance – AEPE</b>
                </span>
              </td>
            </tr>
            <tr>
              <td style={{ width: 611 }} colSpan={2}>
                <p style={{ textAlign: "center" }}>
                  <strong>Les épreuves professionnelles</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td style={{ width: 311 }}>
                <a>EP1 : Prise en charge de l’enfant à domicile</a>
                <p>Épreuve écrite et pratique de 2h15</p>
              </td>
              <td style={{ width: 300 }}>
                <a>EP1 : accompagner le développement du jeune enfant</a> + PSE (Prévention, Santé, Environnement)
                <p>Oral de 25 minutes (coef 7) + 1 heure PSE (coef 1)</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: 311 }}>
                <a>EP2 : Accompagnement éducatif de l’enfant</a> et PSE (Prévention, Santé, Environnement)
                <p>Oral 30 min + écrit PSE d’1h</p>
              </td>
              <td style={{ width: 300 }}>
                EP2 : Exercer son activité en accueil collectif
                <p>Épreuve écrite d’1h30 (coef 4)</p>
              </td>
            </tr>
            <tr>
              <td style={{ width: 311 }}>
                <a>EP3 : Techniques de services à l’usager</a>
                <p>Ecrit et pratique d’1H30</p>
              </td>
              <td style={{ width: 300 }}>
                EP3 : Exercer son activité en accueil individuel
                <p>Épreuve orale : 1h30 de préparation + 25 mn d’oral (coef 4)</p>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }} colSpan={2}>
                <strong>Les épreuves générales</strong>
              </td>
            </tr>
            <tr>
              <td style={{ width: 311 }}>EG1 : Français et Histoire-géographie</td>
              <td style={{ width: 300 }}>EG1 : Français et Histoire-géographie</td>
            </tr>
            <tr>
              <td style={{ width: 311 }}>EG2 : Mathématiques et Sciences</td>
              <td style={{ width: 300 }}>EG2 : Mathématiques – Sciences physiques et chimiques</td>
            </tr>
            <tr>
              <td style={{ width: 311 }}>EG3 : Education physique et sportive (optionnelle)</td>
              <td style={{ width: 300 }}>EG3 : Education physique et sportive (optionnelle)</td>
            </tr>
            <tr>
              <td style={{ width: 311 }}>–</td>
              <td style={{ width: 300 }}>
                Épreuve <strong>facultative</strong> de langue vivante
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "center" }} colSpan={2}>
                <strong>Période de formation en milieu professionnel sur laquelle s’appuient les épreuves</strong>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", width: 311 }}>12 semaines de stage dont 3 semaines consécutives</td>
              <td style={{ width: 311 }}>
                <p style={{ textAlign: "left" }}>
                  <strong>16 semaines</strong> de <a>stage CAP Accompagnant éducatif Petite Enfance</a> dont 2×4 semaines minimum l’année de passage
                  de l’examen.
                </p>
                <p style={{ textAlign: "left" }}>A réaliser en 3 périodes distinctes si possible en individuel et collectif</p>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default PetiteEnfance;
