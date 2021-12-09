import React, { useState } from "react";

import { DATA } from "./data.js";

//image files
import search from "./static/search.svg";
import cart from "./static/shopping-cart.svg";
import monstera from "./static/monstera.jpg";

//sass
import "./Sass/main.scss";

//components
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  const [cartItems, setItems] = useState([]);

  const addToCart = (product, amount) => {
    const newItem = { id: product, name: product, quantity: amount };
    setItems([...cartItems, newItem]);
  };

  const removeFromCart = (product) => {
    const remainingItems = cartItems.filter((item) => item.id !== product);
    setItems(remainingItems);
  };

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

      <Products products={DATA} addToCart={addToCart} />
      <Cart removeFromCart={removeFromCart} cartItems={cartItems} />
    </main>
  );
}

export default App;
