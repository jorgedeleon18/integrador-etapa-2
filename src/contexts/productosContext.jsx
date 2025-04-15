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

const crearProductoContext = async (productoNuevo) => {

try {
  delete productoNuevo.id
  const options = {
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(productoNuevo)
  }

  const prods = await peticionesHttp(url, options)
  const nuevoEstadoProductos = [...productos, prods]
  setProductos(nuevoEstadoProductos)
} catch (error) {
  
}
}


  const data = {
    productos,
    crearProductoContext
  };

  return (
    <ProductosContext.Provider value={data}>
      {children}
    </ProductosContext.Provider>
  );
};

export { ProductosProvider };
export default ProductosContext;
