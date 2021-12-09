import React from "react";
// import bin from "./static/bin.svg";

export default function cartItem(props) {
  return (
    <div className="cartItem">
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.quantity}</p>
      <button
        type="button"
        className="cartItem__delete"
        onClick={() => props.removeFromCart(props.id)}
      >{`Delete`}</button>
    </div>
  );
}
