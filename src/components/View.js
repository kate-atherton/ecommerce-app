import React, { useState } from "react";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

export default function View(props) {
  const [cartItems, setItems] = useState([]);
  const [total, setTotal] = useState(0);

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
    </section>
  );
}
