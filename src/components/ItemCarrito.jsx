import { useContext } from "react"
import ProductosContext from "../contexts/productosContext"


const ItemCarrito = ( { producto }) => {

    const { eliminarProductoDelCarritoContext } = useContext(ProductosContext)

    const handleEliminar = (id) => {
        //eliminarProductoDelCarritoContext(id)
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
            <button onClick={() => handleEditar(producto)}>Editar</button>
            <button onClick={() => handleEliminar(producto.id)}>Borrar</button>
        </td>
    </tr>
  )
}

export default ItemCarrito