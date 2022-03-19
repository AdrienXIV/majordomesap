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
    
      <Component {...pageProps} />
      {typeof window && <Contact />}
      <Footer />
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DCZDMBD304%22%3E" />
      {/* <Script strategy="afterInteractive" noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      <Script strategy="afterInteractive" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" /> */}
      <Script>{`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "G-DCZDMBD304");`}</Script>
    </>
  );
}
export default App;
