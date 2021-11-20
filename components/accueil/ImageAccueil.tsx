import { NextPage } from "next";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProgressSpinner } from "primereact/progressspinner";
import { myLoader } from "@utils/loader";

const ImageAccueil: NextPage = () => {
  const [image, setImage] = useState("/images/1.jpg");
  const [className, setClassName] = useState("shadow-black");

  useEffect(() => {
    let random = Math.floor(Math.random() * 5);
    // 0 n'existe pas dans les images
    if (random === 0) random = 1;

    if (random === 1) setClassName("shadow-white");

    // maj de l'image au hasard
    setImage(`/images/${random}.jpg`);
  }, []);

  return (
    <section className="hero">
      <Suspense fallback={<ProgressSpinner />}>
        <Image loader={myLoader} alt="image aléatoire" src={image} quality={80} layout="fill" objectFit="cover" />
      </Suspense>
      <div className="hero-content-area">
        <h1 className={className}>
          Devenez ADVF, <br />
          Titre Professionnel de niveau 3 inscrit au RNCP.
        </h1>

        <Link href="/#contact" passHref>
          <a className="btn">Nous rejoindre</a>
        </Link>
      </div>
    </section>
  );
};

export default ImageAccueil;
