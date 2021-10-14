import React from "react";
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import Image from "next/image";     
import majordome from '../../public/images/majordome.jpeg'
import Lottie from "lottie-react";
import menage from '../../animations/menage.json'

const Rncp = () => {
    
    const headerCard = <Image alt="Card" layout='responsive' src={majordome}/>;
    const footerCard = <div>
        <h3>FORMATION MAJORDOMAT</h3>
        <p  className="p-m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo illum fuga, iure, itaque laudantium labore quos maxime sapiente exercitationem ad similique doloremque nihil! Rerum cumque natus perspiciatis ipsum deleniti quos.</p>
        <Button label="Cancel" icon="pi pi-times" className="p-button-rncp"/>
    </div>;

    const headerCard2 = <Image alt="Card" layout='responsive' src={majordome}/>;
    const footerCard2 = <div className="col-md-3">
        <h3>FORMATION ADVF</h3>
        <p className="p-m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo illum fuga, iure, itaque laudantium labore quos maxime sapiente exercitationem ad similique doloremque nihil! Rerum cumque natus perspiciatis ipsum deleniti quos.</p>
        <Button label="Cancel" icon="pi pi-times" className="p-button-rncp"/>
    </div>;

    return (
        <> 
            <h2>Nos Foramtions RNCP CAP/BAC PRO</h2>
            <div className="grid grid-rncp">
                <div className="lg:col-3 xl:col-3 md:col-6 xs:col-12">
                    <Card className="card-rncp" footer={footerCard} header={headerCard}>
                    </Card>
                </div>
                <div className="lg:col-3 xl:col-3 md:col-6 xs:col-12">
                    <h3 className="text-center title-rncp">Excellence et Qualités</h3>
                    <Lottie loop={true} autoPlay={true} animationData={menage} />
                </div>
                <div className="lg:col-3 xl:col-3 md:col-6 xs:col-12">
                    <Card className="card-rncp" footer={footerCard2} header={headerCard2}>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Rncp