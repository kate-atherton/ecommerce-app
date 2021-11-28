import React from "react";
import search from "./static/search.svg";
import cart from "./static/shopping-cart.svg";
import monstera from "./static/monstera.jpg";

import "./Sass/main.scss";
import Item from "./Item.js";

function App(props) {
  const itemList = props.items.map((item) => (
    <Item
      img={item.img}
      description={item.description}
      title={item.title}
      id={item.id}
      key={item.id}
    />
  ));

  return (
    <main className="main">
      <header className="header">
        <div className="header__wrapper">
          <img src={monstera} className="header__logo" alt="logo" />
          <h1 className="header__title">FIDDLE LEAF</h1>
        </div>

        <ul className="header__nav">
          <li className="header__nav__icon">
            <img
              className="header__nav__icon__img"
              src={search}
              alt="search icon"
            />
          </li>
          <li className="header__nav__icon">
            <img
              className="header__nav__icon__img"
              src={cart}
              alt="cart icon"
            />
          </li>
        </ul>
      </header>
      <section className="products">
        <h1 className="products__header">Products</h1>
        <div className="products__wrapper">{itemList}</div>
      </section>
    </main>
  );
}

export default App;
