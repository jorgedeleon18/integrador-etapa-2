import "./Cabecera.scss";
import SearchBar from "./SearchBar";
import BarraNavegacion from "./BarraNavegacion";

const Cabecera = ({ filterText, onFilterTextChange }) => {
  return (
    <>
      <header className="main-header">
        <input type="checkbox" id="menu" />

        <BarraNavegacion/>
        <SearchBar
          filterText={filterText}
          onFilterTextChange={onFilterTextChange}
        />
      </header>
    </>
  );
};

export default Cabecera;
