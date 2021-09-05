import React from "react";
import cart from "./cart.svg";
import "./Sass/Base.scss";
import Item from "./Item";

function App() {
  return (
    <div className="Main">
      <header className="header">
        <img src={cart} className="header__logo" alt="logo" />
      </header>
      <section>
        <h1>Products</h1>
        <Item></Item>
      </section>
    </div>
  );
}

export default App;
