import { useContext } from "react";
import CarritoContext from "../contexts/CarritoContext";
import ItemCarrito from "./ItemCarrito";
import "./ListadoCarrito.scss";
import Swal from "sweetalert2";

const ListadoCarrito = () => {
  const { carrito, limpiarCarritoContext, guardarCarritoBackendContext } =
    useContext(CarritoContext);
  const handleComprar = () => {
    guardarCarritoBackendContext();
  };

  const handleLimpiarCarrito = () => {
    Swal.fire({
      title: "¿Quiere vaciar el carrito?",
      text: "¡No podrás revertirlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(34, 204, 82)",
      cancelButtonColor: "rgb(10, 76, 42)",
      confirmButtonText: "Sí, ¡borrar el carrito!",
    }).then((result) => {
      if (result.isConfirmed) {
        limpiarCarritoContext();
        Swal.fire({
          title: "¡Vaciado!",
          text: "El carrito fue vaciado.",
          icon: "success",
        });
      }
    });
  };
  const calcularTotal = () => {
    return carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
  };

  const calcularTotalProductos = () => {
    return carrito.reduce((total, producto) => total + producto.cantidad, 0);
  };

  return (
    <>
      <table className="tabla-carrito">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {carrito.length <= 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                No hay productos
              </td>
            </tr>
          ) : (
            carrito.map((producto, idx) => (
              <ItemCarrito key={idx} producto={producto} />
            ))
          )}
        </tbody>
      </table>
      <hr />
      {!carrito.length <= 0 && (
        <>
          <button className="btn-vaciar-carrito" onClick={handleLimpiarCarrito}>
            Vaciar Carrito
          </button>
          <button className="btn-comprar" onClick={handleComprar}>
            Comprar
          </button>
          <div className="total">
            <strong>Precio Total: </strong>${calcularTotal().toFixed(2)}
          </div>
          <div className="total_productos">
            <strong>Total de productos: {calcularTotalProductos()}</strong>
          </div>
        </>
      )}
    </>
  );
};

export default ListadoCarrito;
