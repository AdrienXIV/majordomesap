import React, { useEffect, useRef, useState } from "react";
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
];
const choix = [
  { name: "Être contacté par email/téléphone portable", value: 0 },
  { name: "Être invité à une information collective", value: 1 },
];
const Contact = () => {
  const toast = useRef(null);
  const recaptchaRef = useRef(null);

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
        <Dropdown
          className="col-12 form-input-size"
          optionLabel="name"
          value={state.formation}
          options={formations}
          onChange={e => setState(prev => ({ ...prev, formation: e.value }))}
          placeholder="Sélectionnez une formation"
        />
      </div>

      <div className="col-12 md:col-12 lg:col-12 block-contact">
        <Dropdown
          className="col-12 form-input-size"
          optionLabel="name"
          value={state.choix}
          options={choix}
          onChange={e => setState(prev => ({ ...prev, choix: e.value }))}
          placeholder="Vous préférez ..."
        />
      </div>

      <div className="col-12 md:col-12 lg:col-12 block-contact">
        <InputTextarea
          value={state.message}
          name="message"
          className="col-12 form-texterea-size"
          required
          rows={5}
          placeholder="Un message ?"
          onChange={onChange}
        />
      </div>

      <div className="col-12 md:col-12 lg:col-12 block-contact">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_CAPTCHA}
          onChange={e => {
            setState(prev => ({ ...prev, captcha: true }));
          }}
        />
      </div>

      <div className="col-12 md:col-12 lg:col-12 block-contact">
        <label style={{ marginRight: 10 }}>Acceptez-vous les mentions légales</label>
        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
      </div>

      <div className="col-12 md:col-12 lg:col-12 block-contact">
        <Button disabled={disable} loading={loading} className="col-4 btn-valider-form" label={loading ? "" : "valider"} onClick={onSubmit} />
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
