import React from "react";

const MetaSite = ({ children }) => {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      <meta name="Content-Type" content="UTF-8" />
      <meta name="Content-Language" content="fr" />
      <meta name="Subject" content="Association de formation" />
      <meta name="Copyright" content="Dev Agency" />
      <meta name="Author" content="Allan BUSI, Adrien Maillard, Sarah Ouriachi" />
      <meta name="Publisher" content="Allan BUSI" />
      <meta name="Identifier-Url" content="https://majordomeformationsap.fr/" />
      <meta name="Revisit-After" content="31 days" />
      <meta name="Rating" content="general" />
      <meta name="Distribution" content="global" />
      <meta name="Expires" content="12/12/2025" />
      <meta name="Geography" content="Issy les moulinaux" />
      <meta name="Category" content="economics" />
      <meta name="DC.Title" content="Sap Majordome" />
      <meta name="DC.Content-Type" content="UTF-8" />
      <meta name="DC.Content-Language" content="fr" />
      <meta name="DC.Description" content="Formation majordome et d'assistance de vie" />
      <meta name="DC.Keywords" content="Formation, Assitance, Majordome, Vie" />
      <meta name="DC.Subject" content="Association de formation" />
      <meta name="DC.Copyright" content="Dev Agency" />
      <meta name="DC.Author" content="Allan BUSI, Adrien Malliard, Sarah Ouriachi" />
      <meta name="DC.Publisher" content="Allan BUSI" />
      <meta name="DC.Identifier-Url" content="https://majordomeformationsap.fr/" />
      <meta property="og:type" content="website" />
      <meta property="twitter:title" content="Sap Formation" />
      <meta property="twitter:description" content="A remplir" />
      <meta
        property="twitter:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />
      {children}
      <meta charSet="utf-8" />

      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  );
};

export default MetaSite;
