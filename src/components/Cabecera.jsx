import "./Cabecera.scss";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar"
const Cabecera = ({ filterText, onFilterTextChange }) => {
  return (
    <>
      <header className="main-header">
        <input type="checkbox" id="menu" />

        <Navbar />
        <SearchBar
          filterText={filterText}
          onFilterTextChange={onFilterTextChange}
        />
      </header>
    </>
  );
};

export default Cabecera;
