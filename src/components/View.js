import React, { useState } from "react";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Popup from "./Popup";

export default function View(props) {
  const [cartItems, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [popup, setPopup] = useState(false);
  const [latestItems, setLatestItems] = useState({ quantity: "", title: "" });

  const addToCart = (id, img, price, title, quantity) => {
    const newItem = {
      id: id,
      img: img,
      price: price,
      title: title,
      quantity: quantity,
    };
    setItems([...cartItems, newItem]);
    setTotal(total + price * quantity);
    setLatestItems({ quantity: quantity, title: title });
    setPopup(true);
  };

  const removeFromCart = (props) => {
    const remainingItems = cartItems.filter((item) => item.id !== props.id);
    setItems(remainingItems);
    setTotal(total - props.price * props.quantity);
  };

  return (
    <section>
      {props.page === "products" ? (
        <Products products={props.data} addToCart={addToCart} />
      ) : (
        <Cart
          removeFromCart={removeFromCart}
          cartItems={cartItems}
          total={total}
        />
      )}
      {popup === true ? (
        <Popup
          popup={popup}
          latestItems={latestItems}
          delay={10000}
          setPopup={setPopup}
        />
      ) : (
        <Popup setPopup={setPopup} />
      )}
    </section>
  );
}
