import './Inicio.scss'
import Card from "../components/Card";
import { useContext } from 'react';
import ProductosContext from '../contexts/productosContext';
import useTitulo from '../hooks/useTitulo';


const Inicio = () => {
  const {productos} = useContext(ProductosContext)

  useTitulo('Inicio')

  return (
    <>
      <div>Inicio</div>

      

      <main>
        <section className="cards-container" id="container-productos">
          {
            productos && productos.map((producto) => (
              <Card producto={producto} key={producto.id} />
              ))
          }
        </section>
      </main>

      
    </>
  );
};

export default Inicio;