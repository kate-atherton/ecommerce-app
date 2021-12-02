import React, { useState } from "react";

//image files
import search from "./static/search.svg";
import cart from "./static/shopping-cart.svg";
import monstera from "./static/monstera.jpg";

//sass
import "./Sass/main.scss";

//components
import Product from "./components/product.js";
import CartItem from "./components/cartItem.js";

function App(props) {
  const [cartItems, setItems] = useState(props.items);

  const cartList = cartItems.map((item) => (
    <CartItem id={item.id} name={item.name} quantity={item.quantity} />
  ));

  const addToCart = (product, quantity) => {
    console.log("Added to cart");
    console.log(product);
    console.log(quantity);
  };

  const productList = props.products.map((product) => (
    <Product
      img={product.img}
      price={product.price}
      title={product.title}
      id={product.id}
      key={product.id}
      addToCart={addToCart}
    />
  ));

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
