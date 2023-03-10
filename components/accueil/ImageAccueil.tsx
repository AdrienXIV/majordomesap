import { NextPage } from "next";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProgressSpinner } from "primereact/progressspinner";

const H1_CONTENUS = [
  {
    texte: () => <>Obtenez votre certification assitant (e) de vie aux familles (advf) 100% financée</>,
    imgPath: "/images/4.jpg",
  },
  {
    texte: () => <>Formation Majordome par excellence</>,
    imgPath: "/images/1.jpg",
  },
  {
    texte: () => <>Formation Assistant de vie aux familles (reconnue RNCP de niveau 3)</>,
    imgPath: "/images/5.jpg",
  },
];
const ImageAccueil: NextPage = () => {
  const [image, setImage] = useState(H1_CONTENUS[0].imgPath);
  const [texteH1, setTexteH1] = useState(H1_CONTENUS[0].texte());
  const [className, setClassName] = useState("shadow-black");

  useEffect(() => {
    let random = Math.floor(Math.random() * 3);

    if (random === 1) setClassName("shadow-white");

    // maj de l'image au hasard
    setImage(H1_CONTENUS[random].imgPath);
    setTexteH1(H1_CONTENUS[random].texte());
  }, []);

  return (
    <section className="hero">
      <Suspense fallback={<ProgressSpinner />}>
        <Image alt="image aléatoire" src={image} quality={80} layout="fill" objectFit="cover" />
      </Suspense>
      <div className="hero-content-area">
        <h1 className={className}>{texteH1}</h1>
        {/* <p className="text-bold">Informations collective le 5 septembre 2022 à 14 heure dans nos locaux </p> */}

        <Link href="/#contact" passHref>
          <a className="btn">Nous rejoindre</a>
        </Link>
      </div>
    </section>
  );
};

export default ImageAccueil;
