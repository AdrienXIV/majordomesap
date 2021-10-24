import React from "react";
import type { NextPage } from "next";
import Image from "next/image";

const IlsNousOntFaitConfiances: NextPage = () => {
  return (
    <section id="ils-nous-ont-fait-confiances">
      <h2>Ils nous ont fait confiances !</h2>
      <div className="bloc-card">
        <div>
          <div className="avatar">
            <Image alt="avatar" src="/images/avatar1.png" width={150} height={100} quality={50} />
            <legend>
              Karima A. <br />
              Formation ADVF
            </legend>
          </div>
          <p>
            Toutes mes attentes furent comblées. <br />
            Merci à l'équipe Majordomat Formation Sap pour leur professionnalisme. C'est d'une telle formation dont j'avais besoin.
          </p>
          <div className="card-footer">
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
          </div>
        </div>

        <div>
          <div className="avatar">
            <Image alt="avatar" src="/images/avatar1.png" width={150} height={100} quality={50} />
            <legend>
              Sara A. <br />
              Formation ADVF
            </legend>
          </div>
          <p>Je recommande ce centre ! Équipe très professionnelle et à l'écoute. J'occupe aujourd'hui le poste qui me correspond !.</p>
          <div className="card-footer">
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
          </div>
        </div>

        <div>
          <div className="avatar">
            <Image alt="avatar" src="/images/avatar1.png" width={150} height={100} quality={50} />
            <legend>
              Guillaume L. <br />
              Formation Majordomat
            </legend>
          </div>
          <p>J'ai été impressionné par la qualité du service et de la formation !</p>
          <div className="card-footer">
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IlsNousOntFaitConfiances;
