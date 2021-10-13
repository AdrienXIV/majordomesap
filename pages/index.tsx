import React from "react"
import type { NextPage } from "next"
import Footer from "@components/other/Footer"
import Header from "@components/other/Header"
import Meta from "@components/other/Meta"
import TitreProReconnuRncp from "@components/accueil/TitreProReconnuRncp"
import Head from "next/head"
import ImageAccueil from '@components/image-accueil/ImageAccueil';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <Meta />
      </Head>
      <Header />

      <ImageAccueil/>

      <main>
        <TitreProReconnuRncp />
      </main>
      <Footer />
    </div>
  )
}

export default Home
