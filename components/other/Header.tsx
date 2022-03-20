import React, { Suspense } from "react";
import { Menubar } from "primereact/menubar";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import { ProgressSpinner } from "primereact/progressspinner";

const Header: NextPage = () => {
  const router = useRouter();

  const items = [
    {
      label: "Accueil",
      icon: "pi pi-fw pi-home",
      command: e => {
        e.originalEvent.preventDefault();
        router.push("/");
      },
      url: "/",
    },
    {
      label: "Qui sommes-nous ?",
      icon: "pi pi-fw pi-user",
      command: e => {
        e.originalEvent.preventDefault();
        router.push("/qui-sommes-nous");
      },
      url: "/qui-sommes-nous",
    },
    {
      label: "Formations",
      icon: "pi pi-fw pi-pencil",
      command: e => {
        e.originalEvent.preventDefault();
        router.push("/formations");
      },
      url: "/formations",
    },
    {
      label: "Financement",
      icon: "pi pi-fw pi-money-bill",
      command: e => {
        e.originalEvent.preventDefault();
        router.push("/financement");
      },
      url: "/financement",
    },
    {
      label: "Prochaines sessions",
      icon: "pi pi-fw pi-calendar",
      url: "/prochaines-sessions",
    },
    // {
    //   label: "Contact",
    //   icon: "pi pi-fw pi-envelope",
    //   className: "contact-nav",
    //   url: "#contact",
    // },
  ];

  const start = <img id="logo-majordomat" alt="logo-sapmajordome-formation" src="/images/logo.png" onClick={() => router.push("/")} />;

  const end = (
    <a href="#contact" className="contact-nav">
      <span className="p-menuitem-icon pi pi-fw pi-envelope"></span>
      <span className="p-menuitem-text">Contact</span>
    </a>
  );

  return (
    <>
      <nav>
        <Menubar className="icons-nav-style" model={items} start={start} end={end} />
      </nav>
      <div className="nav-infos">
        <div className="reseaux-sociaux">
          <div>
            <Suspense fallback={<ProgressSpinner />}>
              <a style={{ fontSize: "30px", color: "gold" }} rel="noopener" href="https://4310529310.digiforma.net" target="_blank">
                Espace formation <i className="pi pi-key" style={{ fontSize: "40px", color: "gold" }}></i>
              </a>
            </Suspense>
          </div>
          <div>
            <Suspense fallback={<ProgressSpinner />}>
              <a rel="noopener" href="https://www.facebook.com/majordomeformation" target="_blank">
                <img className="logo-rs" alt="logo-facebook" src="/images/fb.png" />
              </a>
            </Suspense>
          </div>
          <div>
            <Suspense fallback={<ProgressSpinner />}>
              <a rel="noopener" href="https://fr.linkedin.com/company/majordome-formation-sap" target="_blank">
                <img className="logo-rs" alt="logo-linkedin" src="/images/linkdin.png" />
              </a>
            </Suspense>
          </div>
        </div>
        <div>
          <i className="pi pi-phone"></i>
          {"01.58.04.24.18"}
        </div>
        <div>
          <i className="pi pi-envelope"></i>
          <a rel="nofollow" href="#contact">
            contact at majordomeformationsap.fr
          </a>
        </div>
        <div>
          <i className="pi pi-map-marker"></i>
          13 rue Camille Desmoulins 92130 ISSY-LES-MOULINEAUX
        </div>
      </div>
    </>
  );
};

export default Header;
