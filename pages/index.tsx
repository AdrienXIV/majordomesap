import React from "react"
import type { NextPage } from "next"
import Footer from "@components/other/Footer"
import Header from "@components/other/Header"
import Meta from "@components/other/Meta"
import TitreProReconnuRncp from "@components/accueil/TitreProReconnuRncp"
import Head from "next/head"
import ImageAccueil from "@components/image-accueil/ImageAccueil"
import Soyez100Finance from "@components/accueil/Soyez100Finance"
import Rncp from "@components/rncp/Rncp";
import NosFormationsPersonnalisables from "@components/accueil/NosFormationsPersonnalisables"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <Meta />
      </Head>
      <Header />

      <ImageAccueil/>

      <div className="block-rncp">
        <Rncp/>
      </div>

      <main>
        <TitreProReconnuRncp />
        <Soyez100Finance />
        <NosFormationsPersonnalisables />
      </main>
      <Footer />
    </div>
  )
}

export default Home
