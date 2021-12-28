import React from "react";

export default function View(props) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img src={props.monstera} className="header__logo" alt="logo" />
        <h1 className="header__title">ALOE ALOE</h1>
      </div>

      <ul className="header__nav">
        <li className="header__nav__icon">
          <img
            className="header__nav__icon__img"
            src={props.search}
            alt="search icon"
            onClick={() => props.setPage("products")}
          />
        </li>
        <li className="header__nav__icon">
          <img
            className="header__nav__icon__img"
            src={props.cart}
            alt="cart icon"
            onClick={() => props.setPage("cart")}
          />
          <p>{props.numberInCart}</p>
        </li>
      </ul>
    </header>
  );
}
