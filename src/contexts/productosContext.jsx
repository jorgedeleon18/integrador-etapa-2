import { useEffect, useState, createContext } from "react";
import {peticionesHttp} from "../helpers/peticiones-http"

const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
  const url = import.meta.env.VITE_BACKEND_PRODUCTOS;
  const [productos, setProductos] = useState(null);

  const getallProductos = async () => {
    try {
      const prods = await peticionesHttp(url, {}); 
      setProductos(prods);
    } catch (error) {
      console.error("[getAllProductos]", error);
    }
  };

  useEffect(() => {
    getallProductos();
  }, []);

  const data = {
    productos,
  };

  return (
    <ProductosContext.Provider value={data}>
      {children}
    </ProductosContext.Provider>
  );
};

export { ProductosProvider };
export default ProductosContext;
