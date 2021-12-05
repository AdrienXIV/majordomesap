import { NextPage } from "next";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProgressSpinner } from "primereact/progressspinner";
import { myLoader } from "@utils/loader";

const H1_CONTENUS = [
  {
    texte: () => (
      <>
        Obtenez votre certification auxiliaire de vie aux familles (advf) 100% financée<a href="#soyez-100-finance">*</a>
      </>
    ),
    imgPath: "/images/4.jpg",
  },
  {
    texte: () => <>Formation Majordome par excellence</>,
    imgPath: "/images/1.jpg",
  },
  {
    texte: () => <>Formation auxiliaire de vie aux familles (advf) certifiée de niveau 3</>,
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
        <Image loader={myLoader} alt="image aléatoire" src={image} quality={80} layout="fill" objectFit="cover" />
      </Suspense>
      <div className="hero-content-area">
        <h1 className={className}>{texteH1}</h1>

        <Link href="/#contact" passHref>
          <a className="btn">Nous rejoindre</a>
        </Link>
      </div>
    </section>
  );
};

export default ImageAccueil;
