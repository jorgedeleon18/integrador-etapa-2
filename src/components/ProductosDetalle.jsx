import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ProductosDetalle.scss";

const ProductosDetalle = () => {
  const { id } = useParams();

  const [productoDetalle, setProductoDetalle] = useState(null);

  useEffect(() => {
    getOne(id);
  }, []);

  const getOne = async (id) => {
    const urlGetOne = import.meta.env.VITE_BACKEND_PRODUCTOS + id;
    try {
      const res = await fetch(urlGetOne);
      if (!res.ok) {
        throw new Error("No se pudo obtener el producto");
      }
      const data = await res.json();
      setProductoDetalle(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="main__detalle">
      <h1>Producto Detalle</h1>
      {productoDetalle ? (
        <>
          <h2>Nombre del producto:{productoDetalle.nombre}</h2>
          <p>Detalles: {productoDetalle.detalles}</p>
          <p>Precio: ${productoDetalle.precio}</p>
        </>
      ) : (
        <p>No hay detalle de producto</p>
      )}
    </main>
  );
};

export default ProductosDetalle;
