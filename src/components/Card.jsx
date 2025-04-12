import './Card.scss'

const Card = () => {
  return (
    <div className="card">
      <article className="card__article">
      <div className="card__image-container">
        <img className="card__image" src="/imgs/camiseta-argentina-2024.webp" alt="texto foto" />
      </div>
      <div className="card__content">
        <h2 className="card__heading">Nombre</h2>
        <div className="card__description">
          <p>descripcion</p>
        </div>
      </div>        
    </article>
</div>
  )
}

export default Card