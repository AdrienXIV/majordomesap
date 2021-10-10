import "../styles/globals.css"
import type { AppProps } from "next/app"
import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import axios from "axios"

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
