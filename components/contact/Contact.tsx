import React, { Suspense, useEffect, useRef, useState } from "react";
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
import { Dropdown } from "primereact/dropdown";
import ReCAPTCHA from "react-google-recaptcha";
import { Checkbox } from "primereact/checkbox";

const formations = [
  { name: "ADVF", value: 0 },
  { name: "Majordomat", value: 1 },
  { name: "Réclamation", value: 2 },
  { name: "Autre", value: 3 },
];
const choix = [
  { name: "Être contacté par email", value: 0 },
  { name: "Être contacté par téléphone portable", value: 1 },
  { name: "Être invité à une information collective", value: 2 },
];
const Contact = () => {
  const toast = useRef(null);
  const recaptchaRef = useRef(null);
  const mapRef = useRef(null);

  const [state, setState] = useState({
    nom: "",
    prenom: "",
    email: "",
    tel: "",
    formation: null,
    choix: null,
    captcha: false,
    message: "",
  });
  const [checked, setChecked] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      // suppression de la carte
      mapRef.current?.off();
      mapRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    let good = 0;
    // on incrémente la variable afin de rendre le botuon désactivé ou non si tous les champs sont remplis
    if (!isExisted(state.nom)) good++;
    if (!isExisted(state.prenom)) good++;
    if (!isExisted(state.email)) good++;
    if (!isExisted(state.tel)) good++;
    if (!isExisted(state.formation)) good++;
    if (!isExisted(state.choix)) good++;
    if (!isExisted(state.message)) good++;
    if (!state.captcha) good++;
    if (!checked) good++;

    good > 0 ? setDisable(true) : setDisable(false);
  }, [state]);

  const onSubmit = async () => {
    toast.current.clear();

    // si le bouton est désactivée
    if (disable) {
      toast.current.show({ severity: "error", summary: "Erreur", detail: "Veuillez remplir tous les champs", sticky: true });
      return;
    }

    //
    // Vérification des champs
    //
    const errors = [] as string[];
    if (!isExisted(state.nom)) errors.push("Champ nom requis");
    if (!isExisted(state.prenom)) errors.push("Champ prénom requis");
    if (!isExisted(state.email)) errors.push("Champ email requis");
    if (!isExisted(state.tel)) errors.push("Champ message requis");
    if (!isExisted(state.message)) errors.push("Champ message requis");
    if (!isExisted(state.choix)) errors.push("Champ formation requis");
    if (!isExisted(state.formation)) errors.push("Champ vous préférez requis");
    if (!state.captcha) errors.push("Champ Captcha requis");

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
      const dataToSend = {
        ...state,
        formation: formations.find(f => f.value === state.formation).name,
        choix: choix.find(f => f.value === state.choix).name,
      };
      const { data }: { data: { message: string } } = await axios.post("/api/contact", dataToSend);
      // on remet à 0 le Captcha
      recaptchaRef.current && recaptchaRef.current.props.grecaptcha.reset();

      setContactSuccess(true);
      setState({
        email: "",
        nom: "",
        prenom: "",
        message: "",
        formation: null,
        choix: null,
        captcha: false,
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
      <Suspense fallback={<div />}>
        <TileLayer
          ref={mapRef}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
          id="mapbox/streets-v11"
          accessToken="pk.eyJ1IjoiYm9zc2VheiIsImEiOiJjanZkZnk3eGYwMmoyNGVvdWFhMGhld2Y1In0.CuJFWuRK3wsuQ9e77S1Lww"
        />
      </Suspense>
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
    <div id="contact-formulaire">
      <h4 className="col-12 md:col-12 lg:col-12 block-contact-title">Formulaire de contact </h4>
      <div className="champs-obligatoires">
        <span>*</span> : champs obligatoires
      </div>

      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12 p-md-6">
          <label>
            Prénom <span>*</span>
          </label>
          <InputText name="prenom" value={state.prenom} required placeholder="Votre prenom" type="text" onChange={onChange} />
        </div>
        <div className="p-field p-col-12 p-md-6">
          <label>
            Nom <span>*</span>
          </label>
          <InputText name="nom" value={state.nom} required placeholder="Votre nom" type="text" onChange={onChange} />
        </div>
      </div>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12 p-md-6">
          <label>
            Email <span>*</span>
          </label>
          <InputText name="email" value={state.email} required placeholder="votre.email@gmail.com" type="email" onChange={onChange} />
        </div>
        <div className="p-field p-col-12 p-md-6">
          <label>Téléphone portable</label>
          <InputMask
            mask="9999999999"
            name="tel"
            value={state.tel}
            required
            placeholder="06xxxxxxxx"
            type="phone"
            onChange={e => setState(prev => ({ ...prev, tel: e.value }))}
          />
        </div>
      </div>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12 p-md-6">
          <label>
            Sélectionnez une formation <span>*</span>
          </label>
          <Dropdown
            optionLabel="name"
            value={state.formation}
            options={formations}
            onChange={e => setState(prev => ({ ...prev, formation: e.value }))}
          />
        </div>
        <div className="p-field p-col-12 p-md-6">
          <label>
            Vous préférez ... <span>*</span>
          </label>
          <Dropdown optionLabel="name" value={state.choix} options={choix} onChange={e => setState(prev => ({ ...prev, choix: e.value }))} />
        </div>
      </div>

      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12">
          <label>
            Un message ? <span>*</span>
          </label>
          <InputTextarea value={state.message} name="message" required rows={5} placeholder="Votre message ..." onChange={onChange} />
        </div>
      </div>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA}
            onChange={e => {
              setState(prev => ({ ...prev, captcha: true }));
            }}
          />
        </div>
      </div>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12">
          <label style={{ marginRight: 10 }}>
            Acceptez-vous les mentions légales <span style={{ color: "red" }}>*</span>
          </label>
          <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
      </div>
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-5 button-contact">
          <Button disabled={disable} loading={loading} label={loading ? "" : "Valider"} onClick={onSubmit} />
        </div>
      </div>
    </div>
  );

  return (
    <div id="contact">
      <Toast ref={toast} position="bottom-right" />
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
      <div className="p-fluid p-formgrid p-grid">
        <div className="p-field p-col-12">{carte}</div>
      </div>
    </div>
  );
};

export default Contact;
