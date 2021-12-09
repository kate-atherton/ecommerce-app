import CartItem from "../components/CartItem.js";

export default function Cart(props) {
  const cartList = props.cartItems.map((item) => (
    <CartItem
      id={item.id}
      name={item.name}
      quantity={item.quantity}
      key={item.id}
      removeFromCart={props.removeFromCart}
    />
  ));

  return (
    <section className="cart">
      <h1 className="cart__header">Cart</h1>
      <div className="cart__wrapper">{cartList}</div>
    </section>
  );
}
