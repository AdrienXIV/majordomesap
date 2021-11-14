import React from "react";
import type { NextPage } from "next";
import { Card } from "primereact/card";
import Image from "next/image";
import { Timeline } from "primereact/timeline";

const UneDemarcheSimple: NextPage = () => {
  const events1 = [
    {
      status: "Prise de contact",
      color: "#f1c40f",
      content: "Prenez contact par téléphone ou remplissez le formulaire, un conseiller vous joindra en moins d'1h",
      numero: 1,
    },
    {
      status: "Moyens de financement",
      color: "#3498db",
      content: "Prenez connaissance du financement qui vous est accordé avec notre professionnel",
      numero: 2,
    },
    {
      status: "Accès à la formation",
      color: "#8e44ad",
      content: "Profitez de la richesse des cours afin de devenir un as de l’assistance à domicile",
      numero: 3,
    },
    {
      status: "Module personnalisé",
      color: "#006266",
      content: "Profitez des connaissances de professionnels dans votre module sélectionné",
      numero: 4,
    },
    {
      status: "Mise en relation",
      color: "#e74c3c",
      content: "Grâce à notre réseaux, vous aurez des chances d’élargir et de prendre contact avec des professionnels du métier",
      numero: 5,
    },
    {
      status: "Stage obligatoire",
      color: "#2c3e50",
      content: "Mettez vos connaissances et compétences en pratique sur le mileu professionnel",
      numero: 6,
    },
    {
      status: "Insertion professionnelle",
      color: "#27ae60",
      content: "Grâce à notre réseaux, vous aurez des chances d’élargir et de prendre contact avec des professionnels du métier",
      numero: 7,
    },
  ];

  const customizedMarker = item => {
    return (
      <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
        <span>{item.numero}</span>
      </span>
    );
  };

  const customizedContent = item => {
    return (
      <div className="timeline-step">
        <h3>{item.status}</h3>
        <p style={{ textAlign: item.numero % 2 === 1 ? "start" : "end" }}>{item.content}</p>
        {item.numero === 6 && (
          <p style={{ textAlign: "end" }}>
            <b>Passage à l'examen</b>
          </p>
        )}
      </div>
    );
  };

  return (
    <section id="une-demarche-simple">
      <h2>Une Démarche Simple en 7 étapes</h2>
      <br />
      <br />
      <div className="bloc-texte">
        <Timeline value={events1} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
      </div>
    </section>
  );
};

export default UneDemarcheSimple;
