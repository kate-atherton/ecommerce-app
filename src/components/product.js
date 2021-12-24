import React, { useState } from "react";

export default function Product(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product" id={props.id}>
      <img className="product__img" src={props.img} alt={props.title} />
      <h2 className="product__title">{props.title}</h2>
      <p className="product__price">{`£` + props.price}</p>
      <div className="product__quantity">
        <form className="product__quantity__selector">
          <label htmlFor="quantity">
            <input
              type="number"
              value={quantity}
              min="1"
              max="100"
              label="quantity"
              name="quantity"
              className="product__quantity__number"
              onInput={(e) => setQuantity(e.target.value)}
            />
          </label>
        </form>
        <button
          type="button"
          className="product__quantity__btn"
          onClick={() => {
            props.addToCart(
              props.id,
              props.img,
              props.price,
              props.title,
              quantity
            );
            setQuantity(1);
          }}
        >{`Add to bag`}</button>
      </div>
    </div>
  );
}
