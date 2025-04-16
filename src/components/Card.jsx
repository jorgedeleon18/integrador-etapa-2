import { useContext } from 'react'
import './Card.scss'
import CarritoContext from '../contexts/CarritoContext'
import { useNavigate } from 'react-router'

const Card = ({ producto }) => {
const navigate = useNavigate()
  const { agregarProductoAlCarritoContext } = useContext(CarritoContext)
  const handleAgregar = (producto) => {
agregarProductoAlCarritoContext(producto)
  }

  const handleVerDetalle = (id) => {
    navigate(`/detalle/${id}`)
  }

  return (
    <div className="card">
      <article className="card__article">
      <div className="card__image-container">
        <img className="card__image" src={producto.foto} alt="texto foto" />
      </div>
      <div className="card__content">
        <h2 className="card__heading">{producto.nombre}</h2>
        <div className="card__description">
          <p>{producto.detalles}</p>
          <button onClick={()=>handleAgregar(producto)}>Agregar</button>
          <button onClick={()=>handleVerDetalle(producto.id)}>Ver detalle</button>

        </div>
      </div>        
    </article>
</div>
  )
}

export default Card