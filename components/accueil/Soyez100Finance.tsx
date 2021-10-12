import React from "react"
import type { NextPage } from "next"
import { Button } from "primereact/button"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Soyez100Finance: NextPage = () => {
  return (
    <section id="soyez-100-finance">
      <div>
        <div>
          <h2>Soyez 100% Financé !</h2>
          <br />
          <p>
            Votre formation peut être financée selon votre situation. Vous pouvez selon votre cas, faire une demande de prise en charge de la
            formation auprès des structures dédiées (CPF, Opco, Pôle Emploi ou Mission locale)
          </p>
          <p>Jusqu’à 100% de votre formation peut alors vous être alloué.</p>
          <br />
          <Button label="Je découvre mon éligibilité CPF" />
        </div>
        <div>
          <Carousel showThumbs={false} swipeable emulateTouch className="carousel" interval={3000} autoPlay infiniteLoop>
            <div>
              <img src="/images/CERTIFICATIONS-1-150x150.png" />
            </div>
            <div>
              <img src="/images/certifications-3.png" />
            </div>
            <div>
              <img src="/images/competence-5.png" />
            </div>
            <div>
              <img src="/images/essaie-opco-1-e1629058828980.png" />
            </div>
            <div>
              <img src="/images/certifications-2-bis.png" />
            </div>
            <div>
              <img src="/images/certification-6.png" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default Soyez100Finance
