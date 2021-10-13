import { NextPage } from "next";
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import Image from 'next/image';
import i1 from "../../public/images/1.jpg"


const ImageAccueil: NextPage = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-content-area">
                <h1>Devenez Majordome</h1>
                <h3>Titre Reconnue par l'état et le ministère du travail</h3>
                <a href="#" className="btn">Nous rejoindre</a>
                </div>
            </section>
        </>
    );

};

export default ImageAccueil;
