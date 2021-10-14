import React from "react";
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import Image from "next/image";     
import majordome from '../../public/images/majordome.jpeg'

const Rncp = () => {
    
    const headerCard = <Image alt="Card" layout='intrinsic' src={majordome}/>;
    const footerCard = <div>
        <h3>FORMATION MAJORDOMAT</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo illum fuga, iure, itaque laudantium labore quos maxime sapiente exercitationem ad similique doloremque nihil! Rerum cumque natus perspiciatis ipsum deleniti quos.</p>
        <Button label="Cancel" icon="pi pi-times" className="p-button-danger"/>
    </div>;

    const headerCard2 = <Image alt="Card" layout='intrinsic' src={majordome}/>;
    const footerCard2 = <div className="col-md-3">
        <h3>FORMATION ADVF</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo illum fuga, iure, itaque laudantium labore quos maxime sapiente exercitationem ad similique doloremque nihil! Rerum cumque natus perspiciatis ipsum deleniti quos.</p>
        <Button label="Cancel" icon="pi pi-times" className="p-button-danger"/>
    </div>;

    return (
        <> 
            <div className="grid grid-nogutter">
                <div className="col-md-3 col-xs-12">
                    <Card footer={footerCard} header={headerCard}>
                    </Card>
                </div>
                <div className="col-md-3 col-xs-12">
                    <Card footer={footerCard2} header={headerCard2}>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Rncp