import React, { useState } from "react";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

export default function View(props) {
  const [cartItems, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [popup, setPopup] = useState(false);
  const [latestItems, setLatestItems] = useState({ quantity: "", title: "" });

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
    <section>
      {props.page === "products" ? (
        <Products
          products={props.data}
          addToCart={addToCart}
          popup={popup}
          latestItems={latestItems}
          delay={5000}
          setPopup={setPopup}
        />
      ) : (
        <Cart
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          cartItems={cartItems}
          total={total}
        />
      )}
    </section>
  );
}
