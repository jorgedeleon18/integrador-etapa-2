import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { peticionesHttp } from "../helpers/peticiones-http";

const CarritoContext = createContext();
const CarritoProvider = ({ children }) => {
  const urlCarrito = import.meta.env.VITE_BACKEND_CARRITO;
  const [agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito] =
    useLocalStorage("carrito", []);

  function elProductoEstaEnElCarrito(producto) {
    const nuevoArray = carrito.filter((prod) => prod.id === producto.id);

    return nuevoArray.length;
  }

  function obtenerProductoDeCarrito(producto) {
    return carrito.find((prod) => prod.id === producto.id);
  }
  const agregarProductoAlCarritoContext = (producto) => {
    if (!elProductoEstaEnElCarrito(producto)) {
      producto.cantidad = 1;
      agregarAlCarrito(producto);
    } else {
      const productoDeCarrito = obtenerProductoDeCarrito(producto);
      productoDeCarrito.cantidad++;
      window.localStorage.setItem("carrito", JSON.stringify(carrito));
    }
  };

  const eliminarProductodelCarritoContext = (id) => {
    console.log(id);
    eliminarDelCarrito(id);
  };

  const limpiarCarritoContext = () => {
    limpiarCarrito();
  };

  const guardarCarritoBackendContext = async () => {
    try {
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(carrito),
      };
      const carritoGuardado = await peticionesHttp(urlCarrito, options);
      limpiarCarrito();
    } catch (error) {
      console.error("[guardarCarritoBackendContext]", error);
    }
  };

  const data = {
    agregarProductoAlCarritoContext,
    eliminarProductodelCarritoContext,
    carrito,
    limpiarCarritoContext,
    guardarCarritoBackendContext,
  };

  return (
    <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
  );
};

export { CarritoProvider };
export default CarritoContext;
