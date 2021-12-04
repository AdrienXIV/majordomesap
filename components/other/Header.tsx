import React from "react";
import { Menubar } from "primereact/menubar";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { myLoader } from "@utils/loader";

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
    {
      label: "Contact",
      icon: "pi pi-fw pi-envelope",
      className: "contact-nav",
      url: "#contact",
    },
  ];

  const start = (
    <Link href="/" passHref>
      <a>
        <Image loader={myLoader} src="/images/logo.png" alt="logo" width={60} height={60} className="p-mr-2" />
      </a>
    </Link>
  );

  return (
    <nav>
      <Menubar className="icons-nav-style" model={items} start={start} />
    </nav>
  );
};

export default Header;
