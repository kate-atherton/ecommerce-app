import CartItem from "../components/CartItem.js";

export default function Cart(props) {
  const cartList = props.cartItems.map((item) => (
    <CartItem
      id={item.id}
      title={item.title}
      quantity={item.quantity}
      price={item.price}
      img={item.img}
      key={item.id}
      removeFromCart={props.removeFromCart}
    />
  ));

  return (
    <section className="cart view">
      <h1 className="cart__header view__header">Cart</h1>
      <div className="cart__wrapper">{cartList}</div>
    </section>
  );
}
