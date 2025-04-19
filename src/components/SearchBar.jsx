import { Link } from "react-router";
import "./SearchBar.scss";
const SearchBar = ({ onFilterTextChange, filterText }) => {
  return (
    <div className="search-bar">
      <div className="search-bar__logo-container"></div>
      <img src="/imgs/balon2.webp" alt="Logo" className="payment-logo" />
      <form action="#" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__form-label">
          Buscar
        </label>
        <input
          type="search"
          id="busqueda"
          className="search-bar__form-search"
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </form>
      <div className="search-bar__carrito-container">
        <Link className="icono-carrito" to="/carrito">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
      <div className="menu-toogle">
        <label htmlFor="menu" className="menu-toogle__label">
          <span className="menu-toogle__top-bread"></span>
          <span className="menu-toogle__meat"></span>
          <span className="menu-toogle__bottom-bread"></span>
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
