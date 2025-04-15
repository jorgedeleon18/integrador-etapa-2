import { useContext } from "react"
import ProductosContext from "../../contexts/productosContext"


const TablaFila = ( { producto }) => {

    const { eliminarProductoContext } = useContext(ProductosContext)

    const handleEliminar = (id) => {
        eliminarProductoContext(id)
    }
  return (
    <tr>
        <td>{producto.nombre}</td>
        <td>{producto.precio}</td>
        <td>{producto.stock}</td>
        <td>{producto.marca}</td>
        <td>{producto.categoria}</td>
        <td>{producto.detalle}</td>
        <td>
            <img src={producto.foto} alt={producto.nombre} style={{width:'60px'}}></img>
        </td>
        <td>{producto.envio ? 'si' : 'no'}</td>
        <td>
            <button>Ver</button>
            <button>Editar</button>
            <button onClick={() => handleEliminar(producto.id)}>Borrar</button>
        </td>
    </tr>
  )
}

export default TablaFila