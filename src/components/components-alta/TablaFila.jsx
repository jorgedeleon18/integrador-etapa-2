import { useContext } from "react";
import ProductosContext from "../../contexts/productosContext";
import { useNavigate } from "react-router";
import "./Tabla.scss";
import { Link } from "react-router-dom";

const TablaFila = ({ producto }) => {
  const navigate = useNavigate();

  const { eliminarProductoContext, setProductoAEditar } =
    useContext(ProductosContext);

  const handleEliminar = (id) => {
    eliminarProductoContext(id);
  };

  const handleEditar = (producto) => {
    setProductoAEditar(producto);
  };

  const handleVer = (id) => {
    navigate(`/alta/detalle/${id}`);
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
        <img
          src={producto.foto}
          alt={producto.nombre}
          style={{ width: "60px" }}
        ></img>
      </td>
      <td>{producto.envio ? "si" : "no"}</td>
      <td className="tabla-acciones">
        <Link to={`/detalle/${producto.id}`} className="btn btn-ver">
          Ver
        </Link>
        <button
          className="btn btn-editar"
          onClick={() => handleEditar(producto)}
        >
          Editar
        </button>
        <button
          className="btn btn-borrar"
          onClick={() => handleEliminar(producto.id)}
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default TablaFila;
