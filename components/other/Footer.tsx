import { NextPage } from "next";
import React from "react";
import { TabMenu} from 'primereact/tabmenu'
import { useRouter } from 'next/dist/client/router';


const Footer: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <footer className="footer">
        <div className="text-center-footer"><p> © Copyright {new Date().getFullYear()+' '} Dev Agency. All Rights Reserved </p></div>
        <div className="grid">
          <p className="p-sm-24 p-md-6 p-lg-6 p-xl-6 footer-lien"><a href="/mentions" target="_blank">Mentions légales </a> </p>
          <p className="p-sm-24 p-md-6 p-lg-6 p-xl-6 footer-lien"><a href="https://4310529310.digiforma.net" target="_blank">Espace étudiant/professeur </a></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
