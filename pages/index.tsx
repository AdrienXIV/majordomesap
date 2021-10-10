import Footer from '@components/other/Footer'
import Header from '@components/other/Header'
import Meta from '@components/other/Meta'
import type { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
  return (
    <>
      <Meta/>
      <Header/>
      <Footer/>
    </>
  )
}

export default Home
