import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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
      <Image alt="image aléatoire" src={image} quality={100} layout="fill" objectFit="cover" />
      <div className="hero-content-area">
        <h1>Devenez Majordome</h1>
        <h3>Titre Reconnue par l'état et le ministère du travail</h3>
        <a href="#" className="btn">
          Nous rejoindre
        </a>
      </div>
    </section>
  );
};

export default ImageAccueil;
