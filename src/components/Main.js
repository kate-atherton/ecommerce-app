import React from "react";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

export default function Main(props) {
  return (
    <section>
      {props.page === "products" ? (
        <Products
          products={props.data}
          addToCart={props.addToCart}
          popup={props.popup}
          latestItems={props.latestItems}
          delay={5000}
          setPopup={props.setPopup}
        />
      ) : (
        <Cart
          removeFromCart={props.removeFromCart}
          subtractFromCart={props.subtractFromCart}
          addToCart={props.addToCart}
          cartItems={props.cartItems}
          total={props.total}
        />
      )}
    </section>
  );
}
