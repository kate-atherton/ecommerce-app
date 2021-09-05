// import { product } from "prelude-ls";
import React from "react";

export default function Item({ img, description, title, id }) {
  return (
    <div className="product" id={id}>
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <p className="description">{description}</p>
    </div>
  );
}
