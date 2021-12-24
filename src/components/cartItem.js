import React from "react";
// import bin from "./static/bin.svg";

export default function cartItem(props) {
  return (
    <div className="cartItem">
      <img className="cartItem__img" src={props.img} alt={props.title} />
      <h2 className="cartItem__title">{props.title}</h2>
      <p className="cartItem__quantity">
        {`Quantity:`}
        {props.quantity}
      </p>
      <p className="cartItem__price">
        {`Price: £`}
        {props.quantity * props.price}
      </p>
      <button
        type="button"
        className="cartItem__delete"
        onClick={() => props.removeFromCart(props.id)}
      >{`Delete`}</button>
    </div>
  );
}
