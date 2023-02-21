import "./Product.css";

export const Product = ({ product }) => {
  return (
    <li className="product">
      <img src={product.image} alt={product.title} />
      <div className="info">
        <strong>
          {product.title.slice(0, 10)} - ${product.price}
        </strong>
        <p>{product.description.slice(0, 50)}...</p>
      </div>
    </li>
  );
};
