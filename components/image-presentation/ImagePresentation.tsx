import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import lottieMenage from "@animations/services.json"


const ImagePresentation: NextPage = () => {
  return (
    <>
      <div className="card">
            <div className="flex card-container indigo-container">
              <div className="col-6 p-3">
                <Lottie
                  alt="Animation indiquant le manage et la formation"
                  animationData={lottieMenage}
                  autoPlay
                  loop
                  style={{ width: 800, textAlign: 'center' }}
                />
              </div>
              <div className="col-6 p-3">
                <h1 className="title-formation">Centre de formation des métiers du services</h1>
              </div>
            </div>
        </div>
    </>
  );
};

export default ImagePresentation;
