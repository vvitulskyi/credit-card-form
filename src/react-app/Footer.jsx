import React from "react";
import maestro from "../images/maestro.svg";
import mastercard from "../images/master-card.svg";
import mastercardsecurecode from "../images/mastercard-securecode.svg";
import verifiedbyvisalogo from "../images/verified-by-visa-logo.svg";
import visaelectronlogo from "../images/visa-electron-logo.svg";
import visa from "../images/visa.svg";

const Footer = () => {
  return (
    <div className="card__footer">
        <img src={maestro} alt="maestro.svg" />
        <img src={mastercard} alt="master-card.svg" />
        <img src={mastercardsecurecode} alt="mastercard-securecode.svg" />
        <img src={verifiedbyvisalogo} alt="verified-by-visa-logo.svg" />
        <img src={visaelectronlogo} alt="visa-electron-logo.svg" />
        <img src={visa} alt="visa.svg" />
    </div>
  );
};

export default Footer;
