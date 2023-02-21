import { useEffect, useState } from "react";
import { createNewProduct } from "../services/products.service";

export const useCreateNewProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const updateProduct = (label, value) => {
    setProduct({
      ...product,
      [label]: value,
    });
  };

  const sendProduct = async () => {
    const response = await createNewProduct(product);
    return response?.id ? true : false;
  };

  return { sendProduct, updateProduct };
};
