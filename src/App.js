import React, { useState } from "react";

import { DATA } from "./data.js";

//image files
import search from "./static/search.svg";
import cart from "./static/shopping-cart.svg";
import monstera from "./static/monstera.jpg";

//sass
import "./Sass/main.scss";

//components
import View from "./components/View";
import Main from "./components/Main";

function App() {
  const [cartItems, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberInCart, setNumberInCart] = useState();
  const [popup, setPopup] = useState(false);
  const [latestItems, setLatestItems] = useState({ quantity: "", title: "" });
  const [page, setPage] = useState("products");

  const sumCart = (items) => {
    let sum = 0;
    items.forEach((item) => {
      sum += item.quantity;
    });
    return sum;
  };

  const addToCart = (id, img, price, title, quantity) => {
    let newItem = {
      id: id,
      img: img,
      price: price,
      title: title,
      quantity: parseInt(quantity),
    };

    const matchingIndex = cartItems.findIndex((item) => item.id === id);

    let newCartCount;

    if (matchingIndex !== -1) {
      cartItems[matchingIndex].quantity += parseInt(quantity);
      setItems(cartItems);
      newCartCount = sumCart(cartItems);
    } else {
      setItems([...cartItems, newItem]);
      newCartCount = sumCart([...cartItems, newItem]);
    }

    setTotal(total + price * quantity);
    setLatestItems({ quantity: quantity, title: title });
    setPopup(true);
    setNumberInCart(newCartCount);
  };

  const removeFromCart = (id, price, quantity) => {
    const remainingItems = cartItems.filter((item) => item.id !== id);
    setItems(remainingItems);

    setTotal(total - price * quantity);

    let newCartCount = sumCart(remainingItems);
    setNumberInCart(newCartCount);
  };

  const subtractFromCart = (id, price, quantity) => {
    const matchingIndex = cartItems.findIndex((item) => item.id === id);
    let newCartCount;

    if (matchingIndex !== -1 && cartItems[matchingIndex].quantity > quantity) {
      cartItems[matchingIndex].quantity -= quantity;
      setItems(cartItems);
      newCartCount = sumCart(cartItems);
    } else {
      const remainingItems = cartItems.filter((item) => item.id !== id);
      setItems(remainingItems);
      newCartCount = sumCart(remainingItems);
    }

    setTotal(total - price * quantity);
    setNumberInCart(newCartCount);
  };

  return (
    <main className="main">
      <View
        monstera={monstera}
        search={search}
        cart={cart}
        setPage={setPage}
        cartItems={cartItems}
        numberInCart={numberInCart}
      />
      <Main
        data={DATA}
        addToCart={addToCart}
        subtractFromCart={subtractFromCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
        total={total}
        popup={popup}
        latestItems={latestItems}
        setPopup={setPopup}
        page={page}
      />
    </main>
  );
}

export default App;
