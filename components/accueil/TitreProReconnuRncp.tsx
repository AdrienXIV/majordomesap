import React, { useEffect, useState } from "react"
import type { NextPage } from "next"
import Image from "next/image"

const TitreProReconnuRncp: NextPage = () => {
  const [imagePath, setImagePath] = useState(1)

  useEffect(() => {
    let count = 1
    const interval = setInterval(() => {
      if (count === 5) {
        count = 1
        return setImagePath(1)
      }
      count++
      setImagePath(count)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section id="titre-pro-reconnu-rncp">
      <div className="p-grid bloc-texte">
        <div className="p-col-8">
          <p>
            Notre centre vous propose des formations de Majordomat et d’Assistance De Vie aux Familles (ADVF), des métiers du service à la personne
            consistant à intervenir auprès des personnes ayant besoin d’assistance dans leurs activités quotidiennes.
          </p>
          <p>
            Nous proposons des modules de formation certifiants permettant de valoriser vos compétences métier et ainsi d’
            <b>obtenir un titre professionnel reconnu de niveau 3 inscrit au RNCP.</b>
          </p>
        </div>
        <div className="p-col">
          <Image
            src={`/images/${imagePath}-300x300.png`}
            alt="Obtenir un titre professionnel reconnu de niveau 3 inscrit au RNCP"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="p-grid bloc-icons">
        <div className="p-col">
          <i className="fas fa-wheelchair"></i>
          <div>Accessible pour tous</div>
        </div>
        <div className="p-col">
          <i className="fas fa-euro-sign"></i>
          <div>Facilité de financement</div>
        </div>
        <div className="p-col">
          <i className="fas fa-graduation-cap"></i>
          <div>Reconnaissance nationale</div>
        </div>
        <div className="p-col">
          <i className="fas fa-handshake"></i>
          <div>Ouverture professionnelle</div>
        </div>
        <div className="p-col">
          <i className="far fa-comments"></i>
          <div>Equipe professionnelle et à l'écoute</div>
        </div>
        <div className="p-col">
          <i className="fas fa-magic"></i>
          <div>Formations enrichissantes et personnalisables</div>
        </div>
      </div>
    </section>
  )
}

export default TitreProReconnuRncp
