import { Button } from "primereact/button";
import React from "react";
import { useRouter } from "next/router";

const DatesSessions = () => {
  const router = useRouter();
  return (
    <section id="dates-sessions">
      <h2>Dates de nos prochaines sessions</h2>
      <hr />
      <div className="bloc-dates">
        <div>
          <div>
            <h3>Informations collective</h3>
            <p>03/12/21 – 10/12/21 – 17/12/21</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
        <div>
          <div>
            <h3>Session ADVF complète</h3>
            <p>11 janvier 2022 au 20 Mai 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
        <div>
          <div>
            <h3>Session CCP1</h3>
            <p>11 janvier 2022 au 23 février 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
        <div>
          <div>
            <h3>Session CCP2</h3>
            <p>28 février 2022 au 08 avril 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
        <div>
          <div>
            <h3>Session CCP3</h3>
            <p>11 avril 2022 au 20 mai 2022</p>
          </div>
          <div className="preinscription">
            <Button label="Me préinscrire" onClick={() => router.push("/prochaines-sessions#contact")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatesSessions;
