import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { myLoader } from "@utils/loader";

const IlsNousOntFaitConfiances: NextPage = () => {
  return (
    <section id="ils-nous-ont-fait-confiances">
      <h2>Ils nous ont fait confiances !</h2>
      <div className="bloc-card">
        <div>
          <div className="avatar">
            <Image loader={myLoader} alt="avatar" src="/images/avatar2.png" width={150} height={150} quality={50} />
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
            <Image loader={myLoader} alt="avatar" src="/images/avatar3.png" width={150} height={150} quality={50} />
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
            <Image loader={myLoader} alt="avatar" src="/images/avatar1.png" width={150} height={150} quality={50} />
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
    </section>
  );
};

export default IlsNousOntFaitConfiances;
