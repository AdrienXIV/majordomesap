import React from "react";
import { NextPage } from "next";
import Head from "next/head";

const Meta: NextPage = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
};

export default Meta;
