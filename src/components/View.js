import React, { useState } from "react";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

export default function View(props) {
  const [cartItems, setItems] = useState([]);

  const addToCart = (id, img, price, title, quantity) => {
    const newItem = {
      id: id,
      img: img,
      price: price,
      title: title,
      quantity: quantity,
    };
    setItems([...cartItems, newItem]);
  };

  const removeFromCart = (product) => {
    const remainingItems = cartItems.filter((item) => item.id !== product);
    setItems(remainingItems);
  };

  return (
    <section>
      {props.page === "products" ? (
        <Products products={props.data} addToCart={addToCart} />
      ) : (
        <Cart removeFromCart={removeFromCart} cartItems={cartItems} />
      )}
    </section>
  );
}
