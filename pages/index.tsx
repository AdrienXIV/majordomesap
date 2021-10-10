import React from "react"
import type { NextPage } from "next"
import Footer from "@components/other/Footer"
import Header from "@components/other/Header"
import Meta from "@components/other/Meta"
import TitreProReconnuRncp from "@components/accueil/TitreProReconnuRncp"
import Head from "next/head"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <Meta />
      </Head>
      <Header />

      <main className={styles.main}>
        <TitreProReconnuRncp />
      </main>
      <Footer />
    </div>
  )
}

export default Home
