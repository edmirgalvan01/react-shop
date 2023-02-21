import { useState, useEffect } from "react";
import { getAllProducts } from "../services/products.service";

export const useGetAllProducts = () => {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      .then((products) => setProducts(products))
      .catch((error) => {
        setProducts([]);
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { products, isLoading };
};
