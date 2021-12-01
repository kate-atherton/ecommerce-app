import React from "react";

export default function cartItem(props) {
  console.log(props);
  return (
    <div>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.quantity}</p>
    </div>
  );
}
