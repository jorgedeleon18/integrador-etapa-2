import { useRoutes } from "react-router";
import Inicio from "../pages/Inicio";
import Alta from "../pages/Alta";
import Nosotros from "../pages/Nosotros";
import Contacto from "../pages/Contacto";
import Carrito from "../pages/Carrito";
import NoEncontrado from "../pages/NoEncontrado";
import ProductosDetalle from "../components/ProductosDetalle";

const Rutas = ({filterText}) => {
  const hookRutas = useRoutes([
    {
      path: "/",
      element: <Inicio filterText={filterText}/>,
    },
    {
      path: "/alta",
      element: <Alta />,
    },
    {
      path: "/detalle/:id",
      element: <ProductosDetalle />,
    },
    {
      path: "/alta/detalle/:id",
      element: <ProductosDetalle />,
    },
    {
      path: "/nosotros",
      element: <Nosotros />,
    },
    {
      path: "/contacto",
      element: <Contacto />,
    },
    {
      path: "/carrito",
      element: <Carrito />,
    },
    {
      path: "/*",
      element: <NoEncontrado />,
    },
  ]);
  return hookRutas;
};

export default Rutas;
