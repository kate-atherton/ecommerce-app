import React from "react";
import cart from "./cart.svg";
import "./Sass/Base.scss";
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
        <img src={cart} className="header__logo" alt="logo" />
      </header>
      <section className="products">
        <h1 className="products__header">Products</h1>
        <div className="products__wrapper">{itemList}</div>
      </section>
    </main>
  );
}

export default App;
