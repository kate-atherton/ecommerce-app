import React from "react";

export default function Item(props) {
  const handleClick = () => {
    console.log("this is:", this);
  };

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
              defaultValue="1"
              min="1"
              max="100"
              label="quantity"
              name="quantity"
              className="item__quantity__number"
            />
          </label>
        </form>
        <button
          onClick={handleClick}
          className="item__quantity__btn"
        >{`Add to bag`}</button>
      </div>
    </div>
  );
}
