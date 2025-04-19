import "./Cabecera.scss";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

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
