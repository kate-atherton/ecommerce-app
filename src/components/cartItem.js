import React, { useState } from "react";

export default function CartItem(props) {
  const [quantity, setQuantity] = useState(props.quantity);

  return (
    <div className="cartItem">
      <img className="cartItem__img" src={props.img} alt={props.title} />
      <h2 className="cartItem__title">{props.title}</h2>

      <div className="cartItem__quantity">
        <form className="cartItem__quantity__selector">
          <label htmlFor="quantity">
            <input
              type="number"
              value={props.quantity}
              min="1"
              max="100"
              label="quantity"
              name="quantity"
              className="product__quantity__number"
              onInput={(e) => setQuantity((quantity += e.target.value))}
            />
          </label>
        </form>
        <button
          type="button"
          className="product__quantity__btn"
          onClick={() => {
            props.removeFromCart(props.id, props.price, 1);
            setQuantity(1);
          }}
        >{`-`}</button>
        <button
          type="button"
          className="product__quantity__btn"
          onClick={() => {
            props.addToCart(props.id, props.img, props.price, props.title, 1);
            setQuantity(1);
          }}
        >{`+`}</button>
      </div>

      <p className="cartItem__price">
        {`Price: £`}
        {props.quantity * props.price}
      </p>
      <button
        type="button"
        className="cartItem__delete"
        onClick={() => props.removeFromCart(props.id, props.price, 1)}
      >{`Delete`}</button>
    </div>
  );
}
