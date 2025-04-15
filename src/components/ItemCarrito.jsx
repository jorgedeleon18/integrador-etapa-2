import { useContext } from "react";
import ProductosContext from "../contexts/productosContext";
import CarritoContext from "../contexts/CarritoContext";
import "./ItemCarrito.scss";

const ItemCarrito = ({ producto }) => {
  const { eliminarProductodelCarritoContext } = useContext(CarritoContext);

  const handleEliminar = (id) => {
    eliminarProductodelCarritoContext(id);
  };

  const handleEditar = (producto) => {
    console.log("Editar producto", producto);
  };

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalle}</td>
      <td>
        <img src={producto.foto} alt={producto.nombre} style={{ width: "60px" }} />
      </td>
      <td>{producto.envio ? "si" : "no"}</td>
      <td>
        <button className="btn btn-ver">Ver</button>
        <button className="btn btn-borrar" onClick={() => handleEliminar(producto.id)}>Borrar</button>
        <button className="btn btn-editar" onClick={() => handleEditar(producto)}>Editar</button>
      </td>
    </tr>
  );
};

export default ItemCarrito;
