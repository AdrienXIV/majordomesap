import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const PopupComponent = () => {
  const [show, setShow] = useState(process.env.NEXT_PUBLIC_POPUP_VISIBLE === "1"); // si on veut désactiver la popup il suffit de changer la variable d'environnement sur Vercel

  const handleClose = () => setShow(false);

  const footer = (
    <div>
      <Button label="Fermer" icon="pi pi-times" onClick={handleClose} />
    </div>
  );

  return (
    <Dialog header={process.env.NEXT_PUBLIC_POPUP_HEADER || ""} footer={footer} style={{ width: "50vw" }} visible={show} onHide={handleClose}>
      <p>{process.env.NEXT_PUBLIC_POPUP_CONTENT || ""}</p>
    </Dialog>
  );
};

export default PopupComponent;
