
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



const Contact = () => {
    const carte = <MapContainer className="container-map" center={[48.82991027832031, 2.264953136444092]} zoom={15} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
                            id='mapbox/streets-v11'                      
                            accessToken='pk.eyJ1IjoiYm9zc2VheiIsImEiOiJjanZkZnk3eGYwMmoyNGVvdWFhMGhld2Y1In0.CuJFWuRK3wsuQ9e77S1Lww'
                        />
                        <Marker position={[48.82991027832031, 2.264953136444092]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>

    const formulaire = <div className="grid block-contact-header">
        <h1 className="col-12 md:col-12 lg:col-12 block-contact-title">Formulaire de contact</h1>
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