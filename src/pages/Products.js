import Product from "../components/Product.js";
import Popup from "../components/Popup";

export default function Products(props) {
  const productList = props.products.map((product) => (
    <Product
      img={product.img}
      price={product.price}
      title={product.title}
      id={product.id}
      key={product.id}
      addToCart={props.addToCart}
    />
  ));

  return (
    <section className="products view">
      <h1 className="products__header view__header">Products</h1>
      <div className="products__wrapper">{productList}</div>
      {props.popup === true ? (
        <Popup
          popup={props.popup}
          latestItems={props.latestItems}
          delay={props.delay}
          setPopup={props.setPopup}
        />
      ) : (
        <Popup setPopup={props.setPopup} />
      )}
    </section>
  );
}
