import { NextPage } from "next";
import React from "react";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <>
      <footer className="footer">
        <div className="p-fluid p-formgrid p-grid">
          <p className="p-sm-12 p-md-4 p-lg-4 footer-lien">
            <Link href="/mentions" passHref>
              <a rel="noopener" target="_blank">
                Mentions légales
              </a>
            </Link>
            <br />
            <br />
            <a rel="noopener follow" href="https://4310529310.digiforma.net" target="_blank">
              Espace apprenant / formateur
            </a>

            <br />
            <br />
            <Link href="/formation-majordomat" passHref>
              <a rel="noopener" target="_blank">
                Majordomat
              </a>
            </Link>
            <br />
            <br />
            <Link href="/formation-advf" passHref>
              <a rel="noopener" target="_blank">
                ADVF
              </a>
            </Link>
          </p>
          <p className="p-sm-12 p-md-4 p-lg-4 footer-lien">
            <a rel="noopener follow" href="https://majordomeformation-sap.catalogueformpro.com/" target="_blank">
              Catalogue des formations
            </a>
            <br />
            <br />
            <Link href="/qui-sommes-nous" passHref>
              <a rel="noopener" target="_blank">
                Qui sommes-nous ?
              </a>
            </Link>
            <br />
            <br />
            <Link href="/financement" passHref>
              <a rel="noopener" target="_blank">
                Financement
              </a>
            </Link>
            <br />
            <br />
            <Link href="/prochaines-sessions" passHref>
              <a rel="noopener" target="_blank">
                Prochaines sessions
              </a>
            </Link>
            <br />
            <br />
            <a rel="noopener" href="https://www.facebook.com/majordomeformation/" target="_blank">
              Facebook
            </a>
            <br />
            <br />
            <a rel="noopener" href="https://fr.linkedin.com/company/majordome-formation-sap" target="_blank">
              Linkedin
            </a>
            <br />
            <br />
          </p>
          <p className="p-sm-12 p-md-4 p-lg-4 footer-lien">
            <span className="title-footer">Contact</span>
            <br /> <br />
            <a rel="nofollow" href="tel:0158042418">
              01.58.04.24.18
            </a>
            <br /> <br />
            <a rel="nofollow" href="mailto:contact@majordomeformationsap.fr">
              contact at majordomeformationsap.fr​
            </a>
            <br /> <br />
            <span>13 rue Camille Desmoulins</span>
            <br />
            <span>92130 ISSY-LES-MOULINEAUX </span>
          </p>
        </div>
        <div className="p-fluid p-formgrid p-grid">
          <p className="p-sm-12 p-md-12 p-lg-12 text-center-footer">
            © Copyright {new Date().getFullYear()}{" "}
            <a className="pr-1" rel="noopener nofollow" target="_blank" href="https://www.linkedin.com/in/allan-busi-25170317a">
              Allan BUSI
            </a>
            <a className="pr-1" rel="noopener nofollow" target="_blank" href="https://www.linkedin.com/in/adrien-maillard">
              Adrien Maillard
            </a>
            <a className="pr-1" rel="noopener nofollow" target="_blank" href="https://www.linkedin.com/in/sarah-ouri">
              Sarah Ouriachi
            </a>
            . All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
