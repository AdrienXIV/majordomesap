import { NextPage } from "next";
import React from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const Footer: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <footer className="footer">
        <div className="grid">
          <p className="p-sm-24 p-md-6 p-lg-6 p-xl-6 footer-lien">
            <Link href="/mentions" passHref>
              <a target="_blank">Mentions légales</a>
            </Link>
            <br />
            <br />
            <a href="https://4310529310.digiforma.net" target="_blank">
              Espace apprenant / formateur
            </a>

            <br />
            <br />
            <Link href="/formation-majordomat" passHref>
              <a target="_blank">Majordomat</a>
            </Link>
            <br />
            <br />
            <Link href="/formation-advf" passHref>
              <a target="_blank">ADVF</a>
            </Link>
          </p>
          <p className="p-sm-24 p-md-6 p-lg-6 p-xl-6 footer-lien">
            <a href="https://majordomeformation-sap.catalogueformpro.com/" target="_blank">
              Catalogue des formations
            </a>
            <br />
            <br />
            <Link href="/qui-sommes-nous" passHref>
              <a target="_blank">Qui sommes-nous ?</a>
            </Link>
            <br />
            <br />
            <Link href="/financement" passHref>
              <a target="_blank">Financement</a>
            </Link>
            <br />
            <br />
            <Link href="/prochaines-sessions" passHref>
              <a target="_blank">Prochaines sessions</a>
            </Link>
            <br />
            <br />
            <a href="https://www.facebook.com/majordomeformation/" target="_blank">
              Facebook
            </a>
            <br />
            <br />
            <a href="https://fr.linkedin.com/company/majordome-formation-sap" target="_blank">
              Linkedin
            </a>
            <br />
            <br />
          </p>
          <p className="p-sm-24 p-md-6 p-lg-6 p-xl-6 footer-lien">
            <span className="title-footer">Contact</span>
            <br /> <br />
            <a href="tel:0158042418">01.58.04.24.18</a>
            <br /> <br />
            <a href="tel:0783320284">07.83.32.02.84</a>
            <br /> <br />
            <a href="mailto:contact@majordomeformationsap.fr">contact@majordomeformationsap.fr​</a>
            <br /> <br />
            <span>13 rue Camille Desmoulins</span>
            <br />
            <span>92130 ISSY-LES-MOULINEAUX </span>
          </p>
        </div>
        <div className="text-center-footer">
          <p>© Copyright {new Date().getFullYear()} Dev Agency. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
