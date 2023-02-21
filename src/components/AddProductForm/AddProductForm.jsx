import { useId, useState } from "react";
import { useCreateNewProduct } from "../../hooks/useCreateNewProduct";
import { Field } from "../Field/Field";
import "./AddProductForm.css";

export const AddProductForm = () => {
  const [message, setMessage] = useState("");
  const { sendProduct, updateProduct } = useCreateNewProduct();

  const productTitleId = useId();
  const productPriceId = useId();
  const productDescripcionId = useId();
  const productImageId = useId();
  const productCategoryId = useId();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await sendProduct();
    res ? setMessage("Todo salio bien") : setMessage("Algo salio mal");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {message && <p>{message}</p>}
      <Field
        id={productTitleId}
        label="Titulo"
        placeholder="iPhone 13"
        handleChange={(event) => updateProduct("title", event.target.value)}
      />
      <Field
        id={productPriceId}
        label="Precio"
        placeholder="$12000"
        handleChange={(event) => updateProduct("price", event.target.value)}
        type="number"
      />
      <Field
        id={productDescripcionId}
        label="Descripcion"
        placeholder="Un telefono muy bonito"
        handleChange={(event) =>
          updateProduct("description", event.target.value)
        }
      />
      <Field
        id={productImageId}
        label="URL Imagen"
        placeholder="https://fakestoreapi.com/img/71pWzhdJNwL"
        handleChange={(event) => updateProduct("image", event.target.value)}
      />
      <Field
        id={productCategoryId}
        label="Categoria"
        placeholder="Celulares"
        handleChange={(event) => updateProduct("category", event.target.value)}
      />
      <button className="button" type="submit">
        Enviar
      </button>
    </form>
  );
};
