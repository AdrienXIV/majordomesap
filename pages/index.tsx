import React from "react"
import type { NextPage } from "next"
import Footer from "@components/other/Footer"
import Header from "@components/other/Header"
import Meta from "@components/other/Meta"
import TitreProReconnuRncp from "@components/accueil/TitreProReconnuRncp"
import Head from "next/head"
import Soyez100Finance from "@components/accueil/Soyez100Finance"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <Meta />
      </Head>
      <Header />

      <main>
        <TitreProReconnuRncp />
        <Soyez100Finance />
      </main>
      <Footer />
    </div>
  )
}

export default Home
