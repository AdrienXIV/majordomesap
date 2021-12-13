import { NextPage } from "next";
import React from "react";
import { TabMenu} from 'primereact/tabmenu'
import { useRouter } from 'next/dist/client/router';

const Footer: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <footer className="footer">
        <div className="grid">
          <p className="p-sm-6 p-md-5 p-lg-5 p-xl-5 footer-lien">
            <a href="/mentions" target="_blank">Mentions légales </a><br/><br/>
            <a href="https://4310529310.digiforma.net" target="_blank">Espace étudiant/professeur </a><br/><br/>
            <a href="/formation-majordomat" target="_blank">Majordomat </a><br/><br/>
            <a href="/formation-advf" target="_blank">ADVF </a><br/><br/>
            <a href="https://majordomeformation-sap.catalogueformpro.com/" target="_blank">Catalogue de formation </a><br/><br/>
          </p>
          <p className="p-sm-6 p-md-5 p-lg-5 p-xl-5 footer-lien">
            <a href="/qui-sommes-nous" target="_blank">Qui-sommes-nous </a><br/><br/>
            <a href="/financement" target="_blank">Financement </a><br/><br/>
            <a href="/prochaines-sessions" target="_blank">Prochaines-sessions </a><br/><br/>
            <a href="https://www.facebook.com/majordomeformation/" target="_blank">Facebook </a><br/><br/>  
            <a href="https://fr.linkedin.com/company/majordome-formation-sap" target="_blank">Linkedin </a>
          </p>
          <p className="p-sm-6 p-md-6 p-lg-6 p-xl-6 footer-lien">
            <a className="title-footer">Contact</a><br/>
            <a>01.58.04.24.18</a><br/>
            <a> 07.83.32.02.84</a><br/>
            <a>contact@majordomeformationsap.fr​ </a><br/>
            <a>13 rue Camille Desmoulins</a><br/>
            <a>92130
            ISSY-LES-MOULINEAUX </a><br/>
          </p>
        </div>
        <div className="text-center-footer"><p> © Copyright {new Date().getFullYear()+' '} Dev Agency. All Rights Reserved </p></div>
      </footer>
    </>
  );
};

export default Footer;
