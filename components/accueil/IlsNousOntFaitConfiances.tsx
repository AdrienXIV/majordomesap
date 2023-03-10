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
            <img className="avatar-confiance" alt="avatar-femme" src="/images/avatar2.png" />
            <legend>
              Karima A. <br />
              Formation Majordomat
            </legend>
          </div>
          <div>
            <p>
              Toutes mes attentes furent comblées. <br />
              Merci à l'équipe Majordomat Formation SAP pour leur professionnalisme. C'est d'une telle formation dont j'avais besoin.
            </p>
          </div>
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
            <img className="avatar-confiance" alt="avatar-femme" src="/images/avatar3.png" />
            <legend>
              Sara A. <br />
              Formation ADVF
            </legend>
          </div>
          <div>
            <p>Je recommande ce centre ! Équipe très professionnelle et à l'écoute. J'occupe aujourd'hui le poste qui me correspond !</p>
          </div>
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
            <img className="avatar-confiance" alt="avatar-homme" src="/images/avatar1.png" />
            <legend>
              Guillaume L. <br />
              Formation Majordomat
            </legend>
          </div>
          <div>
            <p>J'ai été impressionné par la qualité du service et de la formation !</p>
          </div>
          <div className="card-footer">
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
            <i className="pi pi-star"></i>
          </div>
        </div>
      </div>

      <div className="satisfaction">90% de satisfaction Majordomat !</div>
    </section>
  );
};

export default IlsNousOntFaitConfiances;
