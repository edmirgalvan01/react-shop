import { useGetAllProducts } from "../../hooks/useGetAllProducts";
import { Product } from "../Product/Product";
import "./ListOfProducts.css";

export const ListOfProducts = () => {
  const { products, isLoading } = useGetAllProducts();

  return (
    <ul className="listOfProducts">
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        products?.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </ul>
  );
};
