import React from "react"
import type { NextPage } from "next"

const TitreProReconnuRncp: NextPage = () => {
  return (
    <section id="titre-pro-reconnu-rncp">
      <h2>Obtenez votre certification professionnelle</h2>

      <div className="grid bloc-icons">
        <div className="col">
          <i className="fas fa-wheelchair"></i>
          <div>Accessible pour tous</div>
        </div>
        <div className="col">
          <i className="fas fa-euro-sign"></i>
          <div>Facilité de financement</div>
        </div>
        <div className="col">
          <i className="fas fa-graduation-cap"></i>
          <div>Reconnaissance nationale</div>
        </div>
        <div className="col">
          <i className="fas fa-handshake"></i>
          <div>Ouverture professionnelle</div>
        </div>
        <div className="col">
          <i className="far fa-comments"></i>
          <div>Equipe professionnelle et à l'écoute</div>
        </div>
        <div className="col">
          <i className="fas fa-magic"></i>
          <div>Formations enrichissantes et personnalisables</div>
        </div>
      </div>

      <div className="bloc-texte">
        <p>
          Notre centre vous propose des formations de Majordomat et d’Assistance De Vie aux Familles (ADVF), des métiers du service à la personne
          consistant à intervenir auprès des personnes ayant besoin d’assistance dans leurs activités quotidiennes.
        </p>
        <p>
          Nous proposons des modules de formation certifiants permettant de valoriser vos compétences métier et ainsi d’
          <b>obtenir un titre professionnel reconnu de niveau 3 inscrit au RNCP.</b>
        </p>
      </div>
    </section>
  )
}

export default TitreProReconnuRncp
