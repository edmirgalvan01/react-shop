import { useId, useState } from "react";
import { AddProductForm } from "./components/AddProductForm/AddProductForm";
import { ListOfProducts } from "./components/ListOfProducts/ListOfProducts";
import "./App.css";

const App = () => {
  const [formHidden, setFormHidden] = useState(false);
  const handleChangeShowForm = () => setFormHidden(!formHidden);
  const buttonText = `${formHidden ? "Ocultar" : "Mostrar"} formulario`;

  return (
    <section className="home">
      <h1>React Shop</h1>
      <button className="button" onClick={handleChangeShowForm}>
        {buttonText}
      </button>
      {formHidden && <AddProductForm />}
      <ListOfProducts />
    </section>
  );
};

export default App;
