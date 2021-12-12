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
      content:
        "Assistez à nos séances d’information collective, contactez-nous par téléphone ou remplissez le formulaire un conseiller vous contactera dans l’heure qui suit",
      numero: 1,
    },
    {
      status: "Moyens de financement",
      color: "#3498db",
      content: "Prenez connaissance du financement qui vous est accordé avec notre conseiller",
      numero: 2,
    },
    {
      status: "Test de sélection",
      color: "#f368e0",
      content:
        "Les candidats seront soumis à des tests d'évaluations afin de vérifier leurs acquis et évaluer leurs besoins spécifiques pour la formation",
      numero: 3,
    },
    {
      status: "Formation à la carte",
      color: "#8e44ad",
      content: "Composez votre formation selon vos besoins en choisissant un ou plusieurs modules",
      numero: 4,
    },
    {
      status: "Accès à la formation",
      color: "#006266",
      content: "Profitez de la richesse des cours en présentiel et retrouvez tous vos supports de cours sur la plateforme digitale du centre",
      numero: 5,
    },
    {
      status: "Certification ",
      color: "#e74c3c",
      content:
        "Obtenez vos certificats de compétences professionnelles et constituez votre dossier de passage devant le Jury pour l’obtention du Titre Professionnel ADVF",
      numero: 6,
    },
    {
      status: "Stage obligatoire",
      color: "#2c3e50",
      content: "Mettez en application vos nouvelles connaissances dans le milieu professionnel",
      numero: 7,
    },
    {
      status: "Passage devant le jury",
      color: "#27ae60",
      content: "Démontrez vos compétences et obtenez votre certification professionnelle",
      numero: 8,
    },
    {
      status: "Insertion professionnelle",
      color: "#ffa801",
      content: "Profitez de notre réseau pour entrer en contact avec des employeurs et facilitez votre insertion professionnelle",
      numero: 9,
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
      </div>
    );
  };

  return (
    <section id="une-demarche-simple">
      <h2>Une Démarche Simple en 9 étapes</h2>
      <br />
      <br />
      <div className="bloc-texte">
        <Timeline value={events1} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
      </div>
    </section>
  );
};

export default UneDemarcheSimple;
