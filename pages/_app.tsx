import type { AppProps } from "next/app";
import "primereact/resources/themes/saga-blue/theme.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "leaflet/dist/leaflet.css";
import "primeflex/primeflex.css";
import "@styles/components/ImageAccueil.css";
import "@styles/components/Contact.css";
import "@styles/components/Header.css";
import "@styles/components/Footer.css";
import "@styles/components/Rncp.css";
import "@styles/accueil.css";
import "@styles/formations.css";
import "@styles/global.css";
import "@styles/Config.css";
import "@styles/financement.css";
import "@styles/qui-sommes-nous.css";
import "@styles/prochaines-sessions.css";
import "@styles/mentions.css";
import "@styles/footer/styles.css";
import axios from "axios";
import React from "react";
import dynamic from "next/dynamic";
import Footer from "@components/other/Footer";
import Script from "next/script";
import Head from "next/head";
const Contact = dynamic(() => import("@components/contact/Contact"), { ssr: false });

axios.defaults.baseURL = process.env.URL;
axios.defaults.headers = {
  "Content-Type": "application/json",
  credentials: "same-origin",
  mode: "same-origin",
} as any;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      <meta name="robots" content="all" />
      <meta name="google-site-verification" content="-FrNyJNyESokbOqGvXDz0oIWwgDnQ05eNb-D1Z1R5CM" />
      <meta name="Content-Type" content="UTF-8" />
      <meta name="Content-Language" content="fr" />
      <meta name="Subject" content="Association de formation" />
      <meta name="Copyright" content="Dev Agency" />
      <meta name="Author" content="Allan BUSI, Adrien Maillard, Sarah Ouriachi" />
      <meta name="Publisher" content="Allan BUSI" />
      <meta name="Identifier-Url" content="https://majordomeformationsap.fr/" />
      <meta name="Revisit-After" content="31 days" />
      <meta name="Rating" content="general" />
      <meta name="Distribution" content="global" />
      <meta name="Expires" content="12/12/2025" />
      <meta name="Geography" content="Issy les Moulinaux" />
      <meta name="Category" content="economics" />
      <meta name="DC.Title" content="Sap Majordome" />
      <meta name="DC.Content-Type" content="UTF-8" />
      <meta name="DC.Content-Language" content="fr" />
      <meta name="DC.Description" content="Formation majordome et d'assistance de vie" />
      <meta name="DC.Keywords" content="Formation, Assitance, Majordome, Vie" />
      <meta name="DC.Subject" content="Association de formation" />
      <meta name="DC.Copyright" content="Dev Agency" />
      <meta name="DC.Author" content="Allan BUSI, Adrien Maillard, Sarah Ouriachi" />
      <meta name="DC.Publisher" content="Allan BUSI" />
      <meta name="DC.Identifier-Url" content="https://majordomeformationsap.fr/" />
      <meta property="og:type" content="website" />
      <meta property="twitter:title" content="Sap Formation" />
      <meta property="twitter:description" content="A remplir" />
      <meta
        property="twitter:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DCZDMBD304%22%3E" />
      {/* <Script strategy="afterInteractive" noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      <Script strategy="afterInteractive" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" /> */}
      <Script>{`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-DCZDMBD304");`}</Script>
      <Component {...pageProps} />
      {/* Global site tag (gtag.js) - Google Analytics */}
      {typeof window && <Contact />}
      <Footer />
    </>
  );
}
export default App;
