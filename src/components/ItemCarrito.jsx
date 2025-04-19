import { useContext } from "react";
import CarritoContext from "../contexts/CarritoContext";
import Swal from "sweetalert2";
import "./ItemCarrito.scss";

const ItemCarrito = ({ producto }) => {
  const { eliminarProductodelCarritoContext } = useContext(CarritoContext);

  const handleEliminar = (id) => {
    Swal.fire({
      title: "Estás seguro?",
      text: "No podrás revertirlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(34, 204, 82)",
      cancelButtonColor: "rgb(10, 76, 42)",
      confirmButtonText: "Sí, borrar del carrito!",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductodelCarritoContext(id);
        Swal.fire({
          title: "¡Eliminado!",
          text: "El producto fue eliminado.",
          icon: "success",
        });
      }
    });
  };

  return (
    <tr>
      <td>
        <img
          src={producto.foto}
          alt={producto.nombre}
          style={{ width: "60px" }}
        />
      </td>
      <td>{producto.nombre}</td>
      <td>{producto.cantidad}</td>
      <td>{producto.precio}</td>
      <td>
        <button
          className="btn btn-borrar"
          onClick={() => handleEliminar(producto.id)}
        >
          Borrar
        </button>
      </td>
      <td>{producto.cantidad * producto.precio}</td>
    </tr>
  );
};

export default ItemCarrito;
