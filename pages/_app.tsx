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

import axios from "axios";
import React from "react";
import Meta from "@components/other/Meta";

axios.defaults.baseURL = process.env.URL; // http://localhost:3000
axios.defaults.headers = {
  "Content-Type": "application/json",
  credentials: "same-origin",
  mode: "same-origin",
} as any;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
