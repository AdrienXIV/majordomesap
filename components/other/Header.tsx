import React from "react";
import { Menubar } from "primereact/menubar";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";

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
    },
    {
      label: "Qui sommes-nous ?",
      icon: "pi pi-fw pi-user",
    },
    {
      label: "Prochaines rentrées",
      icon: "pi pi-fw pi-calendar",
    },
    {
      label: "Contact",
      icon: "pi pi-fw pi-envelope",
    },
  ];

  const start = <Image src="/images/logo.png" alt="logo" width={60} height={60} className="p-mr-2" />;

  return (
    <>
      <div className="card block-nav-header">
        <div className="flex card-container indigo-container">
          <div className="col-4 p-3">
            <i className="pi pi-fw pi-compass"></i> 13 RUE CAMILLE DESMOULINS, 92130 ISSY LES MOULINEAUX
          </div>
          <div className="col-3 p-3">
            <i className="pi pi-fw pi-info-circle"></i> RER C - T3 - Bus (58, 260, 323)
          </div>
          <div className="col-3 p-3">
            <i className="pi pi-fw pi-mobile"></i> 01.58.04.24.18
          </div>
          <div className="col-2 p-3">
            <i className="pi pi-fw pi-envelope"></i> contact@majordomeformationsap.fr
          </div>
        </div>
      </div>
      <Menubar className="icons-nav-style " model={items} start={start} />
    </>
  );
};

export default Header;
