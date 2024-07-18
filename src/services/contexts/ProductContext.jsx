import { createContext, useContext, useEffect, useState } from "react";
import api from "../config";

const ProductsContext = createContext();

function ProductProvider({ children }) {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchingProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error);
      }
    };

    fetchingProducts();
  }, []);
  return (
    <ProductsContext.Provider value={Products}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductsContext);
  return products;
};

const useDetails = (id) => {
  const products = useContext(ProductsContext);
  let product = products.find((item) => item.id === id);
  return product;
};

export { useProducts, useDetails };
export default ProductProvider;
