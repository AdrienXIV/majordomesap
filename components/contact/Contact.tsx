import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import Lottie from "lottie-react";
import Ecole from "@animations/ecole.json";
import { Toast } from "primereact/toast";
import axios from "axios";
import { isExisted } from "@utils/validators";
import { InputMask } from "primereact/inputmask";
import animationEmail from "@animations/send-email.json";

const Contact = () => {
  const toast = useRef(null);
  const [state, setState] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    message: "",
  });
  const [contactSuccess, setContactSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    toast.current.clear();

    //
    // Vérification des champs
    //
    const errors = [] as string[];
    if (!isExisted(state.nom)) errors.push("Champ nom requis");
    if (!isExisted(state.prenom)) errors.push("Champ prénom requis");
    if (!isExisted(state.email)) errors.push("Champ email requis");
    if (!isExisted(state.tel)) errors.push("Champ message requis");
    if (!isExisted(state.message)) errors.push("Champ message requis");

    // si y'a des erreurs
    if (errors.length > 0) {
      errors.map(err => {
        toast.current.show({ severity: "error", summary: "Erreur", detail: err, sticky: true });
      });
      return;
    }

    //
    // Requête
    //
    try {
      setLoading(true);
      const { data }: { data: { message: string } } = await axios.post("/api/contact", state);
      setContactSuccess(true);
      setState({
        email: "",
        nom: "",
        prenom: "",
        message: "",
        tel: "",
      });

      toast.current.show({ severity: "success", summary: "Suucès", detail: data.message, life: 2000 });
    } catch (error) {
      Array.isArray(error?.response?.data)
        ? error.response.data.map(err => {
            toast.current.show({ severity: "error", summary: "Erreur", detail: err, sticky: true });
          })
        : toast.current.show({ severity: "error", summary: "Erreur", detail: error?.response?.data?.error, sticky: true });
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setState(prev => ({ ...prev, [name]: value }));
  };

  const carte = (
    <MapContainer className="container-map" center={[48.829304, 2.2640404]} zoom={17} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
        id="mapbox/streets-v11"
        accessToken="pk.eyJ1IjoiYm9zc2VheiIsImEiOiJjanZkZnk3eGYwMmoyNGVvdWFhMGhld2Y1In0.CuJFWuRK3wsuQ9e77S1Lww"
      />
      <Marker
        icon={L.divIcon({
          iconSize: [1, 1],
          html: '<i class="fas fa-school size-school"></i>',
        })}
        position={[48.829304, 2.2640404]}
      >
        <Popup onOpen={() => true} position={[48.829304, 2.2640404]}>
          <h4 className="title-pop-up">Votre centre de formation</h4>
          <Lottie width="100" animationData={Ecole} />
          <strong className="span-pop-up">
            <br /> A 200 mètres du RER C{" "}
          </strong>
          <strong className="span-pop-up">
            <br /> A 200 mètres du TRAM
          </strong>
          <strong className="span-pop-up">
            <br /> A 20 mètres des bus 260, 323
          </strong>
        </Popup>
        <Circle color="red" center={[48.829304, 2.2640404]} radius={150} />
      </Marker>
    </MapContainer>
  );

  const formulaire = (
    <div id="contact" className="grid block-contact-header">
      <h4 className="col-12 md:col-12 lg:col-12 block-contact-title">Formulaire de contact</h4>
      <div className="col-12 md:col-6 lg:col-6 block-contact">
        <InputText
          name="prenom"
          className="col-12 form-input-size"
          value={state.prenom}
          required
          placeholder="Votre prenom"
          type="text"
          onChange={onChange}
        />
      </div>
      <div className="col-12 md:col-6 lg:col-6 block-contact">
        <InputText name="nom" className="col-12 form-input-size" value={state.nom} required placeholder="Votre nom" type="text" onChange={onChange} />
      </div>
      <div className="col-12 md:col-6 lg:col-6 block-contact">
        <InputText
          name="email"
          className="col-12 form-input-size"
          value={state.email}
          required
          placeholder="Votre email"
          type="email"
          onChange={onChange}
        />
      </div>
      <div className="col-12 md:col-6 lg:col-6 block-contact">
        <InputMask
          mask="9999999999"
          name="tel"
          value={state.tel}
          className="col-12 form-input-size"
          required
          placeholder="Votre numéro de téléphone"
          type="phone"
          onChange={e => setState(prev => ({ ...prev, tel: e.value }))}
        />
      </div>
      <div className="col-12 md:col-12 lg:col-12 block-contact">
        <InputTextarea
          value={state.message}
          name="message"
          className="col-12 form-texterea-size"
          required
          placeholder="Un message ?"
          onChange={onChange}
        />
      </div>
      <div className="col-12 md:col-12 lg:col-12 block-contact">
        <Button loading={loading} className="col-4 btn-valider-form" label={loading ? "" : "valider"} onClick={onSubmit} />
      </div>
    </div>
  );

  return (
    <div className="grid">
      <Toast ref={toast} position="bottom-right" />
      <div className="grid grid-rncp">
        <div className="col-12 md:col-6 lg:col-6">
          {contactSuccess ? (
            <Lottie
              alt="Animation indiquant la bonne récéption du courriel"
              animationData={animationEmail}
              autoPlay
              loop={false}
              style={{ width: 100, margin: "0 auto" }}
            />
          ) : (
            formulaire
          )}
        </div>
        <div className="col-12 md:col-6 lg:col-6 ">{carte}</div>
      </div>
    </div>
  );
};

export default Contact;
