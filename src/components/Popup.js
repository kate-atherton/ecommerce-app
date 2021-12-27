import React, { useEffect } from "react";

export default function Popup(props) {
  useEffect(() => {
    setTimeout(() => {
      props.setPopup(false);
    }, props.delay);
  }, [props.delay, props]);

  if (props.popup === true) {
    return (
      <div>
        <p>{`${props.latestItems.quantity} x ${props.latestItems.title} added to cart`}</p>
      </div>
    );
  } else {
    return null;
  }
}
