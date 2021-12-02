import React, { useState } from "react";

export default function Product(props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="item" id={props.id}>
      <img className="item__img" src={props.img} alt={props.title} />
      <h2 className="item__title">{props.title}</h2>
      <p className="item__price">{`£` + props.price}</p>
      <div className="item__quantity">
        <form className="item__quantity__selector">
          <label htmlFor="quantity">
            <input
              type="number"
              value={quantity}
              min="1"
              max="100"
              label="quantity"
              name="quantity"
              className="item__quantity__number"
              onInput={(e) => setQuantity(e.target.value)}
            />
          </label>
        </form>
        <button
          type="button"
          className="item__quantity__btn"
          onClick={() => props.addToCart(props.id, quantity)}
        >{`Add to bag`}</button>
      </div>
    </div>
  );
}
