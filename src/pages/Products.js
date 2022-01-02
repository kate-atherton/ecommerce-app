import Product from "../components/Product.js";
import Popup from "../components/Popup";

export default function Products({
  products,
  addToCart,
  popup,
  latestItems,
  delay,
  setPopup,
}) {
  const productList = products.map((product) => (
    <Product
      img={product.img}
      price={product.price}
      title={product.title}
      id={product.id}
      key={product.id}
      addToCart={addToCart}
    />
  ));

  return (
    <section className="products view">
      <h1 className="products__header view__header">Products</h1>
      <div className="products__wrapper">{productList}</div>
      {popup === true ? (
        <Popup
          popup={popup}
          latestItems={latestItems}
          delay={delay}
          setPopup={setPopup}
        />
      ) : (
        <Popup setPopup={setPopup} />
      )}
    </section>
  );
}
