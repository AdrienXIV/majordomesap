import { NextPage } from "next";
import React, { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ProgressSpinner } from "primereact/progressspinner";
import { myLoader } from "@utils/loader";

const ImageAccueil: NextPage = () => {
  const [image, setImage] = useState("/images/1.jpg");

  useEffect(() => {
    let url = "";
    let random = Math.floor(Math.random() * 5);
    // 0 n'existe pas dans les images
    if (random === 0) random = 1;

    // maj de l'image au hasard
    setImage(`/images/${random}.jpg`);
  }, []);

  return (
    <section className="hero">
      <Suspense fallback={<ProgressSpinner />}>
        <Image loader={myLoader} alt="image aléatoire" src={image} quality={80} layout="fill" objectFit="cover" />
      </Suspense>
      <div className="hero-content-area">
        <h1>Devenez Majordome</h1>
        <h3>Titre Reconnue par l'état et le ministère du travail</h3>
        <Link href="/#contact" passHref>
          <a className="btn">Nous rejoindre</a>
        </Link>
      </div>
    </section>
  );
};

export default ImageAccueil;
