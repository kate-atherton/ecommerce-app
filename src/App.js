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
  const [popup, setPopup] = useState(false);
  const [latestItems, setLatestItems] = useState({ quantity: "", title: "" });
  const [page, setPage] = useState("products");

  const addToCart = (id, img, price, title, quantity) => {
    let newItem = {
      id: id,
      img: img,
      price: price,
      title: title,
      quantity: parseInt(quantity),
    };

    const matchingIndex = cartItems.findIndex((item) => item.id === id);

    if (matchingIndex !== -1) {
      cartItems[matchingIndex].quantity += quantity;
      setItems(cartItems);
    } else {
      setItems([...cartItems, newItem]);
    }

    setTotal(total + price * quantity);
    setLatestItems({ quantity: quantity, title: title });
    setPopup(true);
  };

  const removeFromCart = (id, price, quantity) => {
    const remainingItems = cartItems.filter((item) => item.id !== id);
    setItems(remainingItems);

    setTotal(total - price * quantity);
  };

  const subtractFromCart = (id, price, quantity) => {
    const matchingIndex = cartItems.findIndex((item) => item.id === id);

    if (matchingIndex !== -1 && cartItems[matchingIndex].quantity > quantity) {
      cartItems[matchingIndex].quantity -= quantity;
      setItems(cartItems);
    } else {
      const remainingItems = cartItems.filter((item) => item.id !== id);
      setItems(remainingItems);
    }

    setTotal(total - price * quantity);
  };

  return (
    <main className="main">
      <View monstera={monstera} search={search} cart={cart} setPage={setPage} />
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
