export const getAllProducts = () => {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => json);
};

export const createNewProduct = (product) => {
  return fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((json) => json);
};
