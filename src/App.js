import React, { useState } from "react";
import { DATA } from "./data.js";

//image files
import search from "./static/search.svg";
import cart from "./static/shopping-cart.svg";
import monstera from "./static/monstera.jpg";

//sass
import "./Sass/main.scss";

//components
import Item from "./components/item.js";
import CartItem from "./components/cartItem.js";

function App(props) {
  const [cartItems, setItems] = useState(props.items);

  console.log(cartItems);

  const cartList = cartItems.map((item) => (
    <CartItem id={item.id} name={item.name} quantity={item.quantity} />
  ));

  console.log(cartList);

  const productList = DATA.map((item) => (
    <Item
      img={item.img}
      price={item.price}
      title={item.title}
      id={item.id}
      key={item.id}
    />
  ));

  // function addToCart(item, quantity) {
  //   const newCartItem = { id: item.id, title: item.title, quantity: quantity };
  //   setItems([...cartItems, newCartItem]);
  // }

  // function removeItem(item, quantity) {
  //   const remainingItems = cartItems.filter(
  //     (cartItem) => item.id !== cartItem.id
  //   );
  //   setItems(remainingItems);
  // }

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
      <section className="products">
        <h1 className="products__header">Products</h1>
        <div className="products__wrapper">{productList}</div>
      </section>

      <section className="cart">
        <h1 className="cart__header">Cart</h1>
        <div className="cart__wrapper">{cartList}</div>
      </section>
    </main>
  );
}

export default App;
