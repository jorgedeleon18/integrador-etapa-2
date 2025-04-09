
const SearchBar = () => {
  return (
    <div className="search-bar">
            <div className="search-bar__logo-container"></div>
            <img src="/imgs/balon2.webp" alt="Logo" className="payment-logo" />
            <form action="#" className="search-bar__form-container">
              <label htmlFor="busqueda" className="search-bar__form-label">Buscar</label>
              <input type="search" id="busqueda" className="search-bar__form-search" />
              <button type="submit" className="search-bar__form-submit">Buscar</button>
            </form>
            <div className="search-bar__carrito-container">
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <div className="menu-toogle">
              <label htmlFor="menu" className="menu-toogle__label">
                <span className="menu-toogle__top-bread"></span>
                <span className="menu-toogle__meat"></span>
                <span className="menu-toogle__bottom-bread"></span>
              </label>
            </div>
          </div>
  )
}

export default SearchBar