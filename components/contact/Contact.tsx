
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import L from 'leaflet';
import Lottie from 'lottie-react';
import Ecole from '@animations/ecole.json';




const Contact = () => {

    const carte = <MapContainer className="container-map" center={[48.829304, 2.2640404]} zoom={17} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
                            id='mapbox/streets-v11'                      
                            accessToken='pk.eyJ1IjoiYm9zc2VheiIsImEiOiJjanZkZnk3eGYwMmoyNGVvdWFhMGhld2Y1In0.CuJFWuRK3wsuQ9e77S1Lww'
                        />
                        <Marker 
                                icon={L.divIcon({
                                    iconSize: [1,1],
                                    html: '<i class="fas fa-school size-school"></i>'
                                })}
                                position={[48.829304, 2.2640404]}>
                                <Popup 
                                    onOpen={() => true}
                                    position={[48.829304, 2.2640404]}
                                    >
                                    
                                    <h4 className="title-pop-up">Votre centre de formation</h4>
                                    <Lottie width="100" animationData={Ecole}/>
                                    <strong className="span-pop-up"><br /> A 200 mètres du RER C </strong>
                                    <strong className="span-pop-up"><br /> A 200 mètres du TRAM</strong>
                                    <strong className="span-pop-up"><br /> A 20 mètres des bus 260, 323</strong>
                                </Popup>
                                <Circle color="red" center={[48.829304, 2.2640404]} radius={150} />
                        </Marker>
                    </MapContainer>

    const formulaire = <div className="grid block-contact-header">
        <h4 className="col-12 md:col-12 lg:col-12 block-contact-title">Formulaire de contact</h4>
        <div className="col-12 md:col-6 lg:col-6 block-contact">
            <InputText className="col-12 form-input-size" placeholder="Votre nom" type="text"/>
        </div>
        <div className="col-12 md:col-6 lg:col-6 block-contact">
            <InputText className="col-12 form-input-size" placeholder="Votre prenom" type="text"/>
        </div>
        <div className="col-12 md:col-6 lg:col-6 block-contact">
            <InputText className="col-12 form-input-size" placeholder="Votre email" type="email"/>
        </div>
        <div className="col-12 md:col-6 lg:col-6 block-contact">
            <InputText className="col-12 form-input-size" placeholder="Votre numéro de téléphone" type="phone"/>
        </div>
        <div className="col-12 md:col-12 lg:col-12 block-contact">
            <InputTextarea className="col-12 form-texterea-size" placeholder="Un message ?" />
        </div>
        <div className="col-12 md:col-12 lg:col-12 block-contact">
            <Button className="col-4 btn-valider-form" label="valider"/>
        </div>
    </div>


    return (
        <div className="grid">
            <div className="grid grid-rncp">
                <div className="col-12 md:col-6 lg:col-6">
                    {formulaire}
                </div>
                <div className="col-12 md:col-6 lg:col-6 ">
                        {carte}
                </div>
            </div>
        </div>
    )
}


export default Contact