import { useState } from "react";
import "./App.css";
import ClassBasedComponent from "./ComponentsTypesInReact/class-based-component";
import ProductList from "./ProductList/ProductList";
import FunctionalComponent from "./ComponentsTypesInReact/FunctionalComponent";
const dummyproductData = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>React JS Concepts 2024</h1>
        <ClassBasedComponent />
        <FunctionalComponent />
        <ProductList productData={dummyproductData}/>
      </div>
    </>
  );
}

export default App;
