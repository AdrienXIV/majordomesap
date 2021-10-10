import type { AppProps } from "next/app"
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.min.css"
import "@styles/components/Header.css"
import "@styles/components/Footer.css"
import "@styles/components/ImagePresentation.css"
import "@styles/Config.css"
import axios from "axios"
import ImagePresentation from './../components/image-presentation/ImagePresentation';

axios.defaults.baseURL = process.env.URL // http://localhost:3000
axios.defaults.headers = {
  "Content-Type": "application/json",
  credentials: "same-origin",
  mode: "same-origin",
}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
