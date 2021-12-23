import React, { useState } from "react";

//image files
import search from "./static/search.svg";
import cart from "./static/shopping-cart.svg";
import monstera from "./static/monstera.jpg";

import { DATA } from "./data.js";

//sass
import "./Sass/main.scss";

//components
import View from "./components/View";

function App() {
  const [page, setPage] = useState("products");

  return (
    <main className="main">
      <header className="header">
        <div className="header__wrapper">
          <img src={monstera} className="header__logo" alt="logo" />
          <h1 className="header__title">ALOE ALOE</h1>
        </div>

        <ul className="header__nav">
          <li className="header__nav__icon">
            <img
              className="header__nav__icon__img"
              src={search}
              alt="search icon"
              onClick={() => setPage("products")}
            />
          </li>
          <li className="header__nav__icon">
            <img
              className="header__nav__icon__img"
              src={cart}
              alt="cart icon"
              onClick={() => setPage("cart")}
            />
          </li>
        </ul>
      </header>

      <View data={DATA} page={page} />
    </main>
  );
}

export default App;
