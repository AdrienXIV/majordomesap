import { NextPage } from "next";
import React from "react";

const Footer: NextPage = () => {
  return (
    <footer>
      <div className="text-center-footer"> © Copyright {new Date().getFullYear()+' '} Dev Agency. All Rights Reserved </div>
    </footer>
  );
};

export default Footer;
