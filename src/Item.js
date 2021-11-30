import React from "react";

export default function Item({ img, description, title, id }) {
  return (
    <div className="item" id={id}>
      <h2 className="item__title">{title}</h2>
      <img className="item__img" src={img} alt={title} />
      <p className="item__description">{description}</p>
    </div>
  );
}
