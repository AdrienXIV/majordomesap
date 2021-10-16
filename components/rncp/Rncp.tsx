import React, { useState } from "react";
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import Image from "next/image";     
import majordome from '../../public/images/majordome.jpeg'
import Lottie from "lottie-react";
import menage from '../../animations/menage.json'

const Rncp = () => { 

    const [text1, setText1] = useState(false)
    const [text2, setText2] = useState(false)
    
    const headerCard = <Image className={text1 === false ? 'voir' : 'hidden'} alt="Card" layout='responsive' src={majordome}/>;
    const footerCard = <div>
        <h3 className="section-rncp">ADVF <Button className="btn-color" onClick={() => setText1(text1 === false ? true : false)}>Voir</Button></h3>
        <div className={text1 === false ? 'hidden' : 'voir'}>
            <h5 className="p-title1">Adaptée pour tous</h5>
            <p className="p-text1">
                Le Titre Professionnel d’Assistant De Vie Aux Familles de niveau 3 est délivré par le Ministère du Travail et inscrit au RNCP. Il permet d’accéder aux métiers des services à la personne en apportant une intervention professionnelle à domicile de qualité auprès des personnes assistées.
            </p>
            <p className="p-text1">
            Exercez dans le domaine et pour la cible qui vous convient le mieux.
            Chaque classe est composé d’un groupe réduit afin d’initier au mieux chaque participant. Suivez nos formations en présentiel ou à distance selon les disponibilités et profitez d’un accès exclusif de vos cours sur la plateforme à tout moment. 
            À l’issue de la formation, vous avez la possibilité d’accompagner des personnes via des services tels que l’assistance pour l’entretien du cadre de vie, l’hygiène corporelle, l’alimentation, les déplacements et la prise en charge des enfants de 0 à 3 ans au domicile de leurs parents.
            </p> 
        </div>
    </div>;

    const headerCard2 =  <Image  className={text2 === false ? 'voir' : 'hidden'} alt="Card" layout='responsive' src={majordome}/>;
        
    const footerCard2 = <div>
        <h3 className="section-rncp">MAJORDOMAT <Button className="btn-color" onClick={() => setText2(text2 === false ? true : false)}>Voir</Button></h3>
        <div className={text2 === false ? 'hidden' : 'voir'}>
            <h5 className="p-title1">Adaptée pour tous</h5>
            <p className="p-text1">
            Le Titre Professionnel de Majordome de niveau 3 est délivré par le Ministère du Travail et inscrit au RNCP. Il permet d’accéder aux métiers des services à la personne en apportant une intervention professionnelle à domicile de qualité auprès des personnes.            </p>
            <p className="p-text1">
            Exercez dans le domaine et pour la cible qui vous convient le mieux.
            Avec les modules de Majordomat, vous aurez les aptitudes et les savoirs d’un majordome / gouvernante de maison qui vous permettront de vous situer en tant que véritable professionnel de l’intervention à domicile.
            </p> 
        </div>
    </div>;

    return (
        <>
            <h2 className="text-center title-rncp">Nos Formations RNCP CAP/BAC PRO</h2>
            <div className="grid grid-rncp">
                <div className="col-6 md:col-6 lg:col-3">
                    <Card className="card-rncp effet-rncp" footer={footerCard} header={text1 === false ? headerCard : ''}>
                    </Card>
                </div>
                <div className="col-6 md:col-6 lg:col-3">
                    <Card className="card-rncp effet-rncp" footer={footerCard2} header={text2 === false ? headerCard2 : ''}>
                    </Card>
                </div>
            </div>
            <hr />
            <div className="
            grid grid-rncp">
                <div className="grid grid-rncp card-rncp-menage">
                    <div className="col-6 md:col-6 lg:col-4">
                        <Lottie animationData={menage}/>
                    </div>
                    <div className="col- md:col-6 lg:col-4">
                        <h3 className="title-emplois"><span className="number-rncp">949</span> offres d'emploi pour majordome en 2021</h3>
                        <p className="p-emplois">Source : pôle emploi</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rncp