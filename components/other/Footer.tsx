import { NextPage } from "next";
import React from "react";
import { TabMenu} from 'primereact/tabmenu'
import { useRouter } from 'next/dist/client/router';


const Footer: NextPage = () => {
  const router = useRouter()
  return (
  <footer className="footer">

    <div className="text-center-footer"> © Copyright {new Date().getFullYear()+' '} Dev Agency. All Rights Reserved </div>
  </footer>

  );
};

export default Footer;
