import React from "react";

export default function Item({ img, title, id, price }) {
  return (
    <div className="item" id={id}>
      <img className="item__img" src={img} alt={title} />
      <h2 className="item__title">{title}</h2>
      <p className="item__price">{`£` + price}</p>
      <div className="item__quantity">
        <form className="item__quantity__selector">
          <label for="quantity">
            <input
              type="number"
              value="1"
              min="1"
              max="100"
              label="quantity"
              name="quantity"
              className="item__quantity__number"
            />
          </label>
        </form>
        <button className="item__quantity__btn">{`Add to bag`}</button>
      </div>
    </div>
  );
}
