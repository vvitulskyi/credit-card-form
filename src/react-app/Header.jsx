import React from "react";
import banklogo from "../images/logo-kapital-bank.svg";
import companylogo from "../images/logo-tap-az.svg";

const Header = () => {
  return (
    <div className="card__header">
      <div className="card__header__info">
        <div className="card__header__logo">
          <div className="card__header__logo--company">
            <img src={companylogo} alt="Company logo" />
          </div>
          <div className="card__header__logo--bank">
            <img src={banklogo} alt="Bank logo" />
          </div>
        </div>
        <div className="card__header__subtext">
          Siz Tap.az saytında təqdim olunan xidmətin ödənişini edirsiniz.
        </div>
      </div>
      <div className="card__header__data">
        <div className="data-list">
          <div className="data-list__item">
            <div className="data-list__item__name">Ödəniləcək məbləğ:</div>
            <div className="data-list__item__value">50.00 AZN</div>
          </div>
          <div className="data-list__item">
            <div className="data-list__item__name">Xidmətin növü:</div>
            <div className="data-list__item__value">Premium 30 gün</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
