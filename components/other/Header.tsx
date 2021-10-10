import React from "react";
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import Image from 'next/image'
import logo from './../../public/images/logo.png'

const Header = () => {

  const items = [
    {
      label:'Accueil',
      icon:'pi pi-fw pi-home',
    },
    {
      label:'Formation',
      icon:'pi pi-fw pi-pencil'
    },
    {
      label:'Financement',
      icon:'pi pi-fw pi-money-bill'
    },
    {
      label:'Qui sommes-nous ?',
      icon:'pi pi-fw pi-user',
    },
    {
      label:'Prochaines rentrées',
      icon:'pi pi-fw pi-calendar'
    },
    {
      label:'Contact',
      icon:'pi pi-fw pi-envelope'
    }
  ];

  const start = <Image src={logo} alt="logo" width={60} height={60} className="p-mr-2"/>;

  return (
    <>
      <div>
          <div className="card">
              <Menubar className="icons-nav-style" model={items} start={start} />
          </div>
      </div>
    </>
  );
};

export default Header;
