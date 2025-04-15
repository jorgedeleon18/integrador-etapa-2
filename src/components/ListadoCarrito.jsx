import { useContext } from "react";


import CarritoContext from "../contexts/CarritoContext";
import ItemCarrito from "./ItemCarrito";

const ListadoCarrito = () => {
  const { carrito } = useContext(CarritoContext);
const handleComprar = () => {
    //guardarCarritoContext()
}

const handleLimpiarCarrito = () => {
    //limpiarCarritoContext()
}


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
            <strong>Precio Total: </strong>
          </div>
          <div className="total_productos">
            <strong>Total de productos: </strong>
        
          </div>
        </>
      )}
    </>
  );
};

export default ListadoCarrito;