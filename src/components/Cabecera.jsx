const Cabecera = () => {
    return (
      <>
        <header className="main-header">
          <input type="checkbox" id="menu" />
  
          <nav className="nav-bar">
            <ul className="nav-bar__nav-list">
              <li className="nav-bar__nav-item">
                <a href="index.html" className="nav-bar__nav-link">inicio</a>
              </li>
              <li className="nav-bar__nav-item">
                <a href="" className="nav-bar__nav-link">alta</a>
              </li>
              <li className="nav-bar__nav-item">
                <a href="/src/pages/Nosotros/nosotros.html" className="nav-bar__nav-link">nosotros</a>
              </li>
              <li className="nav-bar__nav-item">
                <a href="/src/pages/contacto/contacto.html" className="nav-bar__nav-link">contacto</a>
              </li>
            </ul>
          </nav>
  
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
        </header>
      </>
    );
  };
  
  export default Cabecera;